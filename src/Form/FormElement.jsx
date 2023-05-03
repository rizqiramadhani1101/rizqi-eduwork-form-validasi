import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


export default class FormElement extends React.Component {
    
    state ={
       
        agree:false,
        email:'',
        password:'',
        errors:[]
    }



handleSubmit = ()=> {


    const {email,password,agree} = this.state;

    let message = [];

    if (email.length ===0) {
       message = [...message, 'Email tidak boleh kosong'];
    }

    if(password.length ===0){
        message=[...message,'Password tidak boleh kosong'];
    }

    if(agree.length===0){
        message=[...message,'Tidak setuju'];
    }

    if(message.length>0) {
        this.setState({
            errors:message
        }, () => console.log(this.state.errors));
    }

   

    alert(`
    email: ${this.state.email}
    password: ${this.state.password}
    agree: ${this.state.agree ? 'YES' : 'NO'}
    
    
    `)
}





    render () {
        return  (
        <div style={{margin:"100px,auto",border:'1px solid grey', padding:'20px'}}>
            <h1>Form Validasi</h1>
            <Form onSubmit={this.handleSubmit}>
              
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => this.setState({email:e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  placeholder="Password"  name="password" onChange={e => this.setState({password:e.target.value})}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" checked={this.state.agree}  name="agree" onChange={e => this.setState({agree:e.target.checked})} />
      </Form.Group>

      <br /> 
      <button variant="primary" type="submit">
        Submit
      </button>

      


            </Form>
        </div>
            
        );
    }
}