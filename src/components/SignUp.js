import {Card, CardBody, CardText, CardTitle,Row, Col,Input, Button, Container,Jumbotron,Label } from "reactstrap";
import { auth0Client } from './auth-client';
import {useState} from 'react'
import './SignUp.css'

export default function SignupForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');  
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSignUp = e=> {
        e.preventDefault();
        let hasError=false;
       const errors={};
       if(!email){
         errors.email='Please fill in';
         hasError=true
       }
       if(!password){
         errors.password="Password is required"
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
    
        auth0Client.signup({
          connection:'demo-db',
          email,
          password
        },(err,authResult)=>{
          if(err){
            console.log(err)
            alert("Error",err.description)
            return
          }
          if(authResult){
            console.log(authResult)
            window.origin=window.location.origin
          }
         
        })
        }
    return(
        <div className="signup-form">
         <Container>
         <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>
                <u>SignUp Form</u>
              </h3>
            <Card>
          
                <CardBody>
                    <CardTitle className="title">
                        Please Fill Your Details
                    </CardTitle>
                    <CardText tag="div">
                   <div className="form-group">
                    <Row>
                <Col>
                <Label>FirstName</Label>
                <Input value={firstName}  onChange={(e) => {setFirstName(e.target.value);}} type="text" placeholder="FirstName" />
                </Col>
            </Row>
                  </div>
            <Row>
                <Col>
                <Label>LastName</Label>
                <Input value={lastName} onChange={(e) => {setLastName(e.target.value)}}type="text" placeholder="LastName" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Label>UserName</Label>
                <Input value={userName} onChange={(e) => {setuserName(e.target.value)}}type="text" placeholder="UserName" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Label>Email</Label>
                <Input value={email}  onChange={(e) => {setEmail(e.target.value);}} type="email" placeholder="Email" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Label>Password</Label>
                <Input value={password} onChange={(e) => {setPassword(e.target.value)}}type="password" placeholder="Password" />
                </Col>
            </Row>
            <Row>   
                <Col >
                <Button color="primary" onClick={handleSignUp}>SignUp</Button>
                </Col>
                    </Row>
                    <Row>   
                <Col >
                <Button color="primary" onClick={handleSignUp}>Login</Button>
                </Col>
                    </Row>
                    </CardText>
                </CardBody>
            </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
     </div>
    )
}