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
  requiredDocuments: string[];
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

export const universitiesData: University[] = [
  {
    id: 'cairo-university',
    name: 'جامعة القاهرة',
    nameEn: 'Cairo University',
    type: 'government',
    location: 'الجيزة، مصر',
    description: 'أعرق الجامعات المصرية وأولى الجامعات الحديثة في مصر والعالم العربي',
    rank: '#1 في مصر',
    totalMajors: 15,
    establishedYear: 1908,
    website: 'https://cu.edu.eg',
    colleges: [
      {
        id: 'medicine-cairo',
        name: 'كلية الطب',
        description: 'من أعرق كليات الطب في الشرق الأوسط',
        majors: [
          {
            id: 'human-medicine',
            name: 'الطب البشري',
            description: 'دراسة شاملة للطب البشري والعلوم الطبية الحديثة',
            duration: '6 سنوات',
            fees: '25,000 - 35,000 جنيه/سنة',
            language: 'العربية/الإنجليزية',
            requirements: 'الثانوية العامة 85%+',
            popular: true,
            availableForInternational: true,
            careerOpportunities: ['طبيب عام', 'طبيب متخصص', 'باحث طبي', 'أستاذ جامعي'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر', 'صور شخصية'],
            faqs: [
              {
                question: 'ما هي مدة دراسة الطب؟',
                answer: '6 سنوات دراسية + سنة امتياز'
              },
              {
                question: 'هل يمكن للطلاب الأجانب الدراسة؟',
                answer: 'نعم، الكلية تستقبل الطلاب الوافدين حسب الشروط المحددة'
              }
            ]
          },
          {
            id: 'dentistry',
            name: 'طب الأسنان',
            description: 'تخصص في علاج وتجميل الأسنان والفم',
            duration: '5 سنوات',
            fees: '20,000 - 30,000 جنيه/سنة',
            language: 'العربية/الإنجليزية',
            requirements: 'الثانوية العامة 80%+',
            availableForInternational: true,
            careerOpportunities: ['طبيب أسنان عام', 'طبيب أسنان متخصص', 'جراح فكين'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما الفرق بين طب الأسنان والطب البشري؟',
                answer: 'طب الأسنان يركز على الفم والأسنان والفكين فقط'
              }
            ]
          }
        ]
      },
      {
        id: 'engineering-cairo',
        name: 'كلية الهندسة',
        description: 'من أقدم وأعرق كليات الهندسة في الشرق الأوسط',
        majors: [
          {
            id: 'civil-engineering',
            name: 'الهندسة المدنية',
            description: 'تصميم وتنفيذ المشاريع الإنشائية والبنية التحتية',
            duration: '5 سنوات',
            fees: '15,000 - 22,000 جنيه/سنة',
            language: 'العربية/الإنجليزية',
            requirements: 'الثانوية العامة 70%+',
            popular: true,
            availableForInternational: true,
            careerOpportunities: ['مهندس مدني', 'مهندس إنشائي', 'مدير مشاريع', 'استشاري هندسي'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما هي مجالات عمل المهندس المدني؟',
                answer: 'البناء، الطرق، الجسور، السدود، ومشاريع البنية التحتية'
              }
            ]
          },
          {
            id: 'computer-engineering',
            name: 'هندسة الحاسبات',
            description: 'دمج بين علوم الحاسوب والهندسة الكهربائية',
            duration: '5 سنوات',
            fees: '18,000 - 25,000 جنيه/سنة',
            language: 'العربية/الإنجليزية',
            requirements: 'الثانوية العامة 75%+',
            availableForInternational: true,
            careerOpportunities: ['مهندس برمجيات', 'مهندس شبكات', 'مطور تطبيقات', 'محلل أنظمة'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما الفرق بين هندسة الحاسبات وعلوم الحاسوب؟',
                answer: 'هندسة الحاسبات تركز أكثر على الجانب الهندسي والأجهزة'
              }
            ]
          }
        ]
      },
      {
        id: 'business-cairo',
        name: 'كلية التجارة',
        description: 'إعداد الكوادر في مجال الأعمال والإدارة',
        majors: [
          {
            id: 'business-administration',
            name: 'إدارة الأعمال',
            description: 'دراسة شاملة لإدارة المؤسسات والأعمال',
            duration: '4 سنوات',
            fees: '12,000 - 18,000 جنيه/سنة',
            language: 'العربية',
            requirements: 'الثانوية العامة 65%+',
            availableForInternational: true,
            careerOpportunities: ['مدير أعمال', 'محلل مالي', 'مستشار إداري', 'رائد أعمال'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما هي المواد الأساسية في إدارة الأعمال؟',
                answer: 'المحاسبة، التسويق، الإدارة، الاقتصاد، والإحصاء'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'al-azhar-university',
    name: 'جامعة الأزهر',
    nameEn: 'Al-Azhar University',
    type: 'government',
    location: 'القاهرة، مصر',
    description: 'أقدم جامعة في العالم الإسلامي ومنارة للعلوم الشرعية',
    rank: '#1 علوم شرعية',
    totalMajors: 12,
    establishedYear: 970,
    website: 'https://azhar.edu.eg',
    colleges: [
      {
        id: 'sharia-azhar',
        name: 'كلية الشريعة والقانون',
        description: 'دراسة الشريعة الإسلامية والقانون',
        majors: [
          {
            id: 'islamic-sharia',
            name: 'الشريعة الإسلامية',
            description: 'دراسة شاملة للشريعة الإسلامية والفقه',
            duration: '4 سنوات',
            fees: '8,000 - 12,000 جنيه/سنة',
            language: 'العربية',
            requirements: 'الثانوية العامة 55%+',
            popular: true,
            availableForInternational: true,
            careerOpportunities: ['قاضي شرعي', 'مفتي', 'أستاذ جامعي', 'باحث شرعي'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما هي مجالات دراسة الشريعة؟',
                answer: 'الفقه، أصول الفقه، التفسير، الحديث، والسيرة النبوية'
              }
            ]
          }
        ]
      },
      {
        id: 'arabic-language-azhar',
        name: 'كلية اللغة العربية',
        description: 'دراسة اللغة العربية وآدابها',
        majors: [
          {
            id: 'arabic-literature',
            name: 'اللغة العربية وآدابها',
            description: 'دراسة عميقة للغة العربية وتاريخها وآدابها',
            duration: '4 سنوات',
            fees: '7,000 - 11,000 جنيه/سنة',
            language: 'العربية',
            requirements: 'الثانوية العامة 50%+',
            availableForInternational: true,
            careerOpportunities: ['مدرس لغة عربية', 'مترجم', 'كاتب', 'محرر'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما فرص العمل لخريج اللغة العربية؟',
                answer: 'التدريس، الترجمة، الصحافة، والعمل في المؤسسات الثقافية'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ain-shams-university',
    name: 'جامعة عين شمس',
    nameEn: 'Ain Shams University',
    type: 'government',
    location: 'القاهرة، مصر',
    description: 'ثالث أقدم جامعة مصرية حديثة',
    rank: '#2 في مصر',
    totalMajors: 10,
    establishedYear: 1950,
    website: 'https://asu.edu.eg',
    colleges: [
      {
        id: 'pharmacy-ain-shams',
        name: 'كلية الصيدلة',
        description: 'دراسة العلوم الصيدلانية والأدوية',
        majors: [
          {
            id: 'pharmacy',
            name: 'الصيدلة',
            description: 'دراسة شاملة للعلوم الصيدلانية وتحضير الأدوية',
            duration: '5 سنوات',
            fees: '18,000 - 25,000 جنيه/سنة',
            language: 'العربية/الإنجليزية',
            requirements: 'الثانوية العامة 75%+',
            availableForInternational: true,
            careerOpportunities: ['صيدلي', 'باحث صيدلاني', 'مدير صيدلية', 'مراقب جودة الأدوية'],
            requiredDocuments: ['شهادة الثانوية العامة', 'شهادة الميلاد', 'جواز السفر'],
            faqs: [
              {
                question: 'ما هي المواد الأساسية في الصيدلة؟',
                answer: 'الكيمياء، الأحياء، علم الأدوية، والكيمياء الصيدلانية'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'american-university',
    name: 'الجامعة الأمريكية بالقاهرة',
    nameEn: 'American University in Cairo',
    type: 'private',
    location: 'القاهرة الجديدة، مصر',
    description: 'جامعة خاصة معتمدة دولياً تدرس باللغة الإنجليزية',
    rank: '#1 خاصة',
    totalMajors: 8,
    establishedYear: 1919,
    website: 'https://aucegypt.edu',
    colleges: [
      {
        id: 'business-auc',
        name: 'كلية إدارة الأعمال',
        description: 'برامج متقدمة في إدارة الأعمال معتمدة دولياً',
        majors: [
          {
            id: 'mba',
            name: 'إدارة الأعمال (MBA)',
            description: 'برنامج ماجستير متقدم في إدارة الأعمال',
            duration: '2 سنة',
            fees: '30,000 - 80,000 جنيه/سنة',
            language: 'الإنجليزية',
            requirements: 'بكالوريوس + خبرة عملية',
            popular: true,
            availableForInternational: true,
            careerOpportunities: ['مدير تنفيذي', 'مستشار إداري', 'مدير مشاريع', 'محلل استراتيجي'],
            requiredDocuments: ['شهادة البكالوريوس', 'خطابات توصية', 'السيرة الذاتية', 'شهادة TOEFL/IELTS'],
            faqs: [
              {
                question: 'ما هي شروط القبول في MBA؟',
                answer: 'درجة بكالوريوس، خبرة عملية 3 سنوات، اختبار GMAT أو GRE'
              }
            ]
          }
        ]
      }
    ]
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