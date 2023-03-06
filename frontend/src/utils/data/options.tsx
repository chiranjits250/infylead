const industryOptions = [
  {
    id: '5567cd467369644d39040000',
    value: 'Marketing And Advertising',
  },
  {
    id: '5567cd4973696439b9010000',
    value: 'Logistics And Supply Chain',
  },
  {
    id: '5567cda97369644cfd3e0000',
    value: 'Luxury Goods And Jewelry',
  },
  {
    id: '5567cdd47369643dbf260000',
    value: 'Management Consulting',
  },
  {
    id: '5567ce1f7369644d391c0000',
    value: 'Law Practice',
  },
  {
    id: '5567ce2773696454308f0000',
    value: 'Mental Health Care',
  },
  {
    id: '5567e0c97369640d2b3b1600',
    value: 'Information Services',
  },
  {
    id: '5567e36973696431a4480000',
    value: 'Packaging And Containers',
  },
  {
    id: '5567e8bb7369641a658f0000',
    value: 'Package Freight Delivery',
  },
  {
    id: '5567e1387369641ec75d0200',
    value: 'Market Research',
  },
  {
    id: '5567e1b3736964208b280000',
    value: 'Food Production',
  },
  {
    id: '5567e2907369642433e60200',
    value: 'Program Development',
  },
  {
    id: '5567cd4f7369644cfd250000',
    value: 'Photography',
  },
  {
    id: '5567e14673696416d38c0300',
    value: 'Railroad Manufacture',
  },
  {
    id: '5567e97f7369641e57730100',
    value: 'Paper And Forest Products',
  },
  {
    id: '5567f96c7369642a22080000',
    value: 'Fishery',
  },
  {
    id: '5567cd4d7369643b78100000',
    value: 'Wine And Spirits',
  },
  {
    id: '5567e0e0736964198de70700',
    value: 'Restaurants',
  },
  {
    id: '5567cd4c73696453e1300000',
    value: 'Higher Education',
  },
  {
    id: '5567cdd67369643e64020000',
    value: 'Financial Services',
  },
  {
    id: '5567e0d87369640e5aa30c00',
    value: 'Semiconductors',
  },
  {
    id: '5567e1097369641b5f810500',
    value: 'Defense And Space',
  },
  {
    id: '5567cdd87369643bc12f0000',
    value: 'Leisure Travel And Tourism',
  },
  {
    id: '5567e1a87369641f6d550100',
    value: 'Alternative Dispute Resolution',
  },
  {
    id: '5567d1127261697f2b1d0000',
    value: 'Consumer Services',
  },
  {
    id: '5567cdda7369644eed130000',
    value: 'Civic And Social Organization',
  },
  {
    id: '5567ce1e7369643b806a0000',
    value: 'Food And Beverages',
  },
  {
    id: '5567e127736964181e700200',
    value: 'Warehousing',
  },
  {
    id: '5567e2127369642420170000',
    value: 'Utilities',
  },
  {
    id: '5567e7be736964110e210000',
    value: 'Nanotechnology',
  },
  {
    id: '5567ce2673696453d95c0000',
    value: 'Mechanical Or Industrial Engineering',
  },
  {
    id: '5567e09f736964160ebb0100',
    value: 'Research',
  },
  {
    id: '5567cdbc73696439d90b0000',
    value: 'Design',
  },
  {
    id: '5567d02b7369645d8b140000',
    value: 'Individual And Family Services',
  },
  {
    id: '5567e1587369641c48370000',
    value: 'Venture Capital And Private Equity',
  },
  {
    id: '5567cd49736964541d010000',
    value: 'Professional Training And Coaching',
  },
  {
    id: '5567ce9e736964540d540000',
    value: 'Education Management',
  },
  {
    id: '5567cdbe7369643b78360000',
    value: 'Computer Networking',
  },
  {
    id: '5567cd877369644cf94b0000',
    value: 'Computer And Network Security',
  },
  {
    id: '5567cdd37369643b80510000',
    value: 'Entertainment',
  },
  {
    id: '5567ce237369644ee5490000',
    value: 'Banking',
  },
  {
    id: '5567e134736964214f5e0000',
    value: 'Recreational Facilities And Services',
  },
  {
    id: '5567e2c572616932bb3b0000',
    value: 'Military',
  },
  {
    id: '5567cd4973696439d53c0000',
    value: 'Machinery',
  },
  {
    id: '5567cd4a73696439a9010000',
    value: 'Newspapers',
  },
  {
    id: '5567cd8273696439b1240000',
    value: 'Maritime',
  },
  {
    id: '5567e2097369642420150000',
    value: 'Fine Art',
  },
  {
    id: '5567e3f3736964395d7a0000',
    value: 'Mining And Metals',
  },
  {
    id: '5567e0fa73696410e4c51200',
    value: 'Business Supplies And Equipment',
  },
  {
    id: '5567e29b736964256c370100',
    value: 'Government Relations',
  },
  {
    id: '5567cdb373696439dd540000',
    value: 'Online Media',
  },
  {
    id: '5567e0ea7369640d2ba31600',
    value: 'Media Production',
  },
  {
    id: '5567e0f27369640e5aed0c00',
    value: 'Religious Institutions',
  },
  {
    id: '5567e1327369641d91ce0300',
    value: 'Textiles',
  },
  {
    id: '5567cd4c73696439c9030000',
    value: 'Electrical Electronic Manufacturing',
  },
  {
    id: '5567cdb77369645401080000',
    value: 'Architecture And Planning',
  },
  {
    id: '5567cdd973696453d93f0000',
    value: 'Insurance',
  },
  {
    id: '5567ce227369644eed290000',
    value: 'Sports',
  },
  {
    id: '5567ced173696450cb580000',
    value: 'Retail',
  },
  {
    id: '5567e0af7369641ec7300000',
    value: 'Performing Arts',
  },
  {
    id: '5567e0e073696408da441e00',
    value: 'Law Enforcement',
  },
  {
    id: '5567e19b7369641ead740000',
    value: 'Security And Investigations',
  },
  {
    id: '5567e19c7369641c48e70100',
    value: 'E Learning',
  },
  {
    id: '5567e3657369642f4ec90000',
    value: 'International Affairs',
  },
  {
    id: '5567d08e7369645dbc4b0000',
    value: 'Biotechnology',
  },
  {
    id: '5567e113736964198d5e0800',
    value: 'Sporting Goods',
  },
  {
    id: '5567e25f736964256cff0000',
    value: 'Political Organization',
  },
  {
    id: '5567e27c7369642ade490000',
    value: 'Alternative Medicine',
  },
  {
    id: '5567e36f73696431a4970000',
    value: 'Animation',
  },
  {
    id: '55680a8273696407b61f0000',
    value: 'Judiciary',
  },
  {
    id: '5567cd8e7369645409450000',
    value: 'Events Services',
  },
  {
    id: '5567d0467369645dbc200000',
    value: 'Medical Practice',
  },
  {
    id: '55680085736964551e070000',
    value: 'Tobacco',
  },
  {
    id: '5567ce9d7369643bc19c0000',
    value: 'Hospitality',
  },
  {
    id: '5567e0bc7369641d11550200',
    value: 'Investment Management',
  },
  {
    id: '5567e0f973696416d34e0200',
    value: 'Broadcast Media',
  },
  {
    id: '5567cd4773696439b10b0000',
    value: 'Information Technology And Services',
  },
  {
    id: '5567cd82736964540d0b0000',
    value: 'Apparel And Fashion',
  },
  {
    id: '5567cdd97369645624020000',
    value: 'Oil And Energy',
  },
  {
    id: '5567cdf27369644cfd800000',
    value: 'Automotive',
  },
  {
    id: '5567e1ab7369641f6d660100',
    value: 'Investment Banking',
  },
  {
    id: '5567fd5a73696442b0f20000',
    value: 'Ranching',
  },
  {
    id: '5567e1887369641d68d40100',
    value: 'Commercial Real Estate',
  },
  {
    id: '5567cd4d73696439d9030000',
    value: 'Arts And Crafts',
  },
  {
    id: '5567cddb7369644d250c0000',
    value: 'Health Wellness And Fitness',
  },
  {
    id: '5567ce9673696439d5c10000',
    value: 'Veterinary',
  },
  {
    id: '5567e0e37369640e5ac10c00',
    value: 'Human Resources',
  },
  {
    id: '5567e3ca736964371b130000',
    value: 'Wireless',
  },
  {
    id: '5568047d7369646d406c0000',
    value: 'Shipbuilding',
  },
  {
    id: '5567cd4f736964540d050000',
    value: 'Music',
  },
  {
    id: '5567cd49736964540d020000',
    value: 'Renewables And Environment',
  },
  {
    id: '5567cd4d736964397e020000',
    value: 'Internet',
  },
  {
    id: '5567ce9c7369643bc9980000',
    value: 'Facilities Services',
  },
  {
    id: '5567cede73696440d0040000',
    value: 'Furniture',
  },
  {
    id: '5567e1947369641ead570000',
    value: 'Consumer Electronics',
  },
  {
    id: '5567e0bf7369641d115f0200',
    value: 'Airlines Aviation',
  },
  {
    id: '5567cd4773696439dd350000',
    value: 'Construction',
  },
  {
    id: '5567ce9c7369644eed680000',
    value: 'International Trade And Development',
  },
  {
    id: '5567cd4d7369644d513e0000',
    value: 'Printing',
  },
  {
    id: '5567cdda7369644cf95d0000',
    value: 'Plastics',
  },
  {
    id: '5567d2ad7261697f2b1f0100',
    value: 'Fund Raising',
  },
  {
    id: '5567e09973696410db020800',
    value: 'Staffing And Recruiting',
  },
  {
    id: '5567e0dd73696416d3c20100',
    value: 'Aviation And Aerospace',
  },
  {
    id: '5567ce5b73696439a17a0000',
    value: 'Publishing',
  },
  {
    id: '5567cd4c7369644d39080000',
    value: 'Telecommunications',
  },
  {
    id: '5567cd4d73696439d9040000',
    value: 'Graphic Design',
  },
  {
    id: '5567cd477369645401010000',
    value: 'Real Estate',
  },
  {
    id: '5567cd8b736964540d0f0000',
    value: 'Computer Games',
  },
  {
    id: '5567e1337369641ad2970000',
    value: 'Industrial Automation',
  },
  {
    id: '5567e1de7369642069ea0100',
    value: 'Think Tanks',
  },
  {
    id: '5567e21e73696426a1030000',
    value: 'Chemicals',
  },
  {
    id: '5567e1797369641c48c10100',
    value: 'Legislative Office',
  },
  {
    id: '5567cdd973696439a1370000',
    value: 'Writing And Editing',
  },
  {
    id: '5567ce1f7369643b78570000',
    value: 'Accounting',
  },
  {
    id: '5567e0cf7369641233e50600',
    value: 'Gambling And Casinos',
  },
  {
    id: '5567e15373696422aa0a0000',
    value: 'Museums And Institutions',
  },
  {
    id: '5567e2a97369642a553d0000',
    value: 'Supermarkets',
  },
  {
    id: '55718f947369642142b84a12',
    value: 'Agriculture',
  },
  {
    id: '5567ce5973696453d9780000',
    value: 'Public Relations And Communications',
  },
  {
    id: '5567cd4f736964397e030000',
    value: 'Glass Ceramics And Concrete',
  },
  {
    id: '5567cdd97369645430680000',
    value: 'Primary Secondary Education',
  },
  {
    id: '5567e1ae73696423dc040000',
    value: 'Cosmetics',
  },
  {
    id: '5567cd4f7369644d2d010000',
    value: 'Farming',
  },
  {
    id: '5567ce987369643b789e0000',
    value: 'Consumer Goods',
  },
  {
    id: '5567e1b97369641ea9690200',
    value: 'Medical Devices',
  },
  {
    id: '5567cd527369643981050000',
    value: 'Government Administration',
  },
  {
    id: '5567ce5b736964540d280000',
    value: 'Environmental Services',
  },
  {
    id: '5567d01e73696457ee100000',
    value: 'Wholesale',
  },
  {
    id: '5567e09473696410dbf00700',
    value: 'Executive Office',
  },
  {
    id: '5567e13a73696418756e0200',
    value: 'Civil Engineering',
  },
  {
    id: '5567ce2d7369644d25250000',
    value: 'Legal Services',
  },
  {
    id: '5567cd4a7369643ba9010000',
    value: 'Public Safety',
  },
  {
    id: '5567cdd7736964540d130000',
    value: 'Motion Pictures And Film',
  },
  {
    id: '5567e1a17369641ea9d30100',
    value: 'Building Materials',
  },
  {
    id: '5567cdb773696439a9080000',
    value: 'Capital Markets',
  },
  {
    id: '5567cdde73696439812c0000',
    value: 'Hospital And Health Care',
  },
  {
    id: '5567d04173696457ee520000',
    value: 'Outsourcing Offshoring',
  },
  {
    id: '5567e0d47369641233eb0600',
    value: 'Computer Hardware',
  },
  {
    id: '556808697369647bfd420000',
    value: 'Libraries',
  },
  {
    id: '5567cd4e7369644cf93b0000',
    value: 'Transportation Trucking Railroad',
  },
  {
    id: '5567ce9673696453d99f0000',
    value: 'Philanthropy',
  },
  {
    id: '5567cd4773696454303a0000',
    value: 'Nonprofit Organization Management',
  },
  {
    id: '5567e8a27369646ddb0b0000',
    value: 'Dairy',
  },
  {
    id: '5567ce9d7369645430c50000',
    value: 'Import And Export',
  },
  {
    id: '5567e0eb73696410e4bd1200',
    value: 'Pharmaceuticals',
  },
  {
    id: '5567cd4e7369643b70010000',
    value: 'Computer Software',
  },
  {
    id: '5567e1097369641d91230300',
    value: 'Translation And Localization',
  },
  {
    id: '5567e28a7369642ae2500000',
    value: 'Public Policy',
  },
];

