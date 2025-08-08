import { documentRequirements, standardColleges } from './universitiesData';

// قالب موحد للجامعات
export const createUniversityMajors = (universityPrefix: string, universityName: string) => {
  return standardColleges.map((collegeName, index) => ({
    id: `college-${index + 1}-${universityPrefix}`,
    name: collegeName,
    description: `${collegeName} - ${universityName}`,
    majors: [{
      id: `major-${index + 1}-${universityPrefix}`,
      name: collegeName.replace('كلية ', ''),
      description: `دراسة متخصصة في ${collegeName.replace('كلية ', '')} ب${universityName}`,
      duration: '4 سنوات',
      fees: '8,000 - 15,000 جنيه/سنة',
      language: 'العربية',
      requirements: 'الثانوية العامة 65%+',
      availableForInternational: true,
      careerOpportunities: [`أخصائي ${collegeName.replace('كلية ', '')}`, 'باحث', 'أستاذ جامعي', 'استشاري'],
      requiredDocuments: documentRequirements,
      studySystem: 'كورسات دراسية + بحث تخرج',
      studyFees: {
        bachelor: '8,000 - 12,000 جنيه/سنة',
        master: '15,000 - 20,000 جنيه/سنة',
        doctorate: '20,000 - 25,000 جنيه/سنة'
      },
      studyDuration: {
        bachelor: '4 سنوات',
        master: '2-3 سنوات',
        doctorate: '3-5 سنوات'
      },
      additionalDetails: [
        'إمكانية الدراسة بنظام الانتساب الموجه للطلاب العاملين',
        'توفر برامج تبادل طلابي مع جامعات دولية',
        'مكتبة شاملة ومختبرات حديثة',
        'فرص تدريب عملي في المؤسسات الحكومية والخاصة',
        'إمكانية الحصول على شهادات معتمدة دولياً'
      ],
      faqs: [{
        question: `ما هي مدة دراسة ${collegeName.replace('كلية ', '')}؟`,
        answer: '4 سنوات دراسية للبكالوريوس + سنة تدريب عملي، مع إمكانية استكمال الدراسات العليا'
      }, {
        question: 'هل يمكن للطلاب الأجانب التقديم؟',
        answer: 'نعم، الكلية تستقبل الطلاب الوافدين وفقاً للشروط والمعايير المحددة من الجامعة'
      }, {
        question: 'ما هو نظام التقييم المتبع؟',
        answer: 'نظام الساعات المعتمدة مع امتحانات فصلية ونهائية وتقييم مستمر للأنشطة والمشاريع'
      }]
    }]
  }));
};