import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model(){
        return ["Grace Hopper","Linda Saraguro", "Hariet Lewis"]
    }
}
//this file is an example of a router handler 