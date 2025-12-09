/**
 * Word List for DrawGuess Game
 * Danh sách từ để vẽ, phân loại theo độ khó
 */

const EASY_WORDS = [
    // Original easy words
    'cat', 'dog', 'sun', 'moon', 'star', 'tree', 'fish', 'bird', 'car', 'house',
    'apple', 'book', 'ball', 'cup', 'hat', 'shoe', 'flower', 'cloud', 'heart', 'smile',
    // New easy words - Common objects and animals
    'pen', 'key', 'bed', 'bus', 'egg', 'eye', 'arm', 'leg', 'hand', 'foot',
    'hat', 'cap', 'bag', 'box', 'map', 'bed', 'door', 'wall', 'roof', 'desk',
    'lamp', 'sofa', 'fork', 'knife', 'plate', 'bowl', 'milk', 'juice', 'cake', 'bread',
    'rice', 'meat', 'soup', 'egg', 'ice', 'snow', 'rain', 'wind', 'fire', 'water',
    'sand', 'rock', 'hill', 'lake', 'sea', 'sky', 'moon', 'star', 'sun', 'milk',
    'ant', 'bee', 'cow', 'pig', 'rat', 'bat', 'owl', 'fox', 'wolf', 'bear',
    'frog', 'duck', 'goat', 'lamb', 'lion', 'tiger', 'zebra', 'giraffe', 'monkey', 'snake'
];

const MEDIUM_WORDS = [
    // Original medium words
    'elephant', 'rainbow', 'guitar', 'camera', 'pizza', 'rocket', 'dragon', 'castle',
    'penguin', 'butterfly', 'umbrella', 'bicycle', 'volcano', 'diamond', 'crown',
    'lighthouse', 'telescope', 'pyramid', 'octopus', 'helicopter',
    // New medium words - Slightly more complex objects and concepts
    'airplane', 'balloon', 'basket', 'battery', 'beach', 'bridge', 'broom', 'bucket',
    'candle', 'carpet', 'castle', 'cave', 'chain', 'chalk', 'cheese', 'cherry',
    'church', 'clock', 'cloud', 'clown', 'comet', 'cookie', 'coral', 'cowboy',
    'crayon', 'crocodile', 'crown', 'dancer', 'desert', 'dinosaur', 'doctor',
    'dolphin', 'donut', 'dragon', 'drum', 'duck', 'eagle', 'earth', 'eggplant',
    'eraser', 'fairy', 'feather', 'fireman', 'flag', 'flamingo', 'flashlight',
    'flute', 'football', 'forest', 'fountain', 'frog', 'garden', 'ghost', 'giraffe',
    'glacier', 'globe', 'grapes', 'grass', 'guitar', 'hamburger', 'hammer', 'harp',
    'hat', 'helicopter', 'hippopotamus', 'honey', 'hospital', 'hotel', 'hourglass',
    'house', 'ice cream', 'igloo', 'island', 'jacket', 'jellyfish', 'jewel', 'juice',
    'kangaroo', 'kettle', 'key', 'kite', 'kiwi', 'ladder', 'ladybug', 'lamp', 'lantern',
    'laptop', 'leaf', 'lemon', 'leprechaun', 'letter', 'lighthouse', 'lightning', 'lily',
    'lobster', 'lollipop', 'magic', 'magician', 'mailbox', 'mango', 'maple', 'marshmallow',
    'mask', 'maze', 'microphone', 'milk', 'mirror', 'monkey', 'moon', 'mountain', 'muffin',
    'mushroom', 'music', 'necklace', 'nest', 'newspaper', 'night', 'ninja', 'noodle', 'nose',
    'notebook', 'ocean', 'orange', 'ostrich', 'owl', 'paint', 'pajamas', 'pancake', 'panda',
    'pants', 'paper', 'parachute', 'parrot', 'peach', 'pear', 'penny', 'pepper', 'piano',
    'pickle', 'picture', 'pie', 'pigeon', 'pillow', 'pineapple', 'pizza', 'planet', 'plum',
    'popcorn', 'postcard', 'potato', 'present', 'pumpkin', 'puppet', 'puzzle', 'queen',
    'quilt', 'rabbit', 'rainbow', 'raincoat', 'raspberry', 'ring', 'river', 'robot',
    'rocket', 'rocking chair', 'rose', 'sailboat', 'sandwich', 'sausage', 'scarf', 'scissors',
    'seashell', 'shark', 'sheep', 'ship', 'shirt', 'shoe', 'shorts', 'shovel', 'sink',
    'skateboard', 'ski', 'snail', 'snake', 'snowman', 'sock', 'spider', 'spoon', 'squid',
    'squirrel', 'starfish', 'strawberry', 'sunflower', 'sunglasses', 'swan', 'sweater',
    'swimming', 'swing', 'sword', 'table', 'taco', 'teapot', 'teddy bear', 'telephone',
    'television', 'tent', 'thermometer', 'tiger', 'toaster', 'toilet', 'tomato', 'toothbrush',
    'toothpaste', 'tornado', 'tractor', 'train', 'tree', 'truck', 'turtle', 'umbrella',
    'unicorn', 'vampire', 'violin', 'volcano', 'waffle', 'watch', 'waterfall', 'whale',
    'wheel', 'windmill', 'window', 'wine', 'wizard', 'worm', 'xylophone', 'yacht', 'yarn',
    'yogurt', 'zebra', 'zipper', 'zoo'
];

