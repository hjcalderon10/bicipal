import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import weather from '../../api/weather/weather';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            descritpion: '',
            temperature: '',
            wind: '',
            precipitation: '',
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.ready === true) {
            this.setState({ email: newProps.currentUser.emails[0].address });
        }
    }

    toggleEdit() {
        this.setState({ editMode: !this.state.editMode });
    }

    uploadWeather(event) {
        event.preventDefault();

        if (event.currentTarget.files && event.currentTarget.files[0]) {
            const file = event.currentTarget.files[0];

                upload.on('end', (error, result) => {
                    if (error) {
                        console.log('Error during upload:', error);
                        this.setState({ imageId: '', fileName: '' });
                    } else {
                        Meteor.call('Images.changeAvatar', result._id, (errorAvatar) => {
                            if (errorAvatar) {
                                console.log('Error during changeAvatar:', errorAvatar);
                            } else {
                                this.setState({ className: 'img-circle img-responsive custom-input-file updated' });
                            }
                        });
                    }
                });

                upload.start();
            }
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

        const emailLink = `mailto:${currentUser.emails[0].address}`;
        const mailBlock = this.state.editMode ? editMode : <a href={emailLink}>{this.state.email}</a>;

        return (
                <div className="weather">
                    <Weather
                        description={currentUser.weather.description}
                        wind={currentUser.weather.wind}
                        temperature={currentUser.weather.temperature}
                        preciptiation={this.weather.description}
                        wrapLink={false}
                    />
                </div>
        );
    }
}

Profile.propTypes = {
    currentUser: PropTypes.object,
    ready: PropTypes.bool,
};

export default createContainer(() => {
    const currentUser = Meteor.user();

    return {
        currentUser,
        ready: !!currentUser,
    };
}, Weather);