const employeeOptions = [
  {
    id: '1,10',
    value: '1-10',
  },
  {
    id: '11,20',
    value: '11-20',
  },
  {
    id: '21,50',
    value: '21-50',
  },
  {
    id: '51,100',
    value: '51-100',
  },
  {
    id: '101,200',
    value: '101-200',
  },
  {
    id: '201,500',
    value: '201-500',
  },
  {
    id: '501,1000',
    value: '501-1000',
  },
  {
    id: '1001,2000',
    value: '1001-2000',
  },
  {
    id: '2001,5000',
    value: '2001-5000',
  },
  {
    id: '5001,10000',
    value: '5001-10000',
  },
  {
    id: '10001',
    value: '10001+',
  },
];

const revenueOptions = [
  {
    id: '$0 - $1K',
    value: '$0 - $1K',
  },
  {
    id: '$1K - $10K',
    value: '$1K - $10K',
  },
  {
    id: '$10K - $100K',
    value: '$10K - $100K',
  },
  {
    id: '$100K - $500K',
    value: '$100K - $500K',
  },
  {
    id: '$500K - $1M',
    value: '$500K - $1M',
  },
  {
    id: '$1M - $10M',
    value: '$1M - $10M',
  },
  {
    id: '$10M - $100M',
    value: '$10M - $100M',
  },
  {
    id: '$100M - $1B',
    value: '$100M - $1B',
  },
  {
    id: '$1B+',
    value: '$1B+',
  },
];

const emailStatusOptions = [
  {
    id: 'verified',
    value: 'Verified',
  },
  {
    id: 'guessed',
    value: 'Guessed',
  },
  {
    id: 'unavailable',
    value: 'No Email',
  },
];

const fundingOptions = [
  {
    id: '0',
    value: 'Seed',
  },
  {
    id: '1',
    value: 'Angel',
  },
  {
    id: '10',
    value: 'Venture',
  },
  {
    id: '2',
    value: 'Series A',
  },
  {
    id: '3',
    value: 'Series B',
  },
  {
    id: '4',
    value: 'Series C',
  },
  {
    id: '5',
    value: 'Series D',
  },
  {
    id: '6',
    value: 'Series E',
  },
  {
    id: '7',
    value: 'Series F',
  },
  {
    id: '13',
    value: 'Debt Financing',
  },
  {
    id: '14',
    value: 'Equity Crowdfunding',
  },
  {
    id: '15',
    value: 'Convertible Note',
  },
  {
    id: '11',
    value: 'Private Equity',
  },
  {
    id: '12',
    value: 'Other',
  },
];

export {
  industryOptions,
  employeeOptions,
  revenueOptions,
  emailStatusOptions,
  fundingOptions,
};
