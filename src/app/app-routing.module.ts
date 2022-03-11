import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { DetailVinoComponent } from './detail-vino/detail-vino.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewWineComponent } from './new-wine/new-wine.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
// {
//   path: '',
//   component: HomeComponent,
//   pathMatch:'full'
// },

{
  path: '',
  component: LoginComponent,
  pathMatch:'full'
},
{
  path: 'home',
  component: HomeComponent,
  pathMatch:'full'
},

{
  path: 'catalogo',
  component: CatalogComponent,
  pathMatch:'full'

},
{
  path: 'nuevoVino/catalogo',
  component: CatalogComponent,
  pathMatch:'full'

},

{
  path: 'contacto',
  component: ContactComponent,
  pathMatch:'full'

},

{
  path: 'catalogo/detalle/:id',
  component: DetailVinoComponent,
  pathMatch:'full'

},

{
  path: 'nuevoVino',
  component: NewWineComponent,
  pathMatch:'full'

},
{
  path: 'login',
  component: LoginComponent,
  pathMatch:'full'
},
{
  path: 'signin',
  component: SigninComponent,
  pathMatch:'full'

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
