// src/data/data_orioles.ts 
export type Oriole = {
  id: number;
  bird_name: string;
  scientific_name: string;
  picture_01: string;
  picture_02: string;
  picture_03: string;
  range_picture: string;
  urlslug: string;
  wiki: string; 
  length_cm: string, 
  weight_gram: string, 
  synopsis: string;  
};


const orioles = [
  {
    id: 1,
    bird_name: "Audubon’s Oriole",
    scientific_name: "Icterus graduacauda",
    picture_01: "audubon_01.webp", 
    picture_02: "audubon_02.webp", 
    picture_03: "audubon_03.webp",
    range_picture: "range_audubon.webp", 
	urlslug: "audubon", 
    wiki: "https://en.wikipedia.org/wiki/Audubon%27s_oriole", 
    length_cm: "19.1 ~ 23.9", 
    weight_gram: "1.1 ~ 1.9", 
    synopsis:
      "Similar in size to the Altamaria Oriole, it is 7.5 to 9.4 inches  (19.1 to 23.9 centimeters) in length. Their wingspan is 14.2 inches (36.1 cm) across, and they weigh 1.1 to 1.9 ounces (31.2 to 53.9 grams).\n Another Oriole species where the female and the male look very similar. The Audubon’s Oriole has an all black head and chest but has a yellow-orange band along its shoulders. This shoulder-length patch is a unique coloring to this species.\n Their wings and tail are dark black and pop even more with an entire orange back underneath the wings.\n Although they overlap with the Altamira’s their ‘nyyeaah’ call is completely different. It’s sharp but nasally. Listen for it scattered amongst their other contact calls.\n Their range is limited in the United States to the woodlands of the very south of Texas. These Orioles aren’t spotted as often in tall trees. Unlike other Orioles, Audubon’s opt to forage the ground and low bushes for insects and fruit.\n All orioles are talented nest builders, but the Audubon’s nest is the only one so highly favored by another species. In Southern Texas, surveys found that over half of Audubon nests also had the eggs of a Bronzed Cowbird.",
  },
  {
    id: 2,
    bird_name: "Altamira Oriole",
    scientific_name: "Icterus gularis",
    picture_01: "altamira_01.webp", 
    picture_02: "altamira_02.webp", 
    picture_03: "altamira_03.webp",
    range_picture: "range_altamira.webp", 
	urlslug: "altamira", 
    wiki: "https://en.wikipedia.org/wiki/Altamira_oriole", 
    length_cm: "21.1 ~ 23.1", 
    weight_gram: "48.2 ~ 65.2", 
    synopsis:
      "The Altamira Orioles is the largest North American Oriole. Their length is 8.3 to 9.1 inches (21.1 to 23.1 centimeters), with a wingspan of 14.2 inches (36.1 cm). An Altamaria weighs 1.7 to 2.3 ounces (48.2 to 65.2 grams).\n Despite being much bigger, Altamiras are often mistaken for the Hooded Orioles because of their similar colors.\n Male and female Altamira Orioles are similarly colored, with the males tending to only have a brighter face. The body and head are bright orange while their wings are deep black. Beyond their black mask, look for their distinct thin orange shoulder patch for identification.\n A sharp ‘ike’ is the most commonly heard call from an Altamira. This call is heard more during breeding season when two birds are likely communicating. Pay attention for their chattering call too, especially between their songbird-like whistling.\n Not common to much of the United States. The Altamira Oriole makes a year-round home in the Rio Grande Valley and along the southern tip of Texas’ Gulf Coast.\n During the breeding season look for their pouch nests in the woodlands of Southern Texas. Being the biggest Oriole requires the biggest nest; some of their woven pouches stretch 2 and a half feet!\n The Altamira Oriole’s sweet tooth makes this a willing backyard visitor. Put out fruits, hummingbird feeders, or flowers and your backyard will become a popular Altamira hangout.",
  },
  {
    id: 3,
    bird_name: "Scott’s Oriole",
    scientific_name: "Icterus parisorum",
    picture_01: "scott_01.webp", 
    picture_02: "scott_02.webp", 
    picture_03: "scott_03.webp",
    range_picture: "range_scott.webp", 
	urlslug: "scott", 
    wiki: "https://en.wikipedia.org/wiki/Scott%27s_oriole", 
    length_cm: "23.1", 
    weight_gram: "31.2 ~ 39.7", 
    synopsis:
      "One of the Southwest’s most popular residents is 9.1 inches tall (23.1 centimeters) and has a 12.6 inch wingspan (32 cm). The Scott’s Oriole weighs around 1.1 to 1.4 ounces (31.2 to 39.7 grams).\n Identifying a Scott’s Oriole is made easy by their striking yellow bodies. Males are yellow like a lemon on their bellies and have a dark cloak over the rest of their bodies. The Scott’s also have the standard white wing bars at the bend of their wings.\n Females are a muted shade of yellow. With lots of brown shaded in among the yellow, a female Scott’s only striking coloring is the white wing bars to like the males.\n A loud ‘chuk’ is the most common call you’ll hear from a Scott’s. It is much easier to distinguish than their song, which is often mistaken for the Western Meadowlark.\n The range of the Scott’s is generally limited to where the Yucca plant can grow. The Scott’s Oriole has mastered living off of these plants. They will comb them for insects and fruit, and during the breeding months, take the fibers to construct a nest.\n The Scott’s Oriole is one of three bird species that consume the Monarch Butterfly. What makes this behavior so unique is that a Monarch will often take on the toxins of a Milkweed plant to dissuade predators. The Scott’s have evolved their palette to discern between butterflies with too much toxin.",
  }, 
  {
    id: 4,
    bird_name: "Orchard Oriole",
    scientific_name: "Icterus spurius",
    picture_01: "orchard_01.webp", 
    picture_02: "orchard_02.webp", 
    picture_03: "orchard_03.webp",
    range_picture: "range_orchard.webp", 
	urlslug: "orchard", 	
    wiki: "https://en.wikipedia.org/wiki/Orchard_oriole", 
    length_cm: "15 ~ 18", 
    weight_gram: "17 ~ 28.3", 
    synopsis:
      "An Orchard Oriole is only slightly bigger than a sparrow, with a length of 5.9 to 7.1 inches (15 to 18 centimeters) and a wingspan of 9.8 inches (24.9 cm). The Orchard’s weighs between .6 and 1 ounce (17 and 28.3 grams).\n The Orchard Oriole does not share the same bright orange that most Orioles are known for. Their chest is reddish-brown rather than bright orange. Males of the species will also have an all black head, and a reddish-orange patch at the bend of the wing.\n Female Orchard Orioles lack a lot of the deep black and orange-ish shading of the males. Their head and body are primarily a shade of olive-yellow. The only similarity between the males and females are the white bars along the wings.\n Their whistling song is often confused for an American Robin’s. An Orchard Oriole’s song is broken up with a unique chattering call and makes for easy identification. \n Orchard Orioles typically inhabit the open woodlands for which they are named, and are found east of the Rocky Mountains during the breeding season. The window is short to see them, as they fly back to Central America in the late summer months before most migratory birds. \n This more easy-going Oriole is found cohabitating with other species like the Baltimore or Bullock’s. They are not bashful about using their louder neighbors as a tool to ward off predators.\n Their diet tends to switch in the winter months, which forces them south faster. They favor sweet nectar and fruit which stops being available as cold weather approaches.",
  }, 
  {
    id: 5,
    bird_name: "Hooded Oriole",
    scientific_name: "Icterus cucullatus",
    picture_01: "hooded_01.webp", 
    picture_02: "hooded_02.webp", 
    picture_03: "hooded_03.webp",
    range_picture: "range_hooded.webp", 
    wiki: "https://en.wikipedia.org/wiki/Hooded_oriole", 
	urlslug: "hooded", 
    length_cm: "18 ~ 20", 
    weight_gram: "22.7", 
    synopsis:
      "The Hooded Oriole is a longer, more slender Oriole than most found in the United States. A usual length is 7.1 to 7.9 inches (18 to 20.1 centimeters) and their wingspan measures 9.1 to 11 inches (23.2 to 27.9 cm). This lighter Oriole weighs only .8 ounces (22.7 grams). \n The Hooded Oriole is named for its defining black face mask. A bright orange body contrasts the black face and wings and highlights their white wing bars. \n The female of the species is much less brilliant and lacks the black face mask. They are defined by their yellow-olive hue and white wing bars. \n A Hooded Oriole’s song is much more erratic than the other relatives found in the Americas. It switches between high-pitched calls and chatter, and sometimes will even mimic other birds. In Southern California and Arizona, they often imitate the call of a Gila Woodpecker. \n These orioles make their nests in southern Arizona and California. Outside of the breeding season, they are a rare sight in the United States. \n Known also as a “palm-leaf oriole,” their nests are sewn into the undersides of palm leaves found in the southwest. A combination of plant and grass fibers is woven to form a basket on the leaves, hidden from predators above. \n The arid climate of the Southwest forces the Hooded Orioles to primarily forage for insects. Although they will search out fruits and nectars if available. This offers you a chance to entice these shy feeders to the backyard with jelly or nectarines.",
  },
  {
    id: 6,
    bird_name: "Streak-backed Oriole",
    scientific_name: "Icterus pustulatus",
    picture_01: "streakbacked_01.webp", 
    picture_02: "streakbacked_02.webp", 
    picture_03: "streakbacked_03.webp",
    range_picture: "range_streakbacked.webp", 
	urlslug: "streakbacked", 
    wiki: "https://en.wikipedia.org/wiki/Streak-backed_oriole", 
    length_cm: "19.1 ~ 23.9", 
    weight_gram: "31.2 ~ 53.9", 
    synopsis:
      "Streak-backed Orioles measure around 7.9 inches (20.1 centimeters) tall; the wingspan is 9 to 10 inches (22.9 and 25.4 cm) across. These orioles weigh 2.5 to 3 ounces (70.9 to 85 grams).\n Named for the black wings and tail that looks like a long streak running down their back. The Streak-backed Oriole has a bright orange head and body, with the only black markings appearing on the throat and bib.\n The Streak-backed oriole is another oriole with tropical origins so males and females are typically indistinguishable. However, in northern habitats, the females are much less brilliant than the males. They will share the same color pattern, it will just be muted. Streak-backed Orioles are native to Central America and tend to stick to tropical environments. Despite this, Streak-backed orioles can be found in the warmer months in southern Arizona and California.\n In the drier climates, the Streak-backed Oriole hunts primarily insects. They often will leave during the breeding season in search of the higher trees that they prefer to nest in.\n Another expert nest builder, the Streak-backed Orioles weave a basket-like nest on the edge of tree branches. This evolution is common among many species of orioles, who recognize their primary threats cannot hang on the lighter branches.",
  },  
  {
    id: 7,
    bird_name: "Spot-Breasted Oriole",
    scientific_name: "Icterus pectoralis",
    picture_01: "spotbreasted_01.webp", 
    picture_02: "spotbreasted_02.webp", 
    picture_03: "spotbreasted_03.webp",
    range_picture: "range_spotbreasted.webp", 
	urlslug: "spotbreasted", 
    wiki: "https://en.wikipedia.org/wiki/Spot-breasted_oriole", 
    length_cm: "21.1 ~ 23.9", 
    weight_gram: "51", 
    synopsis:
      "The least common North American Oriole stands 8.3 to 9.4 inches tall (21.1 to 23.9 centimeters) and has a 13 inch (33 cm) wingspan. These longer-bodied orioles typically weigh 1.8 ounces (51 grams).\n Like many tropical birds, adult male and female Spot-breasted Orioles have very similar coloring. They have the typical bright orange body found on orioles but are differentiated by the black bib and tail. If you can spot their chest you will see the black dotting closer to the throat.\n A Bullock’s song does not sound unique from other local birds you might hear. Try to recognize how slow and deliberate the whistles sound coming from the trees.\n The Spot-breasted Oriole non-native bird to North America, limiting its range to only the southern tip of Florida. The birds will stay year-round in southern Florida, often making their homes in suburban trees.\n They have kept a healthy population in South Florida since their accidental introduction in the 1940s. This gives birdwatchers ample opportunity to see them across everyday life.\n Their population has held so well in South Florida because of the abundance of tropical fruit available to them. With their full diet available, unseasonably cold winters are the prime threat to their population’s success.",
  },
  {
    id: 8,
    bird_name: "Bullock’s Oriole",
    scientific_name: "Icterus bullockiorum",
    picture_01: "bullock_01.webp", 
    picture_02: "bullock_02.webp", 
    picture_03: "bullock_03.webp",
    range_picture: "range_bullock.webp", 
	urlslug: "bullock", 
    wiki: "https://en.wikipedia.org/wiki/Bullock%27s_oriole", 
    length_cm: "17 ~ 19", 
    weight_gram: "28 ~ 43", 
    synopsis:
      "The Bullock’s Oriole is very similar in size to the Baltimore species. They are 6.7 to 7.5 inches (17 and 19.1 centimeters) tall, with a wingspan of 12.2 inches (30.1 cm). These slight birds weigh 1 to 1.5 ounces (28.3 to 42.5 grams).\n The brightly-colored males are marked by a flame-orange body and face. Look for the black cap and throat around a noticably sharp beak. Male and female Bullock’s will have white streaks down the outside of their wings.\n Like most on the list, the females are more bland. They lack the same striking black coloring as the males, and their body is a duller shade of orange-yellow.\n Listen for what sounds like a dog’s squeaky toy coming from the trees. The Bullock’s Oriole’s song features these short rich squeaks, chopped up by brief rattles. \n The most common oriole in the western United States behaves similarly to its eastern relative. Like a Baltimore Oriole, Bullock’s will reside in the open woodlands during the breeding season. They then migrate south to Mexico for the winter and aren’t often seen in the north of the desert post-migration.\n The Bullock’s Oriole prefers to eat insects, especially grasshoppers, but will also eat fruit. Bullock’s are comfortable around people and will come to a sugar-water feeder. Something as simple as a nectarine nailed to the trunk of a tree will have success drawing these birds out.\n Like many species of Orioles, the Bullock’s is known for its nest building. Females weave intricate gourd-shaped nests into the small branches of trees. These pods can be a stunning 15 inches deep to ensure the protection of the hatch.",
  },
  {
    id: 9,
    bird_name: "Baltimore Oriole",
    scientific_name: "Icterus galbula",
    picture_01: "baltimore_01.webp", 
    picture_02: "baltimore_02.webp", 
    picture_03: "baltimore_03.webp",
    range_picture: "range_baltimore.webp", 
	urlslug: "baltimore", 
    wiki: "https://en.wikipedia.org/wiki/Baltimore_oriole", 
    length_cm: "23.1 ~ 29.9", 
    weight_gram: "31.2 ~ 39.7", 
    synopsis:
      "The Baltimore Oriole stands between 6.7 and 7.5 inches tall (17 and 19.1 centimeters) and has a wingspan between 9.1 and 11.8 inches (23.1 and 29.9 cm). Slightly smaller than a robin, these birds weigh 1.1 to 1.4 ounces (31.2 to 39.7 grams).\n  If you’re a baseball fan, you’ll recognize them quickly as Baltimore’s team mascot. Males have a bright orange body with a dark black head. The female Baltimore Orioles are less spectacularly colored. They can be identified by their yellow-orange bodies, with a gray tint to their head and wings.\n  The Baltimore Orioles is perhaps best known for its song, an indicator that spring is coming along the Northeastern United States. The call is flute-like, listen for the series of short whistles during the breeding season as males stake claim to territory.\n  Baltimore Orioles are migratory birds, making their homes up the eastern half of the United States during breeding. Their range expands during the migratory months where they can be found in the plains and southern states.\n  Although they typically move to the tropics of Central America for the winter, more Baltimore Orioles have been seen wintering over in the Mid-Atlantic states. Since their diet is primarily made up of fruit and insects, they will only tend to stick around if there is a reliable feeder as a food source.\n  The bird's name originates from England’s Baltimore family. Their family crest features the same brilliant orange and black. So, when the bird was seen in the city that bears their name it was only natural to call it the Baltimore Oriole.",
  }, 
];

export default orioles;
