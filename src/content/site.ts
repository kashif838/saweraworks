// All site copy in one place. Every string here is taken verbatim from the audited live site
// (site-audit/saveraworks-audit.md). Items with `flag` need client approval before the flag is removed.

export const contact = {
  phone: "703-508-2402",
  phoneDisplay: "703 508-2402",
  phoneHref: "tel:7035082402",
  email: "info@saveraworks.com",
  location: "8200 Greensboro Drive, McLean, VA 22102",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Government", href: "/government" },
  { label: "Submit Resume", href: "/submit-resume" },
  { label: "Contact us", href: "/contact-us" },
] as const;

export const hero = {
  title: "We take the stress out of your staffing needs",
  text: "Savera Works is your trusted partner in staffing excellence, offering specialized talent acquisition for Finance, Clerical, IT, Construction, Labor, and Engineering Support Services.",
};

export const about = {
  heading: "About us",
  p1: "Exclusive industry focus. First-hand staffing experience in all sectors of the market. Professional recruiting expertise. Savera Works provides the people and services to ensure your success. To find out more, please call us at",
  p2: "Savera Works began in 2011 as a small women owned staffing firm in Northern Virginia. We offer pay-rolling, contract, and direct hire placement, as well as a cost-effective temp-to-hire option, which ensures your organization is fully staffed at all times.",
  p3: "At Savera Works, our staffing professionals will provide personal service to help you find a rewarding opportunity that fits your needs. Here is how our registration process works",
  p3Flag: "Content review required", // "Wroks"
  // Facts restate what p2 already says; no new claims.
  facts: [
    ["Established", "2011"],
    ["Ownership", "Women owned staffing firm"],
    ["Based in", "Northern Virginia"],
  ] as const,
};

// Copy written for this build rather than lifted from the live site. Each line only restates
// facts that already appear in the audited content — no new services, numbers or claims.
// Shown with a "New copy" tag until the client signs it off.
export const newCopyFlag = "New copy";

// Home sectors section. Heading and list are the sectors named in the hero sentence.
export const sectors = {
  heading: "Specialized talent acquisition for",
  text: "Savera Works is your trusted partner in staffing excellence, offering specialized talent acquisition across these sectors.",
  // Restates: "First-hand staffing experience in all sectors of the market", "Professional
  // recruiting expertise", and the four placement types from the About paragraph.
  extra: "Each placement is handled by staffing professionals with first-hand experience in that sector. Whether you need pay-rolling, contract, direct hire placement or a cost-effective temp-to-hire option, the same recruiting expertise applies.",
  // Industries and workforce supported, as supplied by the client.
  items: [
    "Utilities & Energy",
    "Construction & Infrastructure",
    "State & Local Government",
    "Colleges & Universities",
    "Public Works & Facilities",
    "Engineering & Technical",
    "Skilled Trades & General Labor",
    "Administrative & Professional Support",
    "IT & Data Support",
    "Logistics & Warehouse Operations",
  ],
};

