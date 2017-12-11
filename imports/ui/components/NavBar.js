import $ from 'jquery';
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // @TODO: Check a fix for typeahead.
        const users = Meteor.users.find({}, { fields: { profile: 1 } }).fetch();
        const usernames = users.map((user) => {
            return user.profile.fullname;
        });

        $('#typeahead').typeahead({
            name: 'users',
            local: usernames,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const user = (this.refs.searchText.value).trim();

        if (user !== '') {
            browserHistory.push(`/user/${user}`);
        }
    }

    render() {
        const {
            currentUser,
            ready,
        } = this.props;

        if (!ready) {
            return <div>Loading...</div>;
        }

        return (
            <div className="navbar navbar-blue navbar-fixed-top">
                <nav className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/profile">
                                <i className="fa fa-user" /> Perfil
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <i className="fa fa-rss" /> Eventos
                            </Link>
                        </li>
                        <li>
                            <Link to="/map">
                                <i className="fa fa-map" /> Mapa
                            </Link>
                        </li>
                        <li>
                            <Link to="/weather">
                                <i className="fa fa-sun-o" /> Clima
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                                <i className="fa fa-user" /> {`${currentUser.profile.firstname} ${currentUser.profile.lastname}`}
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/signout">Cerrar sesión</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {
    currentUser: PropTypes.object,
    ready: PropTypes.bool,
};

export default createContainer(() => {
    const currentUser = Meteor.user();

    return {
        currentUser,
        ready: !!currentUser,
    };
}, NavBar);
