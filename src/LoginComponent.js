import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function LoginComponent(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function validation() {
        if (username === 'asadmalik' && password === 'buspark!'){
          props.data.setValidationPassed(true);
          props.data.setValidationFailed(false);
          console.log('validated');
          history.push('/home');
          return;
        }
        console.log('validation failed');
        props.data.setValidationPassed(false);
        props.data.setValidationFailed(true);
      }

    return (
        <div>
            <div></div>
            <h3>Log In Form</h3>
            <div></div>
          <TextField sx={{ m: 1, width: "25ch" }} id="outlined-basic" label="Username" variant="outlined" onChange={ (e) => setUsername(e.target.value) }/>
          <div></div>
          <TextField sx={{ m: 1, width: "25ch", marginBottom: "40px" }} id="outlined-basic" label="Password" type="password" variant="outlined" onChange={ (e) => setPassword(e.target.value) }/>
          <div></div>
          <Button variant="outlined" onClick={validation}>Log In</Button>
          {
            props.data.validationPassed ? (
              <div>
                <h5>Validation Passed</h5>
              </div>
            ) : props.data.validationFailed ? (
              <div>
                <h5>Validation Failed</h5>
              </div>
            ) : (
              <div>
                <h5>Enter Data</h5>
              </div>
            )
          }
        </div>
    )
}
