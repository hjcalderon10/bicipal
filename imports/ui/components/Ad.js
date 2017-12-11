import React, { Component } from 'react';
import { Link } from 'react-router';

class Ad extends Component {
    getLinks() {
        const links = [
            { _id: '1', href: '/profile', icon: 'fa fa-user fa-2x', text: ' Perfil' },
            { _id: '2', href: '/dashboard', icon: 'fa fa-rss fa-2x', text: ' Eventos' },
            { _id: '3', href: '/map', icon: 'fa fa-map fa-2x', text: ' Mapa' },
            { _id: '4', href: '/friends', icon: 'fa fa-sun-o fa-2x', text: ' Clima' },
        ];

        return links.map((link) => {
            return (
                <li key={link._id}>
                    <Link to={link.href}>
                        <i className={link.icon} />
                        {link.text}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="column sidebar-offcanvas">
                <ul className="nav">
                    <li>
                        <a href="#" className="visible-xs text-center">
                            <i className="fa fa-list-alt" />
                        </a>
                    </li>
                </ul>
                <ul className="nav hidden-xs" id="lg-menu">
                    {this.getLinks()}
                </ul>
            </div>
        );
    }
}

export default Ad;
