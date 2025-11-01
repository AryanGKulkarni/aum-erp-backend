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
  tableName: 'feasibility_studies',
  timestamps: true,
})
export class FeasibilityStudyModel extends Model<FeasibilityStudyModel> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  // Either auto-generated or linked to Enquiry number
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  feasibility_study_number: string; // e.g., FSB-2025-0001 or ENQ-2025-0001-FSB

  @ForeignKey(() => EnquiryModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  enquiry_id: string;

  @BelongsTo(() => EnquiryModel)
  enquiry: EnquiryModel;

  // Auto-generated study date
  @Default(DataType.NOW)
  @Column(DataType.DATE)
  study_date: Date;

  // Engineer name
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  conducted_by: string;

  // List of operations involved (stored as JSON array)
  @Column({
    type: DataType.JSONB,
    allowNull: false,
    defaultValue: [],
  })
  operations_involved: string[]; // e.g. ["Cutting", "Forging", "Machining"]

  @Column({
    type: DataType.ENUM('Existing Die', 'New Die Required'),
    allowNull: false,
  })
  die_availability: string;

  @Column({
    type: DataType.ENUM('Hammer', 'Press'),
    allowNull: false,
  })
  equipment: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  material_availability: string;

  @Column({
    type: DataType.ENUM('Low', 'Medium', 'High'),
    allowNull: false,
  })
  criticality_of_part: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  forging_weight: number; // kg

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  cut_weight: number; // kg

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  gross_weight: number; // kg

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  section_required: string;

  @Column({
    type: DataType.ENUM('Feasible', 'Not Feasible'),
    allowNull: false,
  })
  conclusion: string;
}
