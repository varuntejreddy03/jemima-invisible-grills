// EDIT: every rate below is an indicative placeholder based on typical Chennai market rates,
// not confirmed against this business's actual costing. Confirm real rates before publishing —
// see CONTENT-TODO.md item 9.
export type PricingRow = {
  material: string
  bestFor: string
  durability: string
  price: string
  note?: string
}

export const pricingRows: PricingRow[] = [
  {
    material: 'Invisible Grill — 2mm SS 316',
    bestFor: 'Standard balconies, light-use windows',
    durability: '5+ years on cable',
    price: '₹140 / running ft',
    note: 'Most popular',
  },
  {
    material: 'Invisible Grill — 2.5mm SS 316',
    bestFor: 'Balconies with wider spans or higher floors',
    durability: '5+ years on cable',
    price: '₹155 / running ft',
  },
  {
    material: 'Invisible Grill — 3mm SS 316',
    bestFor: 'Heavy-duty, large openings, commercial use',
    durability: '5+ years on cable',
    price: '₹165 / running ft',
  },
  {
    material: 'Pigeon / Safety Net (HDPE)',
    bestFor: 'Balcony bird netting, fall prevention',
    durability: '5+ years',
    price: '₹22 – ₹32 / sq ft',
    note: 'Most requested',
  },
  {
    material: 'Nylon Safety Net',
    bestFor: 'Windows, no-drill rental-friendly balconies',
    durability: '3+ years',
    price: '₹18 – ₹28 / sq ft',
  },
]
