const onSwitch = document.querySelector('#one');
const offSwitch = document.querySelector('#two');
const sheroes = document.querySelectorAll(".sheroes");
const strength = document.querySelector('strength');
const abaddon1 = document.querySelector('#Abaddon');
const aheroes = document.querySelectorAll(".aheroes");
const iheroes = document.querySelectorAll(".iheroes");
const hero = document.querySelector('.happy');

let title = document.querySelector('#project');
/*heroes--------strength------------------------------------------------------------------------------*/
let abaddon = document.querySelector('#abaddon_text');
let abaddonimage = document.querySelector("#abaddon");
let alchemist = document.querySelector('#alchemist_text');
let alchemistimage = document.querySelector("#alchemist");
let axe = document.querySelector('#axe_text');
let axeimage = document.querySelector("#axe");
let beastmaster = document.querySelector('#beastmaster_text');
let beastmasterimage = document.querySelector("#beastmaster");
let brewmaster = document.querySelector('#brewmaster_text')
let brewmasterimage = document.querySelector('#brewmaster');
let bristleback = document.querySelector('#bristleback_text')
let bristlebackimage = document.querySelector('#bristleback');
let centaur = document.querySelector('#centaur_text')
let centaurimage = document.querySelector('#centaur');
let chaos = document.querySelector('#chaos_text');
let chaosimage = document.querySelector('#chaos');
let clockwerk = document.querySelector('#clockwerk_text');
let clockwerkimage = document.querySelector('#clockwerk');
let dawnbreaker = document.querySelector('#dawnbreaker_text');
let dawnbreakerimage = document.querySelector('#dawnbreaker');
let doom = document.querySelector('#doom_text');
let doomimage = document.querySelector('#doom');
let dragon_knight = document.querySelector('#dragonknight_text');
let dragon_knightimage = document.querySelector('#dragonknight');
let earth_spirit = document.querySelector('#earthspirit_text');
let earth_spiritimage = document.querySelector('#earthspirit');
let earthshaker = document.querySelector('#earthshaker_text');
let earthshakerimage = document.querySelector('#earthshaker');
let elder_titan = document.querySelector('#eldertitan_text');
let elder_titanimage = document.querySelector('#eldertitan');
let huskar = document.querySelector('#huskar_text');
let huskarimage = document.querySelector('#huskar');
let io = document.querySelector('#io_text');
let ioimage = document.querySelector('#io');
let kunkka = document.querySelector('#kunkka_text');
let kunkkaimage = document.querySelector('#kunkka');
let legion = document.querySelector('#legion_text');
let legionimage = document.querySelector('#legion');
let lifestealer = document.querySelector('#lifestealer_text');
let lifestealerimage = document.querySelector('#lifestealer');
let lycan = document.querySelector('#lycan_text');
let lycanimage = document.querySelector('#lycan');
let magnus = document.querySelector('#magnus_text');
let magnusimage = document.querySelector('#magnus');
let mars = document.querySelector('#mars_text');
let marsimage = document.querySelector('#mars');
let night_stalker = document.querySelector('#nightstalker_text');
let night_stalkerimage = document.querySelector('#night_stalker');
let omniknight = document.querySelector('#onmiknight_text');
let omniknightimage = document.querySelector('#onmiknight');
let phoenix = document.querySelector('#phoenix_text');
let phoeniximage = document.querySelector('#phoenix');
let pudge = document.querySelector('#pudge_text');
let pudgeimage = document.querySelector('#pudge');
let sand_king = document.querySelector('#sandking_text');
let sand_kingimage = document.querySelector('#sand_king');
let slardar = document.querySelector('#slardar_text');
let slardarimage = document.querySelector('#slardar');
let snapfire = document.querySelector('#snapfire_text');
let snapfireimage = document.querySelector('#snapfire');
let spirit = document.querySelector('#spirit_breaker_text');
let spiritimage = document.querySelector('#spirit_breaker');
let sven = document.querySelector('#sven_text');
let svenimage = document.querySelector('#sven');
let tidehunter = document.querySelector('#tidehunter_text');
let tidehunterimage = document.querySelector('#tidehunter');
let timbersaw = document.querySelector('#timbersaw_text');
let timbersawimage = document.querySelector('#timbersaw');
let tiny = document.querySelector('#tiny_text');
let tinyimage = document.querySelector('#tiny');
let treant = document.querySelector('#treant_text');
let treantimage = document.querySelector('#treant_protector');
let tusk = document.querySelector('#tusk_text');
let tuskimage = document.querySelector('#tusk');
let underlord = document.querySelector('#underlord_text');
let underlordimage = document.querySelector('#underlord');
let undying = document.querySelector('#undying_text');
let undyingimage = document.querySelector('#undying');
let wraithking = document.querySelector('#wraithking_text');
let wraithkingimage = document.querySelector('#wraithking');

