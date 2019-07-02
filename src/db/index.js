import firebaseApp from '../Firebase';

//import all db functions
import users from './users';
import organizations from './organizations';

const database = firebaseApp.database();


export default {
    Users: users(database),
    Organizations: organizations(database)
}
