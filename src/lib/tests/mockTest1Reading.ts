import { ReadingPassage } from "../types";

export const mockTest1Reading: { passages: ReadingPassage[]; durationMinutes: number } = {
  durationMinutes: 60,
  passages: [
    {
      passageNumber: 1,
      title: "The Evolution of the Bicycle",
      paragraphs: [
        {
          label: "A",
          text: "The bicycle, now one of the most common machines on Earth, had a surprisingly awkward beginning. The earliest known version, built in Germany in 1817 and called the 'running machine,' had no pedals at all. Riders sat on a wooden frame and pushed themselves along with their feet, essentially walking while seated. It was fast on smooth ground but useless on anything rough, and it never caught on as a serious means of transport.",
        },
        {
          label: "B",
          text: "Pedals were not added until the 1860s, when French inventors attached cranks directly to the front wheel. This design, nicknamed the 'boneshaker' because of its rigid iron frame and wooden wheels, transmitted every bump in the road straight to the rider. To compensate for the lack of gears, manufacturers began making the front wheel larger and larger, since one turn of the pedals on a bigger wheel covered more ground. By the 1870s this had produced the famous penny-farthing, with a front wheel that could be well over a metre across.",
        },
        {
          label: "C",
          text: "The penny-farthing was fast but notoriously dangerous. Riders sat high above the front axle, and any sudden stop — hitting a stone, for instance — could throw them forward over the handlebars. Injuries were common enough that the design fell out of favour within about fifteen years, replaced by something altogether safer.",
        },
        {
          label: "D",
          text: "That replacement, introduced in the 1880s, was the 'safety bicycle.' It used a chain to drive the rear wheel, which meant both wheels could finally be the same, much smaller, size. This simple change lowered the rider's centre of gravity and made the machine far more stable. Combined with the invention of pneumatic, air-filled tyres a few years later, which cushioned the ride considerably, the safety bicycle set the basic template that bicycles still follow today.",
        },
        {
          label: "E",
          text: "The arrival of the safety bicycle also had an unexpected social impact. Because it no longer required the balance and physical strength needed for a penny-farthing, it was far more accessible to women, who had largely been excluded from cycling before. Many historians now argue that the bicycle played a genuine role in changing fashion and social expectations in the late nineteenth century, since long skirts were simply impractical for riding, prompting the adoption of more practical clothing.",
        },
        {
          label: "F",
          text: "In the twentieth century, innovation shifted toward materials and gearing rather than the basic shape of the machine. Steel frames were gradually replaced in high-performance bicycles by aluminium, and later by carbon fibre, which is both lighter and stiffer. Multiple gears, first popularised for racing, eventually became standard even on everyday bicycles, allowing riders to maintain a comfortable pedalling speed on hills. Despite these refinements, the fundamental design — two same-sized wheels, a chain-driven rear wheel, and a frame holding them together — has remained essentially unchanged for well over a century.",
        },
      ],
      questions: [
        {
          id: "mt1-r-1", number: 1, tag: "true-false-not-given", kind: "choice",
          prompt: "The 1817 'running machine' had pedals.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "false",
        },
        {
          id: "mt1-r-2", number: 2, tag: "true-false-not-given", kind: "choice",
          prompt: "The 'boneshaker' got its nickname from the quality of the ride it gave.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "true",
        },
        {
          id: "mt1-r-3", number: 3, tag: "true-false-not-given", kind: "choice",
          prompt: "The penny-farthing's front wheel was made large mainly for decorative reasons.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "false",
        },
        {
          id: "mt1-r-4", number: 4, tag: "true-false-not-given", kind: "choice",
          prompt: "The penny-farthing remained popular for more than thirty years.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "false",
        },
        {
          id: "mt1-r-5", number: 5, tag: "true-false-not-given", kind: "choice",
          prompt: "The safety bicycle's two wheels were the same size as each other.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "true",
        },
        {
          id: "mt1-r-6", number: 6, tag: "true-false-not-given", kind: "choice",
          prompt: "Carbon fibre frames were available before pneumatic tyres were invented.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "false",
        },
        {
          id: "mt1-r-7", number: 7, tag: "matching-information", kind: "choice",
          prompt: "A reference to an injury-causing design flaw",
          options: [
            { value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" },
            { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" },
            { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" },
          ],
          correct: "C",
        },
        {
          id: "mt1-r-8", number: 8, tag: "matching-information", kind: "choice",
          prompt: "A reference to the bicycle influencing what people wore",
          options: [
            { value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" },
            { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" },
            { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" },
          ],
          correct: "E",
        },
        {
          id: "mt1-r-9", number: 9, tag: "matching-information", kind: "choice",
          prompt: "A reference to a vehicle that could not cope with uneven surfaces",
          options: [
            { value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" },
            { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" },
            { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" },
          ],
          correct: "A",
        },
        {
          id: "mt1-r-10", number: 10, tag: "matching-information", kind: "choice",
          prompt: "A reference to materials used for lightweight modern frames",
          options: [
            { value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" },
            { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" },
            { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" },
          ],
          correct: "F",
        },
        {
          id: "mt1-r-11", number: 11, tag: "short-answer", kind: "text",
          prompt: "In what year was the first 'running machine' built?",
          correct: ["1817"],
        },
        {
          id: "mt1-r-12", number: 12, tag: "short-answer", kind: "text",
          prompt: "What type of tyre cushioned the ride on the safety bicycle?",
          correct: ["pneumatic", "pneumatic tyres", "air-filled", "air-filled tyres"],
        },
        {
          id: "mt1-r-13", number: 13, tag: "short-answer", kind: "text",
          prompt: "What mechanism connected the pedals to the rear wheel on the safety bicycle?",
          correct: ["chain", "a chain"],
        },
      ],
    },
    {
      passageNumber: 2,
      title: "Green Roofs in the Modern City",
      paragraphs: [
        {
          label: "A",
          text: "Across many major cities, rooftops once covered only in gravel or bare concrete are increasingly being planted with vegetation. These 'green roofs' range from thin layers of hardy groundcover to full rooftop gardens capable of supporting small trees, and their popularity has grown rapidly over the past two decades as cities look for ways to offset the environmental costs of dense urban development.",
        },
        {
          label: "B",
          text: "One of the most immediate benefits is thermal regulation. A conventional dark roof can reach temperatures well above fifty degrees Celsius on a hot summer day, radiating heat both into the building below and into the surrounding air. A green roof, by contrast, uses the natural cooling effect of plants releasing moisture, which can keep rooftop surface temperatures dramatically lower and reduce the energy a building needs for air conditioning.",
        },
        {
          label: "C",
          text: "Green roofs also help manage rainfall. In a typical city, rain falling on hard surfaces runs off quickly into drainage systems, which can become overwhelmed during heavy storms, leading to local flooding. A planted roof absorbs a significant proportion of that rainfall, releasing it slowly over the following hours or days rather than all at once, which eases pressure on the city's drainage infrastructure.",
        },
        {
          label: "D",
          text: "A further advantage, less obvious than temperature or rainfall, is the support green roofs can offer to urban wildlife. Even a modest rooftop garden can provide a resting point for birds and a source of nectar for bees and other pollinating insects, species that often struggle to find suitable habitat elsewhere in a built-up environment.",
        },
        {
          label: "E",
          text: "Despite these advantages, green roofs are not simple to install. The primary obstacle is structural: a planted roof, especially once soaked with rainwater, is considerably heavier than a standard roof, and many existing buildings were never designed to bear that additional weight. Retrofitting an older building to support a green roof can be far more expensive than installing one on a new building from the outset.",
        },
        {
          label: "F",
          text: "Cost is a related concern. While simple, low-maintenance green roofs are relatively affordable, more elaborate rooftop gardens require ongoing care, irrigation systems, and occasional replanting, all of which add to the long-term expense. For this reason, some cities have introduced financial incentives, such as reduced property taxes or direct grants, specifically to encourage building owners to take on these higher upfront costs.",
        },
        {
          label: "G",
          text: "Looking forward, researchers are now exploring how green roofs might be combined with solar panels, since the cooling effect of nearby vegetation can actually improve the efficiency of solar cells, which otherwise lose some performance in high heat. If this combination proves successful at scale, it could make green roofs an even more attractive investment for building owners in the coming years.",
        },
      ],
      questions: [
        {
          id: "mt1-r-14", number: 14, tag: "matching-headings", kind: "choice",
          prompt: "Paragraph B",
          options: [
            { value: "i", label: "i. Why some buildings cannot easily be adapted" },
            { value: "ii", label: "ii. Keeping buildings cooler without extra power" },
            { value: "iii", label: "iii. A possible future pairing with another technology" },
            { value: "iv", label: "iv. Reducing the risk of local flooding" },
            { value: "v", label: "v. A home for birds and insects in the city" },
            { value: "vi", label: "vi. The rising cost of long-term upkeep" },
            { value: "vii", label: "vii. A general introduction to a growing trend" },
          ],
          correct: "ii",
        },
        {
          id: "mt1-r-15", number: 15, tag: "matching-headings", kind: "choice",
          prompt: "Paragraph C",
          options: [
            { value: "i", label: "i. Why some buildings cannot easily be adapted" },
            { value: "ii", label: "ii. Keeping buildings cooler without extra power" },
            { value: "iii", label: "iii. A possible future pairing with another technology" },
            { value: "iv", label: "iv. Reducing the risk of local flooding" },
            { value: "v", label: "v. A home for birds and insects in the city" },
            { value: "vi", label: "vi. The rising cost of long-term upkeep" },
            { value: "vii", label: "vii. A general introduction to a growing trend" },
          ],
          correct: "iv",
        },
        {
          id: "mt1-r-16", number: 16, tag: "matching-headings", kind: "choice",
          prompt: "Paragraph D",
          options: [
            { value: "i", label: "i. Why some buildings cannot easily be adapted" },
            { value: "ii", label: "ii. Keeping buildings cooler without extra power" },
            { value: "iii", label: "iii. A possible future pairing with another technology" },
            { value: "iv", label: "iv. Reducing the risk of local flooding" },
            { value: "v", label: "v. A home for birds and insects in the city" },
            { value: "vi", label: "vi. The rising cost of long-term upkeep" },
            { value: "vii", label: "vii. A general introduction to a growing trend" },
          ],
          correct: "v",
        },
        {
          id: "mt1-r-17", number: 17, tag: "matching-headings", kind: "choice",
          prompt: "Paragraph E",
          options: [
            { value: "i", label: "i. Why some buildings cannot easily be adapted" },
            { value: "ii", label: "ii. Keeping buildings cooler without extra power" },
            { value: "iii", label: "iii. A possible future pairing with another technology" },
            { value: "iv", label: "iv. Reducing the risk of local flooding" },
            { value: "v", label: "v. A home for birds and insects in the city" },
            { value: "vi", label: "vi. The rising cost of long-term upkeep" },
            { value: "vii", label: "vii. A general introduction to a growing trend" },
          ],
          correct: "i",
        },
        {
          id: "mt1-r-18", number: 18, tag: "matching-headings", kind: "choice",
          prompt: "Paragraph F",
          options: [
            { value: "i", label: "i. Why some buildings cannot easily be adapted" },
            { value: "ii", label: "ii. Keeping buildings cooler without extra power" },
            { value: "iii", label: "iii. A possible future pairing with another technology" },
            { value: "iv", label: "iv. Reducing the risk of local flooding" },
            { value: "v", label: "v. A home for birds and insects in the city" },
            { value: "vi", label: "vi. The rising cost of long-term upkeep" },
            { value: "vii", label: "vii. A general introduction to a growing trend" },
          ],
          correct: "vi",
        },
        {
          id: "mt1-r-19", number: 19, tag: "matching-headings", kind: "choice",
          prompt: "Paragraph G",
          options: [
            { value: "i", label: "i. Why some buildings cannot easily be adapted" },
            { value: "ii", label: "ii. Keeping buildings cooler without extra power" },
            { value: "iii", label: "iii. A possible future pairing with another technology" },
            { value: "iv", label: "iv. Reducing the risk of local flooding" },
            { value: "v", label: "v. A home for birds and insects in the city" },
            { value: "vi", label: "vi. The rising cost of long-term upkeep" },
            { value: "vii", label: "vii. A general introduction to a growing trend" },
          ],
          correct: "iii",
        },
        {
          id: "mt1-r-20", number: 20, tag: "sentence-completion", kind: "text",
          prompt: "A dark conventional roof can reach temperatures above _______ degrees Celsius in summer.",
          correct: ["50", "fifty"],
        },
        {
          id: "mt1-r-21", number: 21, tag: "sentence-completion", kind: "text",
          prompt: "A green roof releases absorbed rainwater slowly, easing pressure on the city's _______ infrastructure.",
          correct: ["drainage"],
        },
        {
          id: "mt1-r-22", number: 22, tag: "sentence-completion", kind: "text",
          prompt: "The main structural obstacle is that a planted roof becomes much heavier once soaked with _______.",
          correct: ["rainwater", "water"],
        },
        {
          id: "mt1-r-23", number: 23, tag: "sentence-completion", kind: "text",
          prompt: "Some cities offer reduced property taxes or direct _______ to encourage installation.",
          correct: ["grants"],
        },
        {
          id: "mt1-r-24", number: 24, tag: "matching-features", kind: "choice",
          prompt: "Nearby vegetation can improve the efficiency of this technology",
          options: [
            { value: "solar", label: "Solar panels" }, { value: "drainage", label: "Drainage systems" }, { value: "irrigation", label: "Irrigation systems" },
          ],
          correct: "solar",
        },
        {
          id: "mt1-r-25", number: 25, tag: "matching-features", kind: "choice",
          prompt: "Provides nectar for pollinating insects",
          options: [
            { value: "garden", label: "Rooftop garden" }, { value: "panel", label: "Solar panel" }, { value: "tank", label: "Water tank" },
          ],
          correct: "garden",
        },
        {
          id: "mt1-r-26", number: 26, tag: "matching-features", kind: "choice",
          prompt: "Can become overwhelmed during heavy storms",
          options: [
            { value: "drainage", label: "Drainage systems" }, { value: "solar", label: "Solar panels" }, { value: "roof", label: "Green roof" },
          ],
          correct: "drainage",
        },
      ],
    },
    {
      passageNumber: 3,
      title: "Artificial Intelligence and the Question of Creativity",
      paragraphs: [
        {
          label: "A",
          text: "For decades, creativity was considered one of the clearest lines separating human intelligence from machine processing. Machines, it was argued, could calculate and sort but never genuinely originate. Recent advances in generative artificial intelligence have forced a reconsideration of that assumption, as systems trained on vast amounts of text, images, and music now produce output that many observers find genuinely novel and, in some cases, aesthetically compelling.",
        },
        {
          label: "B",
          text: "Sceptics argue that what looks like creativity in these systems is, in fact, a highly sophisticated form of recombination. A model trained on millions of paintings, the argument goes, is not inventing a new style so much as blending and interpolating between styles it has already seen, producing something statistically novel but not conceptually new. On this view, true creativity requires an intention, a purpose behind the work, which current systems simply do not possess.",
        },
        {
          label: "C",
          text: "Others push back against this distinction, pointing out that human creativity is also, to a significant extent, recombinatorial. A novelist draws on every book they have read; a composer on every piece of music they have absorbed since childhood. If recombination disqualifies a machine from being creative, these critics ask, why should it not equally disqualify a human artist whose influences can often be traced quite precisely?",
        },
        {
          label: "D",
          text: "A separate strand of the debate concerns evaluation rather than origin. Some researchers argue that creativity should be judged by its output rather than by the process that produced it. If a piece of generated music is indistinguishable, to expert listeners, from a piece composed by a well-regarded human composer, then on a strictly output-based definition, it would be reasonable to call the generating process creative, regardless of what was happening internally.",
        },
        {
          label: "E",
          text: "This output-based framing, however, has its own critics. They note that creativity, as commonly understood, is not simply about producing an impressive final artefact. Part of what we value in a human creative act is the struggle, the series of choices and discarded alternatives that preceded the final version, and the biographical and emotional context surrounding it. A generated image produced in seconds, they argue, is being judged by a different and arguably easier standard than a painting that took a human artist months to complete.",
        },
        {
          label: "F",
          text: "There is also a practical dimension to this debate that extends well beyond philosophy. As generative systems become integrated into commercial design, music production, and writing, questions about originality intersect directly with questions about copyright and compensation. If a system generates a piece that closely resembles the style of a living artist, should that artist have any claim over the output, even if no specific individual work has been copied? Courts in several countries have only begun to grapple with this question, and rulings so far have been inconsistent.",
        },
        {
          label: "G",
          text: "What seems clear, regardless of how the philosophical question is eventually resolved, is that the practical boundary between human and machine-assisted creative work is becoming harder to draw. Many professional designers and musicians already use generative tools as part of their normal process, refining and selecting from machine-generated options rather than working entirely from a blank page. Whether this represents a fundamental change in what creativity means, or simply a new tool added to a very old process, remains an open question.",
        },
      ],
      questions: [
        {
          id: "mt1-r-27", number: 27, tag: "multiple-choice", kind: "choice",
          prompt: "According to paragraph A, recent generative AI systems have",
          options: [
            { value: "a", label: "confirmed that machines cannot be creative" },
            { value: "b", label: "produced output some people consider genuinely novel" },
            { value: "c", label: "been trained without using human-made material" },
          ],
          correct: "b",
        },
        {
          id: "mt1-r-28", number: 28, tag: "multiple-choice", kind: "choice",
          prompt: "Sceptics in paragraph B believe true creativity requires",
          options: [
            { value: "a", label: "an underlying intention or purpose" },
            { value: "b", label: "training on a large dataset" },
            { value: "c", label: "statistical novelty" },
          ],
          correct: "a",
        },
        {
          id: "mt1-r-29", number: 29, tag: "multiple-choice", kind: "choice",
          prompt: "The critics mentioned in paragraph C argue that human creativity",
          options: [
            { value: "a", label: "is entirely original and owes nothing to outside influence" },
            { value: "b", label: "is also substantially based on recombining prior influences" },
            { value: "c", label: "cannot be compared to machine output at all" },
          ],
          correct: "b",
        },
        {
          id: "mt1-r-30", number: 30, tag: "multiple-choice", kind: "choice",
          prompt: "The output-based definition of creativity described in paragraph D judges creativity by",
          options: [
            { value: "a", label: "the emotional struggle behind the work" },
            { value: "b", label: "the internal process that produced the work" },
            { value: "c", label: "whether the final result is indistinguishable from human work" },
          ],
          correct: "c",
        },
        {
          id: "mt1-r-31", number: 31, tag: "multiple-choice", kind: "choice",
          prompt: "Paragraph F mainly discusses",
          options: [
            { value: "a", label: "legal and compensation questions raised by generative AI" },
            { value: "b", label: "the emotional value of human-made art" },
            { value: "c", label: "how machines are trained on datasets" },
          ],
          correct: "a",
        },
        {
          id: "mt1-r-32", number: 32, tag: "yes-no-not-given", kind: "choice",
          prompt: "All researchers agree that output-based definitions of creativity are correct.",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }],
          correct: "no",
        },
        {
          id: "mt1-r-33", number: 33, tag: "yes-no-not-given", kind: "choice",
          prompt: "Critics of the output-based view value the process and context behind a creative work.",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }],
          correct: "yes",
        },
        {
          id: "mt1-r-34", number: 34, tag: "yes-no-not-given", kind: "choice",
          prompt: "Courts in all countries have reached the same conclusion on AI-generated work and copyright.",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }],
          correct: "no",
        },
        {
          id: "mt1-r-35", number: 35, tag: "yes-no-not-given", kind: "choice",
          prompt: "Most professional designers currently refuse to use generative tools in their work.",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }],
          correct: "no",
        },
        {
          id: "mt1-r-36", number: 36, tag: "yes-no-not-given", kind: "choice",
          prompt: "The author predicts that courts will soon reach a consistent global standard.",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }],
          correct: "ng",
        },
        {
          id: "mt1-r-37", number: 37, tag: "summary-completion", kind: "text",
          prompt: "Sceptics say AI output is a sophisticated form of _______ rather than true invention.",
          correct: ["recombination"],
        },
        {
          id: "mt1-r-38", number: 38, tag: "summary-completion", kind: "text",
          prompt: "Critics of this view note that human artists also draw heavily on past _______.",
          correct: ["influences", "influence"],
        },
        {
          id: "mt1-r-39", number: 39, tag: "summary-completion", kind: "text",
          prompt: "Some argue creativity should be judged only by the final _______, not the process.",
          correct: ["output", "artefact", "result"],
        },
        {
          id: "mt1-r-40", number: 40, tag: "summary-completion", kind: "text",
          prompt: "Generative tools raise new questions about _______ and compensation for artists.",
          correct: ["copyright"],
        },
      ],
    },
  ],
};
