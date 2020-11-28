import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AnswerForm extends Component {
  @action submit() {
    console.log("submit");
  }
}
