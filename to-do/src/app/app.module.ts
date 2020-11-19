import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    HeaderComponent,
    AboutComponent,
    TodoItemComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
