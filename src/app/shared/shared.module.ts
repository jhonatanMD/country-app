import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InputBoxComponent } from './components/input-box/input-box.component';



@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SiderbarComponent, ContactPageComponent,InputBoxComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HomePageComponent, AboutPageComponent, SiderbarComponent, ContactPageComponent,InputBoxComponent]
})
export class SharedModule { }
