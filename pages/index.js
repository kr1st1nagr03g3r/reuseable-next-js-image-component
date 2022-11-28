import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import images from '../public/images/index'

export default function Home() {
  return (
    <>
      <h1 className="heading">Hello World</h1>
      <div className={styles.container}>
        <Hero
          className={styles.heroImage}
          src={images.bluejay}
          alt="a bluejay"
          height={400}
          width={400}
          header="We Love Bluejays"
          content="Its plumage is lavender-blue to mid-blue in the crest, back, wings, and tail, and its face is white. The underside is off-white and the neck is collared with black which extends to the sides of the head. The wing primaries and tail are strongly barred with black, sky-blue, and white. The bill, legs, and eyes are all black. Males and females are almost identical, but the male is slightly larger. The black plumage on its nape, face, and throat varies extensively between individuals; it is believed to assist in recognition between individuals."
          buttonLink="https://en.wikipedia.org/wiki/Blue_jay"
          buttonContent="Learn More on Wikipedia"
        />
        <Hero
          className={styles.heroImage}
          src={images.canary}
          alt="a canary"
          height={400}
          width={400}
          header="Canaries Rule"
          content="Canaries actually love to eat jalapeno peppers. Canaries were first bred in captivity in the 17th century, having been brought to Europe by Spanish sailors. This bird became expensive and fashionable to breed in courts of Spanish and English kings. Monks started breeding them and only sold the males (which sing). This kept the birds in short supply and drove the price up. Eventually, Italians obtained hens and were able to breed the birds. This made them very popular, resulting in many breeds arising, and the birds being bred all over Europe."
          buttonLink="https://en.wikipedia.org/wiki/Canary"
          buttonContent="Learn More on Wikipedia"
        />
        <Hero
          className={styles.heroImage}
          src={images.cardinal}
          alt="a cardinal"
          height={400}
          width={400}
          header="Canaries Rule"
          content="Cardinals are typically the first bird to visit feeders in the morning and the last to visit in the evenings. While ornithologists aren’t entirely sure why this is the case, they believe it may be related to lower competition with other birds at the feeders during dawn and dusk. Males may also appear more inconspicuous in low light conditions providing them some security from natural predators."
          buttonLink="https://en.wikipedia.org/wiki/Canary"
          buttonContent="Learn More on Wikipedia"
        />
        <Hero
          className={styles.heroImage}
          src={images.falcon}
          alt="a falcon"
          height={400}
          width={400}
          header="Deadly Raptors"
          content="The back and the long pointed wings of the adult are usually bluish black to slate grey with indistinct darker barring; the wingtips are black. The white to rusty underparts are barred with thin clean bands of dark brown or black.The tail, coloured like the back but with thin clean bars, is long, narrow, and rounded at the end with a black tip and a white band at the very end. The top of the head and a moustache along the cheeks are black, contrasting sharply with the pale sides of the neck and white throat. The cere is yellow, as are the feet, and the beak and claws are black. The upper beak is notched near the tip, an adaptation which enables falcons to kill prey by severing the spinal column at the neck. An immature bird is much browner, with streaked, rather than barred, underparts, and has a pale bluish cere and orbital ring."
          buttonLink="https://en.wikipedia.org/wiki/Peregrine_falcon"
          buttonContent="Learn More on Wikipedia"
        />

        <Hero
          className={styles.heroImage}
          src={images.flamingo}
          alt="a flamingo"
          height={400}
          width={400}
          header="Pretty In Pink"
          content="The name flamingo comes from Portuguese or Spanish flamengo flame-colored, which in turn comes from Provençal flamenc – a combination of flama flame and a Germanic-like suffix -ing. The word may also have been influenced by the Spanish ethnonym flamenco Fleming or Flemish. The name of the genus, Phoenicopterus, is from the Greek φοινικόπτερος phoinikopteros, lit. 'crimson/red-feathered'); other genera names include Phoeniconaias, which means crimson/red water nymph, or naiad, and Phoenicoparrus, which means crimson/red bird (though, an unknown bird of omen)."
          buttonLink="https://en.wikipedia.org/wiki/Flamingo"
          buttonContent="Learn More on Wikipedia"
        />
        <Hero
          className={styles.heroImage}
          src={images.guardianFinches}
          alt="Gouldian Finches"
          height={400}
          width={400}
          header="A Finch For Every Flavour"
          content="Both sexes are brightly coloured with black, green, yellow, and red markings. The females tend to be less brightly coloured. One major difference between the sexes is that the male's chest is purple, while the female's is a lighter mauve. Gouldian finches are about 125–140 mm long. Gouldian finches' heads may be red, black, or yellow. Formerly considered three different kinds of finches, it is now known that these are colour variants that exist in the wild. Selective breeding has also developed mutations (blue, yellow and silver instead of a green back) in both body and breast colour."
          buttonLink="https://en.wikipedia.org/wiki/Gouldian_finch"
          buttonContent="Learn More on Wikipedia"
        />
        <Hero
          className={styles.heroImage}
          src={images.parrot}
          alt="a parrot"
          height={400}
          width={400}
          header="Deadly Raptors"
          content="Parrots, also known as psittacines (/ˈsɪtəsaɪnz/), are birds of the roughly 398 species in 92 genera comprising the order Psittaciformes (/ˈsɪtəsɪfɔːrmiːz/), found mostly in tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea true parrots, the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots). One-third of all parrot species are threatened by extinction, with higher aggregate extinction risk (IUCN Red List Index) than any other comparable bird group. Parrots have a generally pantropical distribution with several species inhabiting temperate regions in the Southern Hemisphere, as well. The greatest diversity of parrots is in South America and Australasia."
          buttonLink="https://en.wikipedia.org/wiki/Peregrine_falcon"
          buttonContent="Learn More on Wikipedia"
        />
      </div>
    </>
  )
}
