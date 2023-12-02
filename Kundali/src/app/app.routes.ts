import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'home', component: MainComponent },
            { path: 'aboutUs', component: AboutUsComponent },
            { path: 'ContactUs', component: ContactComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: "**", redirectTo: '/', pathMatch: 'full' },
];
