import { faker, PersonModule } from "@faker-js/faker";

const TIMEOUT = 1000;
const ERROR_RATE = 0.2;

export async function fetchPerson(): Promise<PersonModule> {
  const data: PersonModule = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < ERROR_RATE;

      if (shouldFail) {
        reject("Something went wrong. Please try again.");
      } else {
        resolve(faker.person);
      }
    }, TIMEOUT);
  });
  return data;
}
