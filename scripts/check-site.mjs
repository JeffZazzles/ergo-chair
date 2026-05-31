import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const indexPath = join(projectRoot, "index.html");
const scriptPath = join(projectRoot, "script.js");
const stylePath = join(projectRoot, "styles.css");
const assetPath = join(projectRoot, "assets", "barcelona-ergonomic-office.png");

for (const filePath of [indexPath, scriptPath, stylePath, assetPath]) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
}

const indexHtml = readFileSync(indexPath, "utf8");
const scriptSource = readFileSync(scriptPath, "utf8");

const blockedPatterns = [/sandbox:/, /turn\d+(search|view)\d*/, /�/, /â/];
for (const pattern of blockedPatterns) {
  if (pattern.test(indexHtml) || pattern.test(scriptSource)) {
    throw new Error(`Found source-report artifact matching ${pattern}`);
  }
}

function makeElement(initial = {}) {
  return {
    value: "",
    textContent: "",
    innerHTML: "",
    dataset: {},
    classList: { toggle() {} },
    addEventListener() {},
    setAttribute() {},
    ...initial
  };
}

const chairGrid = makeElement();
const chairCount = makeElement();
const chairSearch = makeElement({ value: "" });
const heightChart = makeElement();
const buttons = ["all", "premium", "value", "budget", "risk"].map((filter) => {
  return makeElement({ dataset: { filter } });
});

const document = {
  querySelector(selector) {
    return {
      "#chairGrid": chairGrid,
      "#chairCount": chairCount,
      "#chairSearch": chairSearch,
      "#heightChart": heightChart
    }[selector] || null;
  },
  querySelectorAll(selector) {
    return selector === ".filter-button" ? buttons : [];
  }
};

vm.runInNewContext(scriptSource, { document });

const cardCount = (chairGrid.innerHTML.match(/class="chair-card"/g) || []).length;
const chartRows = (heightChart.innerHTML.match(/class="range-row"/g) || []).length;

if (cardCount !== 20) {
  throw new Error(`Expected 20 chair cards, found ${cardCount}`);
}

if (chartRows !== 10) {
  throw new Error(`Expected 10 chart rows, found ${chartRows}`);
}

console.log("Site check passed: 20 cards, 10 chart rows, required assets present.");
