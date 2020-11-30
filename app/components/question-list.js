import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class QuestionList extends Component {
  @action submit() {
    console.log("submit");
  }
}
