import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import slugify from "../util/slugify";

export default class QuestionForm extends Component {
  @service store;
  @service router;

  @tracked title = this.args.title;
  @tracked description = this.args.description;
  @tracked tags = this.args.tags;

  @action
  patchQuestion() {
    console.log(slugify(this.title));
    this.store
      .query("question", { filter: { slug: this.args.slug } })
      .then((questions) => {
        const question = questions.get("firstObject");
        question.title = this.title;
        question.slug = slugify(this.title);
        question.description = this.description;
        question.tags = this.tags.split(", ");
        question.save();
      })
      .catch((err) => err);
  }
}
