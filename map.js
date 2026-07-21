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
  { id: "current-draft", year: 2025, kind: "idea", title: "V-Impact Founder’s Draft 1.0", short: "A proposed framework asks how multiple measures of progress can guide public action.", context: "The founder’s draft introduces Conscious Progress and Multi-Metric Capitalism as starting ideas. It has not been approved by members and still needs specific policies, evidence, governance rules, and public revision methods.", pillars: ["wellbeing", "prosperity", "democracy", "living"] },
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
      const showLabel = node.entry === state.selected || node.entry === state.hovered || (node.scale > .88 && entries.indexOf(node.entry) % 4 === 0);
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
    detail.innerHTML = `<p class="detail-type">${kindLabel[entry.kind]}</p><p class="detail-year">${entry.year}</p><h2>${entry.title}</h2><p>${entry.context}</p><div class="detail-pillars" aria-label="Connected pillars">${connected.map((pillar) => `<span class="pillar-${pillar.id}">${pillar.name}</span>`).join("")}</div><p class="detail-hint">These are thematic editorial connections, not a claim of V-Impact affiliation or endorsement.</p>`;
    if (scroll) detail.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
    render();
  };

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
    const hit = state.projected.find((node) => Math.hypot(node.x - x, node.y - y) < 14)?.entry ?? null;
    if (hit !== state.hovered) { state.hovered = hit; stage.style.cursor = hit ? "pointer" : "grab"; render(); }
  });
  stage.addEventListener("pointerleave", () => { if (state.hovered) { state.hovered = null; render(); } });
  stage.addEventListener("pointerup", () => { state.dragging = false; });
  stage.addEventListener("wheel", (event) => { event.preventDefault(); state.zoom = Math.max(.65, Math.min(1.65, state.zoom - event.deltaY * .001)); render(); }, { passive: false });
  stage.addEventListener("click", (event) => { if (state.moved) return; const rect = canvas.getBoundingClientRect(); const x = event.clientX - rect.left, y = event.clientY - rect.top; const hit = state.projected.reduce((best, node) => { const distance = Math.hypot(node.x - x, node.y - y); return distance < (best?.distance ?? 22) ? { entry: node.entry, distance } : best; }, null); if (hit) showDetail(hit.entry); });
  addEventListener("resize", () => { resize(); render(); });

  let last = performance.now();
  const animate = (time) => { if (state.motion && !reduceMotion.matches) { state.yaw += Math.min(32, time - last) * .00012; render(); } last = time; requestAnimationFrame(animate); };
  resize(); renderList(); render(); requestAnimationFrame(animate);
}
