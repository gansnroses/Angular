import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {FormsModule} from '@angular/forms';
import { BrandingComponent } from './branding/branding.component';
import { ConditionalComponent } from './conditional/conditional.component';
import {CatalgModule} from './catalog/catalogmodule'
import { SecureModule } from './secure/securemodule';
import { GraphicsModule } from './graphics/graphics.module';
import { CRMModule } from './crm/crmmodule';
import { SPAModule } from './routing/spa.module';


@NgModule({
  declarations: [
    AppComponent,
    ChangepasswordComponent,
    BrandingComponent,
    ConditionalComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalgModule,
    SecureModule,
    GraphicsModule,
    CRMModule,
    SPAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
