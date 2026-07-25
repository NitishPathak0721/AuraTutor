const COURSES = {
  hindi: {
    id: "hindi",
    title: "Hindi Language",
    icon: "🇮🇳",
    description: "Explore the rich grammar, vocabulary, and phonetic script of Hindi.",
    chapters: [
      {
        id: "varnamala",
        title: "Hindi Alphabet (वर्णमाला)",
        paceContent: {
          comprehensive: {
            title: "Understanding Swar (स्वर) and Vyanjan (व्यंजन)",
            text: `Welcome to Hindi! Hindi is written in the **Devanagari** script. Unlike English, Hindi is written exactly as it is spoken.

The alphabet is split into:
1. **Swar (स्वर - Vowels)**: Independent sounds like अ (a), आ (aa), इ (i), ई (ee). There are 11 vowels.
2. **Vyanjan (व्यंजन - Consonants)**: Sounds that need vowels to be spoken, like क (ka), ख (kha), ग (ga).

Think of consonants as empty cars and vowels as passengers that give them direction!`,
            analogy: "Analogy: Learning Swar and Vyanjan is like learning the musical notes before playing a song. Vowels are the raw breath, and consonants shape that breath.",
            keyTakeaway: "Devanagari is a phonetic script where letters directly represent spoken sounds."
          },
          balanced: {
            title: "Phonetics of the Devanagari Alphabet",
            text: `Hindi uses the **Devanagari** script, which is an abugida writing system organized scientifically by point of articulation.

- **Swar (Vowels)**: 11 characters representing monophthongs and diphthongs.
- **Vyanjan (Consonants)**: 33 characters grouped by where the sound is produced in the mouth (velar, palatal, retroflex, dental, labial).

For example, the Velar group (K-varg) includes: क (ka), ख (kha), ग (ga), घ (gha), ङ (nga).`,
            analogy: "Key Concept: Consonant classification is based on articulatory anatomy, starting from the throat (velar) moving forward to the lips (labial).",
            keyTakeaway: "The Devanagari consonants are organized systematically based on vocal cords vibration and tongue positions."
          },
          accelerated: {
            title: "Articulatory Phonetics of Sanskritized Devanagari",
            text: `The Devanagari script is a highly structured phonetic system where consonants are categorized into a $5 \\times 5$ matrix of **vargas** (articulatory classes) along with semi-vowels and sibilants:

1. **Velar (कण्ठ्य)**: क, ख, ग, घ, ङ
2. **Palatal (तालव्य)**: च, छ, ज, झ, ञ
3. **Retroflex (मूर्धन्य)**: ट, ठ, ड, ढ, ण
4. **Dental (दन्त्य)**: त, थ, द, ध, न
5. **Labial (ओष्ठ्य)**: प, फ, ब, भ, म

Each class features a sequence of: Unvoiced Unaspirated, Unvoiced Aspirated, Voiced Unaspirated, Voiced Aspirated, and Nasal phonemes. Modern Hindi also incorporates loan phonemes (like फ़, ज़) utilizing a diacritic dot (nuqta) to map Persian/Arabic sounds.`,
            analogy: "Under the Hood: The script is a precise representation of acoustic phonetics. Vowels are categorized by length (Hrasva vs. Deergha) and mouth posture.",
            keyTakeaway: "Devanagari consonant grids correspond to distinct matrices of voicing, aspiration, and velarization parameters."
          }
        },
        quiz: {
          comprehensive: {
            question: "How is Hindi generally written compared to how it is spoken?",
            options: [
              "It is written exactly as it is spoken",
              "Many letters are silent",
              "It is written backward",
              "It uses pictures instead of sounds"
            ],
            answer: 0,
            explanation: "Hindi is highly phonetic, meaning there are no silent letters; words are spelled exactly as they sound."
          },
          balanced: {
            question: "Which of the following consonants belongs to the Velar (K-varg) group?",
            options: [
              "च (cha)",
              "त (ta)",
              "ग (ga)",
              "प (pa)"
            ],
            answer: 2,
            explanation: "ग (ga) is produced in the back of the throat (velum), making it a member of the Velar (K-varg) consonants."
          },
          accelerated: {
            question: "What distinction separates the consonants 'ट' (Retroflex) and 'त' (Dental)?",
            options: [
              "Vocal cord vibration frequency",
              "The tongue tip curling back to touch the roof of the palate vs. touching the upper teeth",
              "Aspiration duration",
              "Nasalization intensity"
            ],
            answer: 1,
            explanation: "Retroflex 'ट' requires curling the tongue back to hit the hard palate, whereas dental 'त' involves pressing the tongue tip against the upper teeth."
          }
        }
      },
      {
        id: "sentence_structure",
        title: "Sentence Structure & Grammar",
        paceContent: {
          comprehensive: {
            title: "Hindi Word Order: Subject, Object, Verb",
            text: `In English, we say: **"Ram eats apples."**
The order is **Subject (Ram) -> Verb (eats) -> Object (apples)**.

In Hindi, the order flips! We say: **"राम सेब खाता है"** (Ram apple eats).
The order is **Subject (राम) -> Object (सेब) -> Verb (खाता है)**.

Notice how the action word (verb) always goes at the very end of the sentence in Hindi!`,
            analogy: "Analogy: In Hindi, the verb is like the final lock on a box. You introduce the characters (Subject) and items (Object) first, and lock it all together with the action (Verb) at the end.",
            keyTakeaway: "Hindi sentences follow the SOV (Subject-Object-Verb) structure, unlike English which is SVO."
          },
          balanced: {
            title: "Syntax and Case Markers (Postpositions)",
            text: `Hindi utilizes a **Subject-Object-Verb (SOV)** syntactic structure. 

Additionally, instead of prepositions, Hindi uses **postpositions** (case markers) which are placed *after* the noun they modify:
- **ने (ne)**: Agentive marker (subject)
- **को (ko)**: Accusative/Dative marker (object/to)
- **में (mein)**: Locative (in)
- **पर (par)**: Locative (on)

Example: "Kamla is in the house" translates to "कमला घर **में** है" (Kamla house in is).`,
            analogy: "Key Concept: Prepositions like 'in the room' become postpositions like 'room in' (कमरे में) in Hindi grammar.",
            keyTakeaway: "Hindi uses Subject-Object-Verb word order and postpositions instead of prepositions."
          },
          accelerated: {
            title: "Ergative Alignment and Postpositional Cases",
            text: `Hindi exhibits a split-ergative syntactic alignment. In the perfective aspect of transitive verbs, the subject is marked with the ergative postposition **ने (ne)**, and the verb agrees in gender and number with the direct object (rather than the subject):

\`\`\`text
Subject-ne + Object + Verb (agrees with Object)
लड़के ने किताब पढ़ी (The boy read the book)
- लड़के (boy) is masculine, but किताब (book) is feminine, so verb पढ़ी is feminine.
\`\`\`

When nouns are followed by postpositions, they transition from the **direct case** to the **oblique case** (e.g., लड़का becomes लड़के, कमरा becomes कमरे).`,
            analogy: "Under the Hood: Perfective transitive clauses transfer verb agreement from the subject agent to the patient object due to historical passive-construction roots.",
            keyTakeaway: "Transitive perfective sentences trigger ergative marking with 'ने', switching verbal agreement to the object."
          }
        },
        quiz: {
          comprehensive: {
            question: "What is the correct word order for a standard Hindi sentence?",
            options: [
              "Subject - Verb - Object (SVO)",
              "Subject - Object - Verb (SOV)",
              "Verb - Subject - Object (VSO)",
              "Object - Verb - Subject (OVS)"
            ],
            answer: 1,
            explanation: "Hindi sentences place the object in the middle and end with the verb, following a Subject-Object-Verb structure."
          },
          balanced: {
            question: "Where is the postposition placed relative to the noun in Hindi?",
            options: [
              "Before the noun",
              "After the noun",
              "Inside the noun root",
              "At the very beginning of the sentence"
            ],
            answer: 1,
            explanation: "Unlike English prepositions (e.g., 'to' Delhi), Hindi uses postpositions which sit *after* the noun (e.g., Delhi 'ko' / दिल्ली को)."
          },
          accelerated: {
            question: "Given: 'लड़की ने पत्र लिखा' (The girl wrote a letter). Why is the verb 'लिखा' (masculine singular) instead of matching 'लड़की' (feminine)?",
            options: [
              "Looking at who wrote it",
              "Because transitive perfective syntax shifts agreement to the masculine singular object 'पत्र' (letter)",
              "It is an grammatical error",
              "The verb is in the oblique case"
            ],
            answer: 1,
            explanation: "Because of ergative split alignment triggered by 'ने' in the perfective past, the verb 'लिखा' agrees with the masculine singular object 'पत्र' instead of the feminine subject."
          }
        }
      }
    ]
  },
  english: {
    id: "english",
    title: "English Grammar",
    icon: "🇬🇧",
    description: "Explore syntax, parts of speech, and complex sentence structures.",
    chapters: [
      {
        id: "parts_of_speech",
        title: "Parts of Speech",
        paceContent: {
          comprehensive: {
            title: "The Building Blocks of English Sentences",
            text: `Words in English have different jobs. We group them into **Parts of Speech** based on what they do:

1. **Nouns**: Naming words (dog, school, happiness).
2. **Verbs**: Action words (run, think, is).
3. **Adjectives**: Descriptor words (blue, fast, happy).
4. **Adverbs**: Describe *how* actions happen (slowly, yesterday).

Think of a sentence like a movie: Nouns are the characters, Verbs are the actions, and Adjectives describe the scenery!`,
            analogy: "Analogy: A sentence is like a machine. If a noun is the wheel, the verb is the motor spinning it, and the adjective is the paint job.",
            keyTakeaway: "Understanding parts of speech helps you build correct sentences."
          },
          balanced: {
            title: "Structural Classification of Words",
            text: `Words are classified into eight core parts of speech representing lexical categories:

- **Nouns**: Represent concrete entities or abstract concepts.
- **Pronouns**: Substitutes for nouns to reduce redundancy.
- **Verbs**: Express actions, states of being, or occurrences.
- **Adjectives**: Modify nouns or pronouns.
- **Adverbs**: Modify verbs, adjectives, or other adverbs.
- **Prepositions**: Establish spatial or temporal relationships.
- **Conjunctions**: Connect clauses or phrases.
- **Interjections**: Express emotion.`,
            analogy: "Key Concept: Lexical functional roles dictate how words interact. For instance, adverbs alter verb states or modify adjective degrees.",
            keyTakeaway: "Words are classified into lexical categories based on syntax and semantic functions within clauses."
          },
          accelerated: {
            title: "Functional Grammar & Open vs. Closed Classes",
            text: `Parts of speech are analyzed structurally as belonging to **Open Classes** (nouns, verbs, adjectives, adverbs) which accept new coinages, or **Closed Classes** (determiners, pronouns, prepositions, conjunctions) which are grammatically fixed.

Syntactic parsing relies on word distribution:
- **Nouns** function as heads of noun phrases (NPs) serving as subjects or complements.
- **Verbs** function as heads of verb phrases (VPs) licensing arguments (transitive vs. intransitive valency).
- **Adverbs** serve as adjuncts, modifying lexical projections or entire sentence phrases.`,
            analogy: "Under the Hood: Grammar is generative. Syntactic trees branch words into categories based on morphological inflections (e.g., -ed for past participles) and position inside phrase structures.",
            keyTakeaway: "Words do not have fixed categories; their syntactic function inside phrase structures determines their grammatical role."
          }
        },
        quiz: {
          comprehensive: {
            question: "Which word in this sentence is an adjective? 'The loud dog barked.'",
            options: [
              "The",
              "loud",
              "dog",
              "barked"
            ],
            answer: 1,
            explanation: "'Loud' describes the noun 'dog', making it an adjective."
          },
          balanced: {
            question: "In the sentence 'She sang beautifully', what part of speech is 'beautifully'?",
            options: [
              "Adjective",
              "Adverb",
              "Conjunction",
              "Preposition"
            ],
            answer: 1,
            explanation: "'Beautifully' describes the action verb 'sang' (how she sang), making it an adverb."
          },
          accelerated: {
            question: "In the phrase 'the reading room', what is the grammatical function of the word 'reading'?",
            options: [
              "A gerund acting as a noun modifier (nominal adjunct)",
              "A present continuous action verb",
              "A primary coordinating conjunction",
              "An adverb of frequency"
            ],
            answer: 0,
            explanation: "In 'reading room', 'reading' is a gerund (noun derived from verb) behaving as a noun adjunct to modify another noun, not a verb in a progressive tense."
          }
        }
      },
      {
        id: "tenses",
        title: "Tenses & Clause Structures",
        paceContent: {
          comprehensive: {
            title: "Talking About Time: Past, Present, and Future",
            text: `We use **tenses** in English to tell the reader *when* something happened:

* **Present**: It is happening now (*"I write."*)
* **Past**: It already happened (*"I wrote."*)
* **Future**: It will happen later (*"I will write."*)

Each tense can also show *how* it happened—like whether it was a single event or a continuous, ongoing action (*"I am writing"*).`,
            analogy: "Analogy: Tenses are like a time machine dashboard. Adjusting the verb dials the sentence to a specific point in history or the future.",
            keyTakeaway: "Verbs change form to anchor actions in time."
          },
          balanced: {
            title: "Aspect and Tense Matrix in English Syntax",
            text: `English utilizes a combination of **Tense** (past, present) and **Aspect** (simple, progressive, perfect, perfect progressive) to formulate 12 basic verb structures.

- **Tense**: Locates an event in time.
- **Aspect**: Expresses the temporal flow of an action (completed vs. ongoing).

For example, the **Present Perfect** (*"I have eaten"*) connects a past action to the present, while the **Past Progressive** (*"I was eating"*) shows an action ongoing at a specific past point.`,
            analogy: "Key Concept: Aspect adds texture to time. The perfect aspect indicates completed actions, whereas progressive denotes continuity.",
            keyTakeaway: "Verbs combine tense inflections with auxiliary verbs (has, had, will, been) to express timing and aspects."
          },
          accelerated: {
            title: "Tense-Aspect-Mood (TAM) Systems and Subjunctives",
            text: `The English verb system is best described as a **Tense-Aspect-Mood (TAM)** system. 

Beyond linear time, verbs carry **Mood**:
- **Indicative**: Declaring facts.
- **Imperative**: Issuing commands.
- **Subjunctive**: Expressing hypothetical or counterfactual states (*"If I were you..."*).

Subjunctives utilize bare base forms or past forms representing irrealis mood. Furthermore, syntax relies on **tense agreement (backshifting)** in indirect speech clauses:

\`\`\`text
Direct: He said, "I am studying."
Indirect: He said that he was studying. (Backshifted present to past)
\`\`\``,
            analogy: "Under the Hood: English lacks a true future morphological tense; it utilizes modal auxiliaries ('will', 'shall') or prospective phrases ('going to') to construct future reference aspects.",
            keyTakeaway: "Verb phrases are dictated by TAM systems, incorporating aspect markers and modal configurations to encode hypothetical and temporal states."
          }
        },
        quiz: {
          comprehensive: {
            question: "Which sentence is written in the Future tense?",
            options: [
              "I walked home.",
              "I am walking home.",
              "I will walk home.",
              "I have walked home."
            ],
            answer: 2,
            explanation: "The auxiliary verb 'will' indicates that the action has not happened yet but is planned for the future."
          },
          balanced: {
            question: "Which tense and aspect are demonstrated in: 'He had already left'?",
            options: [
              "Past Progressive",
              "Present Perfect",
              "Past Perfect",
              "Future Perfect"
            ],
            answer: 2,
            explanation: "'Had' + past participle ('left') forms the Past Perfect aspect, indicating an action completed before another past event."
          },
          accelerated: {
            question: "Identify the correct mood in: 'I demand that she be present at the hearing.'",
            options: [
              "Indicative Mood",
              "Subjunctive Mood",
              "Imperative Mood",
              "Interrogative Mood"
            ],
            answer: 1,
            explanation: "The bare infinitive form 'be' following a verb of demand ('demand that...') is the present subjunctive mood, expressing a requirement rather than a factual statement."
          }
        }
      }
    ]
  },
  computer_science: {
    id: "computer_science",
    title: "Computer Science",
    icon: "💻",
    description: "Explore the core fundamentals of algorithms, code compilation, and data structures.",
    chapters: [
      {
        id: "algorithms",
        title: "Introduction to Algorithms",
        paceContent: {
          comprehensive: {
            title: "What is an Algorithm? (Your Step-by-Step Recipe)",
            text: `In computer science, an **algorithm** is just a step-by-step list of instructions to solve a problem.

Think of it like a recipe for baking cookies:
1. Pre-heat oven to 350 degrees.
2. Mix butter and sugar.
3. Add flour.
4. Bake for 10 minutes.

If you skip a step, or do them out of order, the cookies are ruined! Similarly, computers execute algorithms line-by-line. If the instructions are out of order, the program crashes or does the wrong thing.`,
            analogy: "Analogy: An algorithm is like a GPS directing a car. Turn right, go 2 miles, turn left. If the instructions are wrong, you end up in a lake!",
            keyTakeaway: "Algorithms turn inputs (ingredients) into outputs (cookies) through clear, logical steps."
          },
          balanced: {
            title: "Algorithms, Logic, and Pseudocode",
            text: `An **algorithm** is a finite, well-defined sequence of computer-implementable instructions to solve a class of problems.

Key properties of an algorithm:
- **Input**: External data provided to the algorithm.
- **Output**: The resulting solution.
- **Definiteness**: Each step must be clear and unambiguous.
- **Finiteness**: It must terminate after a finite number of steps.

We often write algorithms in **pseudocode** (a human-readable description of code blocks) before writing actual code.`,
            analogy: "Key Concept: Algorithms exist independent of programming languages. A sorting algorithm runs on the same logic whether written in Python, C++, or Java.",
            keyTakeaway: "An algorithm is a language-independent, step-by-step logical recipe containing inputs, definite steps, and termination rules."
          },
          accelerated: {
            title: "Asymptotic Notation and Algorithmic Analysis",
            text: `Algorithms are evaluated analytically based on their space and time complexity using **Asymptotic Notation (Big O)**.

Big O notation describes the upper bound of execution time or memory footprint in the worst-case scenario as input size $n$ grows:

- $O(1)$ - Constant Time.
- $O(\log n)$ - Logarithmic Time (e.g., Binary Search).
- $O(n)$ - Linear Time (e.g., Linear Search).
- $O(n \log n)$ - Linearithmic Time (e.g., Merge Sort).
- $O(n^2)$ - Quadratic Time (e.g., Bubble Sort).

Analytical steps:
1. Count core operations as a function of $n$: $T(n) = c_1 n + c_2$.
2. Drop constant coefficients and lower-order terms: $T(n) = O(n)$.`,
            analogy: "Under the Hood: Big O abstracts away hardware differences (CPU speed, memory bandwidth) to compare algorithm performance purely as a mathematical limit of scale.",
            keyTakeaway: "Algorithmic analysis evaluates growth rates of execution time (Big O) as input size approaches infinity."
          }
        },
        quiz: {
          comprehensive: {
            question: "Which of the following best describes an algorithm?",
            options: [
              "A physical component inside a computer",
              "A step-by-step list of instructions to complete a task",
              "A language used to write web pages",
              "A computer screen interface"
            ],
            answer: 1,
            explanation: "An algorithm is a set of rules or steps designed to solve a problem or accomplish a task, like a recipe."
          },
          balanced: {
            question: "Why must a correct algorithm possess the property of 'Finiteness'?",
            options: [
              "So it can hold decimal numbers",
              "To ensure it does not run in an infinite loop and eventually stops",
              "So it fits within a single code file",
              "To make it run faster than light"
            ],
            answer: 1,
            explanation: "Finiteness guarantees the algorithm will eventually finish processing and return a result rather than hanging the computer in an infinite loop."
          },
          accelerated: {
            question: "What is the worst-case time complexity of finding an element in a balanced Binary Search Tree containing 'n' items?",
            options: [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n log n)"
            ],
            answer: 1,
            explanation: "In a balanced BST, each step divides the search space in half. Thus, finding an element requires O(log n) comparisons in the worst case."
          }
        }
      },
      {
        id: "data_structures",
        title: "Basic Data Structures",
        paceContent: {
          comprehensive: {
            title: "Data Structures: Organizing Your Data Files",
            text: `Imagine you have a messy pile of paperwork on your desk. Finding a specific document takes hours! Instead, if you organize them into **labeled folders** in a cabinet, you can find them in seconds.

In computer science, a **data structure** is just a way of organizing and storing information in a computer's memory so we can use it efficiently.

Two common structures:
1. **Arrays (Lists)**: A straight row of boxes, like lockers. Each locker has a number index (starting at 0).
2. **Key-Value Pairs (Dictionaries)**: A label linked directly to an item, like looking up a word in a dictionary.`,
            analogy: "Analogy: An Array is like a line of numbered seats in a theater. A Dictionary is like a coat check room where you give a ticket (key) and get back your specific coat (value).",
            keyTakeaway: "Data structures organize data in memory for quick access and updates."
          },
          balanced: {
            title: "Arrays, Lists, and Dictionaries",
            text: `Data structures organize data to optimize computational tasks.

**1. Arrays (Contiguous Memory):**
An array stores elements of the same type in contiguous memory slots. Accessing elements by index is extremely fast ($O(1)$) because the address can be calculated directly.

\`\`\`python
# Python list behaving like an array
grades = [90, 85, 95]
print(grades[0]) # prints 90
\`\`\`

**2. Hash Tables (Dictionaries / Key-Value):**
Hash tables map keys to values using a **hash function**. They offer near-instant search, insertion, and deletion ($O(1)$ on average), making them ideal for rapid lookups.`,
            analogy: "Key Concept: Array access is O(1) via index arithmetic, but inserting elements into the middle requires shifting elements, which is O(n). Dictionaries solve this lookup overhead.",
            keyTakeaway: "Arrays offer indexed memory access, while Hash Tables use hash functions to bind keys to values for fast lookups."
          },
          accelerated: {
            title: "Memory Allocation: Contiguous Arrays vs. Linked Nodes",
            text: `The mechanical trade-off of memory structures lies in **Contiguous Allocation** vs. **Linked Reference Nodes**.

**Contiguous Arrays:**
Elements reside adjacently in physical memory.
- **Lookup**: $O(1)$ via memory offset calculations: $\text{Address} = \text{Base} + \text{Index} \times \text{Size}$.
- **Insertion/Deletion**: $O(n)$ because shifting remaining memory blocks is required.

**Linked Lists:**
Elements (nodes) reside scattered in heap memory; each node stores its data and a pointer reference to the next node.
- **Lookup**: $O(n)$ since you must traverse the chain sequentially.
- **Insertion/Deletion**: $O(1)$ after locating the node, by simply adjusting pointer references:

\`\`\`text
node.prev.next = node.next
node.next.prev = node.prev
\`\`\`

This bypasses memory-shifting operations completely.`,
            analogy: "Under the Hood: Arrays leverage CPU cache locality (retrieving adjacent memory blocks into cache lines). Linked Lists cause cache misses because nodes are scattered in memory.",
            keyTakeaway: "Contiguous arrays optimize cache alignment and indexed lookups, while linked structures excel at dynamic insertion operations."
          }
        },
        quiz: {
          comprehensive: {
            question: "If we have an array called 'names = [\"Sam\", \"Ana\", \"Ben\"]', what is the index of \"Sam\"?",
            options: [
              "0",
              "1",
              "2",
              "-1"
            ],
            answer: 0,
            explanation: "In programming, array indices start counting at 0. So the first item 'Sam' is at index 0."
          },
          balanced: {
            question: "What is the average time complexity to retrieve a value from a Hash Table (Dictionary) using its key?",
            options: [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n^2)"
            ],
            answer: 0,
            explanation: "Hash tables resolve the address of a key instantly using a hash function, resulting in O(1) constant time retrieval on average."
          },
          accelerated: {
            question: "Why do standard sequential arrays suffer from an O(n) insertion cost at the start of the collection?",
            options: [
              "Because the hash function must recalculate the key signatures",
              "Because every subsequent element in memory must be copied and shifted forward by one slot",
              "Because linked pointers must be recursively dereferenced",
              "Because the garbage collector must run immediately"
            ],
            answer: 1,
            explanation: "Because array memory is contiguous, inserting a new element at index 0 requires copying and shifting all existing elements one slot forward to make room, which scales linearly with the array size (n)."
          }
        }
      }
    ]
  },
  social_science: {
    id: "social_science",
    title: "Social Science",
    icon: "🌍",
    description: "Explore sociology, historical structures, and systems of human governance.",
    chapters: [
      {
        id: "civilizations",
        title: "Ancient Civilizations",
        paceContent: {
          comprehensive: {
            title: "The Indus Valley: Cities Made of Baked Bricks",
            text: `Imagine living in a city 4,500 years ago that had running water, indoor toilets, and streets laid out in clean grids. That was the **Indus Valley Civilization**!

Located in modern-day India and Pakistan, they did not build massive monuments like the Egyptian pyramids. Instead, they built highly organized public structures, like the **Great Bath** (a giant swimming pool for rituals) and huge grain storage rooms.

They were peaceful traders who invented standard weights and measures to buy and sell goods fairly.`,
            analogy: "Analogy: The Indus Valley civilization was like the municipal planners of ancient times. They focused on clean sewers and flat grids rather than giant fancy palaces.",
            keyTakeaway: "The Indus Valley was characterized by advanced urban planning, sanitation systems, and peaceful trade."
          },
          balanced: {
            title: "Urban Planning and Trade of the Harappan Culture",
            text: `The **Indus Valley (Harappan) Civilization** (c. 3300–1300 BCE) was a Bronze Age society renowned for its sophisticated municipal engineering.

**Key Societal Features:**
- **Standardization**: Bricks were baked in a precise ratio of 4:2:1. Weights and measurements were standardized.
- **Sanitation**: Most homes had access to water wells and connected sewage drains, showcasing an unprecedented focus on public hygiene.
- **Commerce**: They established overseas trade routes with Mesopotamia, utilizing soapstone seals (glyptics) to stamp packages of goods.`,
            analogy: "Key Concept: Harappan civilization shows little evidence of military structures or royal palaces. Power appears to have been civic and mercantile rather than military or monarchical.",
            keyTakeaway: "Harappan civilization was defined by uniform urban layouts, advanced drainage, and merchant-led administrative structures."
          },
          accelerated: {
            title: "Socio-Political Organization and the Harappan De-Urbanization Theories",
            text: `The **Indus Valley Civilization** presents an archaeological puzzle: a vast geographic expansion ($\sim 1.2 \text{ million } km^2$) containing uniform material culture without clear central monarchies or temples.

**Socio-Political Structures:**
Rather than centralized empires, archaeologists hypothesize a system of localized oligarchies, where merchant guilds operated under shared cultural agreements. This is supported by the uniform script, standardized weight metrics, and grid plan towns (e.g., Mohenjo-daro, Harappa).

**The De-Urbanization (Collapse) Theories:**
Rather than a sudden invasion (a theory now largely debunked), collapse (c. 1900 BCE) is attributed to **climate shifts**:
1. The drying up of the Ghaggar-Hakra river system.
2. Changes in monsoon patterns causing severe agricultural disruption.
3. Tectonic shifts diverting river flows, forcing migration to the Ganges basin.`,
            analogy: "Under the Hood: De-urbanization was a system response to environmental change. As rivers shifted, the high-density urban networks collapsed into decentralized farming villages.",
            keyTakeaway: "Harappan society was a decentralized merchant oligarchy that collapsed due to tectonic and monsoon changes rather than military conquest."
          }
        },
        quiz: {
          comprehensive: {
            question: "What was a main focus of Indus Valley cities compared to other ancient cultures?",
            options: [
              "Building giant pyramids for kings",
              "Public sanitation, clean water, and street layouts",
              "Farming weapons for wars",
              "Creating gold coins"
            ],
            answer: 1,
            explanation: "Harappan cities prioritized civic planning, standard houses, grid streets, and advanced sewer drains over monuments."
          },
          balanced: {
            question: "Which civilization did the Indus Valley merchants trade with using soapstone seals?",
            options: [
              "The Roman Empire",
              "Mesopotamia (Sumerians)",
              "Ancient China",
              "The Aztecs"
            ],
            answer: 1,
            explanation: "Harappan seals have been excavated in Mesopotamian cities, proving an active trade corridor across the Persian Gulf."
          },
          accelerated: {
            question: "What main factor led to the collapse and abandonment of Harappan cities around 1900 BCE?",
            options: [
              "A sudden invasion by Macedonian soldiers",
              "Environmental changes, specifically monsoon shifting and river route alterations",
              "The discovery of iron replacing bronze tools",
              "A catastrophic volcanic explosion"
            ],
            answer: 1,
            explanation: "Archaeological data supports environmental degradation, shifting monsoons, and tectonic diversions of vital rivers (like the Sarasvati/Ghaggar-Hakra) as the root cause of Harappan de-urbanization."
          }
        }
      },
      {
        id: "governance",
        title: "Democratic Governance",
        paceContent: {
          comprehensive: {
            title: "What is Democracy? (Power to the People)",
            text: `The word **democracy** comes from two Greek words: *demos* (people) and *kratos* (power). It literally means "rule by the people"!

In a democracy, citizens choose their leaders by **voting** in elections.

There are two main types:
1. **Direct Democracy**: Everyone votes on *every* single rule directly (like in ancient Athens).
2. **Representative Democracy**: Citizens elect representatives (like Presidents or Members of Parliament) to make laws for them (like in modern democratic nations).

It's like choosing a class leader to represent your class in meetings instead of everyone attending!`,
            analogy: "Analogy: A representative democracy is like hiring a professional pilot to fly a plane. You choose the pilot (election), but they do the actual flying (making laws).",
            keyTakeaway: "Democracy distributes power to citizens through voting and elections."
          },
          balanced: {
            title: "Models of Democracy and Constitutionalism",
            text: `Delta: Democracy is a system of government where power is vested in the people, exercised directly or through elected representatives.

**Core Pillars:**
- **Popular Sovereignty**: Government authority is created and sustained by the consent of its people.
- **Constitutionalism**: The rule of law restricts government power to protect individual rights.

**Structures:**
- **Direct**: Citizens participate directly in legislative decisions.
- **Representative (Indirect)**: Citizens delegate authority to legislative bodies. This is stabilized by a system of **checks and balances** dividing executive, legislative, and judicial powers.`,
            analogy: "Key Concept: Checks and balances prevent any single branch of government from accumulating dictatorial power, protecting the democratic constitution.",
            keyTakeaway: "Democracies require constitutional rules of law to protect citizen rights and enforce limits on government structures."
          },
          accelerated: {
            title: "Democratic Deficits, Majoritarianism, and Pluralist Theory",
            text: `Democratic theory is analyzed through various sociological and institutional lenses:

**1. Pluralist vs. Elite Theory:**
- **Pluralism**: Assumes power is distributed among various competitive interest groups, ensuring representation.
- **Elite Theory**: Argues that a small financial and political elite dominates policy decisions regardless of elections.

**2. The Tyranny of the Majority:**
Alexis de Tocqueville warned that simple majoritarian democracy could result in the suppression of minority rights. Modern constitutional republics counteract this using **counter-majoritarian structures** (such as independent judiciaries and qualified majority requirements).

**3. Democratic Deficit:**
Occurs when democratic organizations or governments fall short of fulfilling principles of democracy in their decision-making operations (e.g., unelected supranational bureaucracies drafting international regulations).`,
            analogy: "Under the Hood: Institutional stability is maintained by balancing popular participation against constitutional guardrails. Pure majoritarianism without legal protections collapses into demagoguery.",
            keyTakeaway: "Advanced democracies use constitutional restrictions to prevent majoritarian tyranny, balanced by pluralist interest representation."
          }
        },
        quiz: {
          comprehensive: {
            question: "What does the word 'Democracy' literally translate to in Greek?",
            options: [
              "Rule by the king",
              "Rule by the people",
              "Rule of the rich",
              "Law of the land"
            ],
            answer: 1,
            explanation: "'Demos' (people) and 'Kratos' (power/rule) combine to form democracy, meaning power is held by the citizens."
          },
          balanced: {
            question: "Which system is designed to prevent a single branch of government from obtaining absolute control?",
            options: [
              "Direct voting",
              "Checks and balances",
              "Popular sovereignty",
              "Oligarchy guidelines"
            ],
            answer: 1,
            explanation: "Checks and balances divide responsibilities among separate branches (executive, legislative, judicial) so they can monitor and limit each other's power."
          },
          accelerated: {
            question: "In democratic theory, what does the term 'Tyranny of the Majority' refer to?",
            options: [
              "A military coup led by the army majority",
              "The oppression of minority rights resulting from unchecked majoritarian voting outcomes",
              "The high tax rates levied on political elites",
              "A system where only the oldest citizens vote"
            ],
            answer: 1,
            explanation: "First coined by Tocqueville, the 'Tyranny of the Majority' describes a vulnerability in democracies where a majoritarian majority can use voting numbers to pass laws that violate the fundamental rights of a minority group."
          }
        }
      }
    ]
  }
};

