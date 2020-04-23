import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoService } from './2-todos/todo.service';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { VoterComponent } from './1-voter/voter.component';
import { UsersComponent } from './users/users.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoService,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
