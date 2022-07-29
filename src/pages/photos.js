import {required, Edit, SimpleForm, TextInput, Create, Datagrid, List, TextField, UrlField, ImageInput, EditButton, ShowButton } from 'react-admin';
import { postFilters } from "../components/postFilters";

export const PhotoList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit"
         sx={{
            backgroundColor: "",
            "& .RaDatagrid-headerCell": {
                backgroundColor: "#2196F3",
            },
        }}>
            <TextField source="id"/>
            <TextField source="title" label="Descrição"/>
            <UrlField source="url" label="Foto Usuário"/>
            <ShowButton/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const PhotoEdit = (props) =>(
    <Edit {...props}>
        <SimpleForm rowClick="edit">
            <TextInput source="id" disabled/>
            <TextInput source="title" label="Descrição"/>
            <ImageInput source="url" label= "Foto Usuário" validate={required("Campo obrigatório")}/>
        </SimpleForm>   
     </Edit>   
    
);

export const PhotoCreate = (props) => (
    <Create {...props}> 
        <SimpleForm  rowClick="edit">
            <TextInput source="id" disabled/>
            <TextInput source="title" label="Descrição"/>
            <ImageInput source="url" label= "Foto Usuário" validate={required("Campo obrigatório")}/>
        </SimpleForm>   
    </Create>  
); 