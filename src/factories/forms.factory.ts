import { faker } from '@faker-js/faker';
import { CustomerModel } from '../models/customer.model';
import { EnquiryModel } from '../models/enquiries.model';
import { FeasibilityStudyModel } from 'src/models/feasibilityStudy.model';
import { QuotationModel } from 'src/models/quotation.model';


export const createCustomer = (): Partial<CustomerModel> => ({
  name: faker.company.name(),
  address: faker.location.streetAddress({ useFullAddress: true }),
  city: faker.location.city(),
  state: faker.location.state(),
  country: faker.location.country(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  gst_number: `GST${faker.string.alphanumeric(10).toUpperCase()}`,
});


export const createCustomers = (count: number): Partial<CustomerModel>[] => {
  return Array.from({ length: count }, () => createCustomer());
};

export const generateEnquiryNumber = (index: number): string => {
  const year = new Date().getFullYear();
  return `ENQ-${year}-${String(index).padStart(7, '0')}`;
};

export const createEnquiry = (
  customerId: string,
  index = 1,
): Partial<EnquiryModel> => ({
  enquiry_number: generateEnquiryNumber(index),
  customer_id: customerId,
  contact_name: faker.person.fullName(),
  contact_email: faker.internet.email(),
  contact_phone: faker.phone.number(),
  enquiry_date: faker.date.recent({ days: 30 }),
  part_name: faker.commerce.productName(),
  customer_drawing_number: `DRW-${faker.string.alphanumeric(6).toUpperCase()}`,
  material_specification: faker.commerce.productMaterial(),
  quantity_required: `${faker.number.int({ min: 100, max: 10000 })}/batch`,
  delivery_requirement: `${faker.number.int({ min: 2, max: 6 })} weeks`,
  special_instructions: faker.lorem.sentence(),
  drawing_attachment: faker.internet.url(),
  status: faker.helpers.arrayElement([
    'New',
    'Under review',
    'Quoted',
    'Rejected',
    'On Hold',
  ]),
});

export const createEnquiries = (
  customerId: string,
  count: number,
  index: number,
): Partial<EnquiryModel>[] => {
  return Array.from({ length: count }, (_, i) =>
    createEnquiry(customerId, index + i + 1),
  );
};


export const generateFeasibilityStudyNumber = (
  index: number,
): string => {
  const year = new Date().getFullYear();
  const padded = String(index).padStart(7, '0');

  return `FSB-${year}-${padded}`;
};

export const createFeasibilityStudy = (
  enquiryId: string,
  index = 1,
): Partial<FeasibilityStudyModel> => ({
  feasibility_study_number: generateFeasibilityStudyNumber(
    index,
  ),
  enquiry_id: enquiryId,
  study_date: faker.date.recent({ days: 30 }),
  conducted_by: faker.person.fullName(),
  operations_involved: faker.helpers.arrayElements(
    [
      'Cutting',
      'Heating',
      'Forging',
      'Trimming',
      'Heat treatment',
      'Shot blasting',
      'Machining',
    ],
    { min: 3, max: 6 },
  ),
  die_availability: faker.helpers.arrayElement([
    'Existing Die',
    'New Die Required',
  ]),
  equipment: faker.helpers.arrayElement(['Hammer', 'Press']),
  material_availability: faker.helpers.arrayElement([
    'Available in stock',
    'To be procured',
    'Partial availability',
  ]),
  criticality_of_part: faker.helpers.arrayElement(['Low', 'Medium', 'High']),
  forging_weight: faker.number.float({ min: 1, max: 25, }),
  cut_weight: faker.number.float({ min: 1, max: 30, }),
  gross_weight: faker.number.float({ min: 1, max: 35, }),
  section_required: faker.commerce.productMaterial(),
  conclusion: faker.helpers.arrayElement(['Feasible', 'Not Feasible']),
});
export const createFeasibilityStudies = (
  enquiryId: string,
  count: number,
  index: number,
): Partial<FeasibilityStudyModel>[] => {
  return Array.from({ length: count }, (_, i) =>
    createFeasibilityStudy(enquiryId, index + i + 1),
  );
};

const generateQuotationNumber = (index = 1): string => {
  const year = new Date().getFullYear();
  return `QTN-${year}-${String(index).padStart(7, '0')}`;
};

export const createQuotation = (
  enquiryId?: string,
  index = 1,
): Partial<QuotationModel> => ({
  quotationNumber: generateQuotationNumber(index),
  quotationDate: faker.date.recent({ days: 30 }),
  enquiryId: enquiryId ?? null,

  customerReferenceNumber: faker.string.alphanumeric(8).toUpperCase(),
  partName: faker.commerce.productName(),
  drawingNumber: `DRW-${faker.number.int({ min: 1000, max: 9999 })}`,
  materialSpecification: faker.commerce.productMaterial(),
  quantityOffered: faker.number.int({ min: 10, max: 1000 }),
  unitOfMeasurement: faker.helpers.arrayElement(['Pieces', 'Tons']),
  deliveryTerms: faker.lorem.words(3),
  deliveryTimeline: `${faker.number.int({ min: 2, max: 8 })} weeks from PO`,
  validityOfOffer: `${faker.number.int({ min: 15, max: 60 })} days`,
  paymentTerms: faker.helpers.arrayElement([
    '30% advance, 70% on delivery',
    '50% advance, balance after inspection',
    'Net 30 days',
  ]),
  pricePerUnit: faker.number.float({ min: 100, max: 5000, }),
  totalPrice: faker.number.float({ min: 10000, max: 200000, }),
  packagingCharges: faker.number.float({ min: 0, max: 1000, }),
  freightCharges: faker.number.float({ min: 0, max: 500, }),
  toolingDevelopmentCharges: faker.number.float({
    min: 0,
    max: 10000,
  }),
  remarks: faker.lorem.sentence(),
  specialInstructions: faker.lorem.sentence(),
  preparedBy: faker.person.fullName(),
  approvedBy: faker.person.fullName(),
});

export const createQuotations = (
  enquiryId: string,
  count: number,
  index: number,
): Partial<QuotationModel>[] => {
  return Array.from({ length: count }, (_, i) =>
    createQuotation(enquiryId, index + i + 1),
  );
};



