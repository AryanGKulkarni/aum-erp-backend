import { UserModel } from 'src/models/user.model';
import {
  USER_DAO,
  SALES_DAO,
  PURCHASE_DAO,
  CUSTOMER_DAO,
  ENQUIRY_DAO,
  ENQUIRY_ATTACHMENT_DAO,
  FEASIBILITY_STUDY_DAO,
  QUOTATION_DAO,
} from '../constants/dao-tokens';
import { SalesModel } from 'src/models/sales.model';
import { PurchaseModel } from 'src/models/purchase.model';
import { CustomerModel } from 'src/models/customer.model';
import { EnquiryModel } from 'src/models/enquiries.model';
import { EnquiryAttachmentModel } from 'src/models/enquiryAttachment.model';
import { FeasibilityStudyModel } from 'src/models/feasibilityStudy.model';
import { QuotationModel } from 'src/models/quotation.model';



export const DAO_PROVIDERS = [
  { provide: USER_DAO, useValue: UserModel },
  { provide: SALES_DAO, useValue: SalesModel },
  { provide: PURCHASE_DAO, useValue: PurchaseModel },
  { provide: CUSTOMER_DAO, useValue: CustomerModel },
  { provide: ENQUIRY_DAO, useValue: EnquiryModel },
  { provide: ENQUIRY_ATTACHMENT_DAO, useValue: EnquiryAttachmentModel },
  { provide: FEASIBILITY_STUDY_DAO, useValue: FeasibilityStudyModel },
  { provide: QUOTATION_DAO, useValue: QuotationModel },
];
