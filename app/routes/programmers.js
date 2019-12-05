import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model(){
        return ["Grace Hopper","Linda Saraguro", "Hariet Lewis"]
    }
}
