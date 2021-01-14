import {Button,  Input, Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import {useState} from 'react';


import {auth0Client} from './auth-client';
import './Login.css'

export default function LoginForm(props){
    
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState({});


    const onSubmitHandler = (e) => {
        e.preventDefault();
        login(email,password)
      };

    const login=(username,password)=>{
        let hasError=false;
        const errors={};
        if(!email){
          errors.email='Please fill in';
          hasError=true
        }
        if(!password){
          errors.email="Password is required"
          hasError=true;
        }
        setErrors(errors);
        if(errors){
         const errorElementId=Object.keys(errors)[0];
         const element=document.getElementById(errorElementId);
         if(element){ 
           element.scrollIntoView({block:'center',behavior:'smooth',inline:'center'})
           element.focus()
         }
       }
        console.log(hasError)
        if(hasError){
          setSending(false);
          return;
        }
     
         auth0Client.client.login({
           realm:'demo-db',
           username,
           password
         },(err,authResult)=>{
           if(err){
             console.log(err)
             alert("Error",err.description)
           }
           if(authResult){
             console.log(authResult)
             const accessToken = authResult.accessToken
             localStorage.setItem("token",accessToken)
             props.history.push('/')
             return
           }
         })                     
         } 
          

return(
<div className='login-form'>
<Card>
    <CardBody>
        <CardTitle>
            Login
        </CardTitle>
        <CardText tag="div">
            <Row>
                <Col>
                <Input value={email}  onChange={(e) => {setEmail(e.target.value);}} type="email" placeholder="Email" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Input value={password} onChange={(e) => {setPassword(e.target.value)}}type="password" placeholder="Password" />
                </Col>
            </Row>
            <Row>   
                <Col>
                <Button color="primary" onClick={onSubmitHandler}>Login</Button>
                </Col>
            </Row>
        </CardText>
    </CardBody>
</Card>
</div>
    );
}