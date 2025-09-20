import { fetchPerson } from "../mockApi";
import { faker } from "@faker-js/faker";

jest.mock("@faker-js/faker", () => ({
  faker: {
    person: {
      firstName: jest.fn(() => "John"),
      lastName: jest.fn(() => "Doe"),
      fullName: jest.fn(() => "John Doe"),
    },
  },
}));

describe("mockApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Math, "random");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("fetchPerson", () => {
    it("should return faker person data when successful", async () => {
      (Math.random as jest.Mock).mockReturnValue(0.5);

      const result = await fetchPerson();

      expect(result).toBeDefined();
      expect(result).toHaveProperty("firstName");
      expect(result).toHaveProperty("lastName");
      expect(result).toHaveProperty("fullName");
    });

    it("should reject with error message when random < ERROR_RATE", async () => {
      (Math.random as jest.Mock).mockReturnValue(0.1);

      await expect(fetchPerson()).rejects.toBe(
        "Something went wrong. Please try again."
      );
    });

    it("should resolve after timeout period", async () => {
      (Math.random as jest.Mock).mockReturnValue(0.5);
      jest.useFakeTimers();

      const fetchPromise = fetchPerson();

      jest.advanceTimersByTime(999);
      await Promise.resolve();

      jest.advanceTimersByTime(1);
      await Promise.resolve();

      await expect(fetchPromise).resolves.toBeDefined();

      jest.useRealTimers();
    });

    it("should have 20% error rate threshold", async () => {
      (Math.random as jest.Mock).mockReturnValue(0.19);
      await expect(fetchPerson()).rejects.toBe(
        "Something went wrong. Please try again."
      );

      (Math.random as jest.Mock).mockReturnValue(0.2);
      await expect(fetchPerson()).resolves.toBeDefined();
    });
  });
});
