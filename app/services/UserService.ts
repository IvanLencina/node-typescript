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

  public register(data: any) {
      let user = new User();
      user.setEmail(data.email);

      this.userRepository.save(user);
  };
}
