import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogJokeComponent } from './pages/dog-joke/dog-joke.component';

const routes: Routes = [
  {path:'dogjoke', component:DogJokeComponent},
  {path:'', redirectTo:'dogjoke',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
