// route handler 
// loads a model
// renders a template, which has access to the model
import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model(){
        return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann']
    }
    // model() method returns any data you want to make available to the template
    // model persists to web server
    // models represent persistent state 
}
