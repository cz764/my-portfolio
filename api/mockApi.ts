import { faker, PersonModule } from "@faker-js/faker";

const TIMEOUT = 1000;

export async function fetchPerson(): Promise<PersonModule> {
  const data: PersonModule = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(faker.person);
    }, TIMEOUT);
  });
  return data;
}
