import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import slugify from "../util/slugify";

export default class QuestionForm extends Component {
  @service store;
  @service session;

  @tracked title;
  @tracked description;
  @tracked tags;

  @action
  postQuestion() {
    const question = this.store.createRecord("question", {
      title: this.title,
      slug: slugify(this.title),
      description: this.description,
      tags: this.tags.split(", "),
      author: this.session.user.email,
    });
    question.save();
    this.title = "";
    this.description = "";
    this.tags = "";
  }
}
