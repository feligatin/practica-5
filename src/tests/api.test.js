const request = require("supertest");
const app = require("../app");
//Testing get all users

//describe()
//it que me respondan con 200
it("responde con json y contiene una lista de usuarios", (done) => {
  request(app)
    .get("/users")
    .set("Aceptado", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, done);
});
describe("GET /users", () => {});

describe("GET /users/:id", () => {
  it("Respuesta cuando llamo por id", (done) => {
    request(app)
      .get("/users/U001")
      .set("Aceptado", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("Respuesta cuando llamo por id y no funciona", (done) => {
    request(app)
      .get("/users/afdfdf")
      .set("Aceptado", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
describe("POST /users", () => {
  it("TEST 05 usuario creado", (done) => {
    const data = {
      username: "admin",
      password: "admin01",
    };
    request(app)
      .post("/users")
      .send(data)
      .set("Aceptado", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("TEST 06 usuario no creado", (done) => {
    const data = {};
    request(app)
      .post("/users")
      .send(data)
      .set("Aceptado", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
module.exports = app;
