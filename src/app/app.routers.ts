import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscador/:heroe', component: BuscadorComponent },
    { path: '**', component: HomeComponent },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS);