// Recruiting and fulfillment method, supplied by the client. Verbatim.
export const process = {
  heading: "Recruiting and Fulfillment Method",
  sub: "Savera Works uses a structured recruiting process designed for rapid municipal response without sacrificing candidate quality.",
  steps: [
    { n: "01", title: "Request intake and acknowledgment", text: "Target acknowledgment within 2–4 hours." , img: "/images/step-intake.jpg", alt: "Taking a staffing request at the desk" },
    { n: "02", title: "Requirements validation", text: "Confirm job duties, qualifications, schedule, location, duration, credentials, and screening requirements." , img: "/images/documents.jpg", alt: "Reviewing role requirements" },
    { n: "03", title: "Candidate sourcing", text: "Search the internal database and pipeline, employee referrals, job boards, local recruiting channels, and targeted outreach." , img: "/images/step-sourcing.jpg", alt: "Searching the candidate pipeline" },
    { n: "04", title: "Recruiter screening", text: "Verify hard skills, experience, availability, communication skills, and fit for the assignment." , img: "/images/interview.jpg", alt: "Recruiter screening a candidate" },
    { n: "05", title: "Candidate presentation", text: "Target submission of qualified candidates within 6–8 hours for many classifications; labor and administrative candidates may be available for immediate start depending on the requirement." , img: "/images/step-presentation.jpg", alt: "Presenting candidates in a boardroom" },
    { n: "06", title: "Client interview and selection", text: "Coordinate telephone, virtual, or in-person interviews as requested." , img: "/images/step-interview.jpg", alt: "Client interview at the table" },
    { n: "07", title: "Pre-employment vetting", text: "Complete required background, drug, driving-record, credential, education, employment, and other position-specific checks." , img: "/images/step-vetting.jpg", alt: "Pre-employment paperwork" },
    { n: "08", title: "Onboarding and deployment", text: "Complete employment documentation, payroll setup, assignment orientation, and reporting instructions." , img: "/images/agreement.jpg", alt: "Onboarding agreement" },
    { n: "09", title: "Ongoing management", text: "Confirm first-day start, maintain communication with the employee and hiring manager, and address performance or attendance issues promptly." , img: "/images/team.jpg", alt: "Savera Works team at work" },
    { n: "10", title: "Replacement and continuity", text: "Rapidly source acceptable replacement personnel when an assignment ends unexpectedly or the City requests a change." , img: "/images/step-continuity.jpg", alt: "Colleagues handing over an assignment" },
  ],
  screeningHeading: "Screening, Credentialing, and Compliance",
  screeningText: "Savera Works maintains a position-specific screening process: criminal-history screening, Social Security trace/identity verification, sex-offender registry screening, employment and education verification, at least three professional reference checks for every candidate, and additional checks — driving records, credit history, drug testing, fingerprinting, polygraph examination, psychological evaluation, licenses, registrations, and certifications — when required by the position or client.",
};

export const benefits = {
  // One audited sentence split into a heading and a paragraph for layout. Wording unchanged.
  heading: "Cut your recruitment costs by up to 75%",
  text: "While still accessing rigorously vetted, high‑quality talent tailored to your business needs. Our transparent pricing, legal employment practices, and continuous staff performance monitoring ensure a reliable, low‑risk hiring partnership.",
  // Restates the vetting, transparent pricing and performance monitoring already named above. See newCopyFlag.
  extra: "That combination keeps hiring predictable: rigorously vetted candidates, pricing you can forecast, and continuous monitoring of staff performance.",
  splitFlag: "Presentational split",
  full: "Cut your recruitment costs by up to 75% while still accessing rigorously vetted, high‑quality talent tailored to your business needs. Our transparent pricing, legal employment practices, and continuous staff performance monitoring ensure a reliable, low‑risk hiring partnership.",
  items: ["Cost effective (save 75%)", "Highest quality staff", "Premium client services", "Transparent pricing", "Legal employment", "Staff performance"],
};

export const cta = {
  hire: { title: "Start Hiring", text: "To find out more, please call us at" },
  candidate: {
    title: "Submit your Resume",
    text: "Our staffing professionals will provide personal service to help you find a rewarding opportunity that fits your needs.",
  },
};

export const aboutPage = {
  title: "We take the stress out of your hiring needs!",
  crumb: "About us",
  heading: "About us",
  p1a: "Savera Works, established in June 2011 and headquartered in McLean, VA, is a female minority-owned staffing and recruiting firm specializing in serving the government and education sectors. With a twelve-year track record",
  p1Flag: "Content review required", // stale: founded 2011
  p1b: ", we are deeply committed to excellence and tailored staffing solutions that align with the strategic goals of public service and educational institutions.",
  p2: "Our guiding philosophy, “We take the stress out of your hiring needs!” underscores our dedication to providing seamless and efficient staffing services, allowing our clients to focus on their core missions while we handle the complexities of recruitment. We uphold core values of integrity, transparency, and client focus, guiding every interaction and ensuring that we not only meet but exceed client expectations.",
  facts: [
    ["Established", "June 2011"],
    ["Headquarters", "McLean, VA"],
    ["Ownership", "Female minority-owned"],
    ["Focus", "Government and education sectors"],
  ],

  // Second section. p3a/p3b are the single source paragraph split for layout; no new claims.
  growthHeading: "Growth, and the team behind it",
  p3a: "Over the past five years, Savera Works has experienced a remarkable growth of 2220%, demonstrating our financial stability and strong market presence. This growth is a testament to our ability to effectively scale operations and adapt to a dynamic market.",
  p3b: "Our team, composed of seasoned professionals from Fortune 500 staffing companies, brings a rich blend of industry best practices and extensive knowledge, enhancing our service delivery.",
  p3Flag: "Split for layout", // one source paragraph, shown as two
  stats: [
    ["2220%", "Growth over the past five years"],
    ["2011", "In business since June"],
    ["Fortune 500", "Where our staffing professionals trained"],
  ],

  valueHeading: "Our value",
  valueText: "Meanwhile, contractors appreciate our reliable and consistent payment schedule, as we ensure they are paid weekly, fostering a sense of security and respect. This regular payment schedule helps contractors feel more integrated and valued within the organizations they serve, not as temporary fill-ins but as essential contributors to the team.",
  values: [
    ["Strong Relationship Building", "We stay close to both sides of a placement, so clients and contractors deal with people who already know the role."],
    ["Trusted Human Capital Partner", "Twelve years of government and education staffing, handled by professionals from Fortune 500 staffing companies."],
    ["Comprehensive & Effective Staffing Solutions", "Pay-rolling, contract, direct hire placement and temp-to-hire, matched to the way each organization actually staffs."],
  ] as const,
  valuesFlag: "Duplicate", // source lists the first value twice
};

