import { CoursesService } from "./services/courses.service";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  CourseActionTypes,
  CourseRequestedAction,
  CourseLoadedAction,
  AllCoursesLoadedAction,
  AllCoursesRequestedAction
} from "./course.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class CourseEffects {
  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType(CourseActionTypes.CourseRequested),
    mergeMap((action: CourseRequestedAction) => {
      return this.coursesService.findCourseById(action.payload);
    }),
    map(course => new CourseLoadedAction(course))
  );

  @Effect()
  loadAllCourse$ = this.actions$.pipe(
    ofType(CourseActionTypes.AllCoursesRequested),
    mergeMap(() => {
      return this.coursesService.findAllCourses();
    }),
    map(course => new AllCoursesLoadedAction(course))
  );

  constructor(
    private actions$: Actions,
    private readonly coursesService: CoursesService
  ) {}
}
