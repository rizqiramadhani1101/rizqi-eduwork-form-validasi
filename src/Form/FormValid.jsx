import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

 

const Input = ({label,type,name, onChange}) => {
    return (
        <div>
                <label>
                {label} : 
            </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
        </div>
        
    )
}


const ShowErrors =({errors}) => {
    return (
        <ul style={{color:'red', marginLeft:'-20px'}}>
            {
                errors.map((errors,i)=><li key={i}>{errors}</li>)
            }
        </ul>
    )
}


export default class FormValid extends React.Component {

state = {
    email:'',
    password:'',
    errors:[]
}

handleSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;
    let message =[];

    if(email.length ===0){
        message = [...message, 'Email tidak boleh kosong'];
    }
    if(password.length ===0){
        message = [...message, 'password tidak boleh kosong'];
    }

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!re.test(String(email).toLowerCase())) {
        message = [...message, 'Email Tidak Valid'];

    }

    if(password.length <8) {
        message = [...message, 'Password terlalu pendek'];

    }

    if(message.length >0) {
        this.setState({
            errors:message
        });
    } else {
        alert(`
        email: ${this.state.email}
        password: ${this.state.password}
    
        `)
    }



}


    render () {
        const style = {
            width: '400px',
            margin : '100px auto 0',
            border: '1px solid black',
            padding:'10px'
        }
        return (
            <div style= {style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h2> Form Validasi</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Input type="email" name="email"  label="email"  
                        onChange={value => this.setState({email:value})}/>
                        <Input type="password" name="password"  label="password" 
                        onChange={value => this.setState({password:value})}/>


                        
                        <br />
                        <button  type="submit"> Submit </button>
                        
                           
                    </Form>
            </div>
        )
    }
}

