import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CustmtrlModule } from './custmtrl/custmtrl.module';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { PostlistComponent } from './postlist/postlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CustmtrlModule,FormsModule,HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
