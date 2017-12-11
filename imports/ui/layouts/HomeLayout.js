import React, { Component } from 'react';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import FeatureList from '../components/FeatureList';

class HomeLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="signup">
                        <SignUp />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeLayout;
