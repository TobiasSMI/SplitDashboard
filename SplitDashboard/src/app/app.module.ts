import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaTodoComponent } from './dashboard/area-todo/area-todo.component';
import { AreaPomodoroComponent } from './dashboard/area-pomodoro/area-pomodoro.component';
import { AreaMusicComponent } from './dashboard/area-music/area-music.component';
import { AreaTextEditorComponent } from './dashboard/area-text-editor/area-text-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AreaTodoComponent,
    AreaPomodoroComponent,
    AreaMusicComponent,
    AreaTextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
