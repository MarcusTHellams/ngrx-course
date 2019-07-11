import { Action } from '@ngrx/store';
import { Course } from './model/course';
import { UpdateNum } from '@ngrx/entity/src/models';

export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[View Course Page] Course Loaded',
  AllCoursesRequested = '[Courses Home Page] All Courses Requested',
  AllCoursesLoaded = '[Courses Home Page] All Courses Loaded',
  CourseSaved = '[Edit Course Dialog] Course Saved',

}

export class CourseRequestedAction implements Action {
  readonly type = CourseActionTypes.CourseRequested;
  constructor(public payload: number) { }
}

export class CourseLoadedAction implements Action {
  readonly type = CourseActionTypes.CourseLoaded;
  constructor(public payload: Course) { }
}

export class AllCoursesRequestedAction implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
  constructor(public payload?) { }
}

export class AllCoursesLoadedAction implements Action {
  readonly type = CourseActionTypes.AllCoursesLoaded;
  constructor(public payload: Course[]) { }
}


export class CourseSavedAction implements Action {
  readonly type = CourseActionTypes.CourseSaved;
  constructor(public payload: UpdateNum<Course>) { }
}


export type CourseActions =
  CourseRequestedAction
  | CourseLoadedAction
  | AllCoursesRequestedAction
  | AllCoursesLoadedAction
  | CourseSavedAction;
