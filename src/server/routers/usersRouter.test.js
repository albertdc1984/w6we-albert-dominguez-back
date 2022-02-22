const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const app = require("..");
const mongoConnection = require("../..");
const dbConnect = require("../../database");
const User = require("../../database/models/User");

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  mongoServer.getUri();
  await dbConnect(mongoConnection);
});
afterAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  await User.create({
    _id: "sfghsfghsfghsfg",
    userName: "pepet24",
    password: "anarquiaibirrafria",
  });
});
afterEach(async () => {
  await User.deleteMany({});
});
/* describe("Given a users/ endpoint", () => {
  describe("When it receives a post request", () => {
    test("Then it should respond with status code 200", async () => {
      const user = {
        _id: "sfghsfghsfghsfg",
        userName: "pepet24",
        password: "anarquiaibirrafria",
      };
      const { body } = await request(app)
        .post("/users/create")
        .send(user)
        .expect(200);

      expect(body).toReturn();
    });
  });
});
 */