const HARD_WORDS = [
    // Original hard words
    'microscope', 'constellation', 'archaeology', 'equilibrium', 'photosynthesis',
    'architecture', 'metamorphosis', 'kaleidoscope', 'silhouette', 'hieroglyphics',
    'chromosome', 'thermometer', 'stethoscope', 'parallelogram', 'refrigerator',
    // New hard words - Complex words and concepts
    'acceleration', 'accommodate', 'acknowledgment', 'aesthetic', 'amphibious',
    'anachronism', 'anomaly', 'antidisestablishmentarianism', 'apocalypse',
    'apparatus', 'appendix', 'apprehension', 'aristocracy', 'asymmetrical',
    'bacteria', 'barbecue', 'benevolent', 'bewildered', 'biodiversity',
    'biodegradable', 'bureaucracy', 'camouflage', 'cappuccino', 'carbohydrate',
    'catastrophe', 'chauffeur', 'choreography', 'circumference', 'collaboration',
    'commemorate', 'commencement', 'commotion', 'compartment', 'compatible',
    'compensation', 'competition', 'complementary', 'composure', 'comprehension',
    'compromise', 'concentration', 'condescending', 'confiscate', 'conglomerate',
    'consciousness', 'consequence', 'contagious', 'contaminate', 'contemporary',
    'contradiction', 'controversial', 'coordinate', 'correspondence', 'courageous',
    'courteous', 'cryptocurrency', 'deforestation', 'dehydrated', 'democracy',
    'deprivation', 'derivative', 'descendant', 'despicable', 'deteriorate',
    'determination', 'devastating', 'dictionary', 'dilemma', 'diminish',
    'disappearance', 'disastrous', 'discipline', 'discrimination', 'disheveled',
    'disintegrate', 'dismantle', 'disoriented', 'disproportionate', 'diversion',
    'dormitory', 'earthquake', 'eccentric', 'ecosystem', 'efficient',
    'egotistical', 'elaborate', 'electromagnetic', 'elementary', 'eliminate',
    'embarrassment', 'embezzlement', 'encounter', 'encyclopedia', 'endangered',
    'endurance', 'enormous', 'entrepreneur', 'environment', 'epidemic',
    'equipment', 'equivalent', 'erosion', 'escalator', 'espresso',
    'eternity', 'euphemism', 'exaggerate', 'examination', 'exasperate',
    'exclamation', 'exhaustion', 'expedition', 'experiment', 'exploration',
    'extravagant', 'facetious', 'fascinating', 'fashionable', 'federation',
    'fluorescent', 'formidable', 'fossil', 'fragile', 'frustration',
    'fundamental', 'galaxy', 'generation', 'geography', 'gigantic',
    'government', 'gratitude', 'guarantee', 'hallucination', 'hamburger',
    'handkerchief', 'haphazard', 'hazardous', 'headquarters', 'helicopter',
    'hieroglyphics', 'hilarious', 'hippopotamus', 'horizon', 'horrifying',
    'hospitality', 'humidity', 'hurricane', 'hydraulic', 'hypothesis',
    'identical', 'ignorance', 'illustration', 'imagination', 'immediately',
    'immigrant', 'impatient', 'impeccable', 'impossible', 'impression',
    'incredible', 'independence', 'indispensable', 'inevitable', 'influence',
    'ingredient', 'inhabitant', 'innocent', 'innovation', 'inquisitive',
    'insignificant', 'insomnia', 'intelligence', 'intermediate', 'interruption',
    'introduction', 'investigate', 'invisible', 'involuntary', 'iridescent',
    'irresistible', 'irritation', 'isolation', 'jealousy', 'journalist',
    'judgment', 'juxtapose', 'kaleidoscope', 'kangaroo', 'kayak',
    'kerosene', 'kilogram', 'kiosk', 'knowledge', 'laboratory',
    'landscape', 'language', 'laughter', 'laundry', 'luxurious',
    'machinery', 'magnificent', 'maintenance', 'malicious', 'maneuver',
    'manipulate', 'marvelous', 'mathematics', 'mechanical', 'meditation',
    'melancholy', 'memorandum', 'merchandise', 'meteorology', 'microphone',
    'microscope', 'microwave', 'miraculous', 'miscellaneous', 'mischievous',
    'misfortune', 'misinterpret', 'monarchy', 'monotonous', 'mysterious',
    'narrative', 'navigation', 'necessary', 'neighbor', 'nevertheless',
    'nightmare', 'nonchalant', 'nonsense', 'nostalgia', 'noticeable',
    'numerous', 'obedient', 'obnoxious', 'obstacle', 'occasionally',
    'occurrence', 'offensive', 'omission', 'operate', 'opportunity',
    'optimistic', 'orchestra', 'ordinarily', 'organization', 'original',
    'outrageous', 'overwhelming', 'oxygen', 'pajamas', 'pamphlet',
    'panorama', 'parallel', 'paralysis', 'parasite', 'parliament',
    'peculiar', 'pedestrian', 'penetrate', 'perceive', 'perennial',
    'permanent', 'permission', 'perseverance', 'personality', 'persuade',
    'phenomenon', 'philosophy', 'photograph', 'pneumonia', 'pollution',
    'portable', 'portrait', 'position', 'positive', 'possibility',
    'postpone', 'potential', 'practical', 'precaution', 'precious',
    'predicament', 'preferable', 'prejudice', 'preparation', 'prescription',
    'president', 'pressure', 'prestige', 'presume', 'pretense',
    'previous', 'primitive', 'privilege', 'procedure', 'proceed',
    'proclaim', 'productive', 'professional', 'profound', 'progressive',
    'prohibit', 'prolong', 'prominent', 'pronunciation', 'propaganda',
    'prosperity', 'protein', 'prototype', 'proverb', 'provision',
    'provoke', 'psychology', 'punctual', 'purchase', 'purpose',
    'pursuit', 'qualification', 'quality', 'quantity', 'quarantine',
    'questionnaire', 'quotation', 'radiation', 'radioactive', 'rambunctious',
    'realistic', 'reassure', 'rebellion', 'receipt', 'receive',
    'recommend', 'reference', 'refrigerator', 'regardless', 'regulation',
    'rehearsal', 'reimburse', 'reject', 'relaxation', 'relevant',
    'relieved', 'reluctant', 'remuneration', 'repetition', 'representative',
    'reprimand', 'reptile', 'requirement', 'resemble', 'reservoir',
    'residence', 'resistance', 'resource', 'respiration', 'restaurant',
    'resuscitate', 'retaliate', 'retrieve', 'reverberate', 'revolution',
    'rhetoric', 'rhinoceros', 'ridiculous', 'sacrifice', 'sacrilegious',
    'safety', 'salmon', 'sandwich', 'sarcasm', 'satisfaction',
    'scarcity', 'scenery', 'schedule', 'science', 'scissors',
    'scrumptious', 'secretary', 'seize', 'sentence', 'separate',
    'sergeant', 'several', 'shampoo', 'sheriff', 'shrimp',
    'shuttle', 'sieve', 'significance', 'silhouette', 'similar',
    'sincerely', 'situation', 'skeleton', 'skeptical', 'skyscraper',
    'sleigh', 'slippery', 'smooth', 'sneeze', 'sociable',
    'solar', 'soldier', 'sophisticated', 'souvenir', 'spaghetti',
    'special', 'spectrum', 'spontaneous', 'squash', 'stationary',
    'stationery', 'statistics', 'stomach', 'strength', 'strenuous',
    'stretch', 'stubborn', 'submarine', 'substitute', 'subtle',
    'suburban', 'suffocate', 'superintendent', 'superstition', 'surround',
    'surveillance', 'survive', 'suspicious', 'sweater', 'sword',
    'symphony', 'symptom', 'synagogue', 'syndrome', 'synonym',
    'synthesis', 'system', 'tangerine', 'tangible', 'tapestry',
    'tarantula', 'technique', 'technology', 'telegraph', 'telephone',
    'telescope', 'television', 'temperature', 'temporary', 'tendency',
    'terrific', 'testimony', 'themselves', 'thermometer', 'thorough',
    'thoughtful', 'threaten', 'threshold', 'thunderstorm', 'tolerate',
    'tomorrow', 'tornado', 'tournament', 'tragedy', 'traitor',
    'transfer', 'transparent', 'treasure', 'treatment', 'tremendous',
    'triangle', 'triumph', 'trolley', 'tropical', 'troublesome',
    'turbulent', 'twelfth', 'tyrannosaurus', 'tyranny', 'ultimate',
    'umbrella', 'unanimous', 'unbelievable', 'unconscious', 'underground',
    'underneath', 'underrate', 'understand', 'underwater', 'undesirable',
    'undress', 'unexpected', 'unfamiliar', 'unfortunate', 'unhappy',
    'unicycle', 'uniform', 'unique', 'unite', 'universe',
    'university', 'unknown', 'unpleasant', 'unusual', 'upholstery',
    'utensil', 'vacancy', 'vacation', 'vacuum', 'vague',
    'valentine', 'valuable', 'vanilla', 'vanish', 'variety',
    'various', 'vegetable', 'vehicle', 'velocity', 'velvet',
    'veterinarian', 'victory', 'village', 'vinegar', 'violence',
    'violin', 'virtuoso', 'visible', 'vision', 'visitor',
    'vitamin', 'volcano', 'volleyball', 'volunteer', 'vulnerable',
    'waffle', 'warranty', 'watermelon', 'weather', 'weird',
    'whatever', 'wheelbarrow', 'wherever', 'whisper', 'whistle',
    'whoever', 'wholesome', 'wikipedia', 'wilderness', 'withhold',
    'wonderful', 'wrestle', 'wrinkle', 'xylophone', 'yesterday',
    'yolk', 'youthful', 'zephyr', 'zigzag', 'zodiac', 'zoology'
];

