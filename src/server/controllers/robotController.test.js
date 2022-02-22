const Robot = require("../../database/models/Robot");
const {
  getAllRobots,
  getOneRobot,
  createRobot,
  deleteOneRobot,
} = require("./robotController");

jest.mock("../../database/models/Robot");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Given a getRobots controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call method json of the received response", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const fakeRobot = [
        {
          _id: "1",
          image:
            "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
          velocity: "10",
          resistance: "10",
          year: "1980",
          name: "Arale",
        },
      ];

      const status = 200;

      Robot.find = jest.fn().mockResolvedValue(fakeRobot);

      await getAllRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(status);
    });
  });
});

describe("Given a geARobot controller", () => {
  describe("When it receives a response with an id in the params", () => {
    test("Then it should call method json of the received response", async () => {
      const req = {
        params: {
          _id: "1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const robot = [
        {
          _id: "1",
          image:
            "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
          velocity: "10",
          resistance: "10",
          year: "1980",
          name: "Arale",
        },
      ];

      Robot.findById = jest.fn().mockResolvedValue(robot);

      await getOneRobot(req, res);

      expect(Robot.findById).toHaveBeenCalled();

      expect(res.json).toHaveBeenCalledWith(robot);
    });
  });

  describe("When it receives a response with no id in the params", () => {
    test("Then it should call next function with an error message", async () => {
      const req = {
        params: {},
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      const errorMessage = "No robots";

      Robot.findById = jest.fn().mockRejectedValue(errorMessage);

      await getOneRobot(req, res, next);

      expect(Robot.findById).toHaveBeenCalled();
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });
});

describe("Given a deleteRobot controller", () => {
  describe("When it receives a response with an id in the params", () => {
    test("Then it should call status and json methods of the received response", async () => {
      const req = {
        params: {
          _id: "1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const robot = [
        {
          _id: "1",
          image:
            "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
          velocity: "10",
          resistance: "10",
          year: "1980",
          name: "Arale",
        },
      ];

      Robot.findByIdAndDelete = jest.fn().mockResolvedValue({ robot });

      await deleteOneRobot(req, res);

      expect(Robot.findByIdAndDelete).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robot });
    });
  });
});

describe("Given a createRobot controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call status and json methods of the received response", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const robot = [
        {
          _id: "1",
          image:
            "https://www.clipartmax.com/png/full/128-1284022_artwork-oficial-sobre-arale-norimaki-arale-norimaki-poop.png",
          velocity: "10",
          resistance: "10",
          year: "1980",
          name: "Arale",
        },
      ];

      Robot.create = jest.fn().mockResolvedValue(robot);

      await createRobot(robot, res);

      expect(Robot.create).toHaveBeenCalled();

      expect(res.json).toHaveBeenCalledWith(robot);
    });
  });
});
