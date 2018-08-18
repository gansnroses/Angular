import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { AuthService } from "./authservice";
import { RegisterComponent } from "./register/register.component";

 
@NgModule({
    declarations: [LoginComponent,
                   ChangepasswordComponent,
                   SignInComponent,
                   RegisterComponent
                ],
    
    exports: [     LoginComponent,
                   ChangepasswordComponent,
                   SignInComponent,
                   RegisterComponent
             ],

    imports:[
            BrowserModule,
            FormsModule,
            ReactiveFormsModule
    ],

    providers:[ 
        AuthService
    ],
})
export class SecureModule{}