import * as React from "react";
import {useRecordContext} from 'react-admin';

export const UsersTitle = () => {
  const record = useRecordContext();
  return <span>Aluno {record ? `"${record.name}"` : ''}</span>;
};