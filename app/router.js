import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("login");
  this.route("signup");
  this.route("index", { path: "" }, function () {});
  this.route("ask");
  this.route("question", { path: "questions/:slug" });
  this.route("dashboard");
  this.route("edit", { path: "edit/:slug" });
});

export default Router;