/*------------------------------------------Agility------------------------------------------------------------*/
let bounty_hunter = document.querySelector('#bounty_hunter');
let hoodwink = document.querySelector('#hoodwink_text');
let juggernaut = document.querySelector('#juggernaut_text');
let lonedruid_image = document.querySelector('#lone_druid');
let monkeyking = document.querySelector("#monkeyking_text");
let meepoimage = document.querySelector("#meepo");
let nagasirenimage = document.querySelector("#nagasiren");
let pangolierimage = document.querySelector("#pangolier");
let sniperimage = document.querySelector("#sniper");

/*-------------------------------------------Intelligence--------------------------------------------------------*/
let crystalmaidenimage = document.querySelector('#crystal_maiden');
let enchantressimage = document.querySelector('#enchantress');
let enigma = document.querySelector("#enigma_text");
let keeperimage = document.querySelector('#keeper');
let ogreimage = document.querySelector('#ogre');
let stormimage = document.querySelector('#stormspirit');
let zeus = document.querySelector('#zeus_text');
let techiesimage = document.querySelector('#techies');

/*------------------------------------------------------functions-----------------------------------------------*/
function green(e){
  console.log('hi');
  onSwitch.classList.add('green');
  offSwitch.classList.remove('red');
  title.textContent="DOTY Roster";
  //abaddonimage.src="image/elsa.jpeg";
  //alchemist.textContent = "Shrek";
  alchemistimage.src="shrek.jpeg";
  //axe.textContent = "Shrek";
//  axeimage.src="image/strength alt/shrek.jpeg";
//  beastmaster.textContent = "Shrek";
//  beastmasterimage.src="image/strength alt/shrek.jpeg";
//brewmaster.textContent = 'brew';
brewmasterimage.src="kungfupanda.jpeg";
//bristleback.textContent = 'Bristleback';
//bristlebackimage.src="image/strength alt/kungfupanda.jpeg";
//centaur.textContent="Centaur Warrunner";
centaurimage.src="terry.png";
chaos.textContent='Chaos Knight';
chaosimage.src="butters.jpeg";
earth_spiritimage.src="irongiant.jpeg"
earthshakerimage.src="chewy.jpeg";
legionimage.src="pharah.png";
night_stalker.textContent="Batman";
//svenimage.src="image/strength alt/General_Grievous.png";
sven.textContent="Genereal Grievous";
omniknightimage.src="obi-wan.jpeg";
omniknight.textContent="Obi-Wan-Kenobi";
dragon_knightimage.src="Dota-anime-Dragons-Blood-Dragon-Knight-Netflix.jpeg";
dawnbreaker.textContent="Big Titty Sun Goddess"
phoenix.textContent="Mr. B";
pudgeimage.src="roadhog.jpeg";
tinyimage.src="rock.jpeg";


bounty_hunter.src="meowth.jpeg";
hoodwink.textContent="Zootopia Bitch";
juggernaut.textContent="Genji";
lonedruid_image.src="liamneeson.jpeg";
meepoimage.src="steve_buscemi.jpeg";
monkeyking.textContent="Monkey Faggot";
nagasirenimage.src="ashoka_tanp.jpeg";
pangolierimage.src="pussnboots.jpeg";
sniperimage.src="Torbjorn.png";

crystalmaidenimage.src="elsa.jpeg";
enchantressimage.src="bambi.jpeg";
enigma.textContent="My Nigma";
keeperimage.src="merlin.jpeg";
ogreimage.src="majinbuu.jpeg";
stormimage.src="genie.jpeg";
techies.src="Osama_bin_Laden_portrait.jpeg";
zeus.textContent = "Faggot of the Year";
}

