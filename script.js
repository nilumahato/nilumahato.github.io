const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Hero
$("name").textContent = DATA.name;
$("intro").textContent = DATA.intro;
$("year").textContent = new Date().getFullYear();

const published = DATA.projects.filter((p) => p.type === "published").length;
$("stats").innerHTML = [
  [published, "Published apps"],
  [DATA.projects.length, "Projects"],
  [2, "Stores: Play & App Store"],
].map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");

// Typing effect
(function typer() {
  const el = $("typed");
  let r = 0, i = 0, del = false;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.textContent = DATA.roles[0]; return; }
  (function tick() {
    const word = DATA.roles[r];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = del ? 40 : 90;
    if (!del && i === word.length) { del = true; wait = 1400; }
    else if (del && i === 0) { del = false; r = (r + 1) % DATA.roles.length; wait = 300; }
    setTimeout(tick, wait);
  })();
})();

// Projects with filters
const labels = { all: "All", published: "Published", hackathon: "Hackathon", academic: "Academic", internship: "Internship" };
function renderProjects(filter) {
  $("grid").innerHTML = DATA.projects
    .filter((p) => filter === "all" || p.type === filter)
    .map((p) => {
      const badge = p.type === "published" ? "Live on stores" : p.tag || labels[p.type];
      const links = p.type === "published"
        ? `<div class="links"><a href="${esc(p.play)}" target="_blank" rel="noopener">Google Play ↗</a><a href="${esc(p.apple)}" target="_blank" rel="noopener">App Store ↗</a></div>`
        : "";
      return `<article class="card"><span class="badge">${esc(badge)}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>${links}</article>`;
    }).join("");
}
const types = ["all", ...new Set(DATA.projects.map((p) => p.type))];
$("filters").innerHTML = types.map((t) => `<button class="chip${t === "all" ? " on" : ""}" data-t="${t}">${labels[t] || t}</button>`).join("");
$("filters").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === b));
  renderProjects(b.dataset.t);
});
renderProjects("all");

// Experience
$("timeline").innerHTML = DATA.experience.map((x) => `
  <div class="item">
    <h3>${esc(x.role)}</h3>
    <div class="org">${esc(x.org)}</div>
    <div class="meta">${esc(x.date)} · ${esc(x.meta)}</div>
    <ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
  </div>`).join("");

// Skills
$("skillsList").innerHTML = DATA.skills.map((g) => `
  <div class="skill-group"><h3>${esc(g.group)}</h3><div class="tags">${g.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div></div>`).join("");

// Education & competitions
$("edu").innerHTML = "<h3>Education</h3>" + DATA.education.map((e) => `
  <div class="item"><h3>${esc(e.school)}</h3><div class="meta">${esc(e.degree)} · ${esc(e.date)}</div></div>`).join("");
$("comp").innerHTML = "<h3>Competitions</h3>" + DATA.competitions.map((c) => `<div class="item"><h3>${esc(c)}</h3></div>`).join("");

// Contact
$("contactInfo").innerHTML =
  `Open to opportunities. Reach me at <a href="mailto:${DATA.email}">${DATA.email}</a> or find me on <a href="${DATA.github}" target="_blank" rel="noopener">GitHub</a>. Based in ${esc(DATA.location)}.`;
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("msg")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:${DATA.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
});

// Theme (remembers choice, defaults to system preference)
const root = document.documentElement;
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (_) {}
root.dataset.theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
$("theme").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
});

// Scroll reveal + active nav link
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) en.target.classList.add("show");
}), { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((s) => io.observe(s));

const navIO = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) {
    document.querySelectorAll("#links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => navIO.observe(s));
