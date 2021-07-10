import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, Column, ObjectIdColumn, ObjectID, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Employee extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  id!: ObjectID;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  username: string;

  @Field(() => Int)
  @Column()
  age: number;

  @Field(() => Date)
  @Column({ type: 'timestamp', nullable: false })
  hire_date: Date;

  @Field(() => Date)
  @Column({ type: 'timestamp' })
  created_at: Date;

  @Field(() => Date)
  @Column({ type: 'timestamp', nullable: true })
  deleted_at!: Date;
}
