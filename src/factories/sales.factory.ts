import { faker } from '@faker-js/faker';

export function generateSalesData(count = 10) {
  const categories = ['Retail', 'Wholesale', 'Online', 'Export'];
  const taxFields = [
    'cgst14Amount',
    'sgst14Amount',
    'cgst9Amount',
    'sgst9Amount',
    'cgst6Amount',
    'sgst6Amount',
    'cgst2_5Amount',
    'sgst2_5Amount',
    'igst18Amount',
    'igst28Amount',
    'utgstAmount',
  ];

  const salesData = Array.from({ length: count }).map(() => {
    const quantity = faker.number.int({ min: 1, max: 50 });
    const rate = parseFloat(faker.finance.amount({ min: 100, max: 5000, dec: 2 }));
    const netAmount = parseFloat((quantity * rate).toFixed(2));

    const taxValues: Record<string, number> = {};
    for (const taxField of taxFields) {
      taxValues[taxField] = faker.datatype.boolean()
        ? parseFloat(faker.finance.amount({ min: 0, max: netAmount * 0.15, dec: 2 }))
        : 0;
    }

    const totalAmount = parseFloat(
      (
        netAmount +
        Object.values(taxValues).reduce((acc, val) => acc + val, 0)
      ).toFixed(2)
    );

    return {
      date: faker.date.past().toISOString().split('T')[0],
      month: faker.date.month(),
      invoiceNo: faker.string.uuid().slice(0, 8).toUpperCase(),
      category: faker.helpers.arrayElement(categories),
      partyName: faker.company.name(),
      description: faker.commerce.productDescription(),
      hsnSac: faker.string.alphanumeric(6).toUpperCase(),
      gstin: `27${faker.string.alphanumeric(13).toUpperCase()}`,
      quantity,
      rate,
      netAmount,
      ...taxValues,
      totalAmount,
    };
  });

  return salesData;
}
