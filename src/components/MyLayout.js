import * as React from 'react';
import { Layout } from 'react-admin';
import { MyAppBar } from './MyAppBar';
import { MyMenu } from './MyMenu';



export const MyLayout = (props) => 
<Layout {...props} 
   menu={MyMenu} 
   appBar={MyAppBar} 
   
/>;