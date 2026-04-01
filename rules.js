const rulesDataMap =   {
  "rules": {
    "markovnikov": {
      "name": "Markovnikov's Rule",
      "theory": "When a protic acid (HX) adds to an unsymmetrical alkene, the hydrogen atom bonds to the carbon that already bears the greater number of hydrogen atoms. The halide bonds to the more substituted carbon. This occurs because the more substituted carbocation intermediate is more stable â€” tertiary carbocations are more stable than secondary, which are more stable than primary.",
      "keypoint": "The electrophile (Hâº) attaches to the carbon with MORE hydrogens, forming the MORE stable carbocation intermediate.",
      "example1": {
        "formula": "CHâ‚ƒ-CH=CHâ‚‚ + HBr â†’ CHâ‚ƒ-CHBr-CHâ‚ƒ",
        "desc": "Propene reacts with HBr. H attaches to C1 and Br attaches to C2 (more substituted), forming 2-bromopropane as the major product â€” not 1-bromopropane."
      },
      "example2": {
        "formula": "CHâ‚ƒ-C(CHâ‚ƒ)=CHâ‚‚ + HCl â†’ CHâ‚ƒ-C(CHâ‚ƒ)(Cl)-CHâ‚ƒ",
        "desc": "2-methylpropene reacts with HCl. H adds to the =CHâ‚‚ end and Cl bonds to the tertiary carbon, giving 2-chloro-2-methylpropane via a stable tertiary carbocation."
      }
    },
    "anti_markovnikov": {
      "name": "Anti-Markovnikov's Rule",
      "theory": "Under free-radical conditions initiated by peroxides or UV light, the addition of HBr to alkenes proceeds against Markovnikov's Rule. A bromine radical adds first to the less hindered carbon of the double bond, generating the more stable carbon radical. Hydrogen then completes the addition. This only applies to HBr â€” not HCl or HI.",
      "keypoint": "Only works with HBr and peroxides or UV light. The bromine radical adds to the LESS substituted carbon â€” opposite of ionic addition.",
      "example1": {
        "formula": "CHâ‚ƒ-CH=CHâ‚‚ + HBr â†’ CHâ‚ƒ-CHâ‚‚-CHâ‚‚Br  (peroxides)",
        "desc": "Propene with HBr under peroxide conditions gives 1-bromopropane (Br on C1) â€” the anti-Markovnikov product. Without peroxides, 2-bromopropane forms instead."
      },
      "example2": {
        "formula": "CHâ‚‚=CH-CHâ‚‚CHâ‚ƒ + HBr â†’ BrCHâ‚‚-CHâ‚‚-CHâ‚‚CHâ‚ƒ  (hÎ½)",
        "desc": "1-butene under UV light gives 1-bromobutane. The bromine radical adds to the terminal CHâ‚‚ and hydrogen adds to the internal carbon."
      }
    },
    "zaitsev": {
      "name": "Zaitsev's Rule",
      "theory": "In elimination reactions (E1 or E2), when two or more alkene products are possible, the major product is the most substituted alkene. More substituted alkenes are more thermodynamically stable due to hyperconjugation. Zaitsev's Rule applies when a small unhindered base is used such as KOH or NaOEt.",
      "keypoint": "Small base (KOH, NaOEt) â†’ Zaitsev product (more substituted alkene). The more alkyl groups on the double bond, the more stable and more favoured.",
      "example1": {
        "formula": "CHâ‚ƒCHâ‚‚CHBrCHâ‚ƒ + KOH/EtOH â†’ CHâ‚ƒCH=CHCHâ‚ƒ (major)",
        "desc": "2-bromobutane with KOH gives but-2-ene (disubstituted) as the major product over but-1-ene (monosubstituted). This is the Zaitsev product."
      },
      "example2": {
        "formula": "(CHâ‚ƒ)â‚ƒCBr + NaOEt â†’ (CHâ‚ƒ)â‚‚C=CHâ‚‚ (major)",
        "desc": "tert-Butyl bromide with sodium ethoxide gives 2-methylpropene as the major Zaitsev product â€” the most substituted alkene possible."
      }
    },
    "hofmann": {
      "name": "Hofmann's Rule",
      "theory": "When a large bulky base is used in elimination, it cannot easily approach a hindered carbon to abstract a proton. Instead it abstracts from the least hindered carbon, giving the less substituted alkene â€” the Hofmann product. This directly opposes Zaitsev's Rule. The classic bulky base is potassium tert-butoxide (KOtBu).",
      "keypoint": "Bulky base (KOtBu) â†’ Hofmann product (less substituted alkene). Steric hindrance of the base â€” not thermodynamic stability â€” determines the outcome.",
      "example1": {
        "formula": "CHâ‚ƒCHâ‚‚CHBrCHâ‚ƒ + KOtBu â†’ CHâ‚ƒCHâ‚‚CH=CHâ‚‚ (major)",
        "desc": "2-bromobutane with KOtBu gives but-1-ene (less substituted) as the major product. The bulky base avoids the internal hindered proton."
      },
      "example2": {
        "formula": "[(CHâ‚ƒCHâ‚‚)â‚„N]âºOHâ» â†’ heat â†’ CHâ‚‚=CHâ‚‚ (major)",
        "desc": "Hofmann elimination of quaternary ammonium salts always gives the least substituted alkene â€” the geometry of the reaction enforces this selectivity."
      }
    },
    "kharasch": {
      "name": "Kharasch Effect",
      "theory": "The Kharasch Effect describes the reversal of Markovnikov's Rule during HBr addition in the presence of peroxides or UV light. Peroxides generate bromine radicals (Brâ€¢) which add to the less hindered carbon, forming the more stable carbon radical. Hydrogen then completes the reaction giving the anti-Markovnikov product. Works only with HBr.",
      "keypoint": "Peroxides or UV â†’ radical chain â†’ Br on LESS substituted carbon. Only HBr shows this effect â€” HCl bonds are too strong and HI radicals are too stable to sustain the chain.",
      "example1": {
        "formula": "CHâ‚ƒCH=CHâ‚‚ + HBr â†’ CHâ‚ƒCHâ‚‚CHâ‚‚Br  (peroxide)",
        "desc": "Propene with HBr and benzoyl peroxide gives 1-bromopropane (Br on C1) â€” the opposite of the ionic Markovnikov product. Kharasch first reported this in 1933."
      },
      "example2": {
        "formula": "CHâ‚‚=CHCHâ‚‚CHâ‚ƒ + HBr â†’ BrCHâ‚‚CHâ‚‚CHâ‚‚CHâ‚ƒ  (hÎ½)",
        "desc": "1-butene under UV light gives 1-bromobutane. The bromine radical adds to the terminal CHâ‚‚ and hydrogen adds to the internal carbon."
      }
    },
    "walden": {
      "name": "Walden Inversion",
      "theory": "Walden Inversion describes the stereochemical outcome of SN2 reactions. The nucleophile attacks the electrophilic carbon from directly opposite the leaving group (backside attack). As the leaving group departs, the three remaining substituents flip through a planar transition state â€” giving complete inversion of configuration at the stereocenter.",
      "keypoint": "SN2 always gives 100% inversion of configuration. An (R) substrate gives an (S) product and vice versa. No retention or racemisation occurs in a clean SN2.",
      "example1": {
        "formula": "(R)-2-bromobutane + NaOH â†’ (S)-butan-2-ol",
        "desc": "Hydroxide attacks the back of the C-Br bond in (R)-2-bromobutane. As Brâ» leaves, configuration inverts completely to give (S)-butan-2-ol â€” the textbook Walden Inversion."
      },
      "example2": {
        "formula": "(S)-CHâ‚ƒCHClCHâ‚‚CHâ‚ƒ + CNâ» â†’ (R)-CHâ‚ƒCH(CN)CHâ‚‚CHâ‚ƒ",
        "desc": "Cyanide displaces chloride via SN2 on (S)-2-chlorobutane. Backside attack inverts the stereocenter to give the (R)-nitrile product with complete stereospecificity."
      }
    },
    "bredt": {
      "name": "Bredt's Rule",
      "theory": "Bredt's Rule states that a C=C double bond cannot be placed at the bridgehead carbon of a small bicyclic system. The rigid cage geometry forces the bridgehead into a fixed arrangement where p orbitals cannot align for Ï€ overlap. As ring sizes increase, Bredt's Rule violations become possible.",
      "keypoint": "Bridgehead double bonds are forbidden in small bicyclic systems (fewer than ~8 atoms total). Any elimination that would produce one simply does not occur.",
      "example1": {
        "formula": "Bicyclo[2.2.1]hept-1-ene â†’ does NOT exist (Bredt violation)",
        "desc": "Placing a double bond at the bridgehead of norbornane is impossible. The p orbitals point away from each other and cannot overlap. Eliminations that would form this are not observed."
      },
      "example2": {
        "formula": "Bicyclo[3.3.1]non-1-ene â†’ exists (large enough to allow strain)",
        "desc": "As the ring grows larger, Bredt violations become possible. Bicyclo[3.3.1]non-1-ene has been synthesized â€” strained but isolable, showing the rule has size-dependent limits."
      }
    },
    "huckel": {
      "name": "HÃ¼ckel's Rule",
      "theory": "A monocyclic, planar, fully conjugated compound is aromatic if it contains (4n+2) Ï€ electrons, where n = 0, 1, 2, 3... Aromatic compounds are extraordinarily stable due to full Ï€ electron delocalization. Compounds with 4n Ï€ electrons are anti-aromatic (highly unstable), and non-planar or non-conjugated rings are non-aromatic.",
      "keypoint": "2, 6, 10, 14... Ï€ electrons = aromatic âœ“.  4, 8, 12... Ï€ electrons = anti-aromatic âœ—.  Non-planar or non-conjugated = non-aromatic.",
      "example1": {
        "formula": "Benzene Câ‚†Hâ‚† â†’ 6 Ï€ electrons (n=1) â†’ Aromatic âœ“",
        "desc": "Benzene is the classic aromatic compound â€” 6 Ï€ electrons, planar, fully conjugated. It resists addition and undergoes electrophilic aromatic substitution to preserve its stability."
      },
      "example2": {
        "formula": "Naphthalene Câ‚â‚€Hâ‚ˆ â†’ 10 Ï€ electrons (n=2) â†’ Aromatic âœ“",
        "desc": "Naphthalene satisfies HÃ¼ckel's Rule with 10 Ï€ electrons. Cyclobutadiene (4 Ï€ electrons) is the famous anti-aromatic counterexample â€” extremely reactive and unstable."
      }
    },
    "hammond": {
      "name": "Hammond's Postulate",
      "theory": "Hammond's Postulate states that the transition state structure resembles the nearest stable species on the reaction coordinate. For exothermic steps, the TS is early and resembles reactants. For endothermic steps, the TS is late and resembles products. This explains why more stable intermediates form faster.",
      "keypoint": "For endothermic steps, the more stable the intermediate, the lower the activation energy and the faster it forms. This is why 3Â° carbocations form faster than 1Â°.",
      "example1": {
        "formula": "R-H + Clâ€¢ â†’ Râ€¢ + HCl  (endothermic, TS resembles Râ€¢)",
        "desc": "In radical chlorination, H-abstraction is endothermic. The TS resembles the carbon radical. A more stable 3Â° radical forms faster â€” explaining selectivity for tertiary C-H bonds."
      },
      "example2": {
        "formula": "Alkene + Hâº â†’ 3Â° carbocation (faster) vs 1Â° carbocation (slower)",
        "desc": "Protonation of an alkene is endothermic so the TS resembles the carbocation. Tertiary carbocations are more stable â†’ lower TS energy â†’ form faster. This underpins Markovnikov's Rule mechanistically."
      }
    },
    "le_chatelier": {
      "name": "Le Chatelier's Principle",
      "theory": "Le Chatelier's Principle states that if a dynamic equilibrium is disturbed by changing concentration, temperature, or pressure, the system shifts in the direction that opposes the change. In organic chemistry this is used to drive reversible reactions to completion by removing a product or using excess reagent.",
      "keypoint": "To push a reversible reaction to completion: remove a product (e.g. distill off water), add excess reactant, or adjust temperature to favour the desired side.",
      "example1": {
        "formula": "R-COOH + R'-OH â‡Œ R-COOR' + Hâ‚‚O â†’ remove Hâ‚‚O â†’ drives forward",
        "desc": "Fischer esterification reaches ~67% yield at equilibrium. Continuously removing water with a Dean-Stark trap shifts equilibrium right, dramatically increasing ester yield."
      },
      "example2": {
        "formula": "Nâ‚‚ + 3Hâ‚‚ â‡Œ 2NHâ‚ƒ â†’ high pressure shifts equilibrium right",
        "desc": "In the Haber Process, increasing pressure favours ammonia formation (fewer moles of gas). Removing NHâ‚ƒ as it forms also shifts equilibrium right â€” both are direct applications of Le Chatelier's Principle."
      }
    }
  }
};
