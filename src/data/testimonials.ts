export type Testimonial = {
  name: string
  locality: string
  quote: string
  service: string
}

// EDIT: replace with real customer names/quotes once available — localities and service
// context are accurate to the areas served, but these quotes are illustrative drafts.
export const testimonials: Testimonial[] = [
  {
    name: 'Residents Welfare Association',
    locality: 'Adyar, Chennai',
    quote:
      'We got invisible grills done for six flats in our block. From the road you genuinely cannot tell the balconies have any grill at all — it just looks open.',
    service: 'Invisible Grills',
  },
  {
    name: 'Apartment owner',
    locality: 'Velachery, Chennai',
    quote:
      'Pigeons had taken over our balcony ledge for two years. Net went up in an afternoon and that was the end of the droppings and the noise.',
    service: 'Pigeon Nets',
  },
  {
    name: 'Villa owner',
    locality: 'OMR, Chennai',
    quote:
      "Our son is two and climbs everything. The team checked every window in the house, not just the one balcony we called about, and flagged two we hadn't thought of.",
    service: 'Children Safety Grills',
  },
  {
    name: 'Facility manager',
    locality: 'Anna Nagar, Chennai',
    quote:
      'Duct shaft had years of pigeon nesting causing blockages. They covered the whole shaft floor to floor in one visit instead of us calling them back every few months.',
    service: 'Duct Area Nets',
  },
]
