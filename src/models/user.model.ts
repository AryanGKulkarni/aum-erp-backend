import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  Default,
  Unique,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import * as sequelize from 'sequelize';

@Table({
  tableName: 'User',
  timestamps: true,
})
export class UserModel extends Model<UserModel> {
  @PrimaryKey
  @Default(sequelize.UUIDV4)
  @Column({
    type: sequelize.UUID,
    allowNull: false,
  })
  id: string;

  @Column({
    type: sequelize.STRING,
    allowNull: false,
  })
  name: string;

  @Unique
  @Column({
    type: sequelize.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: sequelize.STRING,
    allowNull: false,
  })
  password: string;

  @CreatedAt
  @Column({
    type: sequelize.DATE,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: sequelize.DATE,
  })
  updatedAt: Date;
}
