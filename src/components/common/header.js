import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import '../../styles/styles.css';

const Header = ({loading}) => {
    return (
        <div>
        <nav className="navbar navbar-inverse">
            <div className="fluid container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/register" activeClassName="active">Register</Link></li>
                        <li><Link to="/login" activeClassName="active">Login</Link></li>
                        <li><Link to="/courses" activeClassName="active">Courses</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
        <highlight className="loading">{loading && <LoadingDots interval={200} dots={5}/>}</highlight>
        </div>
    </div>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;