const ALL_WORDS = [...EASY_WORDS, ...MEDIUM_WORDS, ...HARD_WORDS];

/**
 * Get random words from the word list
 * @param {number} count - Number of words to return (default: 3)
 * @param {string} difficulty - 'easy', 'medium', 'hard', or 'mixed' (default: 'mixed')
 * @returns {string[]} Array of random words
 */
function getRandomWords(count = 3, difficulty = 'mixed') {
    let wordPool;
    
    switch (difficulty) {
        case 'easy':
            wordPool = EASY_WORDS;
            break;
        case 'medium':
            wordPool = MEDIUM_WORDS;
            break;
        case 'hard':
            wordPool = HARD_WORDS;
            break;
        case 'mixed':
        default:
            wordPool = ALL_WORDS;
            break;
    }
    
    // Shuffle and pick random words
    const shuffled = [...wordPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get word by difficulty
 * @param {string} difficulty - 'easy', 'medium', or 'hard'
 * @returns {string} Random word of specified difficulty
 */
function getWordByDifficulty(difficulty) {
    const words = getRandomWords(1, difficulty);
    return words[0];
}

module.exports = {
    EASY_WORDS,
    MEDIUM_WORDS,
    HARD_WORDS,
    ALL_WORDS,
    getRandomWords,
    getWordByDifficulty
};
