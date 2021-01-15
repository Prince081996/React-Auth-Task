import {Card, CardBody, CardText, CardTitle,Row, Col,Input, Button, Container,Jumbotron,Label, Spinner } from "reactstrap";
import { auth0Client } from './auth-client';
import {useState} from 'react'
import './SignUp.css'
import { Link } from "react-router-dom";

export default function SignupForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');  
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sending, setSending] = useState(false);
    const [errors, setErrors] = useState('');

    const handleSignUp = e=> {
      setSending(true)
      let hasError=false;
       let errors="";
       if(!email){
         errors+='Please fill Email ';
         hasError=true
       }
       if(!password){
         errors+=" Password is required"
         hasError=true;
       }
       setErrors(errors);
       if(errors){
        setErrors(errors)
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
                <u>SignUp</u>
              </h3>
            <Card>         
                <CardBody>
                    <CardTitle className="title">
                        Please Fill Your Details!
                    </CardTitle>
                    <CardText tag="div">
                   <div className="form-group">
                     {errors && <p style={{color:'red'}}>{errors}</p>}
                    <Row>
                <Col>
                <Label>FirstName</Label>
                <Input value={firstName} data-testid="firstname-id"    onChange={(e) => {setFirstName(e.target.value);}} type="text" placeholder="FirstName" />
                </Col>
            </Row>
                  </div>
            <Row>
                <Col>
                <Label>LastName</Label>
                <Input value={lastName} data-testid="lasttname-id"  onChange={(e) => {setLastName(e.target.value)}} type="text" placeholder="LastName" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Label>UserName</Label>
                <Input value={userName} data-testid="username-id"  onChange={(e) => {setuserName(e.target.value)}}type="text" placeholder="UserName" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Label>Email</Label>
                <Input value={email} data-testid="email-id" onChange={(e) => {setEmail(e.target.value);}} type="email" placeholder="Email" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Label>Password</Label>
                <Input value={password} data-testid="pwd-id"  onChange={(e) => {setPassword(e.target.value)}}type="password" placeholder="Password" />
                </Col>
            </Row>
            {sending && <Spinner color="primary" />}
            <Row>   
                <Col >
                <p></p>
                <Link to='/login'><Button color="primary" data-testid="signup_id"  onClick={handleSignUp}>SignUp</Button></Link>
                </Col>
                    </Row>
                    <Row>   
                <Col >
                <p>Already Registered Click On Login</p>
                <Link to='/login'><Button>Login</Button></Link>
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