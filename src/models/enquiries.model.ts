// src/models/EnquiryModel.ts
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { CustomerModel } from './customer.model';
import { EnquiryAttachmentModel } from './enquiryAttachment.model';

@Table({
  tableName: 'enquiries',
  timestamps: true,
})
export class EnquiryModel extends Model<EnquiryModel> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  enquiry_number: string; // e.g., ENQ-2025-0001

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  customer_id: string;

  @BelongsTo(() => CustomerModel)
  customer: CustomerModel;

  @Column(DataType.STRING)
  contact_name: string;

  @Column(DataType.STRING)
  contact_email: string;

  @Column(DataType.STRING)
  contact_phone: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  enquiry_date: Date;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  part_name: string;

  @Column(DataType.STRING)
  customer_drawing_number: string;

  @Column(DataType.TEXT)
  material_specification: string;

  @Column(DataType.STRING)
  quantity_required: string; // could be '1000/year' or '250/batch'

  @Column(DataType.TEXT)
  delivery_requirement: string;

  @Column(DataType.TEXT)
  special_instructions: string;

  @Column(DataType.TEXT)
  drawing_attachment: string; // file URL

  @Default('New')
  @Column({
    type: DataType.ENUM('New', 'Under review', 'Quoted', 'Rejected', 'On Hold'),
    allowNull: false,
  })
  status: string;

  @HasMany(() => EnquiryAttachmentModel)
  attachments: EnquiryAttachmentModel[];

//   @HasMany(() => EnquiryStatusHistoryModel)
//   statusHistory: EnquiryStatusHistoryModel[];
}
