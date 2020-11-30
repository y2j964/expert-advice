import ENV from "ember-test-assignment/config/environment";
import { Response } from "miragejs";

const initialQuestions = [
  {
    type: "question",
    id: "what-is-the-relative-major-of-b-minor",
    attributes: {
      title: "What is the relative major of B minor?",
      description: "",
      tags: ["music", "diatonic modes"],
    },
  },
  {
    type: "question",
    id: "what-is-ingmar-bergmans-film-persona-about",
    attributes: {
      title: "What is Ingmar Bergman's film, Persona about?",
      description: "",
      tags: ["cinema", "sweden"],
    },
  },
  {
    type: "question",
    id: "how-many-fingers-did-django-reinhardt-play-guitar-with",
    attributes: {
      title: "How many fingers did Django Reinhardt play guitar with?",
      description: "",
      tags: ["music", "jazz", "guitar"],
    },
  },
  {
    type: "question",
    id: "how-do-you-make-gazpacho",
    attributes: {
      title: "How do you make gazpacho?",
      description: "",
      tags: ["cooking", "spanish"],
    },
  },
  {
    type: "question",
    id: "why-does-the-world-exist",
    attributes: {
      title: "Why does the world exist?",
      description: "",
      tags: ["existentialism"],
    },
  },
  {
    type: "question",
    id: "what-beach-boys-song-is-paul-mccartney-chewing-celery-on",
    attributes: {
      title: "What Beach Boys song features Paul McCartney chewing celery?",
      description: "",
      tags: ["music", "classic rock"],
    },
  },
];

export default function () {
  this.logging = true;
  this.timing = 0;

  this.urlPrefix = ENV.serverURL;

  this.post("/oauth/token", function () {
    const { username, password } = this.normalizedRequestAttrs();

    if (username === "test@test.com" && password === "test") {
      return new Response(
        200,
        {},
        {
          access_token:
            "1b1234074a7a5e4868c96ce2e32b8a4a6aa3a7e929ef2f33e38b08f8f057961e",
          created_at: 1597285088,
          expires_in: 7200,
          refresh_token:
            "c0ff9573874e236d7e74c1adb3e2668329f2b84aba1aa5a67528799fc2634761",
          token_type: "Bearer",
        }
      );
    }

    return new Response(401);
  });

  this.namespace = "/api/v1";

  this.get("/users/me", function (schema, request) {
    if (request.requestHeaders.Authorization) {
      return schema.users.first();
    }
    return new Response(401);
  });

  this.get("/questions", () => ({
    data: initialQuestions,
  }));
  this.get("/question/:id");
}
