import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { filter, map, tap, withLatestFrom } from "rxjs/operators";
import { CoursesService } from "../services/courses.service";
import { AppState } from "../../reducers";
import { select, Store } from "@ngrx/store";
import { selectCourseState, selectAllCourses, selectBeginnerCourses, selectAdvancedCourses, selectPromos } from "../course.selectors";
import { AllCoursesRequestedAction } from "../course.actions";
@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new AllCoursesRequestedAction());


    this.beginnerCourses$ = this.store.select(selectBeginnerCourses);

    this.advancedCourses$ = this.store.select(selectAdvancedCourses);

    this.promoTotal$ = this.store.select(selectPromos);
  }
}
