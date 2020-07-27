import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomecomponentComponent} from "./homecomponent/homecomponent.component";
import {FollowerComponent} from "./follower/follower.component";
import {ProfilefollowerComponent} from "./profilefollower/profilefollower.component";
import {PostComponent} from "./post/post.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";


const routes: Routes = [
  { path: "home",
    component:HomecomponentComponent
  },
  { path: "followers",
    component:FollowerComponent
  },
  { path: "followers/:user",
    component:ProfilefollowerComponent
  },
  { path: "posts",
    component:PostComponent
  },
  { path: "**",
    component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
