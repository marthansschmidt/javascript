const originalHeroes = [
  { name: "Tugev Tom", role: "tank", hp: 120, power: 25 },
  { name: "Kaitsev Kai", role: "tank", hp: 110, power: 20 },
  { name: "Ravi-Riina", role: "raviarst", hp: 80, power: 10 },
  { name: "Sära-Siim", role: "raviarst", hp: 75, power: 12 },
  { name: "Noole-Naima", role: "ründaja", hp: 90, power: 30 },
  { name: "Mõõga-Mari", role: "ründaja", hp: 95, power: 35 },
];

const originalBoss = {
  name: "Varju-Kuningas",
  hp: 200,
  maxHp: 200,
};


let heroes = []; 
let boss = { ...originalBoss }; 


const heroListEl = document.getElementById("heroList");
const heroCountEl = document.getElementById("heroCount");
const teamPowerEl = document.getElementById("teamPower");
const logEl = document.getElementById("log");
const roleSelect = document.getElementById("roleSelect");
const bossNameEl = document.getElementById("bossName");
const bossHpEl = document.getElementById("bossHp");
const bossBarInner = document.getElementById("bossBarInner");



function appendLog(message) {
  logEl.textContent += message + "\n";
  logEl.scrollTop = logEl.scrollHeight;
}

function renderHeroes(list) {
  heroListEl.innerHTML = "";
  list.forEach(hero => {
    const card = document.createElement("div");
    card.className = "hero-card";

    const nameEl = document.createElement("h3");
    nameEl.textContent = hero.name;

    const roleEl = document.createElement("p");
    roleEl.textContent = "Roll: " + hero.role;

    const statsEl = document.createElement("div");
    const hpSpan = document.createElement("span");
    hpSpan.textContent = "HP: " + hero.hp;
    const powerSpan = document.createElement("span");
    powerSpan.textContent = "Power: " + hero.power;

    statsEl.appendChild(hpSpan);
    statsEl.appendChild(document.createTextNode(" | "));
    statsEl.appendChild(powerSpan);

    card.appendChild(nameEl);
    card.appendChild(roleEl);
    card.appendChild(statsEl);

    heroListEl.appendChild(card);
  });
  heroCountEl.textContent = list.length;
}

function renderBoss() {
  bossNameEl.textContent = boss.name;
  bossHpEl.textContent = "HP: " + boss.hp;
  const percent = (boss.hp / boss.maxHp) * 100;
  bossBarInner.style.width = Math.max(0, Math.min(100, percent)) + "%";
  if (boss.hp <= 0) {
    appendLog("Boss on alistatud!");
  }
}

function showAllHeroes() {
  heroes = originalHeroes.map(h => ({ ...h }));
  renderHeroes(heroes);
  renderBoss();
  appendLog("Kuvame kõik kangelased");
}

function filterByRole() {
  const value = roleSelect.value;
  if (value === "all") {
    showAllHeroes();
  } else {
    const filtered = heroes.filter(hero => hero.role === value);
    renderHeroes(filtered);
    appendLog("Filtreerime rolli järgi: " + value);
  }
}

function boostTeam() {
  heroes.forEach(hero => {
    hero.hp += 10;
  });
  renderHeroes(heroes);
  appendLog("Lisatud +10 HP kõigile kangelastele");
}

function calcTeamPower(list) {
  if (list.length === 0) return 0;
  return list.reduce((sum, hero) => sum + hero.power, 0);
}

function showTeamPower() {
  const power = calcTeamPower(heroes);
  teamPowerEl.textContent = power;
  appendLog("Meeskonna kogujõud: " + power);
}

function resetTeam() {
  heroes = originalHeroes.map(h => ({ ...h }));
  boss = { ...originalBoss };
  teamPowerEl.textContent = "0";
  logEl.textContent = "";
  renderHeroes(heroes);
  renderBoss();
  appendLog("Taastasime algse meeskonna ja bossi");
}

function attackBoss() {
  const attackers = heroes.filter(h => h.role === "ründaja");
  const dmg = calcTeamPower(attackers);
  boss.hp = Math.max(0, boss.hp - dmg);
  renderBoss();
  appendLog("Ründajad tegid bossile " + dmg + " kahju");
}

function healTanks() {
  heroes.forEach(hero => {
    if (hero.role === "tank") {
      hero.hp += 15;
    }
  });
  renderHeroes(heroes);
  appendLog("Raviarstid ravisid tanke (+15 HP)");
}


resetTeam();