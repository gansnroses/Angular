import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

import { UserService } from './userservice';
 
 
@NgModule({
  declarations: [
                    CustomerAddressComponent,
                    EmailFormComponent ,
                    ReactiveformComponent,
                    TemplatedrivenformComponent     
  ],
  exports:[      
                    CustomerAddressComponent,
                    EmailFormComponent,
                    ReactiveformComponent,
                    TemplatedrivenformComponent
  ],

  imports: [      BrowserModule,
                  FormsModule,
                  ReactiveFormsModule        
  ],
  providers: [UserService],
  
})
export class CRMModule { }