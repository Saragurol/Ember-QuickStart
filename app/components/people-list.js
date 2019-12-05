import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleList extends Component {
    @action
    showPerson(person){
        alert(`the person's name is ${person}!`)
    }
}

// Here, we created a basic component class and adding a method that accepts a person as an argument and brings up an alert dialog with their name. The @action decorator indicates the intent of using this method as an action in our template, in response to user interaction.