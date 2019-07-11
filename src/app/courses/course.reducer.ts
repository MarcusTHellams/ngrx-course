import { Action } from "@ngrx/store";
import { Course } from "./model/course";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { CourseActions, CourseActionTypes } from "./course.actions";

export interface CoursesState extends EntityState<Course> {}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialState: CoursesState = adapter.getInitialState();

export function coursesReducer(
  state = initialState,
  action: CourseActions
): CoursesState {
  switch (action.type) {
    case CourseActionTypes.CourseLoaded:
      return adapter.addOne(action.payload, state);
    case CourseActionTypes.AllCoursesLoaded:
      return adapter.addAll(action.payload, state);
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
