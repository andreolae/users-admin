import * as React from "react";
import {required, List, Datagrid, TextField, EmailField, SimpleForm, TextInput, Create, Edit, EditButton, ShowButton} from 'react-admin';
import { postFilters } from "../components/postFilters";
import { PostTitle } from "../components/postTitle";

export const UserList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit" 
        sx={{
        "& .RaDatagrid-headerCell": {
            backgroundColor: "#2196F3",
        },
        }}>
            <TextField  source="id"/>
            <TextField source="name" label="Nome"/>
            <TextField source="address.geo.lng" label="CPF"/>
            <TextField source="address.geo.lng" label="Data de Nascimento"/>
            <TextField source="phone" label=" Celular"/>
            <TextField source="address.street" label="Endereço"/>
            <TextField source="address.zipcode" label="CEP"/>
            <EmailField source="email"/>
            <TextField source="address.geo.lat" label="Data de Inscrição"/>
            <ShowButton/>
            <EditButton/>
        </Datagrid>  
    </List>
);

export const UserEdit = (props) =>(
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm rowClick="edit">
       

            <TextInput source="id" disabled/>
            <TextInput source="name" label="Nome" validate={required("Campo obrigatório")}/>
            <TextInput source="address.geo.lng" disabled label="CPF" validate={required("Campo obrigatório")}/>
            <TextInput source="address.geo.lng" label="Data de Nascimento" validate={required("Campo obrigatório")}/>
            <TextInput source="phone" label="Celular" validate={required("Campo obrigatório")}/>
            <TextInput source="address.street" label="Endereço" validate={required("Campo obrigatório")}/>
            <TextInput source="address.zipcode" label="CEP" validate={required("Campo obrigatório")}/>
            <TextInput source="email" />
            <TextInput source="address.geo.lat" label="Data de Inscrição" disabled/>
        </SimpleForm>   
    </Edit>   
    
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm rowClick="edit">
            <TextInput source="id" disabled/>
            <TextInput source="name" label="Nome" validate={required("Campo obrigatório")}/>
            <TextInput source="address.geo.lng" label="CPF" validate={required("Campo obrigatório")}/>
            <TextInput source="address.geo.lng" label="Data de Nascimento" validate={required("Campo obrigatório")}/>
            <TextInput source="phone" label="Celular" validate={required("Campo obrigatório")}/>
            <TextInput source="address.street" label="Endereço" validate={required("Campo obrigatório")}/>
            <TextInput source="address.zipcode" label="CEP" validate={required("Campo obrigatório")}/>
            <TextInput source="email"/>
        </SimpleForm>   
    </Create>  
); 



