import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, "login");
    return this.session.loadUser();
  }

  model() {
    return this.store.findAll("question");
  }
}
