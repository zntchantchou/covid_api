import * as faker from 'faker';

const User = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${firstName}@${lastName}.${faker.internet.domainSuffix()}`;
  const service = faker.commerce.department();
  const avatar = faker.image.avatar();
  const jobTitle = faker.name.jobTitle();

  return {
    firstName,
    lastName,
    email,
    position: jobTitle,
    service,
    avatar,
  };
};

export const mocks = {
  User,
};
