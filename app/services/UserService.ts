import {inject, injectable} from 'inversify';
import {User} from '../persistance/entities/User';
import {UserRepository} from '../persistance/repositories/UserRepository';

@injectable()
export class UserService {

  private userRepository: UserRepository;

  constructor(
      @inject(UserRepository) userRepository: UserRepository
  ) {
      this.userRepository = userRepository;
  }

  public findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public findOneOrFail(id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  public register(data: any): void {
    let user = new User();

    user.setEmail(data.email);
    user.setPassword(data.password);

    this.userRepository.save(user);
  };

  public update(id: string, data: any): void {
    this.findOneOrFail(id).then(user => {
      user.setEmail(data.email);
      user.setPassword(data.password);

      this.userRepository.save(user);
    });
  }

  async delete(id: string) {
    let result = await this.userRepository.delete(id);

    return result.affected && result.affected > 0;
  }
}
