// src/models/EnquiryAttachmentModel.ts
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { EnquiryModel } from './enquiries.model';

@Table({
  tableName: 'enquiry_attachments',
  timestamps: true,
})
export class EnquiryAttachmentModel extends Model<EnquiryAttachmentModel> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => EnquiryModel)
  @Column(DataType.UUID)
  enquiry_id: string;

  @BelongsTo(() => EnquiryModel)
  enquiry: EnquiryModel;

  @Column(DataType.STRING)
  file_name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  file_url: string;
}
