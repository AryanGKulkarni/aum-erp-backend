import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../models/user.model';
import { generateUserData } from '../factories/user.factory';
import { SalesModel } from '../models/sales.model';
import { generateSalesData } from '../factories/sales.factory';
import { CustomerModel } from '../models/customer.model';
import { EnquiryModel } from '../models/enquiries.model';
import { FeasibilityStudyModel } from '../models/feasibilityStudy.model';
import { QuotationModel } from '../models/quotation.model';
import { createCustomers, createEnquiries, createFeasibilityStudies, createQuotations } from '../factories/forms.factory';

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,    
    @InjectModel(SalesModel)
    private readonly salesModel: typeof SalesModel,
    @InjectModel(CustomerModel)
    private readonly customerModel: typeof CustomerModel,
    @InjectModel(EnquiryModel)
    private readonly enquiriesModel: typeof EnquiryModel,
    @InjectModel(FeasibilityStudyModel)
    private readonly feasibilityStudyModel: typeof FeasibilityStudyModel,
    @InjectModel(QuotationModel)
    private readonly quotationModel: typeof QuotationModel,
  ) {}

  async seedUsers(count = 10) {
    const users = Array.from({ length: count }).map(() => generateUserData());
    await this.userModel.bulkCreate(users);
    console.log(`${count} users seeded successfully.`);
  }

  async seedSales(count = 10) {
    const salesData = generateSalesData(count);
    await this.salesModel.bulkCreate(salesData);
    console.log(`${count} fake sales entries inserted`);
  }
  
  async seedForms(count = 10) {
    const customerData = createCustomers(count);
    const customers = await this.customerModel.bulkCreate(customerData);
    console.log(`${count} fake customers entries inserted`);

    const enquiries = [];
    let len = 0;
    for (const customer of customers) {
      const customerEnquiriesData = createEnquiries(customer.id, 3, len);
      const enquiriesData = await this.enquiriesModel.bulkCreate(customerEnquiriesData);
      len += enquiriesData.length;
      enquiries.push(...enquiriesData);
    }
    console.log(`${3*count} fake enquiry entries inserted`);

    const feasibilityStudies = []
    len = 0;
    for (const enquiry of enquiries) {
      const enquiryfeasibilityStudyData = createFeasibilityStudies(enquiry.id, 1, len);
      const feasibilityStudyData = await this.feasibilityStudyModel.bulkCreate(enquiryfeasibilityStudyData);
      len += feasibilityStudyData.length;
      feasibilityStudies.push(...feasibilityStudyData)
    }
    console.log(`${3*count} fake feasibility study entries inserted`);
    
    const quotations = []
    len=0;
    for (const enquiry of enquiries) {
      const enquiryquotationData = createQuotations(enquiry.id, 1, len);
      const quotationData = await this.quotationModel.bulkCreate(enquiryquotationData);
      len += quotationData.length;
      quotations.push(...quotationData);
    }
    console.log(`${3*count} fake quotations entries inserted`);

  }
}
