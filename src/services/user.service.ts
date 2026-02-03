import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";

const userRepository = AppDataSource.getRepository(User);

export const createUser = async (data: Partial<User>) => {
  const user = userRepository.create(data);
  return await userRepository.save(user);
};

export const findUserByEmail = async (email: string) => {
  return await userRepository.findOne({
    where: { email },
  });
};
