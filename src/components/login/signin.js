import React from 'react';
import TextInput from '../common/TextInput';
import {browserHistory} from 'react-router';


const SigninForm = ({user, onSave, onChange, saving, errors}) => {
    return (
        <div className="form-group">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Login 
                </div>
                <div className="panel-body">
                    <form className="form">
                    <TextInput
                           name="username"
                           label="Username"
                           value={user.username}
                           onChange={onChange}
                           error={errors.username}/>   
               
                    <TextInput
                    type="password"
                           name="password"
                           label="Password"
                           value={user.password}
                           onChange={onChange}
                           error={errors.password}/>
                   
                    <input type="submit"
                           disabled={saving}
                           className="btn btn-primary"
                           value={saving ? 'Signing...':'Sign In'}
                           onClick={onSave}/>
                    </form>
            </div>
           </div> 
        </div>
    );
};

SigninForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};
export default SigninForm;
