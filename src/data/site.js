
export const nav = [
 {label:'Home',to:'/'},{label:'What We Do',to:'/what-we-do',mega:true},{label:'Industries',to:'/industries'},
 {label:'Talent',to:'/talent'},{label:'About',to:'/about'},{label:'Insights',to:'/insights'},
 {label:'Careers',to:'/careers'},{label:'Contact',to:'/contact'}
];
export const capabilities = [
 {title:'Enterprise Advisory',desc:'Independent perspective to shape transformation strategy, architecture and investment decisions.',to:'/enterprise-advisory',n:'01'},
 {title:'Managed Services',desc:'Practical, accountable support that helps enterprise technology perform over the long term.',to:'/managed-services',n:'02'},
 {title:'Enterprise Talent',desc:'Experienced specialists who bring momentum to complex programmes and critical initiatives.',to:'/enterprise-talent',n:'03'},
 {title:'Technology Practices',desc:'Deep capability across SAP, IFS, Odoo, data and AI, and cybersecurity.',to:'/sap',n:'04'},
 {title:'Industry Experience',desc:'Technology and transformation shaped around the operating realities of your industry.',to:'/industries',n:'05'},
 {title:'Talent Network',desc:'Connect with a specialist community working on meaningful enterprise challenges.',to:'/talent',n:'06'}
];
export const practices = {
 sap:{name:'SAP',eyebrow:'Technology practice',headline:'Make your SAP landscape work harder for what comes next.',intro:'Independent SAP expertise spanning strategy, optimisation, transformation and the specialist talent needed to deliver with confidence.',position:'A clear view of your SAP estate. A practical path forward.',services:['SAP Advisory & Strategy','ECC Optimisation','S/4HANA','Integration & BTP','Data & Analytics','SAP Security','SAP Talent'],body:'From shaping the case for change to supporting complex delivery, MONTECO helps organisations make informed decisions across the SAP lifecycle.'},
 ifs:{name:'IFS',eyebrow:'Technology practice',headline:'Enterprise systems built around the way your business operates.',intro:'Australia-led. Malaysia-enabled. Specialist IFS capability for organisations looking to modernise operations, assets and service delivery.',position:'Australia-led. Malaysia-enabled.',services:['IFS Cloud','ERP','Enterprise Asset Management','Field Service Management','Architecture & Integration','Programme Delivery','IFS Specialist Talent'],body:'We connect programme leadership, architecture and hands-on expertise to help organisations realise value from IFS.'},
 'data-ai':{name:'Data & AI',eyebrow:'Technology practice',headline:'Turn enterprise data into decisions, and decisions into action.',intro:'Build the foundations, governance and capabilities to make data and AI useful across the enterprise.',position:'A grounded approach to data, analytics and responsible AI adoption.',services:['Data Strategy','Data Architecture','Data Engineering','Analytics','AI Strategy & Readiness','AI Governance','Enterprise AI Adoption','Automation'],body:'We help leaders move from disconnected data initiatives to a coherent enterprise capability, with practical governance and adoption built in.'},
 odoo:{name:'Odoo',eyebrow:'Technology practice',headline:'A more connected operating model, enabled by Odoo.',intro:'Pragmatic advice and delivery support for organisations evaluating, implementing or improving Odoo across their operations.',position:'Fit-for-purpose enterprise technology, without unnecessary complexity.',services:['Odoo Advisory','Solution Design','Implementation Support','Integration','Data & Reporting','Optimisation','Odoo Specialist Talent'],body:'We focus on business fit, integration and adoption so that technology supports the way teams need to work.'},
 cybersecurity:{name:'Cybersecurity',eyebrow:'Certified alliances',headline:'Build confidence into every layer of enterprise technology.',intro:'Cybersecurity thinking that connects business risk, technology architecture and the realities of transformation.',position:'Security considered from the start, not added at the end.',services:['Cybersecurity Advisory','Security Strategy','Risk & Governance','Architecture Review','Transformation Security','Security Specialists'],body:'We help organisations bring security considerations into enterprise decisions and programme delivery.'}
};
export const industries = [
 {slug:'resources',name:'Resources & Energy',desc:'Technology for asset-intensive, operationally complex environments.'},
 {slug:'manufacturing',name:'Manufacturing',desc:'Connected operations, planning and enterprise systems.'},
 {slug:'utilities',name:'Utilities & Infrastructure',desc:'Resilient platforms for essential services and critical assets.'},
 {slug:'transport',name:'Transport & Logistics',desc:'Visibility, integration and operational performance across networks.'},
 {slug:'professional-services',name:'Professional Services',desc:'Scalable platforms and information that support service delivery.'},
 {slug:'public-sector',name:'Public Sector',desc:'Transformation grounded in accountability and public value.'}
];
export const insights = [
 {slug:'enterprise-transformation',category:'Perspective',date:'Insights',title:'Enterprise transformation is a people challenge as much as a technology challenge.',excerpt:'Why the right experience, alignment and delivery capability matter as much as the platform.'},
 {slug:'data-ai-readiness',category:'Data & AI',date:'Insights',title:'Getting enterprise-ready for AI starts with the foundations.',excerpt:'A practical view of data, governance and organisational readiness.'},
 {slug:'erp-modernisation',category:'ERP',date:'Insights',title:'A more considered approach to ERP modernisation.',excerpt:'How leaders can frame the decisions that shape an ERP programme.'}
];
export const mega = [
 {title:'Advisory & Services',links:[['Enterprise Advisory','/enterprise-advisory'],['Managed Services','/managed-services'],['Enterprise Talent','/enterprise-talent']]},
 {title:'Technology Practices',links:[['SAP Practice','/sap'],['IFS Practice','/ifs'],['Data & AI Practice','/data-ai'],['Odoo Practice','/odoo']]},
 {title:'Certified Alliances',links:[['Cybersecurity','/cybersecurity'],['Snowflake','/cybersecurity']]}
];
