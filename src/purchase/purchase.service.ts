import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PurchaseModel } from '../models/purchase.model';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(@InjectModel(PurchaseModel) private model: typeof PurchaseModel) {}

  async create(dto: CreatePurchaseDto) {
    const netAmount = dto.quantity * dto.rate;
    const taxes = {
      cgst14Amount: dto.isCGST14 ? netAmount * 0.14 : 0,
      sgst14Amount: dto.isSGST14 ? netAmount * 0.14 : 0,
      cgst9Amount: dto.isCGST9 ? netAmount * 0.09 : 0,
      sgst9Amount: dto.isSGST9 ? netAmount * 0.09 : 0,
      cgst6Amount: dto.isCGST6 ? netAmount * 0.06 : 0,
      sgst6Amount: dto.isSGST6 ? netAmount * 0.06 : 0,
      cgst2_5Amount: dto.isCGST2_5 ? netAmount * 0.025 : 0,
      sgst2_5Amount: dto.isSGST2_5 ? netAmount * 0.025 : 0,
      igst18Amount: dto.isIGST18 ? netAmount * 0.18 : 0,
      igst28Amount: dto.isIGST28 ? netAmount * 0.28 : 0,
      utgstAmount: dto.isUTGST ? netAmount * 0.14 : 0,
    };

    const totalTaxAmount = Object.values(taxes).reduce((acc, val) => acc + val, 0);
    const totalAmount = netAmount + totalTaxAmount;

    return this.model.create({
      ...dto,
      ...taxes,
      netAmount,
      totalAmount,
    });
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: string) {
    return this.model.findByPk(id);
  }

  update(id: string, dto: UpdatePurchaseDto) {
    return this.model.update(dto, { where: { id } });
  }

  remove(id: string) {
    return this.model.destroy({ where: { id } });
  }
}
