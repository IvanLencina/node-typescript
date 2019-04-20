import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import bcrypt from 'bcrypt';

/**
  * Read more about entity columns in https://typeorm.io/#/entities/entity-columns
  */

@Entity('users')
export class User {

  private ENCRIPTION_ROUNDS = 10;

  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column(
    {
      type: 'varchar',
      nullable: false,
      length: 100,
    }
  )
  private email: string;

  @Column(
    {
      type: 'varchar',
      nullable: false,
      length: 100,
    }
  )
  private password: string;

  public getId(): string {
    return this.id;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }

  public setPassword(password: string): void {
    this.password = bcrypt.hashSync(password, this.ENCRIPTION_ROUNDS);
  }

  public getPassword(): string {
    return this.password;
  }

  public passwordMatches(password:string): boolean {
    return this.getPassword() === bcrypt.hashSync(password, this.ENCRIPTION_ROUNDS);
  }
};

export default User;
