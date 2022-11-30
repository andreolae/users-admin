import * as React from "react";
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList, UserCreate, UserEdit} from "./pages/users";
import dashboard from './pages/dashboard';
import authProvider from './authProvider';
import {PhotoCreate, PhotoEdit, PhotoList} from "./pages/photos";
import {MyLoginPage} from "./components/MyLoginPage";
import {UserShow} from "./components/UserShow";
import {PhotoShow} from "./components/PhotoShow";
import { MyLayout } from "./components/MyLayout";



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin layout={MyLayout} loginPage={MyLoginPage} dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow}/>
    <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} show={PhotoShow}/> 
  </Admin>
);

export default App;
