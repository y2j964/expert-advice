import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class QuestionForm extends Component {
  @service store;

  @tracked title;
  @tracked description;
  @tracked tags;

  @action
  postQuestion() {
    const question = this.store.createRecord("question", {
      title: this.title,
      description: this.description,
      tags: this.tags.split(", "),
    });
    question.save();
    this.title = "";
    this.description = "";
    this.tags = "";
  }
}
