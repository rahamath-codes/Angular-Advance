import { UserChild } from './user-child/user-child';
import { Routes } from '@angular/router';
import { Users } from './users/users';
import { AddUser } from './add-user/add-user';
import { AuthGuard } from './serices/authguard-guard';
import { AccessDenied } from './access-denied/access-denied';
import { RoleGuard } from './serices/role-guard';
import { NotCompletedGuard } from './serices/notcompleted-guard';
export const routes: Routes = [
    // {path:'',component:Users},
    {path:'user', component:Users, canActivateChild:[RoleGuard],
        children: [{path:'userchild',component:UserChild,canActivate:[AuthGuard]}]
    }, 
    {path:'adduser',component:AddUser,canDeactivate:[NotCompletedGuard]},
    {path:'adduser',component:AddUser,outlet:'addUser'},
    {path:'access-denied',component:AccessDenied}
];
