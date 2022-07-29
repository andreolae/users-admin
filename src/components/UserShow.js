import * as React from "react";
import {SimpleShowLayout, Show, TextField, EmailField} from 'react-admin';

export const UserShow = () => (
    <Show >
        <SimpleShowLayout >
            <TextField source="id"/>
            <TextField source="name" label="Nome"/>
            <TextField source="address.geo.lng" label="CPF"/>
            <TextField source="address.geo.lng" label="Data de Nascimento"/>
            <TextField source="phone" label="Celular"/>
            <TextField source="address.street" label="Endereço"/>
            <TextField source="address.zipcode" label="CEP"/>
            <EmailField source="email"/>
            <TextField source="address.geo.lat" label="Data de Inscrição"/>
        </SimpleShowLayout>
    </Show>
);