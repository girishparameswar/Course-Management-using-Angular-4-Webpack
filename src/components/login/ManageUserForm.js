import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import Signin from './signin';
import * as UserAction from '../../actions/userAction';


class ManageUserForm extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            user: Object.assign({}, this.props.user),
            errors: {},
            saving: false
        };

        this.saveUser = this.saveUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }


    componentDidMount() {
       // this.props.actions.authenticateUser();
    }
    
    

    updateUser(event) {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user:user});
    }

    saveUser(event) {
        event.preventDefault();
        //console.log(this.state.user);
        this.setState({saving:true});
        this.props.actions.authenticateUser(this.state.user)
        .then(()=> this.redirect())
        .catch(error => {
            toastr.error(error ? "Error":"Please Enter Correct Information!");
            this.setState({saving:false});
        });
    }

    redirect() {
            this.setState({saving:false});
            //console.log("No routing!");
            this.context.router.push('/homepage');
        }

    render() {
        return(
            <Signin
                user={this.state.user}
                onChange={this.updateUser}
                onSave={this.saveUser}
                errors={this.state.errors}
                saving={this.state.saving}/>
               //CurrUser={this.state.user.username}/>
        );
    }

}

ManageUserForm.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageUserForm.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    let user = {
        username : '',
        password : ''
    };

    return {
        user: user
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(UserAction, dispatch)
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(ManageUserForm);