import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class DashboardRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.get("session").requireAuthentication(transition, "login");
  }

  model() {
    return this.store
      .findAll("question")
      .then((res) =>
        res.filter(
          (question) => question.get("author") === this.session.user.email
        )
      );
  }
}
