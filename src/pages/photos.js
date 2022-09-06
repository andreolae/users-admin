import {required, Edit, SimpleForm, TextInput, Create, Datagrid, List, TextField, UrlField, ImageInput, EditButton, ShowButton } from 'react-admin';
import {addFilters} from "../components/filters";


export const PhotoList = () => (
    <List filters={addFilters}>
        <Datagrid
         sx={{
            backgroundColor: "",
            "& .RaDatagrid-headerCell": {
                backgroundColor: "#2196F3",
            },
        }}>
            
            <TextField source="id"/>
            <TextField source="title" label="Usuário"/>
            <UrlField source="url" label="Foto Usuário"/>
            <ShowButton size="small" variant="contained">Ver</ShowButton>
            <EditButton size="small" variant="contained">Editar</EditButton>
        </Datagrid>
    </List>
);

export const PhotoEdit = (props) =>(
    <Edit {...props}>
        <SimpleForm rowClick="edit">
            <TextInput source="id" disabled/>
            <TextInput source="title" label="Usuário"/>
            <ImageInput source="url" label= "Foto Usuário" validate={required("Campo obrigatório")}/>
        </SimpleForm>   
    </Edit>   
    
);

export const PhotoCreate = (props) => (
    <Create > 
        <SimpleForm  rowClick="edit">
            <TextInput source="id" disabled/>
            <TextInput source="title" label="Usuário"/>
            <ImageInput source="url" label= "Foto Usuário" validate={required("Campo obrigatório")}/>
        </SimpleForm>   
    </Create>  
); 