export const servicesPage = {
  title: "Our Services",
  crumb: "Our Services",
  whatWeDo: "What we do",
  placements: ["Pay-rolling", "Contract", "Direct hire placement", "Temp-to-hire"],
  placementsFlag: "Client input", // named in copy, no descriptions exist
  // Core competencies, as supplied by the client.
  competenciesHeading: "Core competencies",
  competencies: [
    { label: "Administrative & Clerical Support", icon: "clipboard" },
    { label: "Customer Service & Call Centers", icon: "headset" },
    { label: "Finance & Accounting", icon: "chart" },
    { label: "Logistics & Warehouse Operations", icon: "box" },
    { label: "Information Technology (IT) & Technical Staffing", icon: "monitor" },
    { label: "Facilities Support, Public Works & Sanitation", icon: "wrench" },
    { label: "Skilled Trades, Mechanics & General Labor", icon: "hardhat" },
    { label: "Engineering & Laboratory Support", icon: "flask" },
    { label: "Data & Business Analysis", icon: "database" },
    { label: "Temporary, Contract, Contract-to-Hire & Direct Hire", icon: "people" },
  ] as const,
  sectorsHeading: "Industries and workforce supported",
  sectors: [
    "Utilities & Energy",
    "Construction & Infrastructure",
    "State & Local Government",
    "Colleges & Universities",
    "Public Works & Facilities",
    "Engineering & Technical",
    "Skilled Trades & General Labor",
    "Administrative & Professional Support",
    "IT & Data Support",
    "Logistics & Warehouse Operations",
  ],
};

