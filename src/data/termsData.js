export const termsPages = [
  {
    slug: 'best-buy',
    title: 'OFFICIAL RULES BEST BUY',
    audience: 'Visible to Best Buy (USA), Best Buy (USA) - Non-Retail',
    documentPath: '/terms-docs/best-buy.html'
  },
  {
    slug: 'tier-1-retailers',
    title: 'OFFICIAL RULES TIER 1 RETAILERS',
    audience: 'Visible to B&H Photo Video & Pro Audio, Micro Center, Nebraska Furniture Mart, Office Depot/OfficeMax, Staples',
    documentPath: '/terms-docs/tier-1-retailers.html'
  },
  {
    slug: 'tier-1-oem-brand-agencies',
    title: 'OFFICIAL RULES TIER 1 OEM BRAND AGENCIES',
    audience: 'Visible to 2020/Chromebook, 2020/Dell, 2020/HP, 2020/Samsung, MarketSource/LG, Mosaic-Microsoft, Premium Retail Services/Lenovo',
    documentPath: '/terms-docs/tier-1-oem-brand-agencies.html'
  },
  {
    slug: 'tier-2-tier-3-retail-chains',
    title: 'OFFICIAL RULES TIER 2 AND TIER 3 RETAIL CHAINS',
    audience: 'Visible to all other accounts not listed in Best Buy, Tier 1 Retailers, or Tier 1 OEM Brand Agencies',
    documentPath: '/terms-docs/tier-2-tier-3-retail-chains.html'
  }
];

export const termsBySlug = new Map(termsPages.map((page) => [page.slug, page]));
