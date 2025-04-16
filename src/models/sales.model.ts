import {
    Table,
    Column,
    Model,
    DataType,
  } from 'sequelize-typescript';
  
  @Table({
    tableName: 'Sales',
    timestamps: true,
  })
  export class SalesModel extends Model<SalesModel> {
    @Column({
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    id: string;
  
    @Column({ type: DataType.DATEONLY, allowNull: false })
    date: string;
  
    @Column({ type: DataType.STRING, allowNull: false })
    month: string;
  
    @Column({ type: DataType.STRING, allowNull: false })
    invoiceNo: string;
  
    @Column({ type: DataType.STRING, allowNull: false })
    category: string;
  
    @Column({ type: DataType.STRING, allowNull: false })
    partyName: string;
  
    @Column({ type: DataType.TEXT, allowNull: true })
    description: string;
  
    @Column({ type: DataType.STRING, allowNull: true })
    hsnSac: string;
  
    @Column({ type: DataType.STRING, allowNull: true })
    gstin: string;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    quantity: number;
  
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
    rate: number;
  
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    netAmount: number;
  
    // ✅ Tax Amounts (calculated and stored)
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    cgst14Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    sgst14Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    cgst9Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    sgst9Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    cgst6Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    sgst6Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    cgst2_5Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    sgst2_5Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    igst18Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    igst28Amount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: true })
    utgstAmount: number;
  
    @Column({ type: DataType.DECIMAL(12, 2), allowNull: false })
    totalAmount: number;
  }
  