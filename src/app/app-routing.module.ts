import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddQuestionsComponent } from './pages/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { QuizstartComponent } from './pages/quizstart/quizstart.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateQuestionComponent } from './pages/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/update-quiz/update-quiz.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ViewQuestionComponent } from './pages/view-question/view-question.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { ProfileGuard } from './services/profile.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path : "home",
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path : "signup",
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path : "login",
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path : "about",
    component:AboutComponent,
    pathMatch:'full',
  },
  {
    path : "profile",
    component : ProfilePageComponent,
    pathMatch:'full',
    canActivate: [ProfileGuard]
   
  },
  {
     path : "admin-dashboard",
     component :AdminDashboardComponent,
    
     canActivate:[AdminGuardGuard],
     children : 
      [
        {
           path : "",
           component:AdminHomeComponent

        },

        {
            path : "add-category",
            component:AddCategoryComponent
        },
        {
            path : "categories",
            component : CategoriesComponent
        },
        { 
            path:"Quizzes",
            component : QuizzesComponent
        },
        {
           path : "add-quiz",
           component : AddQuizComponent
        },
        {
          path : "quiz/:qid",
          component : UpdateQuizComponent,
        },
       {
           path : "view-questions/:qid",
           component : ViewQuestionComponent,
          
       },
       {
         path : "add-questions/:qid",
         component : AddQuestionsComponent
       },
       {
        path : "update-questions/:quesid",
        component : UpdateQuestionComponent
      }
     
     ]
  },
  {
      path:"user-dashboard",
      component:UserDashboardComponent,
      canActivate:[UserGuard],
     
  },
  {
    path:"quiz-home/:qId",
    component: QuizstartComponent
  },
  {
     path:"quiz-ground/:qId",
     component:QuizPageComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