function red(e){
  offSwitch.classList.add('red');
  onSwitch.classList.remove('green');
  title.textContent="DOTA 2 ROSTER";
  abaddon.textContent = "Abaddon";
  abaddonimage.src="abaddon.jpeg";
  alchemist.textContent = "Alchemist";
  alchemistimage.src="alchemist.jpeg";
  axe.textContent = "Axe";
  axeimage.src="axe.png";
  beastmaster.textContent = "Beastmaster";
  beastmasterimage.src="Beastmaster.jpeg";
  brewmaster.textContent = "Brewmaster";
  brewmasterimage.src="Brewmaster.png";
  bristleback.textContent = "Bristleback";
  bristlebackimage.src="bristleback.png";
  centaur.textContent = "Centaur Warrunner";
  centaurimage.src="Centaur_Warrunner_icon.png";
  chaos.textContent = "Chaos Knight";
  chaosimage.src="chaosknight.png";
  clockwerk.textContent = "Clockwerk";
  clockwerkimage.src="clockwerk.jpeg";
  dawnbreaker.textContent = "Dawnbreaker";
  dawnbreakerimage.src="dawnbreaker.png";
  doom.textContent = "Doom";
  doomimage.src="doom.png";
  dragon_knight.textContent = "Dragon Knight";
  dragon_knightimage.src="dragonknight.png";
  earth_spirit.textContent = "Earth Spirit";
  earth_spiritimage.src="earthspirit.png";
  earthshaker.textContent = "Earthshaker";
  earthshakerimage.src="earthshaker.png";
  elder_titan.textContent = "Elder Titan";
  elder_titanimage.src="eldertitan.png";
  huskar.textContent = "Huskar";
  huskarimage.src="huskar.png";
  io.textContent = "Io";
  ioimage.src="io.png";
  kunkka.textContent = "Kunkka";
  kunkkaimage.src="kunkka.png";
  legion.textContent = "Legion Commander";
  legionimage.src="Legion_Commander_icon.png";
  lifestealer.textContent = "Lifestealer";
  lifestealerimage.src="Lifestealer_icon.png";
  lycan.textContent = "Lycan";
  lycanimage.src="Lycan_icon.png";
  magnus.textContent = "Magnus";
  magnusimage.src="Magnus_icon.png";
  mars.textContent = "Mars";
  marsimage.src="Mars_icon.png";
  night_stalker.textContent = "Night Stalker";
  night_stalkerimage.src="Night_Stalker_icon.png";
  omniknight.textContent = "Onmiknight";
  omniknightimage.src="Omniknight_icon.png";
  phoenix.textContent = "Phoenix";
  phoeniximage.src="benedict-barone-katoglou-phoenix-low.jpeg";
  pudge.textContent = "Pudge";
  pudgeimage.src="Pudge_icon.png";
  sand_king.textContent = "Sand King";
  sand_kingimage.src="Sand_King_icon.png";
  slardar.textContent = "Slardar";
  slardarimage.src="Slardar_icon.png";
  snapfire.textContent = "Snapfire";
  snapfireimage.src="Snapfire_icon.png";
  spirit.textContent = "Spirit Breaker";
  spiritimage.src="Spirit_Breaker_icon.png";
  sven.textContent = "Sven";
  svenimage.src="Sven_icon.png";
  tidehunter.textContent = "Tidehunter";
  tidehunterimage.src="Tidehunter_icon.png";
  timbersaw.textContent = "Timbersaw";
  timbersawimage.src="Timbersaw_icon.png";
  tiny.textContent = "Tiny";
  tinyimage.src="Tiny_icon.png";
  treant.textContent = "Treant Protector";
  treantimage.src="Treant_Protector_icon.png";
  tusk.textContent = "Tusk";
  tuskimage.src="Tusk_icon.png";
  underlord.textContent = "Underlord";
  underlordimage.src="Underlord_icon.png";
  undyingimage.textContent = "Undying";
  undyingimage.src="Undying_icon.png";
  wraithking.textContent = "Wraith King";
  wraithkingimage.src="Wraith_King_icon.png";
/*---------------------------------Agilities--------------------------*/


bounty_hunter.src="Bounty_Hunter_icon.png";
hoodwink.textContent="Hoodwink";
juggernaut.textContent="Juggernaut";
lonedruid_image.src="Lone_Druid_icon.png";
meepoimage.src="Meepo_icon.png";
monkeyking.textContent="Monkey King";
nagasirenimage.src="Naga_Siren_icon.png";
pangolierimage.src="Pangolier_icon.png";
sniperimage.src="Sniper_icon.png";

/*----------------------------Intelligence------------------------------*/

crystalmaidenimage.src="Crystal_Maiden_icon.png";
enchantressimage.src="Enchantress_icon.png";
enigma.textContent="Enigma";
keeperimage.src="Keeper_of_the_Light_icon.png";
ogreimage.src="Ogre_Magi_icon.png"
stormimage.src="Storm_Spirit_icon.png";
techies.src="Techies_icon.png";
zeus.textContent = "Zeus";
}




function bigImage(e){
  console.log(this);
  var sample = this;
  sample.classList.add('bigger');
}

function original(e){
  this.classList.remove('bigger');
  this.style.transition = `.25s`;
}



function memo(){
  if (this==abaddon1){
    console.log('abaddon');

    this.classList.add('bigger');
    this.style.width = `150px`;
    abaddon1.style.height = `250px`;
    abaddonimage.style.height = `65%`;
    this.style.margin = `0 -16.5px -100px -20px`;


    var tempSpan = document.createElement('div');
    setTimeout(() => tempSpan.textContent="-Stun and Silence",200);
    tempSpan.classList.add('detail');
    abaddon1.insertAdjacentElement('beforeend', tempSpan);


    abaddon1.addEventListener('mouseleave', ()=>{
      this.style.width = `100px`;
      this.style.height = `150px`;
      abaddonimage.style.height = `70%`;
      this.style.margin = `7px 7px 7px 7px`;
      tempSpan.remove();
    });
}
}


onSwitch.addEventListener('click', green);
offSwitch.addEventListener('click', red);
sheroes.forEach(solo => solo.addEventListener('mouseenter', memo));
sheroes.forEach(solo => solo.addEventListener('mouseover', bigImage));
sheroes.forEach(solo => solo.addEventListener('mouseleave', original));
aheroes.forEach(solo => solo.addEventListener('mouseover', bigImage));
aheroes.forEach(solo => solo.addEventListener('mouseleave', original));
iheroes.forEach(solo => solo.addEventListener('mouseover', bigImage));
iheroes.forEach(solo => solo.addEventListener('mouseleave', original));
