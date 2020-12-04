import Route from "@ember/routing/route";

export default class QuestionRoute extends Route {
  serialize() {
    return {
      slug: this.model.slug,
    };
  }

  model(params) {
    return this.store
      .query("question", { filter: { slug: params.slug } })
      .then((questions) => {
        return questions.get("firstObject");
      });
  }
}