// Government page. Every line below is taken from the Capability Statement PDF
// (Capability_Statement.pdf in the project root). Nothing here is written for the site.
export const governmentPage = {
  title: "When you need staff, think Savera",
  crumb: "Government",
  lead: "Fast. Flexible. Fully managed workforce support.",
  intro: "Savera Works fills critical workforce gaps quickly while handling recruiting, screening, onboarding, payroll, and employee administration for you. From one specialist to multiple shifts or project teams of up to 80 personnel, Savera provides one accountable team from recruitment through assignment completion.",
  stats: [
    ["24–48 hours", "Response on standard staffing requirements"],
    ["80 personnel", "Scale of a single deployment"],
    ["50 states", "Nationwide service area"],
  ],

  capabilitiesHeading: "Workforce capabilities",
  capabilities: [
    { icon: "clipboard", title: "Administrative and Professional",
      roles: "Administrative assistants, program analysts, project coordinators, records, customer service, call-center personnel, and document control." },
    { icon: "chart", title: "Finance, Acquisition and HR",
      roles: "Accounting, billing, payroll, financial analysts, procurement/contract support, recruiting, HR operations, and training coordination." },
    { icon: "monitor", title: "IT, Data and Technical",
      roles: "Help desk, desktop/application support, QA testers, data/business analysts, reporting, engineering technicians, and technical writers." },
    { icon: "hardhat", title: "Manufacturing and Skilled Operations",
      roles: "Production, assembly, machine operators, mechanics, maintenance technicians, skilled trades, quality, and facilities support." },
    { icon: "box", title: "Warehouse, Logistics and Supply",
      roles: "Material handlers, forklift operators, inventory, shipping/receiving, production control, asset support, and logistics coordinators." },
    { icon: "flask", title: "Laboratory, Field and Public Works",
      roles: "Laboratory technicians, field support, general labor, public works, fleet/mechanical, sanitation, and operational personnel." },
  ] as const,

  experienceHeading: "Relevant delivery experience",
  experience: [
    { client: "Fairfax County",
      text: "Multidisciplinary staffing for mechanics, engineers, laboratory technicians, IT, analysts, call-center, administrative, procurement, professional, and operational personnel; approximately 25–28 workers at one facility and 40–60 seasonal personnel." },
    { client: "City of Alexandria",
      text: "Incumbent workforce support for public works and labor-intensive operations, including recruiting, onboarding, payroll, timekeeping, invoicing, reporting, issue resolution, and account management." },
  ] as const,

  useHeading: "How organizations can use Savera",
  use: [
    "Temporary, contract, direct-hire, workforce augmentation, and payroll-only solutions.",
    "One specialist through multi-shift or project deployments of up to 80 personnel.",
    "Nationwide delivery with screening, onboarding, timekeeping, payroll, invoicing, reporting, and account management.",
  ],
  engagementHeading: "Core engagement options",
  engagement: [
    "Temporary and contract staffing.",
    "Direct recruitment and placement.",
    "Workforce augmentation and project teams.",
    "Payroll and employer-of-record support.",
    "Prime-contractor and subcontract staffing.",
    "Surge, seasonal, vacancy, and backfill coverage.",
  ],

  deliveryHeading: "Delivery model",
  delivery: "Standard staffing requirements are commonly filled within 24–48 hours, often sooner. Savera supports one specialist, a project team, multiple shifts, seasonal demand, or deployments of up to 80 personnel. One accountable team manages recruiting, screening, onboarding, worker communication, timekeeping, payroll, invoicing, reporting, and executive escalation.",

  valueHeading: "Business value to clients",
  value: [
    "Fill standard staffing requirements within 24–48 hours, often sooner.",
    "Scale from one specialist to project teams of up to 80 personnel.",
    "Reduce internal recruiting, onboarding, payroll, and workforce-administration demands.",
    "Provide one accountable point of contact for employees, reporting, and issue resolution.",
    "Support vacancies, difficult shifts, seasonal demand, project surges, and urgent backfills.",
    "Help prime contractors and corporate clients meet diverse-supplier participation goals.",
  ],

  dataHeading: "Company data",
  data: [
    ["Business type", "Small, Micro, Woman-Owned and Minority-Owned Staffing and Recruiting Firm"],
    ["Headquarters", "McLean, Virginia"],
    ["Service area", "Nationwide — all 50 states"],
    ["Established", "June 2011"],
    ["Certification", "Virginia SWaM Certified"],
    ["CAGE", "7R3W6"],
    ["UEI", "STDCL6N3NC68"],
  ] as const,
  naicsHeading: "NAICS codes",
  naics: [
    ["561320", "Temporary Help Services"],
    ["561311", "Employment Placement Agencies"],
    ["561210", "Facilities Support Services"],
    ["561110", "Office Administrative Services"],
    ["541611", "Administrative Management and General Management Consulting Services"],
    ["541612", "Human Resources Consulting Services"],
  ] as const,

  contactHeading: "Government point of contact",
  poc: { name: "Usma Khan", role: "CEO", email: "ukhan@saveraworks.com", phone: "(703) 593-0915", phoneHref: "tel:7035930915",
         address: "8200 Greensboro Drive, Suite 900, McLean, VA 22102" },
};

export const resumePage = {
  title: "Submit your Resume",
  crumb: "Submit Resume",
  processHeading: "How we fill a request",
  consent: "Confirm that the information provided is true and accurate.",
  privacyFlag: "Implementation requirement", // no privacy policy exists yet
};

export const contactPage = {
  title: "Contact us",
  crumb: "Contact",
};

export const footer = {
  useful: [
    { label: "About us", href: "/about-us" },
    { label: "Services", href: "/our-services" },
    { label: "Government", href: "/government" },
    { label: "Contact us", href: "/contact-us" },
  ],
  services: [
    { label: "Outsourcing", href: "/our-services" },
    { label: "Outstaffing", href: "/our-services" },
    { label: "Business Assistance", href: "/our-services" },
  ],
  socialHeading: "Connect With Us",
  socialNote: "Profile links not yet supplied",
  socialFlag: "Cleanup",
  social: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"], // no URLs exist on the live site
  copyright: "Copyright © 2026 Savera Works | Powered by",
  builder: { label: "Saabify", href: "https://www.saabify.com/" },
};
