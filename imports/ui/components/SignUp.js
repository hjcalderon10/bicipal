import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messageClass: 'hidden',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayError(message) {
        this.setState({
            message,
            messageClass: 'alert alert-danger registerError',
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            message: '',
            messageClass: 'hidden',
        });

        const firstname = this.refs.firstName.value.trim();
        const lastname = this.refs.lastName.value.trim();
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();

        const user = {
            email,
            password,
            profile: {
                fullname: (`${firstname}${lastname}`).toLowerCase(),
                firstname,
                lastname,
                avatar: 'http://placehold.it/150x150',
                friends: [],
            },
        };

        Accounts.createUser(user, (error) => {
            if (error) {
                this.displayError(error.reason);
            } else {
                browserHistory.push('/dashboard');
            }
        });
    }

    render() {
        return (
            <div className="row">
                    <h1>Bicipal</h1>
                    <p className="text-muted">
                        Web dedicada a compartir los viajes en grupo de usuarios, visualizar información climática y ubicaciones de parqueaderos y talleres para biciusuarios. 
                    </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Nombre"
                                    type="text"
                                    ref="firstName"
                                />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Apellido"
                                    type="text"
                                    ref="lastName"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                type="text"
                                ref="email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                name="password"
                                placeholder="Contraseña"
                                type="password"
                                ref="password"
                            />
                        </div>
                        <button type="submit" className="btn btn-md btn-success">Registrarse</button>
                        <span className={this.state.messageClass}>
                            {this.state.message}
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
