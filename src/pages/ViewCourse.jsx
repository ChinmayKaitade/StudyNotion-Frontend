import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

import { setCourseViewSidebar } from "../slices/sidebarSlice";

export default function ViewCourse() {
  // --- Redux and Router Hooks ---
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { courseViewSidebar } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  // --- Local State ---
  const [reviewModal, setReviewModal] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  // --- Effect 1: Fetch Course Details (Fixes Warning 1) ---
  useEffect(() => {
    // Define the async function inside the effect
    const fetchCourseDetails = async () => {
      // The dependency array ensures this function re-runs if courseId or token changes
      const courseData = await getFullDetailsOfCourse(courseId, token);

      if (courseData) {
        // Dispatch all relevant data to the slices
        dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
        dispatch(setEntireCourseData(courseData.courseDetails));
        dispatch(setCompletedLectures(courseData.completedVideos));

        // Calculate total lectures
        let lectures = 0;
        courseData?.courseDetails?.courseContent?.forEach((sec) => {
          lectures += sec.subSection.length;
        });
        dispatch(setTotalNoOfLectures(lectures));
      }
    };
    fetchCourseDetails();
  }, [courseId, token, dispatch]); // FIX: Added courseId, token, and dispatch

  // --- Effect 2: Screen Size Listener ---

  // Handle the screen size change, memoized with useCallback
  const handleScreenSize = useCallback(
    () => setScreenSize(window.innerWidth),
    []
  );

  useEffect(() => {
    // Set up the listener on mount
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize(); // Set initial size

    // Clean up the listener on unmount
    return () => window.removeEventListener("resize", handleScreenSize);
  }, [handleScreenSize]);

  // --- Effect 3: Toggle Sidebar based on Screen Size (Fixes Warning 2) ---
  useEffect(() => {
    // Dispatch is stable, so including it here is fine.
    if (screenSize !== undefined) {
      if (screenSize <= 640) {
        dispatch(setCourseViewSidebar(false));
      } else {
        dispatch(setCourseViewSidebar(true));
      }
    }
  }, [screenSize, dispatch]); // FIX: Added dispatch

  // --- Render ---

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        {/* View course side bar */}
        {courseViewSidebar && (
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        )}

        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto mt-14">
          <div className="mx-6">
            {/* Renders the child route components (e.g., VideoDetails) */}
            <Outlet />
          </div>
        </div>
      </div>

      {/* Course Review Modal */}
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
}
