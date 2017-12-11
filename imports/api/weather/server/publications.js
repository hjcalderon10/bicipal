import { Meteor } from 'meteor/meteor';

Meteor.publish('Weather.getJson', (searchField, data) => {
    return Meteor.users.find(
        {
            [searchField]: data,
        },
        {
            fields:
                {
                    'weather.descripition': 1,
                    'weather.temperature': 1,
                    'weather.wind': 1,
                    'weather.precipitation': 1,
                },
        },
    );
});