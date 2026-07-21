const pillars = [
  { id: "wellbeing", name: "Human well-being", color: "#f0c35b", description: "Health, education, safety, care, housing, dignity, and the practical freedom to live a meaningful life." },
  { id: "prosperity", name: "Shared prosperity", color: "#d8794f", description: "Economic security, worker power, fair opportunity, public goods, and broadly shared material abundance." },
  { id: "democracy", name: "Democratic agency", color: "#79b7a2", description: "Equal voice, civil and political rights, accountable institutions, participation, and protection from domination." },
  { id: "living", name: "Living systems", color: "#a7c957", description: "Climate stability, biodiversity, ecological responsibility, regeneration, and responsibility across generations." },
];

const entries = [
  { id: "rights-man", year: 1789, kind: "idea", title: "Declaration of the Rights of Man and of the Citizen", short: "A landmark statement that political legitimacy rests on equal civic rights.", context: "Adopted during the French Revolution, the declaration framed liberty, equality before the law, and popular sovereignty as public principles. Its exclusions and contradictions also show why rights must continue to expand.", pillars: ["democracy", "wellbeing"] },
  { id: "douglass", year: 1852, kind: "person", title: "Frederick Douglass", short: "Abolitionist arguments linked freedom, citizenship, and democratic accountability.", context: "Douglass exposed the contradiction between democratic ideals and slavery, and argued for abolition, equal citizenship, education, and political participation.", pillars: ["democracy", "wellbeing", "prosperity"] },
  { id: "labor", year: 1886, kind: "movement", title: "The eight-hour-day movement", short: "Workers organized to make time, safety, and dignity part of economic progress.", context: "The international struggle for an eight-hour workday challenged the idea that economic output alone defined progress. It tied prosperity to power over working conditions and time.", pillars: ["prosperity", "wellbeing", "democracy"] },
  { id: "addams", year: 1889, kind: "person", title: "Jane Addams and Hull House", short: "Settlement work connected care, democracy, labor reform, and public health.", context: "Hull House combined neighborhood services, research, civic education, arts, and advocacy. Its work influenced labor protections, public health, and social welfare while also reflecting tensions within Progressive Era reform.", pillars: ["wellbeing", "democracy", "prosperity"] },
  { id: "du-bois", year: 1903, kind: "person", title: "W.E.B. Du Bois", short: "Scholarship and organizing connected racial justice to full democratic and economic citizenship.", context: "Du Bois analyzed the color line, helped build institutions for civil rights, and insisted that political equality required education, economic opportunity, and organized power.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "new-deal", year: 1935, kind: "idea", title: "Social Security and the New Deal settlement", short: "Federal policy expanded economic security and public responsibility for well-being.", context: "New Deal programs established enduring labor, infrastructure, and social-insurance institutions. Many programs also reproduced racial and gender exclusions, making their legacy both foundational and incomplete.", pillars: ["prosperity", "wellbeing", "democracy"] },
  { id: "udhr", year: 1948, kind: "idea", title: "Universal Declaration of Human Rights", short: "Civil, political, social, and economic rights were articulated as interdependent.", context: "The declaration joined freedom of expression and participation with rights to education, work, health, and an adequate standard of living, offering a broad international vocabulary for human dignity.", pillars: ["wellbeing", "democracy", "prosperity"] },
  { id: "carson", year: 1962, kind: "person", title: "Rachel Carson and Silent Spring", short: "Ecological harm became a question of public health, evidence, and democratic oversight.", context: "Carson’s work showed how chemical pollution moved through living systems and human bodies. It helped make environmental protection a matter of public responsibility rather than private preference.", pillars: ["living", "wellbeing", "democracy"] },
  { id: "civil-rights", year: 1964, kind: "idea", title: "Civil Rights Act", short: "Federal law prohibited major forms of discrimination in public life and employment.", context: "Won through decades of organizing, the Act transformed the legal framework for equal citizenship while leaving substantial work on enforcement, economic inequality, and structural racism.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "king", year: 1967, kind: "person", title: "Martin Luther King Jr. and economic justice", short: "Civil rights, peace, labor, and economic security were presented as one democratic struggle.", context: "King’s later work linked racial equality to union rights, a guaranteed income, anti-poverty policy, and opposition to war. The Poor People’s Campaign made material security central to democratic freedom.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "earth-day", year: 1970, kind: "movement", title: "The first Earth Day", short: "Mass participation helped move environmental protection into public policy.", context: "Teach-ins and demonstrations across the United States connected pollution, public health, conservation, and civic action, contributing to a new era of environmental law and institutions.", pillars: ["living", "wellbeing", "democracy"] },
  { id: "fuller", year: 1975, kind: "person", title: "Buckminster Fuller and comprehensive design", short: "Design was framed as a way to meet human needs within planetary limits.", context: "Fuller promoted systems thinking, resource efficiency, and design science aimed at improving living standards without exhausting the planet. Some claims were utopian, but the integrative frame remains influential.", pillars: ["living", "wellbeing", "prosperity"] },
  { id: "disability", year: 1977, kind: "movement", title: "The 504 Sit-in and disability rights organizing", short: "Disabled organizers made access, autonomy, and enforcement matters of civil rights.", context: "The 1977 sit-ins demanded implementation of Section 504 of the Rehabilitation Act. The movement demonstrated how care, infrastructure, economic inclusion, and political agency intersect.", pillars: ["wellbeing", "democracy", "prosperity"] },
  { id: "maathai", year: 1977, kind: "person", title: "Wangari Maathai and the Green Belt Movement", short: "Tree planting connected ecological restoration, women’s livelihoods, and democratic action.", context: "Founded in Kenya, the Green Belt Movement linked local environmental stewardship with women’s economic agency, community organizing, and resistance to authoritarian power.", pillars: ["living", "prosperity", "democracy", "wellbeing"] },
  { id: "davis", year: 1981, kind: "person", title: "Angela Davis and interconnected liberation", short: "Anti-racist, feminist, labor, and prison-abolition analysis challenged single-issue reform.", context: "Davis’s scholarship and activism emphasize how race, gender, class, punishment, and political power reinforce one another, encouraging structural rather than isolated analysis.", pillars: ["democracy", "wellbeing", "prosperity"] },
  { id: "brundtland", year: 1987, kind: "idea", title: "Sustainable development", short: "Present needs and the rights of future generations were placed in one policy frame.", context: "The Brundtland Commission popularized development that meets present needs without compromising future generations. The framework helped connect poverty, growth, and ecology, while debates continue over implementation.", pillars: ["living", "prosperity", "wellbeing"] },
  { id: "budgeting", year: 1989, kind: "movement", title: "Participatory budgeting in Porto Alegre", short: "Residents directly shaped public spending priorities.", context: "Participatory budgeting gave communities a structured role in allocating municipal resources. Variants have since spread globally, testing how democratic agency can change material distribution.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "ostrom", year: 1990, kind: "person", title: "Elinor Ostrom and governing the commons", short: "Research showed communities can build durable rules for shared resources.", context: "Ostrom documented how people can govern forests, fisheries, water, and other commons through locally adapted institutions, challenging a simple choice between privatization and centralized control.", pillars: ["living", "democracy", "prosperity"] },
  { id: "sen", year: 1999, kind: "person", title: "Amartya Sen and development as freedom", short: "Development was evaluated through real human capabilities, not income alone.", context: "Sen’s capabilities approach asks what people are actually able to be and do. It influenced broader measures of development, linking health, education, agency, and economic life.", pillars: ["wellbeing", "prosperity", "democracy"] },
  { id: "buen-vivir", year: 2008, kind: "idea", title: "Buen vivir in constitutional debate", short: "Well-being and rights of nature entered national constitutional frameworks.", context: "Drawing partly from Indigenous Andean concepts, Ecuador’s 2008 constitution recognized rights of nature and buen vivir. Translation into state policy remains contested and should not flatten diverse Indigenous traditions.", pillars: ["living", "wellbeing", "democracy"] },
  { id: "occupy", year: 2011, kind: "movement", title: "Occupy and the language of the 99 percent", short: "Economic concentration and democratic power became a shared public argument.", context: "Occupy Wall Street spread a durable critique of inequality, wealth concentration, debt, and political influence. Its decentralized form also raised questions about governance and sustained organization.", pillars: ["prosperity", "democracy", "wellbeing"] },
  { id: "paris", year: 2015, kind: "idea", title: "Paris climate agreement", short: "Nearly every country adopted a common framework for limiting climate risk.", context: "The agreement created nationally determined climate commitments and a process for strengthening them over time. Present commitments and implementation remain insufficient to meet its temperature goals.", pillars: ["living", "prosperity", "wellbeing", "democracy"] },
  { id: "land-back", year: 2018, kind: "movement", title: "Land Back and Indigenous sovereignty movements", short: "Land stewardship, jurisdiction, culture, and repair are advanced as inseparable.", context: "Land Back is not one organization or policy. Diverse Indigenous-led efforts seek the return of land, decision-making authority, cultural renewal, and restoration of relationships with living systems.", pillars: ["living", "democracy", "wellbeing", "prosperity"] },
  { id: "green-new-deal", year: 2019, kind: "idea", title: "Green New Deal resolution", short: "Climate action was connected to jobs, justice, infrastructure, and public investment.", context: "The proposed U.S. congressional resolution framed decarbonization as an economic and social transformation. It remains a proposal rather than enacted comprehensive policy.", pillars: ["living", "prosperity", "wellbeing", "democracy"] },
  { id: "haitian-revolution", year: 1791, kind: "movement", title: "The Haitian Revolution", short: "Enslaved people overthrew colonial rule and created an independent state.", context: "The Haitian Revolution turned universal claims about liberty into a direct challenge to slavery and empire. Haiti’s independence transformed Atlantic politics, while foreign isolation and imposed debt constrained the new nation for generations.", pillars: ["democracy", "wellbeing", "prosperity"] },
  { id: "rochdale", year: 1844, kind: "movement", title: "The Rochdale cooperative principles", short: "Workers developed a democratic model for shared ownership and exchange.", context: "The Rochdale Society of Equitable Pioneers helped codify member control, open participation, education, and shared economic benefit. Cooperative practice has since taken many forms across sectors and countries.", pillars: ["prosperity", "democracy", "wellbeing"] },
  { id: "seneca-falls", year: 1848, kind: "movement", title: "The Seneca Falls Convention", short: "Organizers demanded women’s civil, social, economic, and political equality.", context: "The convention’s Declaration of Sentiments challenged women’s exclusion from voting, property rights, education, employment, and public life. Its participants did not represent all women, and later suffrage politics often reproduced racial exclusion.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "populists", year: 1892, kind: "movement", title: "The People’s Party platform", short: "Farmers and workers challenged concentrated economic and political power.", context: "The Omaha Platform called for public control of railroads, monetary reform, labor protections, and democratic changes. Populism contained interracial organizing in some places and racism and exclusion in others.", pillars: ["prosperity", "democracy"] },
  { id: "triangle", year: 1911, kind: "movement", title: "Triangle Shirtwaist fire and labor reform", short: "A workplace disaster intensified demands for safety, inspection, and worker power.", context: "The deaths of 146 garment workers exposed locked exits and dangerous factory conditions. Organizing and investigation helped produce stronger fire, building, and labor standards, though unsafe work remains a global problem.", pillars: ["wellbeing", "prosperity", "democracy"] },
  { id: "salt-march", year: 1930, kind: "movement", title: "The Salt March", short: "Mass civil disobedience challenged colonial authority through an everyday necessity.", context: "Gandhi and thousands of participants protested Britain’s salt monopoly in India. The campaign demonstrated the political force of nonviolent mass action while the broader independence movement contained many leaders, strategies, and unresolved social divisions.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "beveridge", year: 1942, kind: "idea", title: "The Beveridge Report", short: "Social insurance and universal public services were framed as foundations of freedom.", context: "The British report proposed coordinated action against want, disease, ignorance, squalor, and idleness. It influenced the postwar welfare state and National Health Service, while debates over eligibility, care, and austerity continued.", pillars: ["wellbeing", "prosperity", "democracy"] },
  { id: "bandung", year: 1955, kind: "movement", title: "The Bandung Conference", short: "Newly independent states advanced cooperation beyond Cold War blocs.", context: "Delegates from Asian and African countries addressed colonialism, sovereignty, economic development, racism, and peaceful coexistence. Bandung helped shape the Non-Aligned Movement and demands for a more equitable international order.", pillars: ["democracy", "prosperity", "wellbeing"] },
  { id: "stonewall", year: 1969, kind: "movement", title: "Stonewall and LGBTQ+ liberation organizing", short: "Resistance to police harassment accelerated a broader movement for dignity and rights.", context: "The Stonewall uprising became a major symbol, not the sole origin, of LGBTQ+ liberation. Organizing before and after it pursued safety, legal equality, healthcare, cultural freedom, and protection from discrimination.", pillars: ["wellbeing", "democracy", "prosperity"] },
  { id: "stockholm", year: 1972, kind: "idea", title: "The Stockholm Conference on the Human Environment", short: "Environmental protection became a formal subject of international cooperation.", context: "The conference linked pollution, resource use, human well-being, and development, leading to the creation of the UN Environment Programme. Tensions between wealthy and developing countries shaped the emerging agenda.", pillars: ["living", "wellbeing", "prosperity", "democracy"] },
  { id: "cedaw", year: 1979, kind: "idea", title: "Convention on the Elimination of Discrimination against Women", short: "International law addressed discrimination across political, economic, social, and family life.", context: "CEDAW established obligations for participating states to pursue substantive equality. Reservations, uneven enforcement, and the exclusion of some gender experiences limit its reach in practice.", pillars: ["democracy", "wellbeing", "prosperity"] },
  { id: "montreal", year: 1987, kind: "idea", title: "The Montreal Protocol", short: "Science, regulation, finance, and international cooperation aligned to protect the ozone layer.", context: "Countries agreed to phase out ozone-depleting substances, with differentiated responsibilities and financial support. It is a strong example of adaptive environmental governance, though not a template that transfers automatically to every crisis.", pillars: ["living", "wellbeing", "democracy", "prosperity"] },
  { id: "south-africa", year: 1996, kind: "idea", title: "South Africa’s post-apartheid Constitution", short: "Political rights and enforceable social rights were placed in one constitutional order.", context: "The Constitution protects equality, dignity, expression, democratic participation, housing, healthcare, food, water, education, and environmental rights. Deep material inequality shows the distance that can remain between legal commitment and lived outcome.", pillars: ["democracy", "wellbeing", "prosperity", "living"] },
  { id: "black-lives-matter", year: 2013, kind: "movement", title: "Black Lives Matter", short: "A decentralized movement transformed public debate about policing, racism, and state accountability.", context: "Created by Alicia Garza, Patrisse Cullors, and Opal Tometi, the phrase and network grew through local organizing. Participants have advanced varied demands involving safety, budgets, incarceration, democracy, care, and economic justice.", pillars: ["democracy", "wellbeing", "prosperity"] },
  { id: "sdgs", year: 2015, kind: "idea", title: "The Sustainable Development Goals", short: "Seventeen global goals placed poverty, health, equality, institutions, and ecology in one framework.", context: "Adopted by all UN member states, the goals encourage connected measurement through 2030. Their breadth supports systems thinking, but voluntary implementation, uneven data, and political tradeoffs constrain accountability.", pillars: ["wellbeing", "prosperity", "democracy", "living"] },
  { id: "current-draft", year: 2025, kind: "idea", title: "V-Impact Founder’s Draft 1.0", short: "A proposed framework asks how multiple measures of progress can guide public action.", context: "The founder’s draft introduces Conscious Progress and Multi-Metric Capitalism as starting ideas. It has not been approved by members and still needs specific policies, evidence, governance rules, and public revision methods.", pillars: ["wellbeing", "prosperity", "democracy", "living"] },
  { id: "lowell-mill-women", year: 1834, kind: "movement", title: "Lowell mill women organize", short: "Women factory workers linked wages, working time, education, and political voice.", context: "Women in Lowell, Massachusetts organized turnouts and later labor-reform associations against wage cuts and exhausting hours. Their movement widened public arguments about industrial freedom, although it did not overcome the racial and gender exclusions of the period.", pillars: ["prosperity", "wellbeing", "democracy"], source: "https://www.nps.gov/lowe/learn/historyculture/the-mill-girls-of-lowell.htm", sourceLabel: "National Park Service" },
  { id: "chartism", year: 1838, kind: "movement", title: "Chartism and the People’s Charter", short: "British workers made political representation part of the struggle for material security.", context: "The People’s Charter demanded a broader male franchise, secret ballots, equal electoral districts, paid legislators, and other democratic reforms. Many demands were later enacted, but the charter excluded women and the movement did not end class domination.", pillars: ["democracy", "prosperity", "wellbeing"], source: "https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/chartists/overview/chartistmovement/", sourceLabel: "UK Parliament" },
  { id: "thirteenth-amendment", year: 1865, kind: "idea", title: "The Thirteenth Amendment", short: "Constitutional abolition ended legal chattel slavery in the United States.", context: "The amendment abolished slavery and involuntary servitude except as punishment for crime. That exception, together with Black Codes, racial terror, convict leasing, and later mass incarceration, shows how formal abolition did not secure equal freedom or material repair.", pillars: ["democracy", "wellbeing", "prosperity"], source: "https://www.archives.gov/milestone-documents/13th-amendment", sourceLabel: "U.S. National Archives" },
  { id: "social-insurance-germany", year: 1883, kind: "idea", title: "Germany’s first national social-insurance laws", short: "Public policy treated illness, injury, disability, and old age as shared social risks.", context: "German laws introduced compulsory health, accident, disability, and old-age insurance for many workers and influenced later welfare systems. Coverage was partial, administration reinforced state and employer power, and the reforms were also designed to blunt socialist organizing.", pillars: ["wellbeing", "prosperity", "democracy"], source: "https://www.ssa.gov/history/ottob.html", sourceLabel: "U.S. Social Security Administration" },
  { id: "finland-suffrage", year: 1906, kind: "idea", title: "Equal suffrage in Finland", short: "Women gained full national voting and candidacy rights on equal terms with men.", context: "Finland became the first country in Europe to grant women both the vote and eligibility for parliament, and women entered parliament in 1907. Formal political equality did not automatically remove economic inequality or unequal burdens of care.", pillars: ["democracy", "wellbeing", "prosperity"], source: "https://www.eduskunta.fi/EN/naineduskuntatoimii/kirjasto/aineistot/yhteiskunta/historia/naisten-aanioikeus-110-vuotta/Pages/default.aspx", sourceLabel: "Parliament of Finland" },
  { id: "ilo", year: 1919, kind: "idea", title: "The International Labour Organization", short: "Labor standards became a permanent subject of international governance.", context: "The ILO brought governments, employers, and workers into a tripartite institution focused on rights at work, social protection, and dialogue. Its conventions have shaped national law, but ratification and enforcement remain uneven and many informal workers remain poorly protected.", pillars: ["prosperity", "wellbeing", "democracy"], source: "https://www.ilo.org/about-ilo/history-ilo", sourceLabel: "International Labour Organization" },
  { id: "wagner-act", year: 1935, kind: "idea", title: "The Wagner Act and collective bargaining", short: "U.S. federal law protected many private-sector workers’ right to organize and bargain collectively.", context: "The National Labor Relations Act created a durable legal framework for unions and required employers to bargain with chosen representatives. Agricultural and domestic workers were excluded, reinforcing racial and gender inequality, and later law and enforcement narrowed worker power.", pillars: ["prosperity", "democracy", "wellbeing"], source: "https://www.nlrb.gov/about-nlrb/who-we-are/our-history/1935-enforcement-of-the-wagner-act", sourceLabel: "National Labor Relations Board" },
  { id: "fair-labor-standards", year: 1938, kind: "idea", title: "The Fair Labor Standards Act", short: "Federal minimum-wage, overtime, and child-labor rules established a floor beneath employment.", context: "The law made wages, working time, and child labor matters of public responsibility rather than contract alone. Initial exclusions left many agricultural, domestic, and service workers outside protection, and the value and reach of its standards remain politically contested.", pillars: ["prosperity", "wellbeing", "democracy"], source: "https://guides.loc.gov/this-month-in-business-history/june/fair-labor-standards-act-signed", sourceLabel: "Library of Congress" },
  { id: "echr", year: 1950, kind: "idea", title: "The European Convention on Human Rights", short: "Individuals gained a regional legal route for challenging state violations of civil and political rights.", context: "The convention and its court created enforceable regional protections for life, liberty, privacy, expression, association, and fair process. Compliance depends on member states, access can be slow, and the instrument does not by itself guarantee economic equality.", pillars: ["democracy", "wellbeing"], source: "https://www.coe.int/en/web/human-rights-convention", sourceLabel: "Council of Europe" },
  { id: "european-social-charter", year: 1961, kind: "idea", title: "The European Social Charter", short: "Economic and social rights were framed as counterparts to civil and political rights.", context: "The charter protects rights connected to work, health, housing, education, social protection, and welfare. States can accept different provisions, enforcement is less direct than under the European Convention, and austerity has repeatedly tested its promises.", pillars: ["wellbeing", "prosperity", "democracy"], source: "https://www.coe.int/en/web/european-social-charter", sourceLabel: "Council of Europe" },
  { id: "voting-rights-act", year: 1965, kind: "idea", title: "The Voting Rights Act", short: "Federal power confronted racial barriers to voting in the United States.", context: "Won through sustained civil-rights organizing, the law prohibited discriminatory practices and enabled federal oversight in jurisdictions with entrenched exclusion. Later court decisions weakened preclearance, while voter suppression and unequal access continue.", pillars: ["democracy", "wellbeing", "prosperity"], source: "https://www.archives.gov/milestone-documents/voting-rights-act", sourceLabel: "U.S. National Archives" },
  { id: "human-rights-covenants", year: 1966, kind: "idea", title: "The two international human-rights covenants", short: "Civil-political and economic-social-cultural rights became binding treaty obligations.", context: "The ICCPR and ICESCR translated much of the Universal Declaration into international law and affirmed that different categories of rights are connected. Reservations, non-ratification, weak remedies, and uneven state compliance limit their practical reach.", pillars: ["democracy", "wellbeing", "prosperity"], source: "https://www.ohchr.org/en/what-are-human-rights/international-bill-human-rights", sourceLabel: "UN Human Rights Office" },
  { id: "clean-air-act", year: 1970, kind: "idea", title: "The modern U.S. Clean Air Act", short: "Air pollution became subject to national health standards and enforceable public regulation.", context: "The law authorized national air-quality standards and controls on major pollution sources, producing large public-health benefits. Exposure remains unequal, implementation is contested, and climate pollution was not its original organizing purpose.", pillars: ["living", "wellbeing", "democracy", "prosperity"], source: "https://www.epa.gov/clean-air-act-overview/evolution-clean-air-act", sourceLabel: "U.S. Environmental Protection Agency" },
  { id: "osha", year: 1970, kind: "idea", title: "The Occupational Safety and Health Act", short: "A safe workplace became an enforceable public obligation in the United States.", context: "The act created federal institutions for workplace standards, inspection, research, and training. Coverage and enforcement resources remain incomplete, retaliation can suppress reporting, and occupational risk still falls disproportionately on lower-paid and migrant workers.", pillars: ["wellbeing", "prosperity", "democracy"], source: "https://www.dol.gov/general/aboutdol/history/mono-regsafepart06", sourceLabel: "U.S. Department of Labor" },
  { id: "chipko", year: 1973, kind: "movement", title: "The Chipko movement", short: "Himalayan communities connected forest protection to livelihoods, water, soil, and local authority.", context: "Villagers—especially women—used nonviolent resistance against commercial logging in northern India and helped shift forest policy. The movement included varied local campaigns and interests; reducing it to a single heroic story obscures that complexity.", pillars: ["living", "wellbeing", "prosperity", "democracy"], source: "https://www.fao.org/4/r0465e/r0465e03.htm", sourceLabel: "UN Food and Agriculture Organization" },
  { id: "warren-county", year: 1982, kind: "movement", title: "Warren County and environmental justice", short: "A predominantly Black community made unequal pollution burdens a national civil-rights issue.", context: "Mass protest against a hazardous-waste landfill in North Carolina helped catalyze the U.S. environmental-justice movement and research on environmental racism. The landfill was built despite protest, illustrating the gap between public attention and community control.", pillars: ["living", "wellbeing", "democracy", "prosperity"], source: "https://19january2021snapshot.epa.gov/environmentaljustice/environmental-justice-timeline_.html", sourceLabel: "U.S. Environmental Protection Agency archive" },
  { id: "ipcc", year: 1988, kind: "idea", title: "The Intergovernmental Panel on Climate Change", short: "Governments created a shared process for assessing climate science, risks, and response options.", context: "The IPCC synthesizes peer-reviewed evidence through international expert review and has made climate risk legible to policy makers worldwide. It does not make policy, consensus processes can be conservative, and knowledge alone has not produced adequate action.", pillars: ["living", "wellbeing", "prosperity", "democracy"], source: "https://www.ipcc.ch/about/history/", sourceLabel: "Intergovernmental Panel on Climate Change" },
  { id: "ada", year: 1990, kind: "idea", title: "The Americans with Disabilities Act", short: "Disability access and nondiscrimination gained broad civil-rights protection.", context: "The ADA addressed employment, government services, public accommodations, transportation, and communication barriers. Enforcement often depends on individual complaints, inaccessible systems persist, and legal access does not guarantee care or economic security.", pillars: ["wellbeing", "democracy", "prosperity"], source: "https://www.ada.gov/topics/intro-to-ada/", sourceLabel: "U.S. Department of Justice" },
  { id: "environmental-justice-principles", year: 1991, kind: "movement", title: "Principles of Environmental Justice", short: "Frontline communities articulated environmental protection as self-determination, health, labor, and human rights.", context: "Delegates to the First National People of Color Environmental Leadership Summit adopted principles connecting ecological harms to racism, colonialism, workplace danger, and democratic participation. The principles guide movements but are not themselves enforceable law.", pillars: ["living", "democracy", "wellbeing", "prosperity"], source: "https://www.ejnet.org/ej/principles.html", sourceLabel: "Environmental Justice Network" },
  { id: "rio-earth-summit", year: 1992, kind: "idea", title: "The Rio Earth Summit", short: "Climate, biodiversity, development, participation, and intergenerational responsibility entered one global agenda.", context: "Rio produced Agenda 21 and opened the climate and biodiversity conventions for signature while recognizing differentiated responsibilities. Much of the agenda was voluntary, and implementation has fallen far short of the ecological transformation envisioned.", pillars: ["living", "prosperity", "wellbeing", "democracy"], source: "https://www.un.org/en/conferences/environment/rio1992", sourceLabel: "United Nations" },
  { id: "disability-rights-convention", year: 2006, kind: "idea", title: "Convention on the Rights of Persons with Disabilities", short: "International law reframed disability around rights, autonomy, access, and inclusion.", context: "The convention rejects a purely medical model and requires participating states to address accessibility, independent living, education, work, political participation, and equal recognition. Ratification, domestic enforcement, and material support vary widely.", pillars: ["wellbeing", "democracy", "prosperity"], source: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities", sourceLabel: "UN Human Rights Office" },
  { id: "whanganui", year: 2017, kind: "idea", title: "Legal personhood for Te Awa Tupua", short: "New Zealand law recognized the Whanganui River as an indivisible living whole with legal standing.", context: "The settlement reflects generations of Whanganui iwi advocacy and establishes human representatives for the river’s interests. Legal personhood does not erase colonial history, settle every resource conflict, or automatically restore ecosystem health.", pillars: ["living", "democracy", "wellbeing", "prosperity"], source: "https://www.legislation.govt.nz/act/public/2017/0007/latest/whole.html", sourceLabel: "New Zealand Legislation" },
  { id: "escazu", year: 2018, kind: "idea", title: "The Escazú Agreement", short: "Latin America and the Caribbean linked environmental information, participation, justice, and defender protection.", context: "The regional treaty is the first to include specific obligations concerning environmental human-rights defenders. Ratification is incomplete, implementation capacity varies, and defenders continue to face severe violence.", pillars: ["living", "democracy", "wellbeing"], source: "https://www.cepal.org/en/escazuagreement", sourceLabel: "UN Economic Commission for Latin America and the Caribbean" },
  { id: "healthy-environment-right", year: 2022, kind: "idea", title: "UN recognition of the right to a healthy environment", short: "The General Assembly recognized a clean, healthy, and sustainable environment as a human right.", context: "The resolution connected ecological conditions directly to human dignity and strengthened a norm already present in many constitutions and regional systems. It is not legally binding by itself and requires national law, institutions, finance, and enforcement to change lived conditions.", pillars: ["living", "wellbeing", "democracy"], source: "https://www.unep.org/news-and-stories/story/historic-move-un-declares-healthy-environment-human-right", sourceLabel: "UN Environment Programme" },
];

const canvas = document.querySelector("#progress-canvas");
const stage = document.querySelector("#map-stage");
const detail = document.querySelector("#node-detail");
const list = document.querySelector("#map-list");
const yearRange = document.querySelector("#year-range");
const yearOutput = document.querySelector("#year-output");
const motionToggle = document.querySelector("#motion-toggle");
const pillarFilters = document.querySelector("#pillar-filters");
const pillarCards = document.querySelector("#pillar-cards");
const mapEmpty = document.querySelector("#map-empty");

if (canvas && stage) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("The Conscious Progress map requires a 2D canvas context.");
  const state = { yaw: -.46, pitch: -.16, zoom: 1, dragging: false, moved: false, lastX: 0, lastY: 0, year: 2026, pillar: "all", motion: false, kinds: new Set(["person", "movement", "idea"]), projected: [], selected: null, hovered: null };
  const kindLabel = { person: "Person", movement: "Movement", idea: "Policy or idea" };
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  pillars.forEach((pillar, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pillar-filter";
    button.dataset.pillar = pillar.id;
    button.classList.add(`pillar-${pillar.id}`);
    button.setAttribute("aria-pressed", "false");
    button.textContent = pillar.name;
    pillarFilters.append(button);

    const card = document.createElement("article");
    card.className = "pillar-card";
    card.classList.add(`pillar-${pillar.id}`);
    card.innerHTML = `<span class="pillar-index">Pillar ${index + 1}</span><h3>${pillar.name}</h3><p>${pillar.description}</p><button type="button" data-pillar="${pillar.id}">Show its connections in the map</button>`;
    pillarCards.append(card);
  });

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "pillar-filter";
  allButton.dataset.pillar = "all";
  allButton.classList.add("pillar-all");
  allButton.setAttribute("aria-pressed", "true");
  allButton.textContent = "Show all pillars";
  pillarFilters.prepend(allButton);

  const visibleEntries = () => entries.filter((entry) => entry.year <= state.year && state.kinds.has(entry.kind) && (state.pillar === "all" || entry.pillars.includes(state.pillar)));
  const primaryPillar = (entry) => pillars.find((pillar) => pillar.id === entry.pillars[0]);
  const coords = (entry, index) => {
    const main = pillars.findIndex((pillar) => pillar.id === entry.pillars[0]);
    const yearT = (entry.year - 1789) / (2026 - 1789);
    const angle = main * Math.PI / 2 + (index % 5 - 2) * .115;
    const radius = 175 + entry.pillars.length * 17;
    return { x: Math.cos(angle) * radius, y: (yearT - .5) * 520, z: Math.sin(angle) * radius };
  };

  const rotate = ({ x, y, z }) => {
    const cy = Math.cos(state.yaw), sy = Math.sin(state.yaw), cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
    const x1 = x * cy - z * sy;
    const z1 = x * sy + z * cy;
    return { x: x1, y: y * cp - z1 * sp, z: y * sp + z1 * cp };
  };

  const resize = () => {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const project = (point) => {
    const rect = stage.getBoundingClientRect();
    const rotated = rotate(point);
    const camera = 720 / state.zoom;
    const scale = camera / Math.max(260, camera + rotated.z);
    return { x: rect.width / 2 + rotated.x * scale, y: rect.height / 2 + rotated.y * scale, z: rotated.z, scale };
  };

  const drawLine = (a, b, color, alpha = .3, width = 1) => {
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.strokeStyle = color; ctx.globalAlpha = alpha; ctx.lineWidth = width; ctx.stroke(); ctx.globalAlpha = 1;
  };

  const render = () => {
    const rect = stage.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    const visible = visibleEntries();
    mapEmpty.hidden = visible.length > 0;

    const pillarPoints = pillars.map((pillar, index) => {
      const angle = index * Math.PI / 2;
      return { pillar, point: project({ x: Math.cos(angle) * 250, y: 0, z: Math.sin(angle) * 250 }) };
    });
    for (let y = -260; y <= 260; y += 65) {
      const ring = pillarPoints.map((_, index) => {
        const angle = index * Math.PI / 2;
        return project({ x: Math.cos(angle) * 250, y, z: Math.sin(angle) * 250 });
      });
      ring.forEach((point, index) => drawLine(point, ring[(index + 1) % ring.length], "#d9ed66", .08));
    }

    const projected = visible.map((entry, index) => ({ entry, ...project(coords(entry, entries.indexOf(entry))) })).sort((a, b) => b.z - a.z);
    const byId = new Map(projected.map((node) => [node.entry.id, node]));

    projected.forEach((node) => {
      const entryIndex = entries.indexOf(node.entry);
      const neighbors = visible.filter((candidate) => candidate.id !== node.entry.id && Math.abs(candidate.year - node.entry.year) <= 18 && candidate.pillars.some((pillar) => node.entry.pillars.includes(pillar))).slice(0, 2);
      neighbors.forEach((neighbor) => {
        const other = byId.get(neighbor.id);
        if (other && entries.indexOf(neighbor) > entryIndex) drawLine(node, other, primaryPillar(node.entry).color, .18, 1);
      });
    });

    projected.forEach((node) => {
      const pillar = primaryPillar(node.entry);
      const radius = Math.max(5, (node.entry === state.selected ? 12 : node.entry.kind === "person" ? 8 : 7) * node.scale);
      ctx.beginPath(); ctx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2); ctx.fillStyle = "#071f1b"; ctx.fill();
      ctx.beginPath(); ctx.arc(node.x, node.y, radius, 0, Math.PI * 2); ctx.fillStyle = pillar.color; ctx.fill();
      if (node.entry === state.selected) { ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke(); }
      const compact = rect.width < 620;
      const showLabel = node.entry === state.selected || node.entry === state.hovered || (!compact && node.scale > .88 && entries.indexOf(node.entry) % 4 === 0);
      if (showLabel) {
        ctx.font = `${node.entry === state.selected ? 700 : 600} ${Math.max(10, 11 * node.scale)}px Avenir Next, sans-serif`;
        ctx.fillStyle = "#f4efe3"; ctx.textAlign = "center";
        const label = node.entry.title.length > 32 ? `${node.entry.title.slice(0, 30)}…` : node.entry.title;
        ctx.fillText(label, node.x, node.y - radius - 9);
        ctx.fillStyle = "#9fb0a8"; ctx.font = `700 ${Math.max(9, 10 * node.scale)}px Avenir Next, sans-serif`;
        ctx.fillText(String(node.entry.year), node.x, node.y + radius + 14);
      }
    });
    state.projected = projected;
  };

  const showDetail = (entry, scroll = false) => {
    state.selected = entry;
    const connected = entry.pillars.map((id) => pillars.find((pillar) => pillar.id === id));
    const related = entries.filter((candidate) => candidate.id !== entry.id && candidate.pillars.some((id) => entry.pillars.includes(id))).map((candidate) => ({ candidate, score: candidate.pillars.filter((id) => entry.pillars.includes(id)).length * 100 - Math.abs(candidate.year - entry.year) })).sort((a, b) => b.score - a.score).slice(0, 3).map(({ candidate }) => candidate);
    const sourceLink = entry.source ? `<p class="detail-source"><a href="${entry.source}" target="_blank" rel="noopener noreferrer">Check the source: ${entry.sourceLabel}</a></p>` : "";
    detail.innerHTML = `<p class="detail-type">${kindLabel[entry.kind]}</p><p class="detail-year">${entry.year}</p><h2>${entry.title}</h2><p class="detail-summary"><strong>Why it appears in the map:</strong> ${entry.short}</p><p>${entry.context}</p>${sourceLink}<div class="detail-pillars" aria-label="Connected pillars">${connected.map((pillar) => `<span class="pillar-${pillar.id}">${pillar.name}</span>`).join("")}</div><div class="related-nodes"><strong>Explore nearby connections</strong>${related.map((item) => `<button type="button" data-related="${item.id}">${item.year} · ${item.title}</button>`).join("")}</div><p class="detail-hint">These are thematic editorial connections, not a claim of V-Impact affiliation or endorsement.</p>`;
    if (scroll) detail.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
    render();
  };

  detail.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-related]");
    if (button) showDetail(entries.find((entry) => entry.id === button.dataset.related));
  });

  const renderList = () => {
    const visible = visibleEntries();
    list.innerHTML = "";
    visible.sort((a, b) => a.year - b.year).forEach((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "map-list-card";
      button.classList.add(`pillar-${primaryPillar(entry).id}`);
      button.innerHTML = `<small>${entry.year} · ${kindLabel[entry.kind]}</small><strong>${entry.title}</strong><span>${entry.short}</span>`;
      button.addEventListener("click", () => showDetail(entry, true));
      list.append(button);
    });
    if (!visible.length) list.innerHTML = "<p>No contributions match the current filters. Expand the year or select more types.</p>";
  };

  const applyPillar = (id) => {
    state.pillar = id;
    document.querySelectorAll("[data-pillar]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.pillar === id)));
    renderList(); render();
    stage.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
  };

  pillarFilters.addEventListener("click", (event) => { const button = event.target.closest("button[data-pillar]"); if (button) applyPillar(button.dataset.pillar); });
  pillarCards.addEventListener("click", (event) => { const button = event.target.closest("button[data-pillar]"); if (button) applyPillar(button.dataset.pillar); });
  document.querySelectorAll(".kind-filter").forEach((input) => input.addEventListener("change", () => { input.checked ? state.kinds.add(input.value) : state.kinds.delete(input.value); renderList(); render(); }));
  yearRange.addEventListener("input", () => { state.year = Number(yearRange.value); yearOutput.textContent = yearRange.value; renderList(); render(); });
  motionToggle.addEventListener("click", () => { state.motion = !state.motion; motionToggle.setAttribute("aria-pressed", String(state.motion)); motionToggle.textContent = state.motion ? "Pause slow rotation" : "Start slow rotation"; });
  stage.addEventListener("pointerdown", (event) => { state.dragging = true; state.moved = false; state.lastX = event.clientX; state.lastY = event.clientY; stage.setPointerCapture(event.pointerId); });
  stage.addEventListener("pointermove", (event) => {
    if (state.dragging) {
      const dx = event.clientX - state.lastX, dy = event.clientY - state.lastY;
      if (Math.abs(dx) + Math.abs(dy) > 3) state.moved = true;
      state.yaw += dx * .008;
      state.pitch = Math.max(-1, Math.min(1, state.pitch + dy * .006));
      state.lastX = event.clientX; state.lastY = event.clientY; render(); return;
    }
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left, y = event.clientY - rect.top;
    const matchedNode = state.projected.find((node) => Math.hypot(node.x - x, node.y - y) < 14);
    const hit = matchedNode ? matchedNode.entry : null;
    if (hit !== state.hovered) { state.hovered = hit; stage.style.cursor = hit ? "pointer" : "grab"; render(); }
  });
  stage.addEventListener("pointerleave", () => { if (state.hovered) { state.hovered = null; render(); } });
  stage.addEventListener("pointerup", () => { state.dragging = false; });
  stage.addEventListener("wheel", (event) => { event.preventDefault(); state.zoom = Math.max(.65, Math.min(1.65, state.zoom - event.deltaY * .001)); render(); }, { passive: false });
  stage.addEventListener("click", (event) => { if (state.moved) return; const rect = canvas.getBoundingClientRect(); const x = event.clientX - rect.left, y = event.clientY - rect.top; const hit = state.projected.reduce((best, node) => { const distance = Math.hypot(node.x - x, node.y - y); const bestDistance = best ? best.distance : 22; return distance < bestDistance ? { entry: node.entry, distance } : best; }, null); if (hit) showDetail(hit.entry); });
  addEventListener("resize", () => { resize(); render(); });

  let last = performance.now();
  const animate = (time) => { if (state.motion && !reduceMotion.matches) { state.yaw += Math.min(32, time - last) * .00012; render(); } last = time; requestAnimationFrame(animate); };
  renderList();
  requestAnimationFrame(() => { resize(); render(); stage.classList.add("map-ready"); stage.dataset.mapReady = "true"; });
  requestAnimationFrame(animate);
}
