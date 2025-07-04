import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { CreateAccount } from './pages/create-account/create-account';
import { Home } from './pages/home/home';
import { Coding } from './pages/coding/coding';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:"login",component:Login},
    {path:'create-account',component:CreateAccount},
    {path:"home",component:Home},
    {path:"coding/:fiddleid",component:Coding}
];
