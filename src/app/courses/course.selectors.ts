import { CoursesState } from './course.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCourse from './course.reducer';

export const selectCourseState = createFeatureSelector<CoursesState>('courses');


export const selectCourseById = (courseId:number) => createSelector(
  selectCourseState,
  (coursesState) => {
    return coursesState.entities[courseId];
  }
);

export const selectAllCourses = createSelector(
  selectCourseState,
  fromCourse.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'ADVANCED')
);

export const selectPromos = createSelector(
  selectAllCourses,
  courses => courses.filter(course=> course.promo).length
);


export const selectAllCoursesLoaded = createSelector(
  selectCourseState,
  courseState => courseState.allCoursesLoaded
)