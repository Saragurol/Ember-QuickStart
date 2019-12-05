import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model(){
        return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann']
    }
    // model() method returns any data you want to make available to the template
}
