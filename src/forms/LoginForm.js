import React, { Component } from "react"

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: "",
             
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };

    handleSubmit = (event) => {
       event.preventDefault()
       this.props.setLoginUser(this.state)
       .then(() => this.props.setShowForm(false))
       .catch((errors) => this.setState({ errors: errors }));
       
    }
    render() {
    return(
   <form onSubmit={this.handleSubmit}>
     {this.state.errors && <p>{this.state.errors}</p>}
     <label htmlFor="email"> 
          Email: 
      </label>
<br/>
 <input onChange={this.handleChange} name="email" type="email" id="email"/><br/>
 <label htmlFor="password"> 
          Password: 
      </label>
<br/>
 <input onChange={this.handleChange} name="password" type="password" id="password"/><br/>
 <input type="submit" value="Submit"/> 
</form>
    )
}
}

export default LoginForm;