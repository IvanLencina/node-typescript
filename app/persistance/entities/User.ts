import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

/**
  * Read more about entity columns in https://typeorm.io/#/entities/entity-columns
  */

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    private id: number;

    @Column(
      {
        type: 'varchar',
        nullable: false,
        length: 100,
      }
    )
    private email: string;

    public getId() {
        return this.id;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getEmail() {
        return this.email;
    }
};

export default User;
