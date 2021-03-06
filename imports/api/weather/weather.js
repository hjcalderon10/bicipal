import { Meteor } from 'meteor/meteor';

Meteor.methods({
    var weather = require('openweather-apis');
 
    weather.setLang('it');
    // English - en, Russian - ru, Italian - it, Spanish - es (or sp),
    // Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
    // Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
    // Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
    // Turkish - tr, Croatian - hr, Catalan - ca
 
 
    // set city by name
    weather.setCity('Fairplay');
 	// or set the coordinates (latitude,longitude)
    weather.setCoordinate(50.0467656, 20.0048731);
    // or set city by ID (recommended by OpenWeatherMap)
    weather.setCityId(4367872);
 
    // or set zip code
    weather.setZipCode(33615);
 
    // 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');
 
    // check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID('9c5a0f593ca3dbb2c693cdb89d840b0b');
        }
    },
});
