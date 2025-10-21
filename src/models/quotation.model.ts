import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { EnquiryModel } from './enquiries.model';

@Table({
  tableName: 'quotations',
  timestamps: true,
})
export class QuotationModel extends Model<QuotationModel> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;


  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  quotationNumber: string; // e.g. QTN-2025-0001 or manual

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  quotationDate: Date;

  @ForeignKey(() => EnquiryModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  enquiryId: string;

  @BelongsTo(() => EnquiryModel)
  enquiry: EnquiryModel;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  customerReferenceNumber: string; // Customer’s internal enquiry number

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  partName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  drawingNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  materialSpecification: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  quantityOffered: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  unitOfMeasurement: string; // Pieces / Tons etc.

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  deliveryTerms: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  deliveryTimeline: string; // e.g. “4 weeks from PO”

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  validityOfOffer: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  paymentTerms: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  pricePerUnit: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  totalPrice: number;

  @Default(0)
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  packagingCharges: number;

  @Default(0)
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  freightCharges: number;

  @Default(0)
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  toolingDevelopmentCharges: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  remarks: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  specialInstructions: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  preparedBy: string; // Auto-generated (user who created the record)

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  approvedBy: string; // Auto-generated (user who approved)
}
