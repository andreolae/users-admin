import { DashboardMenuItem, Menu} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';


export const MyMenu = () => (
    <Menu>
        <DashboardMenuItem primaryText="Painel"/>
        <Menu.Item to="/users" primaryText="Usuários" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/photos" primaryText="Fotos" leftIcon={<BookIcon/>}/>
    </Menu>
);