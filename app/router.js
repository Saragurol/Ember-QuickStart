import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
});

//maps URL to a route
//exmaple http://localhost:4200/scientists maps to the 'scientists' route
