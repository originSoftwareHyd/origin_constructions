// JSON-LD for search engines and AI answer engines (LocalBusiness, Services, FAQ).
export default function StructuredData({ data }) {
  const { brand, seo, contact, services, serviceAreas, faq, team } = data
  const siteUrl = seo.siteUrl
  const businessId = `${siteUrl}/#business`

  const areaServed = [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'State', name: 'Telangana' },
    ...serviceAreas.groups.flatMap((group) =>
      group.areas.map((area) => ({ '@type': 'Place', name: `${area}, Telangana` }))
    )
  ]

  const graph = [
    {
      '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
      '@id': businessId,
      name: brand.name,
      legalName: brand.legalName,
      description: brand.shortDescription,
      slogan: brand.tagline,
      url: `${siteUrl}/`,
      logo: `${siteUrl}${brand.logo}`,
      image: `${siteUrl}${brand.logo}`,
      email: contact.email,
      telephone: contact.phone.replace(/\s+/g, ''),
      address: { '@type': 'PostalAddress', ...contact.addressParts },
      geo: { '@type': 'GeoCoordinates', latitude: 17.3616, longitude: 78.411 },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      areaServed,
      knowsAbout: [
        'House construction',
        'Villa construction',
        'Apartment construction',
        'Commercial construction',
        'Interior design',
        'Modular kitchens',
        'Home renovation',
        'MEP works',
        'Vastu-compliant architecture',
        'GHMC and HMDA building approvals'
      ],
      founder: team.members
        .filter((member) => /founder/i.test(member.role))
        .map((member) => ({ '@type': 'Person', name: member.name, jobTitle: member.role })),
      employee: team.members.map((member) => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction services in Hyderabad',
        itemListElement: services.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@id': `${siteUrl}/#service-${item.id}` }
        }))
      },
      sameAs: data.socials.filter((social) => social.href !== '#').map((social) => social.href)
    },
    ...services.items.map((item) => ({
      '@type': 'Service',
      '@id': `${siteUrl}/#service-${item.id}`,
      name: `${item.title} in Hyderabad`,
      serviceType: item.title,
      description: item.description,
      provider: { '@id': businessId },
      areaServed: [
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'State', name: 'Telangana' }
      ],
      url: `${siteUrl}/#services`
    })),
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: brand.name,
      inLanguage: 'en-IN',
      publisher: { '@id': businessId }
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
      }}
    />
  )
}
