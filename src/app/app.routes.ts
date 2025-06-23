import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { CreateAccount } from './pages/create-account/create-account';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:"login",component:Login},
    {path:'create-account',component:CreateAccount}
];
