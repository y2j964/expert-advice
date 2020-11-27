import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class AskRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.get("session").requireAuthentication(transition, "login");
  }
}
