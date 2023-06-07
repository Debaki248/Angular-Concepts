import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeServiceService } from '../app/employee-service.service';
import { EmployeeListComponent } from '../app/employee-list/employee-list.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { ViewChildAndViewChildrenComponent } from './view-child-and-view-children/view-child-and-view-children.component';
import { ParentComponentComponent } from './Passing_Values_From_Parent_to_Child/parent-component/parent-component.component';
import { NewParentComponent } from './passing_values_from_child_to_parent/new-parent/new-parent.component';
import { NewchildComponent } from './passing_values_from_child_to_parent/newchild/newchild.component';
import { TwoWayBindingComponent } from './Binding/two-way-binding/two-way-binding.component';
import { EmployeeINfoComponent } from './DependencyInjection/employee-info/employee-info.component';
import { EmployeeService } from './DependencyInjection/employee.service';
import { DepartmentListComponent } from './Routing/department-list/department-list.component';
import { TemplateDrivenFormsComponent } from './angularForms/TemplateDrivenForms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTemplateFormsComponent } from './angularForms/new-template-forms/new-template-forms.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './httpClient/http-client/http-client.component';
import { UnitTestComponent } from './unitTesting/unit-test/unit-test.component';
import { InternalizationComponent } from './internalization/internalization.component';
import { PostsComponent } from './posts/posts.component';
import { ObservableComponentComponent } from '../app/Rxjs/observable-component/observable-component.component';
import { OperatorsComponent } from './Rxjs/operators/operators.component';
import { SubjectsComponent } from './Rxjs/subjects/subjects.component';
import { ComponentOneComponent } from './Rxjs/subjects/component-one/component-one.component';
import { PromiseComponent } from './Rxjs/promises/promise/promise.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { BehaviourSubjectComponent } from './Rxjs/behaviour-subject/behaviour-subject.component';
import { ComponentTwoComponent } from './Rxjs/subjects/component-two/component-two.component';
import { GrandParentComponent } from './ChangeDetection/grand-parent/grand-parent.component';
import { ParentComponent } from './ChangeDetection/parent/parent.component';
import { ChildComponent } from './ChangeDetection/child/child.component';
import { ChangeDetectionComponent } from './ChangeDetection/change-detection/change-detection.component';
import { ContentProjectionComponent } from './contentProjection/content-projection/content-projection.component';
import { UpdatedComponentComponent } from './contentProjection/updated-component/updated-component.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { CalculatorComponent } from './unitTesting/calculator/calculator.component';
import { CalculatorServiceService } from './unitTesting/services/calculator-service.service';
import { SpiesMockiesComponent } from './unitTesting/spiesMocks/spies-mockies/spies-mockies.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsComponent } from './angularForms/reactive-forms/reactive-forms.component';
import * as fromAppState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { WeatherComponent } from './weather/weather.component';

// import { LanguageInterceptor } from './Interceptors/language.interceptors';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    ViewChildAndViewChildrenComponent,
    ParentComponentComponent,
    NewParentComponent,
    NewchildComponent,
    TwoWayBindingComponent,
    EmployeeINfoComponent,
    DepartmentListComponent,
    TemplateDrivenFormsComponent,
    NewTemplateFormsComponent,
    HttpClientComponent,
    UnitTestComponent,
    InternalizationComponent,
    PostsComponent,
    ObservableComponentComponent,
    OperatorsComponent,
    SubjectsComponent,
    ComponentOneComponent,
    PromiseComponent,
    BehaviourSubjectComponent,
    ComponentTwoComponent,
    GrandParentComponent,
    ParentComponent,
    ChildComponent,
    ChangeDetectionComponent,
    ContentProjectionComponent,
    UpdatedComponentComponent,
    ComponentInteractionComponent,
    CalculatorComponent,
    SpiesMockiesComponent,
    ReactiveFormsComponent,
    WeatherComponent,
    
    
  ],
  imports: [
   // StoreModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecurrenceEditorModule,
   // StoreModule.forFeature(fromAppState.appStateFeatureKey, fromAppState.reducers, { metaReducers: fromAppState.metaReducers }),
   // EffectsModule.forRoot([UserEffects]),
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ] ,
  providers: [EmployeeServiceService,DataService,EmployeeService,CalculatorServiceService,
   /* { 
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi:true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
