const additionalInfo = [
  {
    name: 'PlanhubInternet',
    measurement_en: 'Cost of internet plan',
    measurement_fa: 'هزینه پلان انترنت',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: 'all',
  },
  {
    name: 'RatesdotcaInsuranceAuto',
    measurement_en: 'Cost of car insurance',
    measurement_fa: 'هزینه بیمه موتر',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: ['13-18', '19-35', '36-65'],
  },
  {
    name: 'MinWage',
    measurement_en: 'High minimum wage',
    measurement_fa: 'حداقل دستمزد بالا',
    category_en: 'Employment Services',
    category_fa: 'خدمات استخدام',
    lowerIsBetter: false,
    demographic: ['13-18', '19-35', '36-65'],
  },
  {
    name: 'PlanhubPhoneBasicPlan',
    measurement_en: 'Cost of basic phone plan',
    measurement_fa: 'هزینه ابتدایی پلان تلفن',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: 'all',
  },
  {
    name: 'StatscanTuition',
    measurement_en: 'Cost of tuition',
    measurement_fa: 'هزینه پرداخت مدرس',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: true,
    demographic: ['13-18', '19-35'],
  },
  {
    name: 'RentOneBr',
    measurement_en: 'Cost of 1 bedroom apartment',
    measurement_fa: 'هزینه اپارتمان یک خوابه',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 1,
      maxNumberOfPeople: 2,
    },
  },
  {
    name: 'RentTwoBr',
    measurement_en: 'Cost of 2 bedroom apartment',
    measurement_fa: 'هزینه اپارتمان دو خوابه',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 4,
    },
  },
  {
    name: 'RentThreeBr',
    measurement_en: 'Cost of 3 bedroom apartment',
    measurement_fa: 'هزینه اپارتمان سه خوابه',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 5,
      maxNumberOfPeople: 5,
    },
  },
  {
    name: 'RentFourBr',
    measurement_en: 'Cost of 4 bedroom apartment',
    measurement_fa: 'هزینه اپارتمان چهار خوابه',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 6,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: 'BridgingPrograms',
    measurement_en: 'Number of bridging programs for professionals',
    measurement_fa: 'تعداد برنامه های بریجینگ برای حرفه ای ها',
    category_en: 'Employment Services',
    category_fa: 'خدمات استخدام',
    lowerIsBetter: false,
    demographic: ['19-35', '36-65'],
  },
  {
    name: 'SkilledTraining',
    measurement_en: 'Number of skilled jobs training programs',
    measurement_fa: 'تعداد وظیفه های حرفوی و برنامه های آموزشی',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['19-35'],
  },
  {
    name: 'PolytechCollege',
    measurement_en: 'Number of polytechnic colleges',
    measurement_fa: 'تعداد کالج های پولیتکنیک',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['19-35'],
  },
  {
    name: 'PrivateCollege',
    measurement_en: 'Number of private colleges',
    measurement_fa: 'تعداد کالج های شخصی',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['19-35'],
  },
  {
    name: 'PrivateUni',
    measurement_en: 'Number of private universities',
    measurement_fa: 'تعداد دانشگاه های شخصی',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['19-35'],
  },
  {
    name: 'PublicCollege',
    measurement_en: 'Number of public colleges',
    measurement_fa: 'تعداد کالج های عمومی',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['19-35'],
  },
  {
    name: 'PublicUni',
    measurement_en: 'Number of public universities',
    measurement_fa: 'عداد دانشگاه های عمومی',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['19-35'],
  },
  {
    name: 'ParentingPrograms',
    measurement_en: 'Number of parenting supports',
    measurement_fa: 'تعداد پروگرام های حمایتی والدین',
    category_en: 'Community, Family, Wellness',
    category_fa: 'اجتماع / خانواده / سلامتی',
    lowerIsBetter: false,
    demographic: ['0-12'],
  },
  {
    name: 'SeniorRecPrograms',
    measurement_en: 'Number of community programs for seniors',
    measurement_fa: 'تعداد پروگرام های اجتماعی برای سالمندان',
    category_en: 'Community, Family, Wellness',
    category_fa: 'اجتماع / خانواده / سلامتی',
    lowerIsBetter: false,
    demographic: ['65+'],
  },
  {
    name: 'TeenRecPrograms',
    measurement_en: 'Number of community programs for children and youth',
    measurement_fa: 'تعداد پرواگرام های اجتماعی برای اطفال و نوجوانان',
    category_en: 'Community, Family, Wellness',
    category_fa: 'اجتماع / خانواده / سلامتی',
    lowerIsBetter: false,
    demographic: ['0-12', '13-18'],
  },
  {
    name: 'AdultRecPrograms',
    measurement_en: 'Number of community programs for adults',
    measurement_fa: 'تعداد برنامه های احنماعی برای جوانان',
    category_en: 'Community, Family, Wellness',
    category_fa: 'اجتماع / خانواده / سلامتی',
    lowerIsBetter: false,
    demographic: ['19-35', '36-65'],
  },
  {
    name: 'FamilyShelter',
    measurement_en: 'Number of shelters for women, family, and youth',
    measurement_fa: 'تعداد خانه های امن برای زنان٬ فامیل و جوانان',
    category_en: 'Clothing, Furniture, Food Bank Services',
    category_fa: 'پوشاک/ ضروریات خانه/ خدمات اهدای مواد غذایی',
    lowerIsBetter: false,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: 'FoodBanks',
    measurement_en: 'Number of food banks',
    measurement_fa: 'تعداد بانک های غذا',
    category_en: 'Clothing, Furniture, Food Bank Services',
    category_fa: 'پوشاک/ ضروریات خانه/ خدمات اهدای مواد غذایی',
    lowerIsBetter: false,
    demographic: 'all',
  },
  {
    name: 'FurnitureBank',
    measurement_en: 'Number of affordable furniture banks and stores',
    measurement_fa: 'تعداد فرنیچر بانک و فروشگاه های ارزان',
    category_en: 'Clothing, Furniture, Food Bank Services',
    category_fa: 'پوشاک/ ضروریات خانه/ خدمات اهدای مواد غذایی',
    lowerIsBetter: false,
    demographic: 'all',
  },
  {
    name: 'ClothingBanks',
    measurement_en: 'Number of affordable clothing banks and stores',
    measurement_fa: 'تعداد بانک ها و فروشگاه های لباس با قیمت مناسب',
    category_en: 'Clothing, Furniture, Food Bank Services',
    category_fa: 'پوشاک/ ضروریات خانه/ خدمات اهدای مواد غذایی',
    lowerIsBetter: false,
    demographic: 'all',
  },
  {
    name: 'Daycare',
    measurement_en: 'Cost of public daycare',
    measurement_fa: 'هزینه مهدکودک عمومی',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: ['0-12'],
  },
  {
    name: 'EmploymentServices',
    measurement_en: 'Number of employment support services',
    measurement_fa: 'تعداد خدمات کاریابی',
    category_en: 'Employment Services',
    category_fa: 'خدمات استخدام',
    lowerIsBetter: false,
    demographic: ['19-35', '36-65'],
  },
  {
    name: 'TaxServices',
    measurement_en: 'Number of tax supports',
    measurement_fa: 'تعداد حمایت مالیاتی',
    category_en: 'Personal Banking and Financial Services',
    category_fa: 'حساب بانکداری شخصی و خدمات مالی',
    lowerIsBetter: false,
    demographic: ['19-35', '36-65'],
  },
  {
    name: 'Startup',
    measurement_en: 'Number of business startup supports',
    measurement_fa: 'تعداد حمایت اولیه برای شروع تجارت',
    category_en: 'Starting a Business',
    category_fa: 'شروع یک تجارت',
    lowerIsBetter: false,
    demographic: ['19-35', '36-65'],
  },
  {
    name: 'SnowDays',
    measurement_en: 'Number of snowy days',
    measurement_fa: 'تعداد روزهای برفی',
    category_en: 'Weather',
    category_fa: 'اوضاع جوی',
    lowerIsBetter: true,
    demographic: ['65+'],
  },
  {
    name: 'TempSummer',
    measurement_en: 'Average summer temperature',
    measurement_fa: 'میانگین درجه هوا در تابستان',
    category_en: 'Weather',
    category_fa: 'اوضاع جوی',
    lowerIsBetter: false,
    demographic: ['65+'],
  },
  {
    name: 'YouthEmploymentCentre',
    measurement_en: 'Number of youth employment centres',
    measurement_fa: 'تعداد مراکز کاریابی برای جوانان',
    category_en: 'Employment Services',
    category_fa: 'خدمات استخدام',
    lowerIsBetter: false,
    demographic: ['13-18'],
  },
  {
    name: 'Libraries',
    measurement_en: 'Number of libraries',
    measurement_fa: 'تعداد کتابخانه ها',
    category_en: 'Community, Family, Wellness',
    category_fa: 'اجتماع / خانواده / سلامتی',
    lowerIsBetter: false,
    demographic: 'all',
  },
  {
    name: 'SeniorTransit',
    measurement_en: "Cost of a senior's pass for public transport",
    measurement_fa: 'هزینه تکت ترانسپوزت عمومی برای سالمندان',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: ['65+'],
  },
  {
    name: 'AdultTransit',
    measurement_en: 'Cost of an adult pass for public transport',
    measurement_fa: 'هزینه تکت ترانسپورت عمومی برای جوانان (25-64)',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: ['19-35', '36-65'],
  },
  {
    name: 'YouthTransit',
    measurement_en: 'Cost of a youth pass for public transport',
    measurement_fa: 'هزینه تکت ترانسپورت عمومی برای جوانان(15-24)',
    category_en: 'Cost of Living',
    category_fa: 'هزینه زندگی کردن',
    lowerIsBetter: true,
    demographic: ['0-12', '13-18'],
  },
  {
    name: 'ComputerClasses',
    measurement_en: 'Number of computer training courses',
    measurement_fa: 'صنف های آموزش کمپیوتر',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['36-65'],
  },
  {
    name: 'EslClasses',
    measurement_en: 'Number of English learning courses',
    measurement_fa: 'تعداد صنف های آموزشی انگلیسی',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['18-35', '36-65'],
  },
  {
    name: 'SeniorLiteracyPrograms',
    measurement_en: 'Number of literacy learning supports for seniors',
    measurement_fa: 'تعداد صنف های سواد آموزی برای سالمندان',
    category_en: 'Education and Language Services',
    category_fa: 'آموزش و خدمات لسان',
    lowerIsBetter: false,
    demographic: ['65+'],
  },
  {
    name: 'FinancialLit',
    measurement_en: 'Number of financial literacy courses',
    measurement_fa: 'تعداد صنف های آموزش مالی',
    category_en: 'Personal Banking and Financial Services',
    category_fa: 'حساب بانکداری شخصی و خدمات مالی',
    lowerIsBetter: false,
    demographic: ['18-35', '36-65', '65+'],
  },
  {
    name: 'RainDays',
    measurement_en: 'Number of rainy days',
    measurement_fa: 'تعداد روزهای بارانی',
    category_en: 'Weather',
    category_fa: 'اوضاع جوی',
    lowerIsBetter: true,
    demographic: ['65+'],
  },
  {
    name: 'TempWinter',
    measurement_en: 'Average winter temperature',
    measurement_fa: 'هوای زمستانی',
    category_en: 'Weather',
    category_fa: 'اوضاع جوی',
    lowerIsBetter: false,
    demographic: ['65+'],
  },
  {
    name: 'Mosque',
    measurement_en: 'Number of mosques',
    measurement_fa: 'Number of mosques',
    category_en: 'Ethnic Foods, Places of Worship, and Cultural',
    category_fa: 'Ethnic Foods, Places of Worship, and Cultural',
    lowerIsBetter: false,
    demographic: ['65+'],
  },
  {
    name: 'AfghanDemo',
    measurement_en: 'Number of Afghan community associations',
    measurement_fa: 'Number of Afghan community associations',
    category_en: 'Ethnic Foods, Places of Worship, and Cultural',
    category_fa: 'Ethnic Foods, Places of Worship, and Cultural',
    lowerIsBetter: false,
    demographic: ['65+'],
  },
  {
    name: 'EthnicMarkets',
    measurement_en: 'Number of grocery stores selling Halal food',
    measurement_fa: 'Number of grocery stores selling Halal food',
    category_en: 'Ethnic Foods, Places of Worship, and Cultural',
    category_fa: 'Ethnic Foods, Places of Worship, and Cultural',
    lowerIsBetter: false,
    demographic: 'all',
  },
  {
    name: 'AfghanRestuarant',
    measurement_en: 'Number of restaurants serving Halal food',
    measurement_fa: 'Number of restaurants serving Halal food',
    category_en: 'Ethnic Foods, Places of Worship, and Cultural',
    category_fa: 'Ethnic Foods, Places of Worship, and Cultural',
    lowerIsBetter: false,
    demographic: 'all',
  },
];

export default additionalInfo;
