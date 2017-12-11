import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Images from '../../api/images/images';
import Avatar from './Avatar';

class Map extends Component {
    constructor(props) {
        super(props);
    }

  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

    render() {

        return (
				<iframe src="https://www.google.com/maps/d/embed?mid=1y2eclW4aEc88oOeRuxe_t5tKWNaNb47Q&hl=es" frameborder="0" allowfullscreen></iframe>
        );
    }
}

export default Map;
