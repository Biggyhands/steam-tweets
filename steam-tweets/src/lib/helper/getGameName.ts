export function getGameName(): string {
  const nombresVideojuegos: string[] = [
    "Super Mario Odyssey",
    "The Legend of Zelda: Breath of the Wild",
    "Red Dead Redemption 2",
    "Grand Theft Auto V",
    "Minecraft",
    "The Witcher 3: Wild Hunt",
    "Fortnite",
    "Call of Duty: Warzone",
    "Animal Crossing: New Horizons",
    "Cyberpunk 2077",
    "Elden Ring",
    "God of War Ragnarok",
    "Hogwarts Legacy",
    "Marvel's Spider-Man: Miles Morales",
    "Ghost of Tsushima",
    "The Last of Us Part II",
    "Death Stranding",
    "Horizon Forbidden West",
    "Assassin's Creed Valhalla",
    "Far Cry 6",
    "Halo Infinite",
    "Forza Horizon 5",
    "Diablo IV",
    "Starfield",
    "Baldur's Gate 3",
    "Resident Evil Village",
    "Metroid Dread",
    "It Takes Two",
    "Disco Elysium",
    "Doom Eternal",
    "Sekiro: Shadows Die Twice",
    "Control",
    "Outer Wilds",
    "Hades",
    "Celeste",
    "Stardew Valley",
    "Terraria",
    "RimWorld",
    "Factorio",
    "Cities: Skylines",
    "Crusader Kings III",
    "Europa Universalis IV",
    "Hearts of Iron IV",
    "Stellaris",
    "Civilization VI",
    "XCOM 2",
    "Divinity: Original Sin 2",
    "Pillars of Eternity",
    "Pathfinder: Wrath of the Righteous",
    "Disco Elysium",
    "Undertale",
    "Hollow Knight",
    "Ori and the Blind Forest",
    "Cuphead",
    "Dead Cells",
    "Guacamelee!",
    "Shovel Knight",
    "Hotline Miami",
    "Katana ZERO",
    "My Friend Pedro",
    "A Short Hike",
    "Baba Is You",
    "Return of the Obra Dinn",
    "Papers, Please",
    "This War of Mine",
    "SOMA",
    "Amnesia: The Dark Descent",
    "Outlast",
    "Layers of Fear",
    "Resident Evil 7: Biohazard",
    "Alien: Isolation",
    "Subnautica",
    "No Man's Sky",
    "Elite Dangerous",
    "Star Citizen",
    "Kerbal Space Program",
    "Oxygen Not Included",
    "The Long Dark",
    "Frostpunk",
    "This War of Mine",
    "Don't Starve",
    "7 Days to Die",
    "Project Zomboid",
    "DayZ",
    "Rust",
    "Ark: Survival Evolved",
    "Subnautica",
    "Valheim",
    "Satisfactory",
    "Astroneer",
    "Deep Rock Galactic",
    "Lethal Company",
    "Phasmophobia",
    "Among Us",
    "Fall Guys",
    "Apex Legends",
    "Valorant",
    "Overwatch 2",
    "Team Fortress 2",
    "Counter-Strike 2",
  ];

  const indiceAleatorio = Math.floor(Math.random() * nombresVideojuegos.length);
  return nombresVideojuegos[indiceAleatorio];
}
