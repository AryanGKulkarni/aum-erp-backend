// src/models/CustomerModel.ts
import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { EnquiryModel } from './enquiries.model';

@Table({
  tableName: 'customers',
  timestamps: true,
})
export class CustomerModel extends Model<CustomerModel> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  name: string;

  @Column(DataType.TEXT)
  address: string;

  @Column(DataType.STRING)
  city: string;

  @Column(DataType.STRING)
  state: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.STRING)
  gst_number: string;

  @HasMany(() => EnquiryModel)
  enquiries: EnquiryModel[];
}
