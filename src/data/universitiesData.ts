export interface DocumentRequirements {
  bachelor: string[];
  master: string[];
  doctorate: string[];
}

export interface Major {
  id: string;
  name: string;
  description: string;
  duration: string;
  fees: string;
  language: string;
  requirements: string;
  popular?: boolean;
  availableForInternational: boolean;
  careerOpportunities: string[];
  requiredDocuments: DocumentRequirements;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface College {
  id: string;
  name: string;
  description: string;
  majors: Major[];
}

export interface University {
  id: string;
  name: string;
  nameEn: string;
  type: 'government' | 'private';
  location: string;
  description: string;
  rank: string;
  totalMajors: number;
  colleges: College[];
  establishedYear: number;
  website?: string;
}

// قائمة المستمسكات المطلوبة حسب الدرجة العلمية
export const documentRequirements: DocumentRequirements = {
  bachelor: [
    'وثيقة البكالوريوس مصدقة من الخارجية ببلد الطالب',
    'صورة شخصية',
    'صورة من جواز السفر',
    'اسم الأب والأم رباعياً',
    'وكالة دراسية مصدقة من كاتب العدل ثم الخارجية ببلد الطالب'
  ],
  master: [
    'وثيقة البكالوريوس مصدقة من الخارجية ببلد الطالب',
    'صورة شخصية',
    'صورة من جواز السفر',
    'اسم الأب والأم رباعياً',
    'وكالة دراسية مصدقة من كاتب العدل ثم الخارجية ببلد الطالب'
  ],
  doctorate: [
    'وثيقة البكالوريوس مصدقة من الخارجية ببلد الطالب',
    'وثيقة الماجستير مصدقة من الخارجية ببلد الطالب (إذا كانت من دولة غير عربية فلا بد من تصديقها بالقنصلية المصرية داخل بلد الطالب)',
    'صورة شخصية',
    'صورة من جواز السفر',
    'اسم الأب والأم رباعياً',
    'رسالة الماجستير بصيغة الـ PDF',
    'وكالة دراسية مصدقة من كاتب العدل ثم الخارجية ببلد الطالب'
  ]
};

// قائمة الكليات الموحدة لجميع الجامعات
export const standardColleges = [
  'كلية الحقوق',
  'كلية الآداب',
  'كلية التربية',
  'كلية التجارة',
  'كلية العلوم',
  'كلية الهندسة',
  'كلية طب العام',
  'كلية طب الأسنان',
  'كلية حاسبات ومعلومات',
  'كلية الصيدلة',
  'كلية الزراعة',
  'كلية التربية الرياضية',
  'كلية الفنون الجميلة',
  'كلية الإعلام',
  'كلية التربية النوعية'
];

export const universitiesData: University[] = [
  {
    id: 'cairo-university',
    name: 'جامعة القاهرة',
    nameEn: 'Cairo University',
    type: 'government',
    location: 'الجيزة، مصر',
    description: 'أعرق الجامعات المصرية وأولى الجامعات الحديثة في مصر والعالم العربي، تأسست عام 1908',
    rank: '#1 في مصر',
    totalMajors: 15,
    establishedYear: 1908,
    website: 'https://cu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-cairo`,
      name: collegeName,
      description: `${collegeName} - جامعة القاهرة`,
      majors: [{
        id: `major-${index + 1}-cairo`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'ain-shams-university',
    name: 'جامعة عين شمس',
    nameEn: 'Ain Shams University',
    type: 'government',
    location: 'القاهرة، مصر',
    description: 'إحدى أعرق الجامعات المصرية، تأسست عام 1950 وتضم نخبة من الكليات المتميزة',
    rank: '#2 في مصر',
    totalMajors: 15,
    establishedYear: 1950,
    website: 'https://asu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-ain-shams`,
      name: collegeName,
      description: `${collegeName} - جامعة عين شمس`,
      majors: [{
        id: `major-${index + 1}-ain-shams`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'mansoura-university',
    name: 'جامعة المنصورة',
    nameEn: 'Mansoura University',
    type: 'government',
    location: 'المنصورة، الدقهلية',
    description: 'جامعة رائدة في شمال الدلتا، تأسست عام 1972 وتتميز بكلياتها الطبية والهندسية',
    rank: '#3 في مصر',
    totalMajors: 15,
    establishedYear: 1972,
    website: 'https://mans.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-mansoura`,
      name: collegeName,
      description: `${collegeName} - جامعة المنصورة`,
      majors: [{
        id: `major-${index + 1}-mansoura`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'alexandria-university',
    name: 'جامعة الإسكندرية',
    nameEn: 'Alexandria University',
    type: 'government',
    location: 'الإسكندرية، مصر',
    description: 'جامعة ساحلية عريقة تأسست عام 1938، تتميز بموقعها الاستراتيجي وكلياتها المتنوعة',
    rank: '#4 في مصر',
    totalMajors: 15,
    establishedYear: 1938,
    website: 'https://alexu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-alexandria`,
      name: collegeName,
      description: `${collegeName} - جامعة الإسكندرية`,
      majors: [{
        id: `major-${index + 1}-alexandria`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'zagazig-university',
    name: 'جامعة الزقازيق',
    nameEn: 'Zagazig University',
    type: 'government',
    location: 'الزقازيق، الشرقية',
    description: 'جامعة حكومية في شرق الدلتا، تأسست عام 1974 وتخدم محافظة الشرقية والمناطق المجاورة',
    rank: '#5 في مصر',
    totalMajors: 15,
    establishedYear: 1974,
    website: 'https://zu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-zagazig`,
      name: collegeName,
      description: `${collegeName} - جامعة الزقازيق`,
      majors: [{
        id: `major-${index + 1}-zagazig`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'kafr-el-sheikh-university',
    name: 'جامعة كفر الشيخ',
    nameEn: 'Kafr El-Sheikh University',
    type: 'government',
    location: 'كفر الشيخ، مصر',
    description: 'جامعة حديثة في شمال الدلتا، تأسست عام 2006 وتتميز بالتطوير التكنولوجي',
    rank: '#6 في مصر',
    totalMajors: 15,
    establishedYear: 2006,
    website: 'https://kfs.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-kafr-sheikh`,
      name: collegeName,
      description: `${collegeName} - جامعة كفر الشيخ`,
      majors: [{
        id: `major-${index + 1}-kafr-sheikh`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'benha-university',
    name: 'جامعة بنها',
    nameEn: 'Benha University',
    type: 'government',
    location: 'بنها، القليوبية',
    description: 'جامعة حكومية تأسست عام 2005، تقع في محافظة القليوبية وتخدم المنطقة الشمالية للقاهرة',
    rank: '#7 في مصر',
    totalMajors: 15,
    establishedYear: 2005,
    website: 'https://bu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-benha`,
      name: collegeName,
      description: `${collegeName} - جامعة بنها`,
      majors: [{
        id: `major-${index + 1}-benha`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'helwan-university',
    name: 'جامعة حلوان',
    nameEn: 'Helwan University',
    type: 'government',
    location: 'حلوان، القاهرة',
    description: 'جامعة متخصصة في الفنون والتكنولوجيا، تأسست عام 1975 وتتميز بكلياتها الفنية والتطبيقية',
    rank: '#8 في مصر',
    totalMajors: 15,
    establishedYear: 1975,
    website: 'https://hu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-helwan`,
      name: collegeName,
      description: `${collegeName} - جامعة حلوان`,
      majors: [{
        id: `major-${index + 1}-helwan`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'menoufia-university',
    name: 'جامعة المنوفية',
    nameEn: 'Menoufia University',
    type: 'government',
    location: 'شبين الكوم، المنوفية',
    description: 'جامعة حكومية في وسط الدلتا، تأسست عام 1976 وتخدم محافظة المنوفية والمناطق المجاورة',
    rank: '#9 في مصر',
    totalMajors: 15,
    establishedYear: 1976,
    website: 'https://mu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-menoufia`,
      name: collegeName,
      description: `${collegeName} - جامعة المنوفية`,
      majors: [{
        id: `major-${index + 1}-menoufia`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'beni-suef-university',
    name: 'جامعة بني سويف',
    nameEn: 'Beni-Suef University',
    type: 'government',
    location: 'بني سويف، مصر',
    description: 'جامعة حكومية في صعيد مصر، تأسست عام 2005 وتتميز بخدمة المجتمع المحلي',
    rank: '#10 في مصر',
    totalMajors: 15,
    establishedYear: 2005,
    website: 'https://bsu.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-beni-suef`,
      name: collegeName,
      description: `${collegeName} - جامعة بني سويف`,
      majors: [{
        id: `major-${index + 1}-beni-suef`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'tanta-university',
    name: 'جامعة طنطا',
    nameEn: 'Tanta University',
    type: 'government',
    location: 'طنطا، الغربية',
    description: 'جامعة حكومية في وسط الدلتا، تأسست عام 1972 وتتميز بكلياتها الطبية والعلمية',
    rank: '#11 في مصر',
    totalMajors: 15,
    establishedYear: 1972,
    website: 'https://tanta.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-tanta`,
      name: collegeName,
      description: `${collegeName} - جامعة طنطا`,
      majors: [{
        id: `major-${index + 1}-tanta`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  {
    id: 'suez-canal-university',
    name: 'جامعة قناة السويس',
    nameEn: 'Suez Canal University',
    type: 'government',
    location: 'الإسماعيلية، مصر',
    description: 'جامعة استراتيجية تقع على قناة السويس، تأسست عام 1976 وتتميز بموقعها الجغرافي المهم',
    rank: '#12 في مصر',
    totalMajors: 15,
    establishedYear: 1976,
    website: 'https://scuegypt.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-suez-canal`,
      name: collegeName,
      description: `${collegeName} - جامعة قناة السويس`,
      majors: [{
        id: `major-${index + 1}-suez-canal`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '8,000 - 15,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 65%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  },
  // الجامعة الأمريكية كمثال للجامعات الخاصة
  {
    id: 'al-azhar-university',
    name: 'جامعة الأزهر',
    nameEn: 'Al-Azhar University',
    type: 'government',
    location: 'القاهرة، مصر',
    description: 'أقدم جامعة في العالم الإسلامي ومنارة للعلوم الشرعية، تأسست عام 970م',
    rank: '#1 علوم شرعية',
    totalMajors: 15,
    establishedYear: 970,
    website: 'https://azhar.edu.eg',
    colleges: standardColleges.map((collegeName, index) => ({
      id: `college-${index + 1}-azhar`,
      name: collegeName,
      description: `${collegeName} - جامعة الأزهر`,
      majors: [{
        id: `major-${index + 1}-azhar`,
        name: collegeName.replace('كلية ', ''),
        description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')}`,
        duration: '4 سنوات',
        fees: '6,000 - 12,000 جنيه/سنة',
        language: 'العربية',
        requirements: 'الثانوية العامة 60%+',
        availableForInternational: true,
        careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي'],
        requiredDocuments: documentRequirements,
        faqs: [{
          question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
          answer: '4 سنوات دراسية + سنة تدريب عملي'
        }]
      }]
    }))
  }
];

export const fieldsData = [
  {
    id: 'medical',
    name: 'العلوم الطبية',
    description: 'تخصصات طبية شاملة تغطي جميع جوانب الطب والصحة',
    icon: 'heart',
    majors: ['الطب البشري', 'طب الأسنان', 'الصيدلة', 'التمريض', 'العلاج الطبيعي']
  },
  {
    id: 'engineering',
    name: 'الهندسة والتكنولوجيا',
    description: 'تخصصات هندسية متنوعة في مختلف المجالات التقنية',
    icon: 'cog',
    majors: ['الهندسة المدنية', 'هندسة الحاسبات', 'الهندسة الكهربائية', 'الهندسة الميكانيكية']
  },
  {
    id: 'business',
    name: 'إدارة الأعمال والاقتصاد',
    description: 'علوم الإدارة والاقتصاد والمال والأعمال',
    icon: 'briefcase',
    majors: ['إدارة الأعمال', 'الاقتصاد', 'المحاسبة', 'التسويق', 'إدارة الموارد البشرية']
  },
  {
    id: 'humanities',
    name: 'العلوم الإنسانية والشرعية',
    description: 'الدراسات الشرعية واللغوية والإنسانية',
    icon: 'book',
    majors: ['الشريعة الإسلامية', 'اللغة العربية وآدابها', 'التاريخ الإسلامي', 'الدعوة والثقافة الإسلامية']
  },
  {
    id: 'arts',
    name: 'الفنون والإعلام',
    description: 'تخصصات فنية وإعلامية إبداعية',
    icon: 'palette',
    majors: ['الفنون الجميلة', 'الإعلام', 'التصميم الجرافيكي', 'الموسيقى']
  },
  {
    id: 'science',
    name: 'العلوم الطبيعية',
    description: 'علوم الرياضيات والفيزياء والكيمياء والأحياء',
    icon: 'flask',
    majors: ['الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الجيولوجيا']
  }
];

// Helper functions
export const getUniversityById = (id: string): University | undefined => {
  return universitiesData.find(uni => uni.id === id);
};

export const getMajorById = (majorId: string): { major: Major; university: University; college: College } | undefined => {
  for (const university of universitiesData) {
    for (const college of university.colleges) {
      const major = college.majors.find(m => m.id === majorId);
      if (major) {
        return { major, university, college };
      }
    }
  }
  return undefined;
};

export const searchMajors = (query: string): Array<{ major: Major; university: University; college: College }> => {
  const results: Array<{ major: Major; university: University; college: College }> = [];
  const searchTerm = query.toLowerCase();
  
  for (const university of universitiesData) {
    for (const college of university.colleges) {
      for (const major of college.majors) {
        if (
          major.name.toLowerCase().includes(searchTerm) ||
          major.description.toLowerCase().includes(searchTerm) ||
          university.name.toLowerCase().includes(searchTerm) ||
          college.name.toLowerCase().includes(searchTerm)
        ) {
          results.push({ major, university, college });
        }
      }
    }
  }
  
  return results;
};

export const filterMajors = (filters: {
  field?: string;
  universityType?: 'government' | 'private';
  duration?: string;
  language?: string;
  internationalOnly?: boolean;
}) => {
  const results: Array<{ major: Major; university: University; college: College }> = [];
  
  for (const university of universitiesData) {
    // Filter by university type
    if (filters.universityType && university.type !== filters.universityType) {
      continue;
    }
    
    for (const college of university.colleges) {
      for (const major of college.majors) {
        // Filter by international availability
        if (filters.internationalOnly && !major.availableForInternational) {
          continue;
        }
        
        // Filter by duration
        if (filters.duration && !major.duration.includes(filters.duration)) {
          continue;
        }
        
        // Filter by language
        if (filters.language && !major.language.includes(filters.language)) {
          continue;
        }
        
        results.push({ major, university, college });
      }
    }
  }
  
  return results;
};