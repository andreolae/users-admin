import {Show, SimpleShowLayout, TextField, UrlField} from 'react-admin';


export const PhotoShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="title" label="Usuário"/>
            <UrlField source="url" label="Foto Usuário"/>
        </SimpleShowLayout>
    </Show>
);