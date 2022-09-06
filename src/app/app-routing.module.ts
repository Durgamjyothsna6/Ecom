import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { FashionComponent } from './fashion/fashion.component';
import { FreshComponent } from './fresh/fresh.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './login/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PantryComponent } from './pantry/pantry.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent},
  {path:'home',component:HomeComponent},
  {path:'fresh',component:FreshComponent},
  {path:'pantry',component:PantryComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'fashion',component:FashionComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'essentials',component:EssentialsComponent},
  {path:'appliances',component:AppliancesComponent},
  {path:'others',component:OthersComponent},
  {path:'login',component:LoginComponent,children:[
    {path:'logout',component:LogoutComponent},
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent},
    {path:'checkout',component:CheckoutComponent}
  ]},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
