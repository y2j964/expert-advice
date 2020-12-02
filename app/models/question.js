import Model, { attr } from "@ember-data/model";

export default class QuestionModel extends Model {
  @attr title;
  @attr author;
  @attr description;
  @attr tags;
}
