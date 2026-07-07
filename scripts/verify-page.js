const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const photosGuidePath = path.join(root, "fotos", "README.md");
const html = fs.readFileSync(htmlPath, "utf8");
const classicPlanText = "Un sitio web personalizado con los nombres de los novios, cuenta regresiva, detalles de la iglesia/fiesta con mapas, y botón de confirmación de asistencia";

const checks = [
  {
    name: "primary confirmation uses WhatsApp with Bolivia placeholder number",
    pass: /https:\/\/wa\.me\/591700123456\?text=/.test(html)
      && /Confirmar por WhatsApp/.test(html),
  },
  {
    name: "confusing RSVP label is not visible",
    pass: !/>RSVP</.test(html) && !/RSVP<\/h3>/.test(html),
  },
  {
    name: "top confirmation action uses WhatsApp logo mark",
    pass: /class="nav-cta"[\s\S]*class="whatsapp-mark"/.test(html)
      && /aria-label="Confirmar por WhatsApp"/.test(html),
  },
  {
    name: "photo system uses one replaceable couple photo path",
    pass: /fotos\/casal\.jpg/.test(html),
  },
  {
    name: "old multi-person timeline was removed",
    pass: !/class="timeline"/.test(html) && !/class="chapter/.test(html),
  },
  {
    name: "broken Unsplash image is not used",
    pass: !/photo-1533622597524-a1215e26c0a1/.test(html),
  },
  {
    name: "content does not depend on reveal JavaScript to be visible",
    pass: !/IntersectionObserver/.test(html) && !/opacity:\s*0/.test(html),
  },
  {
    name: "GitHub photo upload instructions exist",
    pass: fs.existsSync(photosGuidePath),
  },
  {
    name: "page keeps a short wedding invitation structure",
    pass: /id="detalles"/.test(html)
      && /id="regalos"/.test(html)
      && /id="contacto"/.test(html)
      && /id="historia"/.test(html),
  },
  {
    name: "classic wedding plan text is shown exactly",
    pass: html.includes(classicPlanText),
  },
  {
    name: "old romantic story copy is removed",
    pass: !/Nuestra historia/.test(html)
      && !/Una celebración sencilla/.test(html)
      && !/Queremos compartir este día/.test(html),
  },
];

let failed = 0;

for (const check of checks) {
  if (check.pass) {
    console.log(`PASS ${check.name}`);
  } else {
    failed += 1;
    console.error(`FAIL ${check.name}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed.`);
  process.exit(1);
}

console.log("\nAll page checks passed.");
