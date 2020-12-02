import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class QuestionCardEditable extends Component {
  @service store;
  @service router;

  @action
  deleteQuestion(id) {
    let question = this.store.peekRecord("question", id);
    if (question) {
      question.destroyRecord().then(() => {
        this.router.transitionTo("index");
      });
    }
  }
}
