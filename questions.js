/**
 * Banque de questions – G T1 C2 : Les espaces productifs et leurs évolutions
 *
 * Chaque question a :
 *   - id : identifiant unique
 *   - theme : "agricoles" | "industriels" | "services" | "definitions"
 *   - type : label affiché (ex: "Définition", "Question de cours", "Exemple"…)
 *   - question : texte de la question
 *   - hint : (optionnel) indice
 *   - answer : réponse attendue
 *   - explanation : explication complémentaire
 */

const QUESTIONS = [

    // ====================================================================
    //  I – LES ESPACES AGRICOLES
    // ====================================================================

    // --- Questions de cours ---
    {
        id: 1,
        theme: "agricoles",
        type: "Question de cours",
        question: "Quel est le rang de la France en tant que puissance agricole dans l'Union européenne ?",
        answer: "La France est la première puissance agricole de l'Union européenne.",
        explanation: "Grâce à ses grandes surfaces cultivables et à la diversité de ses productions, la France domine l'agriculture européenne."
    },
    {
        id: 2,
        theme: "agricoles",
        type: "Question de cours",
        question: "Qu'est-ce qui caractérise l'agriculture intensive du Bassin parisien ?",
        answer: "C'est une agriculture productiviste, notamment de céréaliculture (ex : la Beauce), bien intégrée à la mondialisation et qui exporte une grande part de sa production.",
        explanation: "Le Bassin parisien bénéficie de vastes plaines fertiles et d'une mécanisation poussée, ce qui en fait l'un des greniers à blé de l'Europe."
    },
    {
        id: 3,
        theme: "agricoles",
        type: "Question de cours",
        question: "Dans quelle région française trouve-t-on principalement l'élevage hors sol ?",
        answer: "En Bretagne.",
        explanation: "La Bretagne concentre une grande partie de l'élevage intensif français (porcs, volailles) avec des bâtiments industriels et une alimentation industrielle."
    },
    {
        id: 4,
        theme: "agricoles",
        type: "Exemple",
        question: "Citez trois régions viticoles françaises mentionnées dans le cours comme cultures spécialisées.",
        answer: "La Champagne, la Bourgogne et le Bordelais.",
        explanation: "Ces vignobles produisent des vins renommés mondialement et sont bien intégrés aux échanges internationaux."
    },
    {
        id: 5,
        theme: "agricoles",
        type: "Question de cours",
        question: "Quelle filière s'est développée grâce à l'agriculture intensive en France ?",
        answer: "La filière agro-alimentaire.",
        explanation: "L'agriculture intensive fournit la matière première à un réseau d'entreprises qui transforment les produits agricoles en produits de consommation."
    },
    {
        id: 6,
        theme: "agricoles",
        type: "Question de cours",
        question: "Quels espaces agricoles sont moins bien intégrés aux échanges mondiaux ? Pourquoi ?",
        answer: "Les régions de polyculture ou d'élevage extensif, comme le Massif central. L'agriculture y est peu rentable et souffre de l'enclavement.",
        explanation: "Ces espaces manquent d'infrastructures de transport et pratiquent une agriculture moins spécialisée, ce qui les rend moins compétitifs sur les marchés mondiaux."
    },
    {
        id: 7,
        theme: "agricoles",
        type: "Question de cours",
        question: "Qu'est-ce que la déprise agricole ? Donnez un exemple de région concernée.",
        answer: "La déprise agricole est le recul ou l'abandon de l'activité agricole dans un territoire. Exemple : le Massif central.",
        explanation: "La déprise se manifeste par la disparition des fermes, l'apparition de friches et l'exode rural vers les villes."
    },
    {
        id: 8,
        theme: "agricoles",
        type: "Question de cours",
        question: "Pourquoi de plus en plus d'agriculteurs se tournent-ils vers des productions de qualité ?",
        answer: "Pour réduire la pollution liée à l'utilisation massive de produits chimiques.",
        explanation: "La prise de conscience environnementale et la demande des consommateurs poussent les agriculteurs vers des labels de qualité (AOC) ou l'agriculture biologique."
    },
    {
        id: 9,
        theme: "agricoles",
        type: "Question de cours",
        question: "Quels types de certifications permettent de garantir la qualité des productions agricoles ?",
        answer: "Les labels comme les AOC (Appellations d'Origine Contrôlée) et l'agriculture biologique.",
        explanation: "Ces certifications garantissent au consommateur un mode de production respectueux de l'environnement ou un ancrage territorial du produit."
    },
    {
        id: 10,
        theme: "agricoles",
        type: "Question de cours",
        question: "Que signifie « céréaliculture » et où est-elle pratiquée en France ?",
        answer: "La céréaliculture est la culture des céréales (blé, maïs, orge…). Elle est pratiquée notamment dans la Beauce, dans le Bassin parisien.",
        explanation: "La Beauce est surnommée le « grenier de la France » grâce à ses immenses plaines céréalières."
    },
    {
        id: 11,
        theme: "agricoles",
        type: "Compréhension",
        question: "Expliquez le lien entre agriculture intensive et mondialisation en France.",
        answer: "L'agriculture intensive produit en grande quantité grâce à la mécanisation et aux produits chimiques, ce qui permet d'exporter une grande part de la production sur les marchés mondiaux.",
        explanation: "La France est un grand exportateur de céréales, de produits laitiers et de vins, ce qui montre l'intégration de son agriculture productive dans les échanges internationaux."
    },
    {
        id: 12,
        theme: "agricoles",
        type: "Question de cours",
        question: "Qu'est-ce que l'enclavement d'un territoire et en quoi cela nuit-il à l'agriculture ?",
        answer: "L'enclavement signifie qu'un territoire est mal desservi par les voies de transport. Cela rend difficile l'acheminement des produits vers les marchés, ce qui pénalise la rentabilité agricole.",
        explanation: "Le Massif central est un exemple de territoire enclavé où l'agriculture souffre de ce manque de connexion aux réseaux de transport."
    },

    // ====================================================================
    //  II – LES ESPACES INDUSTRIELS
    // ====================================================================

    {
        id: 13,
        theme: "industriels",
        type: "Question de cours",
        question: "Comment appelle-t-on le recul global des activités industrielles en France ?",
        answer: "La désindustrialisation.",
        explanation: "Ce phénomène est lié à la concurrence internationale et aux délocalisations vers des pays à moindre coût de main d'œuvre."
    },
    {
        id: 14,
        theme: "industriels",
        type: "Question de cours",
        question: "Quelles sont les deux causes principales de la désindustrialisation en France ?",
        answer: "La concurrence internationale et les délocalisations.",
        explanation: "Les entreprises déplacent leurs activités vers des pays offrant des avantages comparatifs (main d'œuvre moins chère, avantages fiscaux)."
    },
    {
        id: 15,
        theme: "industriels",
        type: "Question de cours",
        question: "Quelles régions françaises sont particulièrement touchées par la crise industrielle ?",
        answer: "Les régions du Nord et du Nord-Est de la France.",
        explanation: "Ces régions, historiquement tournées vers les mines, le textile et l'automobile, ont subi de plein fouet la désindustrialisation."
    },
    {
        id: 16,
        theme: "industriels",
        type: "Exemple",
        question: "Citez des secteurs industriels en crise dans les régions du Nord et du Nord-Est.",
        answer: "Les activités minières, l'industrie textile et l'industrie automobile.",
        explanation: "Ces industries traditionnelles n'ont pas résisté à la concurrence des pays à bas coûts et à la modernisation de l'économie."
    },
    {
        id: 17,
        theme: "industriels",
        type: "Exemple",
        question: "Qu'est-ce qu'une friche industrielle ? Donnez un exemple de reconversion.",
        answer: "Une friche industrielle est un ancien site industriel abandonné. Exemple de reconversion : Lyon Confluence, ancien quartier industriel devenu quartier résidentiel et culturel.",
        explanation: "La reconversion des friches industrielles permet de redonner vie à des espaces abandonnés en y développant de nouvelles activités."
    },
    {
        id: 18,
        theme: "industriels",
        type: "Question de cours",
        question: "Quels étaient les anciens facteurs de localisation des industries ?",
        answer: "La proximité des ressources énergétiques, des matières premières et d'une main d'œuvre nombreuse.",
        explanation: "C'est pourquoi les industries se concentraient historiquement dans le Nord et le Nord-Est, proches des mines de charbon et de fer."
    },
    {
        id: 19,
        theme: "industriels",
        type: "Question de cours",
        question: "Quels sont les nouveaux facteurs de localisation des industries aujourd'hui ?",
        answer: "La proximité des infrastructures de transport, des centres de recherche et des universités, ainsi qu'un cadre de vie attractif pour une main d'œuvre qualifiée.",
        explanation: "La mondialisation a changé les critères : on recherche l'innovation, la connectivité et la qualité de vie plutôt que les matières premières."
    },
    {
        id: 20,
        theme: "industriels",
        type: "Question de cours",
        question: "Quels sont les trois grands mouvements de localisation de l'industrie française dynamique ?",
        answer: "La métropolisation, la littoralisation et le déplacement vers l'Ouest et le Sud.",
        explanation: "Les industries de hautes technologies s'installent dans les métropoles (technopôles), sur les littoraux (ZIP) et dans le Sud/Ouest pour le cadre de vie."
    },
    {
        id: 21,
        theme: "industriels",
        type: "Question de cours",
        question: "Qu'est-ce que la métropolisation dans le contexte industriel ?",
        answer: "C'est le mouvement de concentration des hommes et des activités à haute valeur ajoutée dans les grandes villes (métropoles), avec le développement de technopoles, technopôles et pôles de compétitivité.",
        explanation: "Les métropoles offrent les infrastructures, les universités et les réseaux nécessaires aux industries modernes."
    },
    {
        id: 22,
        theme: "industriels",
        type: "Question de cours",
        question: "Qu'est-ce que la littoralisation et quel type d'infrastructure y est associé ?",
        answer: "La littoralisation est la concentration des activités économiques sur les littoraux. Elle est associée au développement des ZIP (Zones Industrialo-Portuaires) pour les échanges mondiaux.",
        explanation: "Les ports permettent l'importation de matières premières et l'exportation de produits finis, ce qui favorise l'implantation industrielle sur les côtes."
    },
    {
        id: 23,
        theme: "industriels",
        type: "Question de cours",
        question: "Vers quelles parties de la France se déplace l'industrie la plus dynamique ?",
        answer: "Vers l'Ouest et le Sud de la France.",
        explanation: "Ces régions offrent un cadre de vie attractif, des métropoles dynamiques (Toulouse, Bordeaux, Montpellier) et des industries de hautes technologies."
    },
    {
        id: 24,
        theme: "industriels",
        type: "Compréhension",
        question: "Pourquoi les industries de hautes technologies s'installent-elles près des universités et centres de recherche ?",
        answer: "Parce qu'elles ont besoin d'une main d'œuvre qualifiée et de l'innovation issue de la recherche pour développer leurs produits.",
        explanation: "La proximité favorise les échanges entre chercheurs et entreprises, accélérant l'innovation (c'est le principe des technopôles)."
    },
    {
        id: 25,
        theme: "industriels",
        type: "Question de cours",
        question: "Que signifie ZIP et à quoi sert une ZIP ?",
        answer: "ZIP signifie Zone Industrialo-Portuaire. C'est un espace sur le littoral qui associe activités industrielles et portuaires pour faciliter les échanges mondiaux.",
        explanation: "Les ZIP se sont développées avec la mondialisation pour permettre l'importation/exportation de marchandises par voie maritime."
    },

    // ====================================================================
    //  III – LES ESPACES DE SERVICES
    // ====================================================================

    {
        id: 26,
        theme: "services",
        type: "Question de cours",
        question: "Pourquoi la mondialisation favorise-t-elle largement les métropoles ?",
        answer: "Parce qu'elles sont bien desservies en transports et communication, concentrent les fonctions de commandement, les universités, les centres de recherche, les technopôles et les fonctions commerciales.",
        explanation: "Les métropoles cumulent les avantages qui les rendent attractives pour les entreprises et les travailleurs qualifiés."
    },
    {
        id: 27,
        theme: "services",
        type: "Exemple",
        question: "Quel est l'exemple de quartier d'affaires mentionné dans le cours ?",
        answer: "La Défense (à Paris).",
        explanation: "La Défense concentre les sièges sociaux de grandes entreprises et les activités financières. C'est le plus grand quartier d'affaires d'Europe."
    },
    {
        id: 28,
        theme: "services",
        type: "Exemple",
        question: "Quel est l'exemple de technopôle mentionné dans le cours ?",
        answer: "Sophia Antipolis (près de Nice).",
        explanation: "Sophia Antipolis est le plus grand technopôle d'Europe, regroupant des entreprises de haute technologie, des centres de recherche et des universités."
    },
    {
        id: 29,
        theme: "services",
        type: "Question de cours",
        question: "Quel est le rang de la France comme destination touristique mondiale ?",
        answer: "La France est la première destination touristique mondiale.",
        explanation: "Avec 98 millions de touristes en 2023, la France devance l'Espagne et les États-Unis."
    },
    {
        id: 30,
        theme: "services",
        type: "Question de cours",
        question: "Combien de touristes la France a-t-elle accueillis en 2023 ?",
        answer: "98 millions de touristes.",
        explanation: "Ce chiffre confirme la place de premier plan de la France dans le tourisme mondial."
    },
    {
        id: 31,
        theme: "services",
        type: "Question de cours",
        question: "Quels sont les différents atouts touristiques de la France mentionnés dans le cours ?",
        answer: "Son immense patrimoine culturel (villes, musées, châteaux), ses littoraux et montagnes aménagés, ses parcs de loisirs (Disneyland Paris, Futuroscope) et son tourisme vert.",
        explanation: "La diversité des attraits touristiques permet à la France d'attirer des touristes aux profils très variés tout au long de l'année."
    },
    {
        id: 32,
        theme: "services",
        type: "Exemple",
        question: "Citez deux parcs de loisirs français mentionnés dans le cours.",
        answer: "Disneyland Paris et le Futuroscope.",
        explanation: "Ces parcs attirent des millions de visiteurs chaque année et génèrent de nombreux emplois dans le secteur des services."
    },
    {
        id: 33,
        theme: "services",
        type: "Question de cours",
        question: "Dans quels secteurs d'activité le tourisme crée-t-il des emplois en France ?",
        answer: "Dans l'hôtellerie/restauration, les musées, les parcs et le secteur des transports (aéroports, pôles intermodaux, gares).",
        explanation: "Le tourisme est un moteur économique majeur qui irrigue de nombreux secteurs d'activité."
    },
    {
        id: 34,
        theme: "services",
        type: "Question de cours",
        question: "Comment appelle-t-on le renforcement du poids des services dans l'économie ?",
        answer: "La tertiarisation.",
        explanation: "En France, le secteur tertiaire (services) représente aujourd'hui environ 75% des emplois."
    },
    {
        id: 35,
        theme: "services",
        type: "Compréhension",
        question: "Expliquez pourquoi les métropoles concentrent les fonctions de commandement.",
        answer: "Les métropoles offrent les infrastructures de transport et de communication, les services aux entreprises, la main d'œuvre qualifiée et les réseaux nécessaires aux sièges sociaux et aux activités décisionnelles.",
        explanation: "Les quartiers d'affaires comme La Défense regroupent les sièges sociaux car ils bénéficient de la proximité des autres entreprises, des services financiers et des connexions internationales."
    },
    {
        id: 36,
        theme: "services",
        type: "Question de cours",
        question: "Qu'est-ce qu'un pôle intermodal ? Donnez un exemple.",
        answer: "C'est un lieu où les différents modes de transports sont interconnectés, permettant le passage rapide d'un mode à un autre. Exemple : la place Stalingrad à Bordeaux (tram, bus et vélos).",
        explanation: "Les pôles intermodaux facilitent la mobilité et sont essentiels au fonctionnement des métropoles et au tourisme."
    },

    // ====================================================================
    //  DÉFINITIONS
    // ====================================================================

    // --- Espaces agricoles ---
    {
        id: 37,
        theme: "definitions",
        type: "Définition",
        question: "Définissez l'agriculture intensive ou productiviste.",
        answer: "Agriculture qui vise l'augmentation des rendements en utilisant la mécanisation et l'usage des produits chimiques (engrais, pesticides, produits phytosanitaires).",
        explanation: "Ce modèle agricole est très productif mais pose des problèmes environnementaux (pollution des sols et de l'eau)."
    },
    {
        id: 38,
        theme: "definitions",
        type: "Définition",
        question: "Définissez l'agriculture commerciale (ou de marché).",
        answer: "Agriculture dont la production est destinée à être vendue.",
        explanation: "Elle s'oppose à l'agriculture vivrière (destinée à nourrir l'agriculteur et sa famille), qui est quasi inexistante en France."
    },
    {
        id: 39,
        theme: "definitions",
        type: "Définition",
        question: "Définissez l'élevage hors sol.",
        answer: "Élevage en batterie dans des bâtiments industriels avec alimentation industrielle.",
        explanation: "Ce type d'élevage, très courant en Bretagne, permet de produire en grande quantité mais est critiqué pour ses impacts sur le bien-être animal et l'environnement."
    },
    {
        id: 40,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la filière agro-alimentaire.",
        answer: "Ensemble des entreprises fournissant des produits destinés à la production agricole ou transformant des produits végétaux ou animaux en produit de consommation.",
        explanation: "La filière agro-alimentaire est un secteur majeur de l'économie française, de la production des engrais jusqu'à la vente en supermarché."
    },
    {
        id: 41,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la déprise agricole.",
        answer: "Recul ou abandon de l'activité agricole dans un territoire (disparition des fermes, friches…).",
        explanation: "La déprise agricole touche principalement les zones rurales enclavées où l'agriculture est peu rentable."
    },

    // --- Espaces industriels ---
    {
        id: 42,
        theme: "definitions",
        type: "Définition",
        question: "Définissez les industries de hautes technologies.",
        answer: "Industries de pointe dans les domaines de l'information et de la communication (TIC), de l'aérospatiale ou des biotechnologies.",
        explanation: "Ces industries à forte valeur ajoutée se concentrent dans les technopôles et les métropoles du Sud et de l'Ouest."
    },
    {
        id: 43,
        theme: "definitions",
        type: "Définition",
        question: "Définissez un technopôle (masculin). Donnez un exemple.",
        answer: "Parc de haute technologie associant sur un même espace des entreprises, des centres de recherche et des grandes écoles ou universités pour favoriser les échanges et l'innovation dans les industries de pointe. Exemple : Sophia Antipolis.",
        explanation: "Attention à ne pas confondre avec « une technopole » (féminin) qui désigne une métropole entière orientée vers les hautes technologies."
    },
    {
        id: 44,
        theme: "definitions",
        type: "Définition",
        question: "Définissez une technopole (féminin). Donnez des exemples.",
        answer: "Métropole qui fonde son développement sur les industries de pointe et la recherche. Exemples : Toulouse, Bordeaux, Montpellier, Grenoble.",
        explanation: "La différence avec « un technopôle » (masculin) est que la technopole désigne la ville entière, pas seulement un parc technologique."
    },
    {
        id: 45,
        theme: "definitions",
        type: "Définition",
        question: "Définissez un pôle de compétitivité.",
        answer: "Rassemblement sur un vaste territoire d'entreprises de toutes tailles, de centres de recherche et d'établissements universitaires qui, avec le soutien financier de l'État, développent une coopération autour d'une même spécialité.",
        explanation: "Les pôles de compétitivité sont une politique de l'État pour renforcer l'innovation et la compétitivité de l'industrie française."
    },
    {
        id: 46,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la reconversion (d'un espace industriel). Donnez un exemple.",
        answer: "Processus de transformation d'un espace en crise pour y développer de nouvelles activités. Exemple : le quartier de la Confluence à Lyon, ancien quartier industriel devenu quartier résidentiel et culturel.",
        explanation: "La reconversion est nécessaire dans les anciennes régions industrielles du Nord et du Nord-Est pour redynamiser ces territoires."
    },
    {
        id: 47,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la délocalisation.",
        answer: "Déplacement d'activités économiques vers des états du monde qui offrent un avantage comparatif (faible coût de la main d'œuvre, avantages fiscaux…).",
        explanation: "Les délocalisations contribuent à la désindustrialisation de la France et à la perte d'emplois dans le secteur industriel."
    },
    {
        id: 48,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la désindustrialisation.",
        answer: "Diminution de la place du secteur industriel dans l'économie d'un pays (moins de salariés dans ce secteur, diminution de la richesse apportée par ce secteur…).",
        explanation: "La France a perdu environ un tiers de ses emplois industriels depuis les années 1970."
    },
    {
        id: 49,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la métropolisation.",
        answer: "Mouvement de concentration des hommes et des activités à haute valeur ajoutée dans les espaces urbains de grande taille.",
        explanation: "La métropolisation renforce le poids des grandes villes dans l'économie, au détriment parfois des espaces ruraux."
    },

    // --- Espaces de services ---
    {
        id: 50,
        theme: "definitions",
        type: "Définition",
        question: "Définissez ce qu'est un service.",
        answer: "Mise à disposition d'une capacité technique (transport, commerce…) ou intellectuelle (médecins, enseignants, chercheurs…) qui peut être utile aux personnes ou aux entreprises.",
        explanation: "Le secteur des services (tertiaire) est devenu le secteur dominant de l'économie française."
    },
    {
        id: 51,
        theme: "definitions",
        type: "Définition",
        question: "Définissez la tertiarisation.",
        answer: "Renforcement du poids des services dans l'économie et dans l'emploi.",
        explanation: "La tertiarisation est un phénomène commun à tous les pays développés."
    },
    {
        id: 52,
        theme: "definitions",
        type: "Définition",
        question: "Définissez le tourisme vert.",
        answer: "Tourisme diffus, pratiqué en milieu rural et qui se consacre à la découverte de la nature, du terroir et de ses traditions.",
        explanation: "Le tourisme vert est une alternative au tourisme de masse et contribue au développement des espaces ruraux."
    },
    {
        id: 53,
        theme: "definitions",
        type: "Définition",
        question: "Définissez un quartier d'affaires. Donnez un exemple.",
        answer: "Quartier qui concentre des activités financières et les sièges sociaux des entreprises. Exemple : la Défense à Paris.",
        explanation: "Les quartiers d'affaires sont le symbole de la puissance économique des métropoles."
    },
    {
        id: 54,
        theme: "definitions",
        type: "Définition",
        question: "Définissez un pôle intermodal. Donnez un exemple.",
        answer: "Lieu où les différents modes de transports sont interconnectés, permettant le passage rapide d'un mode de transport à un autre. Exemple : place Stalingrad à Bordeaux (tram, bus et vélos autour de la place).",
        explanation: "Les pôles intermodaux facilitent les déplacements quotidiens et sont un élément clé de l'aménagement des métropoles."
    },

    // ====================================================================
    //  QUESTIONS TRANSVERSALES & COMPRÉHENSION
    // ====================================================================

    {
        id: 55,
        theme: "agricoles",
        type: "Compréhension",
        question: "Quelle est la différence entre une agriculture intégrée à la mondialisation et une agriculture en déprise ?",
        answer: "L'agriculture intégrée à la mondialisation est intensive, exporte sa production et est compétitive (ex : Bassin parisien, Bretagne). L'agriculture en déprise est peu rentable, mal connectée aux marchés et en recul (ex : Massif central).",
        explanation: "Cette opposition illustre les inégalités territoriales en France : certains espaces profitent de la mondialisation tandis que d'autres en souffrent."
    },
    {
        id: 56,
        theme: "industriels",
        type: "Compréhension",
        question: "Quelle est la différence entre un technopôle (masculin) et une technopole (féminin) ?",
        answer: "Un technopôle (masculin) est un parc de haute technologie (ex : Sophia Antipolis). Une technopole (féminin) est une métropole entière qui fonde son développement sur les hautes technologies (ex : Toulouse).",
        explanation: "C'est une distinction importante à connaître pour le brevet ! L'accent circonflexe sur le « ô » distingue le parc (technopôle) de la ville (technopole)."
    },
    {
        id: 57,
        theme: "services",
        type: "Compréhension",
        question: "Comment le tourisme contribue-t-il à l'économie française ?",
        answer: "Le tourisme crée des millions d'emplois dans l'hôtellerie/restauration, les musées, les parcs de loisirs et les transports. La France est la 1ère destination mondiale avec 98 millions de touristes en 2023.",
        explanation: "Le tourisme est un pilier du secteur tertiaire français et bénéficie de la diversité du patrimoine et des paysages du pays."
    },
    {
        id: 58,
        theme: "industriels",
        type: "Compréhension",
        question: "Pourquoi l'industrie française se déplace-t-elle du Nord-Est vers le Sud et l'Ouest ?",
        answer: "Parce que les nouveaux facteurs de localisation (proximité des centres de recherche, des universités, cadre de vie attractif, infrastructures de transport) favorisent les métropoles du Sud et de l'Ouest plutôt que les anciennes régions industrielles du Nord-Est.",
        explanation: "Toulouse (aéronautique), Montpellier (biotechnologies), Bordeaux (numérique) illustrent cette dynamique."
    },
    {
        id: 59,
        theme: "services",
        type: "Compréhension",
        question: "Quelles sont les fonctions concentrées dans les métropoles françaises ?",
        answer: "Les fonctions de commandement (quartiers d'affaires), les universités et centres de recherche, les technopôles, les fonctions commerciales (grandes surfaces, entrepôts) et les infrastructures de transport.",
        explanation: "Cette concentration des fonctions dans les métropoles est un effet direct de la métropolisation."
    },
    {
        id: 60,
        theme: "agricoles",
        type: "Question de cours",
        question: "Que signifie AOC ?",
        answer: "Appellation d'Origine Contrôlée.",
        explanation: "L'AOC certifie qu'un produit a été fabriqué dans une zone géographique définie selon un savoir-faire reconnu, garantissant sa qualité et son origine."
    },
    {
        id: 61,
        theme: "industriels",
        type: "Question de cours",
        question: "Qu'est-ce qu'une délocalisation et pourquoi les entreprises délocalisent-elles ?",
        answer: "Une délocalisation est le déplacement d'activités économiques vers des pays offrant un avantage comparatif. Les entreprises délocalisent pour réduire leurs coûts (main d'œuvre moins chère, avantages fiscaux).",
        explanation: "Les délocalisations touchent surtout les industries à faible valeur ajoutée (textile, électronique grand public)."
    },
    {
        id: 62,
        theme: "services",
        type: "Question de cours",
        question: "Quels types de patrimoine culturel attirent les touristes en France ?",
        answer: "Les villes, les musées et les châteaux.",
        explanation: "La France possède un patrimoine culturel exceptionnel, avec des sites comme le Louvre, les châteaux de la Loire ou les villes historiques."
    },
    {
        id: 63,
        theme: "industriels",
        type: "Exemple",
        question: "Citez des exemples de villes françaises considérées comme des technopoles.",
        answer: "Toulouse, Bordeaux, Montpellier et Grenoble.",
        explanation: "Ces villes fondent leur développement sur les industries de pointe : aéronautique à Toulouse, numérique à Bordeaux, biotechnologies à Montpellier, microélectronique à Grenoble."
    },
    {
        id: 64,
        theme: "agricoles",
        type: "Compréhension",
        question: "Quels sont les inconvénients de l'agriculture intensive ?",
        answer: "L'agriculture intensive provoque une pollution importante liée à l'utilisation massive de produits chimiques (engrais, pesticides, produits phytosanitaires).",
        explanation: "C'est cette pollution qui pousse de plus en plus d'agriculteurs vers l'agriculture biologique et les labels de qualité."
    },
    {
        id: 65,
        theme: "services",
        type: "Question de cours",
        question: "Qu'est-ce que le tourisme vert et où se pratique-t-il ?",
        answer: "Le tourisme vert est un tourisme diffus, pratiqué en milieu rural, consacré à la découverte de la nature, du terroir et de ses traditions.",
        explanation: "Il permet de valoriser les espaces ruraux et de lutter contre la déprise en créant des activités économiques dans les campagnes."
    },
    {
        id: 66,
        theme: "industriels",
        type: "Compréhension",
        question: "Quel est le rôle de l'État dans les pôles de compétitivité ?",
        answer: "L'État apporte un soutien financier aux pôles de compétitivité pour favoriser la coopération entre entreprises, centres de recherche et universités autour d'une même spécialité.",
        explanation: "C'est une politique industrielle qui vise à renforcer l'innovation et la compétitivité de la France face à la concurrence internationale."
    },
    {
        id: 67,
        theme: "services",
        type: "Compréhension",
        question: "Pourquoi peut-on parler de « tertiarisation » de l'économie française ?",
        answer: "Parce que le secteur des services (tertiaire) occupe une place de plus en plus importante dans l'économie et l'emploi en France, au détriment de l'agriculture et de l'industrie.",
        explanation: "Aujourd'hui, environ 3 emplois sur 4 en France sont dans le secteur tertiaire."
    },
    {
        id: 68,
        theme: "agricoles",
        type: "Question de cours",
        question: "Qu'est-ce que l'élevage extensif et en quoi diffère-t-il de l'élevage intensif ?",
        answer: "L'élevage extensif utilise de grandes surfaces de pâturages avec peu d'intrants chimiques, contrairement à l'élevage intensif (hors sol) qui concentre les animaux dans des bâtiments industriels avec une alimentation industrielle.",
        explanation: "L'élevage extensif est plus respectueux de l'environnement mais moins productif, ce qui le rend moins compétitif sur les marchés mondiaux."
    },
    {
        id: 69,
        theme: "industriels",
        type: "Question de cours",
        question: "Qu'est-ce que Lyon Confluence ?",
        answer: "Lyon Confluence est un ancien quartier industriel de Lyon qui a fait l'objet d'une reconversion : il est devenu un quartier résidentiel et culturel.",
        explanation: "C'est un exemple emblématique de reconversion d'une friche industrielle en un espace moderne et attractif."
    },
    {
        id: 70,
        theme: "definitions",
        type: "Définition",
        question: "Quelle est la différence entre « délocalisation » et « désindustrialisation » ?",
        answer: "La délocalisation est le déplacement d'activités vers un autre pays (cause). La désindustrialisation est la diminution globale du secteur industriel dans l'économie d'un pays (conséquence).",
        explanation: "Les délocalisations sont l'une des causes de la désindustrialisation, mais pas la seule (il y a aussi l'automatisation et la concurrence internationale)."
    }
];
