import React, { Component } from 'react';

class FeatureList extends Component {
    getFeatures() {
        const features = [
            { _id: '1', icon: 'fa fa-imageId fa-2x', bigtext: 'Crea rodadas:', littletext: 'Describe detalladamente tu evento' },
            { _id: '2', icon: 'fa fa-share fa-2x', bigtext: 'Mira los sitios de interés', littletext: 'Talleres o Parqueaderos' },
            { _id: '3', icon: 'fa fa-search fa-2x', bigtext: 'Verifica las condiciones climáticas', littletext: 'Si es o no viable salir a rodar' },
        ];

        return features.map((feature) => {
            return (
                <li key={feature._id}>
                    <h3 className="btn btn-lg">
                        <i className={feature.icon} />
                        <span>
                            <strong> {feature.bigtext}</strong>
                            <small> {feature.littletext}</small>
                        </span>
                    </h3>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="bgimg">
                <h2 className="col-md-11 featurelist hidden-xs">
                    Conectate con personas interesadas en salir a rodar en grupo
                </h2>
                <ul className="ds-btn hidden-xs">
                    {this.getFeatures()}
                </ul>
            </div>
        );
    }
}

export default FeatureList;

