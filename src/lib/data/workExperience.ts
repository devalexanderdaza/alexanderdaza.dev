export const workExperience = `/**
* Professional Experience
*
* ETRAINING SAS | Nov 2024 - Present
* SR. FULL STACK DEVELOPER
* - Implemented REST services for MinTic Talento Tech program
* - Developed banking security monitoring system
* - Stack: Node.js, Python, Blockchain (Algorand), PHP
*
* VALIDATION SOLUTIONS SAS | Oct 2019 - May 2024
* SR. FULL STACK DEVELOPER
* - Led development team improving efficiency by 85%
* - Implemented REST/SOAP services optimizing system communication
* - Developed automated Web Scraping solutions
* - Stack: Java, Node.js, Python, GO Lang, React, Angular, Vue
*
* INTERCOM TECNOLOGÍA | Jul 2017 - Sep 2019
* SR. BACKEND & MOBILE DEVELOPER
* - Developed banking core modules
* - Created native/hybrid mobile applications
* - Reduced security vulnerabilities by 7%
* - Stack: Java, C#, Swift, Flutter, .NET Core
*
* SAVES SAS | Jun 2011 - Jun 2017
* SR. FULL STACK DEVELOPER & TECH LEAD
* - Developed custom web solutions
* - Created award-winning educational mobile app
* - Led technical decisions and team management
* - Stack: PHP, JavaScript, Java, iOS development
*/`;

export interface IExperience {
	name: string;
	company: string;
	workDates: string;
	workDescription: string;
	skills: string;
}

export const workExperiences: IExperience[] = [
	{
		name: 'Sr. Full stack Developer\nSr. Full stack Developer',
		company:
			'Validation Solutions SAS · Jornada completa\nValidation Solutions SAS · Jornada completa',
		workDates: 'oct. 2019 - may. 2024 · 4 años 8 meses',
		workDescription:
			'Diseño, desarrollo, consumo e implementación de piezas de software REST y SOAP en múltiples arquitecturas y lenguajes de programación, además de desarrollo de procesos de Web Scraping con Selenium, Puppeteer entre otros.\n\n • Diseñe e implementé servicios REST y SOAP, que permitieron y optimizaron la comunicación entre sistemas en un 35%.\n • Desarrollé procesos automatizados de Web Scraping utilizando Selenium y Puppeteer, facilitando e incrementando la eficiencia en la recolección de datos en un 50%.\n • Lideré un equipo de desarrolladores en la creación de la plataforma SaaS de la compañía, mejorando la eficiencia del proceso, objetivos y cumplimiento de Historias de Usuario en un 85%.\n • Implementé mejoras de rendimiento tanto de infraestructura, proceso y software , logrando optimizar el performance de múltiples procesos hasta en un 25%.\n • Desarrolle soluciones personalizadas para clientes, incrementando la satisfacción del cliente en un 20%.\n • Integré nuevas tecnologías y prácticas de desarrollo en el equipo, mejorando la productividad en un 30%.\n • Realicé pruebas y aseguramiento de calidad de las aplicaciones, disminuyendo errores en producción hasta en un 15%.',
		skills:
			'Stack: Java (Spring Boot), JavaScript/TypeScript (NodeJS, NestJS, Angular, React, Vue), Python (Flask, Django), Web Scrapping (Puppeteer, Selenium, Cypress) - Test: Junit, Mocha, Jest, Pytest'
	},
	{
		name: 'Sr. Backend Developer & Ssr. Mobile Developer\nSr. Backend Developer & Ssr. Mobile Developer',
		company: 'Intercom · Jornada completa\nIntercom · Jornada completa',
		workDates: 'jul. 2017 - sept. 2019 · 2 años 3 meses',
		workDescription:
			'Desarrollo y mantenimiento de módulos para entidades bancarias, haciendo uso de múltiples arquitecturas, lenguajes de programación y siempre, aplicando las mejores prácticas de desarrollo en seguridad, además de desarrollar aplicaciones móviles nativas e híbridas para iOS y Android.\n\n • Desarrollé y mantuve módulos bancarios del CORE ofertado por la compañía para entidades bancarias.\n • Implementé arquitecturas seguras, reduciendo vulnerabilidades de seguridad hasta en un 7%.\n • Desarrollé aplicaciones móviles nativas e híbridas para iOS y Android, mejorando procesos y aumentando la satisfacción de la base de usuarios móviles.\n • Utilicé múltiples lenguajes de programación compilados e interpretados para crear soluciones flexibles y escalables, incrementando la eficiencia del desarrollo en un 15%.\n • Realicé pruebas y aseguramiento de calidad de las aplicaciones, disminuyendo errores en producción hasta en un 15%.\n • Colaboré con equipos multifuncionales para asegurar la integración de nuevas funcionalidades, mejorando la satisfacción del cliente en un 25%.',
		skills:
			'Stack: Java (Spring Boot, Android), C# (.NET Core), Objective C, Swift, Dart (Flutter), JavaScript/TypeScript (NodeJS, NestJS, Angular, React, Vue) - Test: Junit, Mocha, Jest.'
	},
	{
		name: 'Sr. Full Stack Developer & Tech Lead\nSr. Full Stack Developer & Tech Lead',
		company: 'Saves S.A.S. · Jornada completa\nSaves S.A.S. · Jornada completa',
		workDates: 'jun. 2011 - jun. 2017 · 6 años 1 mes',
		workDescription:
			'Desarrollo de software web a medida para diferentes tipos de clientes. Liderazgo del equipo de trabajo, en la toma de decisiones a nivel de arquitectura, implementación, manejo de proyectos y administración de recurso humano en TI. También, participé en un concurso interno de la compañía proponiendo una solución de software para el sector educativo que fue presentado en APPS.CO del gobierno, la cual fue seleccionada para participar a nivel nacional.\n\n • Desarrollé sistemas web a medida desde la fase de requerimientos, cumpliendo con los mismos y mejorando la satisfacción del cliente en un 25%.\n • Creé una aplicación móvil para el sector educativo que ganó el primer lugar en Santander, el segundo lugar a nivel regional y el quinto lugar a nivel nacional en el concurso Apps.co UNAB.\n • Represente a la empresa en Apps.co UNAB, destacando en el sector educativo y aumentando la visibilidad de la empresa.\n • Logré el ascenso a Tech Lead de la compañía gracias al éxito del desarrollo de la aplicación móvil para el sector educativo EVOZ.\n • Lideré al equipo de desarrollo para implementar mejoras continuas en los proyectos web y móviles, incrementando la eficiencia del equipo en un 30%.\n • Apliqué mejores prácticas de desarrollo y metodologías ágiles, reduciendo tiempos de entrega de proyectos en un 20%.\n • Colaboré estrechamente con los clientes para entender sus necesidades y traducirlas en soluciones técnicas efectivas, mejorando la fidelización de los clientes en un 15%.\n • Supervisé y mentoreé a desarrolladores junior, fomentando su crecimiento profesional y mejorando la calidad del código en un 35%.',
		skills:
			'Stack: PHP (Symfony, CodeIgniter, Laravel), JavaScript (jQuery, jQuery Mobile, IONIC), Java (Android), Objective C (iOS)'
	}
];
