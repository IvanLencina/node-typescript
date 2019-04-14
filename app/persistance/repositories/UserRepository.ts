import {injectable} from 'inversify';
import { getManager, DeleteResult } from 'typeorm';
import { User } from '../entities/User';

@injectable()
export class UserRepository {

    public findAll(): Promise<User[]> {
        return getManager().getRepository(User).createQueryBuilder('User')
        .select(['User.*'])
        .getMany();
    }

    public findOneOrFail(id: string): Promise<User> {
      return getManager().getRepository(User).findOneOrFail({
          where: {
              id: id
          }
      });
    }

    public save(user: User): Promise<User> {
      console.log('llega')
        return getManager().getRepository(User).save(user);
    }

    public delete(id: string): Promise<DeleteResult> {
        return getManager().getRepository(User).delete(id);
    }
}
