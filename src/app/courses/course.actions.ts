import { Action } from '@ngrx/store';
import { Course } from './model/course';

export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[View Course Page] Course Loaded',
  AllCoursesRequested = '[Courses Home Page] All Courses Requested',
  AllCoursesLoaded = '[Courses Home Page] All Courses Loaded',

}

export class CourseRequestedAction implements Action {
  readonly type = CourseActionTypes.CourseRequested;
  constructor(public payload: number){}
}

export class CourseLoadedAction implements Action {
  readonly type = CourseActionTypes.CourseLoaded;
  constructor(public payload: Course){}
}

export class AllCoursesRequestedAction implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
  constructor(public payload?) { }
}

export class AllCoursesLoadedAction implements Action {
  readonly type = CourseActionTypes.AllCoursesLoaded;
  constructor(public payload: Course[]) { }
}

export type CourseActions = CourseRequestedAction | CourseLoadedAction | AllCoursesRequestedAction | AllCoursesLoadedAction;
