
// Data array containing seed data - documents organized by Model
const data = [
  {
    'model': 'movies',
    'documents': [
      {
        "id": 1,
        "title": "Iron Man",
        "release_date": "2008-05-02",
        "duration": 126,
        "overview": "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man.jpg",
        "trailer_url": "http://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=5786306590001",
        "directed_by": "Jon Favreau",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 3,
        "post_credit_scenes": 1
      },
      {
        "id": 2,
        "title": "The Incredible Hulk",
        "release_date": "2008-06-13",
        "duration": 112,
        "overview": "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/hulk.jpg",
        "trailer_url": "http://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5786823800001",
        "directed_by": "Louis Leterrier",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 5,
        "post_credit_scenes": 1
      },
      {
        "id": 3,
        "title": "Iron Man 2",
        "release_date": "2010-05-07",
        "duration": 124,
        "overview": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and \"Rhodey\" Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man-2.jpg",
        "trailer_url": "http://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=5786616628001",
        "directed_by": "Jon Favreau",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 4,
        "post_credit_scenes": 1
      },
      {
        "id": 4,
        "title": "Thor",
        "release_date": "2011-05-06",
        "duration": 115,
        "overview": "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/thor.jpg",
        "trailer_url": "http://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806335470001",
        "directed_by": "Kenneth Branagh",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 6,
        "post_credit_scenes": 1
      },
      {
        "id": 5,
        "title": "Captain America: The First Avenger",
        "release_date": "2011-07-22",
        "duration": 124,
        "overview": "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/captain-america-the-first-avenger.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806328337001",
        "directed_by": "Joe Johnston",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 1,
        "post_credit_scenes": 1
      },
      {
        "id": 6,
        "title": "The Avengers",
        "release_date": "2012-05-04",
        "duration": 143,
        "overview": "Marvel Studios presents in association with Paramount Pictures \"Marvel's The Avengers\"--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/avengers.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806331374001",
        "directed_by": "Joss Whedon",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 7,
        "post_credit_scenes": 2
      },
      {
        "id": 7,
        "title": "Iron Man 3",
        "release_date": "2013-05-03",
        "duration": 130,
        "overview": "Marvel's \"Iron Man 3\" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man-3.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806307374001",
        "directed_by": "Shane Black",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 8,
        "post_credit_scenes": 1
      },
      {
        "id": 8,
        "title": "Thor: The Dark World",
        "release_date": "2013-11-08",
        "duration": 112,
        "overview": "In the aftermath of Marvel's \"Thor\" and \"Marvel's The Avengers,\" Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/thor-dark-world.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5793459089001",
        "directed_by": "Alan Taylor",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 9,
        "post_credit_scenes": 2
      },
      {
        "id": 9,
        "title": "Captain America: The Winter Soldier",
        "release_date": "2014-04-04",
        "duration": 136,
        "overview": "After the cataclysmic events in New York with The Avengers, Marvel's \"Captain America: The Winter Soldier,\" finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/captain-america-the-winter-soldier.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5791035995001",
        "directed_by": "Anthony Russo, Joe Russo",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 10,
        "post_credit_scenes": 2
      },
      {
        "id": 33,
        "title": "Ant-Man and The Wasp: Quantumania",
        "release_date": "2023-02-17",
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/ant-man-and-the-wasp-quantumania.jpg",
        "trailer_url": null,
        "directed_by": "Peyton Reed",
        "phase": null,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 34,
        "title": "Fantastic Four",
        "release_date": null,
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/fantastic-four.jpg",
        "trailer_url": null,
        "directed_by": "Jon Watts",
        "phase": null,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 35,
        "title": "Guardians of the Galaxy Vol. 3",
        "release_date": "2023-05-05",
        "duration": 0,
        "overview": null,
        "cover_url": null,
        "trailer_url": null,
        "directed_by": "James Gunn",
        "phase": null,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 10,
        "title": "Guardians of the Galaxy",
        "release_date": "2014-08-01",
        "duration": 121,
        "overview": "An action-packed, epic space adventure, Marvel's \"Guardians of the Galaxy,\" expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/guardians-of-the-galaxy-vol-1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5791076711001",
        "directed_by": "James Gunn",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 11,
        "post_credit_scenes": 2
      },
      {
        "id": 11,
        "title": "Avengers: Age of Ultron",
        "release_date": "2015-05-01",
        "duration": 141,
        "overview": "Marvel Studios presents 'Avengers: Age of Ultron', the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/avengers-age-of-ultron.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790937227001",
        "directed_by": "Joss Whedon",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 13,
        "post_credit_scenes": 1
      },
      {
        "id": 12,
        "title": "Ant-Man",
        "release_date": "2015-07-17",
        "duration": 117,
        "overview": "The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios' \"Ant-Man.\" Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/ant-man.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932937001",
        "directed_by": "Peyton Reed",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 14,
        "post_credit_scenes": 2
      },
      {
        "id": 13,
        "title": "Captain America: Civil War",
        "release_date": "2016-05-06",
        "duration": 147,
        "overview": "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two campsÔÇöone led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/captain-america-civil-war.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932946001",
        "directed_by": "Anthony Russo, Joe Russo",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 15,
        "post_credit_scenes": 2
      },
      {
        "id": 14,
        "title": "Doctor Strange",
        "release_date": "2016-11-04",
        "duration": 115,
        "overview": "From Marvel Studios comes \"Doctor Strange\", the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/doctor-strange.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790930123001",
        "directed_by": "Scott Derrickson",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 18,
        "post_credit_scenes": 2
      },
      {
        "id": 15,
        "title": "Guardians of the Galaxy Vol. 2",
        "release_date": "2017-05-05",
        "duration": 136,
        "overview": "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/guardians-of-the-galaxy-vol-2.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932955001",
        "directed_by": "James Gunn",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 12,
        "post_credit_scenes": 5
      },
      {
        "id": 16,
        "title": "Spider-Man: Homecoming",
        "release_date": "2017-07-07",
        "duration": 133,
        "overview": "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/spider-man-homecoming.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932452001",
        "directed_by": "Jon Watts",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 17,
        "post_credit_scenes": 2
      },
      {
        "id": 17,
        "title": "Thor: Ragnarok",
        "release_date": "2017-11-03",
        "duration": 130,
        "overview": "Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok - the destruction of his homeworld and the end of Asgardian civilization - at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger - the Incredible Hulk!",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/thor-ragnarok.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5793457593001",
        "directed_by": "Taika Waititi",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 19,
        "post_credit_scenes": 2
      },
      {
        "id": 18,
        "title": "Black Panther",
        "release_date": "2018-02-16",
        "duration": 134,
        "overview": "Marvel Studios' \"Black Panther\" follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king - and Black Panther - is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/black-panther.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5738791807001",
        "directed_by": "Ryan Coogler",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 16,
        "post_credit_scenes": 2
      },
      {
        "id": 19,
        "title": "Avengers: Infinity War",
        "release_date": "2018-04-27",
        "duration": 149,
        "overview": "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' \"Avengers: Infinity War\" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/avengers-infinity-war.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5662084610001",
        "directed_by": "Anthony Russo, Joe Russo",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 20,
        "post_credit_scenes": 1
      },
      {
        "id": 20,
        "title": "Ant-Man and The Wasp",
        "release_date": "2018-07-06",
        "duration": 125,
        "overview": "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: \"Ant-Man and The Wasp.\". In the aftermath of \"Captain America: Civil War\", Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he's confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/ant-man-and-the-wasp.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5722251911001",
        "directed_by": "Peyton Reed",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 21,
        "post_credit_scenes": 2
      },
      {
        "id": 21,
        "title": "Captain Marvel",
        "release_date": "2019-03-08",
        "duration": 125,
        "overview": "Set in the 1990s, Marvel Studios' \"Captain Marvel\" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/captain-marvel.jpg",
        "trailer_url": "https://youtu.be/Z1BCujX3pw8",
        "directed_by": "Anna Boden, Ryan Fleck",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 2,
        "post_credit_scenes": 2
      },
      {
        "id": 22,
        "title": "Avengers: Endgame",
        "release_date": "2019-04-26",
        "duration": 182,
        "overview": "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, \"Avengers: Endgame.\"",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/avengers-endgame.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=6027157990001",
        "directed_by": "Anthony Russo, Joe Russo",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 22,
        "post_credit_scenes": 0
      },
      {
        "id": 23,
        "title": "Spider-Man: Far From Home",
        "release_date": "2019-07-02",
        "duration": 129,
        "overview": "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/spider-man-far-from-home.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=6033358625001",
        "directed_by": "Jon Watts",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 23,
        "post_credit_scenes": 2
      },
      {
        "id": 24,
        "title": "Black Widow",
        "release_date": "2021-07-09",
        "duration": 133,
        "overview": "In Marvel Studios' action-packed spy thriller “Black Widow”, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/black-widow.jpg",
        "trailer_url": "https://youtu.be/RxAtuMu_ph4",
        "directed_by": "Cate Shortland",
        "phase": 4,
        "saga": "Infinity Saga",
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 25,
        "title": "Eternals",
        "release_date": "2021-11-05",
        "duration": 0,
        "overview": "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, The Deviants.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/the-eternals.jpg",
        "trailer_url": "https://youtu.be/0WVDKZJkGlY",
        "directed_by": "Chloé Zhao",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 26,
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "release_date": "2021-09-03",
        "duration": 0,
        "overview": "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/shang-chi-and-the-legend-of-the-ten-rings.jpg",
        "trailer_url": "http://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=6249384204001",
        "directed_by": "Destin Daniel Cretton",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 27,
        "title": "Doctor Strange in the Multiverse of Madness",
        "release_date": "2022-03-25",
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/doctor-strange-in-the-multiverse-of-madness.jpg",
        "trailer_url": null,
        "directed_by": "Sam Raimi",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 28,
        "title": "Thor: Love and Thunder",
        "release_date": "2022-05-06",
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/thor-love-and-thunder.jpg",
        "trailer_url": null,
        "directed_by": "Taika Waititi",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 29,
        "title": "Spider-Man: No Way Home",
        "release_date": "2021-12-17",
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/spider-man-no-way-home.jpg",
        "trailer_url": null,
        "directed_by": "Jon Watts",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 30,
        "title": "Black Panther: Wakanda Forever",
        "release_date": "2022-07-08",
        "duration": 0,
        "overview": "The sequel to the history-making Black Panther, written and directed by Ryan Coogler, will explore the incomparable world of Wakanda.",
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/black-panther-2.jpg",
        "trailer_url": null,
        "directed_by": "Ryan Coogler",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 31,
        "title": "The Marvels",
        "release_date": "2022-11-11",
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/captain-marvel-2.jpg",
        "trailer_url": null,
        "directed_by": "Nia DaCosta",
        "phase": 4,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      },
      {
        "id": 32,
        "title": "Blade",
        "release_date": null,
        "duration": 0,
        "overview": null,
        "cover_url": "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/blade.jpg",
        "trailer_url": null,
        "directed_by": "",
        "phase": null,
        "saga": null,
        "chronology": null,
        "post_credit_scenes": 0
      }
    ]
  }
]

module.exports = data;