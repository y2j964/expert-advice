import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class SearchBox extends Component {
  @action submit() {
    console.log("submit");
  }
}