function getChatbotResponse(courseId, chapterId, pace, userMessage) {
  const normalized = userMessage.toLowerCase();
  
  if (normalized.includes("why") || normalized.includes("explain") || normalized.includes("how")) {
    if (pace === "comprehensive") {
      return {
        text: "That's a wonderful question! Let's break it down simply. Think of this like building a house: you need a strong foundation first. \n\nWhen we look at this concept, it's very similar to everyday experiences. For example, if you're trying to understand how this works, think of water flowing through a pipe—if the pipe is narrow (like a slow learning pace), the pressure is higher, so we want to take our time to let the water pass smoothly. Can you tell me if this analogy helps, or would you like another example?",
        suggestedFollowUp: "Explain with another analogy"
      };
    } else if (pace === "balanced") {
      return {
        text: "Here is a breakdown of the core mechanics. This concept relies on two main pillars: \n1. **Data State / Boundary Conditions**: How variables or particles represent information.\n2. **Operations / Energy Balance**: How we modify or query this state.\n\nIn standard practice, this gives us a balanced way to run tasks without overcomplicating the underlying hardware or language engine. Let me know which of these two pillars you'd like to explore further.",
        suggestedFollowUp: "Show me a code or mathematical example"
      };
    } else {
      return {
        text: "Analyzing from a system perspective, this is optimized for high computational efficiency and low overhead. Under the hood, this compiles down to direct memory mappings, quantum state vectors, or stellar degeneracy thermodynamic states. Let's look at the asymptotic complexity or state representation matrix.",
        suggestedFollowUp: "Show the mathematical/algorithmic complexity"
      };
    }
  }

  if (normalized.includes("example") || normalized.includes("code") || normalized.includes("formula")) {
    if (pace === "comprehensive") {
      return {
        text: "Here is a super simple example! Let's say we have 3 apples:\n\`\`\`python\napples = 3\n# Let's add one more!\napples = apples + 1\nprint(apples) # This prints 4!\n\`\`\`\nSee how we just take the old number, add 1, and save it back into the same variable?",
        suggestedFollowUp: "What happens if we subtract?"
      };
    } else if (pace === "balanced") {
      return {
        text: "Here is a typical implementation or formula:\n\`\`\`python\nx = 10\ny = 20\nresult = x + y\nprint(f'The sum is: {result}')\n\`\`\`\nThis demonstrates basic variable assignment and formatted string output.",
        suggestedFollowUp: "How does this look in a function?"
      };
    } else {
      return {
        text: "To optimize, we can write this using an in-place operator:\n\`\`\`python\nx = 10\nx += 20  # Re-binds reference in-place if mutable\n\n# Vector projection probability amplitude\nprob_zero = abs(1 / (2**0.5))**2\n\`\`\`\nNotice how reference reuse and tensor structures bypass classical iteration loops entirely.",
        suggestedFollowUp: "Explain the memory layout of this execution"
      };
    }
  }

  if (pace === "comprehensive") {
    return {
      text: "I hear you! Learning takes time, and you're doing great. Let's take it step-by-step. Remember, a variable is just a container, a qubit is just a spinning coin, and the Silk Road is just a trade network. Ask me anything about these storage boxes or pathways!",
      suggestedFollowUp: "What is a variable/qubit again?"
    };
  } else if (pace === "balanced") {
    return {
      text: "Got it. That makes sense. We are exploring the core concepts of this subject. We can look at how loops run, how measurement collapses qubits, or how Zhang Qian opened the Silk Road. Which area shall we inspect next?",
      suggestedFollowUp: "Let's review the current lesson content"
    };
  } else {
    return {
      text: "Understood. Let's bypass the basics and analyze the structural details. Let's focus on heap pointers, Hilbert spaces, or Sogdian trading guild networks.",
      suggestedFollowUp: "Show the underlying mechanics"
    };
  }
}