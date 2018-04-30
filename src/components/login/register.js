import React from 'react';
import TextInput from '../common/TextInput';
import {browserHistory} from 'react-router';

const RegisterForm = ({user, onSave, onChange, saving, errors}) => {
    return (
        <form>
        <h1>Register Now!</h1>
        <TextInput
            name="username"
            label="Username"
            value={user.username}
            onChange={onChange}
            error={errors.username}/>
        
        <TextInput
            name="fullname"
            label="Full Name"
            value={user.fullname}
            onChange={onChange}
            error={errors.fullname}/>

            <TextInput
            name="email"
            label="Email Id"
            value={user.email}
            onChange={onChange}
            error={errors.email}/>

        <TextInput
            name="password"
            label="Password"
            value={user.password}
            onChange={onChange}
            error={errors.password}/>
        
        <input 
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...':'Save'}
                className="btn btn-success"
                onClick={onSave}/>
        </form>
    );
};

RegisterForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};
export default RegisterForm;