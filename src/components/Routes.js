import {BrowserRouter, Redirect, Route,Switch} from 'react-router-dom';
import LoginForm from './Login';
import SignupForm from './SignUp';
import Profile from './Profile';
import {PrivateRoute} from '../helper/PrivateRoute';
import { history } from '../helper/History';
import NotFound from './NotFound';


export default function Routes(){
    return(

    <Switch>
    <Route path='/signup' component={SignupForm} history={history}  />
    <Route path='/login' component={LoginForm} history={history} />
    <PrivateRoute path='/' component={Profile} exact={true}/>
    <Route path='/not-found' exact component={NotFound}  />
    <Redirect to='/not-found' />
    </Switch>
    );
}