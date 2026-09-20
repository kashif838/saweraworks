// All site copy in one place. Every string here is taken verbatim from the audited live site
// (site-audit/saveraworks-audit.md). Items with `flag` need client approval before the flag is removed.

export const contact = {
  phone: "703-508-2402",
  phoneDisplay: "703 508-2402",
  phoneHref: "tel:7035082402",
  email: "info@saveraworks.com",
  location: "McLean, VA",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Submit your Resume", href: "/submit-resume" },
  { label: "Contact us", href: "/contact-us" },
] as const;

export const hero = {
  title: "Your Partner in Precision Staffing",
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
  items: ["Finance", "Clerical", "IT", "Construction", "Labor", "Engineering Support Services"],
};

export const process = {
  heading: "How it works",
  headingFlag: "Content review required",
  sub: "4 simple steps to your dedicated Outsourced staff",
  // Restates the four step titles and the daily reporting step. See newCopyFlag.
  extra: "The same four steps apply to every placement, from writing the job description through to day-to-day management, with structured daily reporting that keeps you informed of progress throughout.",
  stepsFlag: "Template filler", // steps describe research and academic work
  steps: [
    { n: "01", title: "Job Description", text: "At Savera Works, we specialize in delivering innovative and reliable solutions across research, teaching support, and project development." },
    { n: "02", title: "We Recruit", text: "We recruit passionate individuals with strong academic backgrounds and a commitment to excellence in research and education." },
    { n: "03", title: "Daily Reporting", text: "We follow a structured daily reporting system to ensure transparency and progress tracking." },
    { n: "04", title: "We Manage", text: "Savera Works effectively manages research projects, academic tasks, and professional services through strategic planning and organized execution." },
  ],
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
  sectorsHeading: "Specialized talent acquisition for",
  sectors: ["Finance", "Clerical", "IT", "Construction", "Labor", "Engineering Support Services"],
};

export const resumePage = {
  title: "Submit your Resume",
  crumb: "Submit Resume",
  processHeading: "Here is how our registration process works",
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
