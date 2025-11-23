const originalHeroes = [
  { name: "Rasvanekana74", role: "tank", hp: 120, power: 25 },
  { name: "Squiks", role: "tank", hp: 110, power: 20 },
  { name: "xXxSnipersh0txXx", role: "raviarst", hp: 80, power: 10 },
  { name: "TSM MART TTV", role: "raviarst", hp: 75, power: 12 },
  { name: "Messi3428", role: "ründaja", hp: 90, power: 30 },
  { name: "Fak3r-.-", role: "ründaja", hp: 95, power: 35 },
];

const originalBoss = {
  name: "Kõva Kamakas",
  hp: 200,
  maxHp: 200,
};


let heroes = []; 
let boss = { ...originalBoss }; 
let bossDefeated = false;


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

function launchConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
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
    

    if (hero.hp <= 30) {
        hpSpan.style.color = "var(--danger)"; 
    }

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
  
  if (boss.hp <= 0 && !bossDefeated) {
    appendLog("VICTORY! Boss on alistatud! 🎉");
    launchConfetti(); 
    bossDefeated = true; 
  }
  if (boss.hp > 0) {
      bossDefeated = false;
  }
}

function bossAttack() {
  if (heroes.length === 0 || boss.hp <= 0) return;

  const target = heroes[Math.floor(Math.random() * heroes.length)];

  const dmg = Math.floor(Math.random() * (40 - 15 + 1)) + 15;

  target.hp = Math.max(0, target.hp - dmg);

  appendLog("Boss ründab: " + target.name + " kaotab " + dmg + " HP");

  const before = heroes.length;
  heroes = heroes.filter(h => h.hp > 0);
  if (heroes.length !== before) {
    appendLog("Kangelane langes lahingus");
  }

  renderHeroes(heroes);
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
    renderHeroes(heroes); 
    appendLog("Kuvame kõik kangelased");
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
  bossDefeated = false; 
  renderHeroes(heroes);
  renderBoss();
  appendLog("Taastasime algse meeskonna ja bossi");
}

function attackBoss() {
  if (boss.hp <= 0) {
    appendLog("Boss on juba alistatud!");
    return;
  }

  const attackers = heroes.filter(h => h.role === "ründaja");
  const dmg = calcTeamPower(attackers);
  boss.hp = Math.max(0, boss.hp - dmg);
  renderBoss();
  appendLog("Ründajad tegid bossile " + dmg + " kahju");

  if (boss.hp > 0) {
    bossAttack();
  }
}

function healTanks() {
  if (boss.hp <= 0) {
    appendLog("Boss on alistatud, ravi pole vajalik!");
    return;
  }
  š
  heroes.forEach(hero => {
    if (hero.role === "tank") {
      hero.hp += 15;
    }
  });
  renderHeroes(heroes);
  appendLog("Raviarstid ravisid tanke (+15 HP)");

  if (boss.hp > 0) {
    bossAttack();
  }
}


resetTeam();