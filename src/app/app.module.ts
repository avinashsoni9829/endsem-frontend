import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { authInterceptorProvider } from './services/auth.interceptor';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './pages/view-question/view-question.component';
import { AddQuestionsComponent } from './pages/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './pages/update-question/update-question.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { QuizstartComponent } from './pages/quizstart/quizstart.component';
import { FormatTimePipe, QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ProfilePageComponent,
    CategoriesComponent,
    AddCategoryComponent,
    QuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionComponent,
    AddQuestionsComponent,
    UpdateQuestionComponent,
    AdminHomeComponent,
    QuizstartComponent,
    QuizPageComponent,
    ResultComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
