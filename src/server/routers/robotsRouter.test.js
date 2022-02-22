const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const app = require("..");
const mongoConnection = require("../..");
const dbConnect = require("../../database");
const Robot = require("../../database/models/Robot");

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
  await Robot.create({
    _id: "sfghsfghsfghsfg",
    image:
      "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
    velocity: "10",
    resistance: "10",
    year: "1980",
    name: "Arale",
  });
  await Robot.create({
    _id: "sfghsfghsfghsfgfdfg",
    image:
      "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
    velocity: "10",
    resistance: "10",
    year: "1980",
    name: "Arale",
  });
});
afterEach(async () => {
  await Robot.deleteMany({});
});
describe("Given a robots/ endpoint", () => {
  describe("When it receives a GET request", () => {
    test("Then it should respond with status code 200", async () => {
      const { body } = await request(app).get("/robots").expect(200);

      expect(body).toHaveProperty("robots");
      expect(body.robots).toHaveLength(2);
    });
  });
});
