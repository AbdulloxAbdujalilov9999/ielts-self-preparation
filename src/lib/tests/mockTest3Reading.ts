import { ReadingPassage } from "../types";

export const mockTest3Reading: { passages: ReadingPassage[]; durationMinutes: number } = {
  durationMinutes: 60,
  passages: [
    {
      passageNumber: 1,
      title: "The Invention of the Printing Press",
      paragraphs: [
        {
          label: "A",
          text: "Before the fifteenth century, every book in Europe had to be copied out entirely by hand, usually by monks working in monastery scriptoriums. A single copy of a long religious text could take a scribe the better part of a year to complete, which meant books were extraordinarily rare and expensive, accessible only to the wealthiest institutions and individuals.",
        },
        {
          label: "B",
          text: "This changed dramatically with Johannes Gutenberg, a German goldsmith who, around 1440, developed a practical system of movable metal type. Rather than carving an entire page as a single block, as earlier Chinese and Korean printers had done, Gutenberg cast individual letters that could be arranged, reused, and rearranged for each new page, dramatically speeding up the printing process.",
        },
        {
          label: "C",
          text: "Gutenberg's most famous work, a printed edition of the Bible completed around 1455, demonstrated the technology's potential. While it still took considerable time and skill to produce, a printing workshop could output many copies of a given page far faster than any team of scribes working by hand, and the resulting books, while expensive, cost a fraction of hand-copied equivalents.",
        },
        {
          label: "D",
          text: "The effects of printing spread rapidly across Europe in the following decades. Historians estimate that by the year 1500, printing presses operating across the continent had produced millions of books, a figure that would have been unimaginable under the old hand-copying system. This sudden increase in availability lowered prices further and expanded readership well beyond religious and academic institutions.",
        },
        {
          label: "E",
          text: "Perhaps the most significant long-term consequence was the standardisation of written language. When books were copied by hand, spelling and even grammar varied considerably between regions and individual scribes. Printed books, by contrast, were reproduced identically across hundreds or thousands of copies, which gradually encouraged more consistent spelling and grammar within each language.",
        },
        {
          label: "F",
          text: "The printing press is also widely credited with accelerating the spread of new ideas during the Renaissance and, later, the Reformation, since pamphlets and translated texts could now reach a far wider audience, far more quickly, than had ever been possible when every copy depended on a scribe's labour.",
        },
      ],
      questions: [
        { id: "mt3-r-1", number: 1, tag: "true-false-not-given", kind: "choice", prompt: "Before the printing press, books were mainly copied by monks.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "true" },
        { id: "mt3-r-2", number: 2, tag: "true-false-not-given", kind: "choice", prompt: "Gutenberg was the first person in the world to use movable type of any kind.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "false" },
        { id: "mt3-r-3", number: 3, tag: "true-false-not-given", kind: "choice", prompt: "Gutenberg's printed Bible was cheaper than a hand-copied equivalent.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "true" },
        { id: "mt3-r-4", number: 4, tag: "true-false-not-given", kind: "choice", prompt: "By 1500, printed books had become more expensive than before.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "false" },
        { id: "mt3-r-5", number: 5, tag: "true-false-not-given", kind: "choice", prompt: "Printing encouraged more consistent spelling and grammar.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "true" },
        { id: "mt3-r-6", number: 6, tag: "true-false-not-given", kind: "choice", prompt: "Gutenberg was personally involved in the Reformation.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "ng" },
        { id: "mt3-r-7", number: 7, tag: "matching-information", kind: "choice", prompt: "A reference to the role of printing in spreading new ideas", options: [{ value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" }, { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" }], correct: "F" },
        { id: "mt3-r-8", number: 8, tag: "matching-information", kind: "choice", prompt: "A reference to an estimated number of books produced by 1500", options: [{ value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" }, { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" }], correct: "D" },
        { id: "mt3-r-9", number: 9, tag: "matching-information", kind: "choice", prompt: "A reference to how long it took to hand-copy a single book", options: [{ value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" }, { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" }, { value: "F", label: "Paragraph F" }], correct: "A" },
        { id: "mt3-r-10", number: 10, tag: "short-answer", kind: "text", prompt: "What was Gutenberg's original profession?", correct: ["goldsmith"] },
        { id: "mt3-r-11", number: 11, tag: "short-answer", kind: "text", prompt: "In what year was Gutenberg's printed Bible completed?", correct: ["1455", "around 1455"] },
        { id: "mt3-r-12", number: 12, tag: "short-answer", kind: "text", prompt: "What nationality was Johannes Gutenberg?", correct: ["german"] },
        { id: "mt3-r-13", number: 13, tag: "short-answer", kind: "text", prompt: "Where did monks traditionally copy books by hand?", correct: ["scriptoriums", "monastery scriptoriums", "scriptorium"] },
      ],
    },
    {
      passageNumber: 2,
      title: "The Growth of Electric Vehicles",
      paragraphs: [
        {
          label: "A",
          text: "Electric vehicles are often presented as a recent innovation, yet they are nearly as old as the car itself. In the late nineteenth century, electric cars competed directly with early petrol and steam vehicles, and for a brief period around 1900, they were arguably the most popular choice in some cities, prized for being quiet and easy to start compared with hand-cranked petrol engines.",
        },
        {
          label: "B",
          text: "Their decline came quickly once Henry Ford's assembly line made petrol cars dramatically cheaper, and the discovery of large oil reserves made fuel cheap and widely available. Combined with the limited range and long charging times of early batteries, electric vehicles were largely pushed out of the mainstream market by the 1930s and remained a niche product for most of the twentieth century.",
        },
        {
          label: "C",
          text: "Renewed interest began in the 1990s, driven initially by growing concern over urban air pollution rather than climate change specifically, though both motivations have since become intertwined in public discussion. Early modern electric vehicles, however, were still hampered by limited range and high battery costs, keeping them a minority choice for most drivers.",
        },
        {
          label: "D",
          text: "The real turning point came with improvements in lithium-ion battery technology, originally developed for consumer electronics, which offered a far better balance of weight, cost, and energy storage than earlier battery types. As production scaled up and costs fell, manufacturers were able to offer vehicles with genuinely practical range at increasingly competitive prices.",
        },
        {
          label: "E",
          text: "Government policy has also played a significant role in accelerating adoption. Purchase subsidies, tax incentives, and in some countries firm deadlines for phasing out new petrol and diesel car sales have all pushed both manufacturers and consumers toward electric options faster than market forces alone might have achieved.",
        },
        {
          label: "F",
          text: "Despite this progress, significant challenges remain. Charging infrastructure is still uneven, particularly in rural areas and for people without access to private parking where a home charger could be installed. There are also ongoing concerns about the environmental and ethical costs of mining the raw materials, such as lithium and cobalt, required for current battery technology.",
        },
        {
          label: "G",
          text: "Looking ahead, researchers are exploring alternative battery chemistries that could reduce dependence on the most problematic materials, alongside faster charging technology that could eventually make charging an electric vehicle as quick and convenient as refuelling a petrol car.",
        },
      ],
      questions: [
        { id: "mt3-r-14", number: 14, tag: "matching-headings", kind: "choice", prompt: "Paragraph B", options: [{ value: "i", label: "i. Remaining obstacles to wider adoption" }, { value: "ii", label: "ii. A breakthrough in battery technology" }, { value: "iii", label: "iii. Why electric cars fell out of favour" }, { value: "iv", label: "iv. Future research directions" }, { value: "v", label: "v. The role of government in speeding adoption" }, { value: "vi", label: "vi. An early period of popularity" }, { value: "vii", label: "vii. A revival driven by pollution concerns" }], correct: "iii" },
        { id: "mt3-r-15", number: 15, tag: "matching-headings", kind: "choice", prompt: "Paragraph C", options: [{ value: "i", label: "i. Remaining obstacles to wider adoption" }, { value: "ii", label: "ii. A breakthrough in battery technology" }, { value: "iii", label: "iii. Why electric cars fell out of favour" }, { value: "iv", label: "iv. Future research directions" }, { value: "v", label: "v. The role of government in speeding adoption" }, { value: "vi", label: "vi. An early period of popularity" }, { value: "vii", label: "vii. A revival driven by pollution concerns" }], correct: "vii" },
        { id: "mt3-r-16", number: 16, tag: "matching-headings", kind: "choice", prompt: "Paragraph D", options: [{ value: "i", label: "i. Remaining obstacles to wider adoption" }, { value: "ii", label: "ii. A breakthrough in battery technology" }, { value: "iii", label: "iii. Why electric cars fell out of favour" }, { value: "iv", label: "iv. Future research directions" }, { value: "v", label: "v. The role of government in speeding adoption" }, { value: "vi", label: "vi. An early period of popularity" }, { value: "vii", label: "vii. A revival driven by pollution concerns" }], correct: "ii" },
        { id: "mt3-r-17", number: 17, tag: "matching-headings", kind: "choice", prompt: "Paragraph E", options: [{ value: "i", label: "i. Remaining obstacles to wider adoption" }, { value: "ii", label: "ii. A breakthrough in battery technology" }, { value: "iii", label: "iii. Why electric cars fell out of favour" }, { value: "iv", label: "iv. Future research directions" }, { value: "v", label: "v. The role of government in speeding adoption" }, { value: "vi", label: "vi. An early period of popularity" }, { value: "vii", label: "vii. A revival driven by pollution concerns" }], correct: "v" },
        { id: "mt3-r-18", number: 18, tag: "matching-headings", kind: "choice", prompt: "Paragraph F", options: [{ value: "i", label: "i. Remaining obstacles to wider adoption" }, { value: "ii", label: "ii. A breakthrough in battery technology" }, { value: "iii", label: "iii. Why electric cars fell out of favour" }, { value: "iv", label: "iv. Future research directions" }, { value: "v", label: "v. The role of government in speeding adoption" }, { value: "vi", label: "vi. An early period of popularity" }, { value: "vii", label: "vii. A revival driven by pollution concerns" }], correct: "i" },
        { id: "mt3-r-19", number: 19, tag: "matching-headings", kind: "choice", prompt: "Paragraph G", options: [{ value: "i", label: "i. Remaining obstacles to wider adoption" }, { value: "ii", label: "ii. A breakthrough in battery technology" }, { value: "iii", label: "iii. Why electric cars fell out of favour" }, { value: "iv", label: "iv. Future research directions" }, { value: "v", label: "v. The role of government in speeding adoption" }, { value: "vi", label: "vi. An early period of popularity" }, { value: "vii", label: "vii. A revival driven by pollution concerns" }], correct: "iv" },
        { id: "mt3-r-20", number: 20, tag: "sentence-completion", kind: "text", prompt: "Early electric cars were prized for being quiet and easy to _______ compared with petrol engines.", correct: ["start"] },
        { id: "mt3-r-21", number: 21, tag: "sentence-completion", kind: "text", prompt: "Ford's assembly line made petrol cars dramatically _______.", correct: ["cheaper"] },
        { id: "mt3-r-22", number: 22, tag: "sentence-completion", kind: "text", prompt: "Modern lithium-ion batteries were originally developed for consumer _______.", correct: ["electronics"] },
        { id: "mt3-r-23", number: 23, tag: "sentence-completion", kind: "text", prompt: "Charging infrastructure is uneven, especially in _______ areas.", correct: ["rural"] },
        { id: "mt3-r-24", number: 24, tag: "matching-features", kind: "choice", prompt: "A raw material whose mining raises ethical concerns", options: [{ value: "lithium", label: "Lithium" }, { value: "steel", label: "Steel" }, { value: "oil", label: "Oil" }], correct: "lithium" },
        { id: "mt3-r-25", number: 25, tag: "matching-features", kind: "choice", prompt: "Became cheap and widely available in the early car era", options: [{ value: "lithium", label: "Lithium" }, { value: "steel", label: "Steel" }, { value: "oil", label: "Oil" }], correct: "oil" },
        { id: "mt3-r-26", number: 26, tag: "matching-features", kind: "choice", prompt: "Used in battery technology to improve weight and storage", options: [{ value: "lithium", label: "Lithium" }, { value: "steel", label: "Steel" }, { value: "oil", label: "Oil" }], correct: "lithium" },
      ],
    },
    {
      passageNumber: 3,
      title: "The Debate Over Universal Basic Income",
      paragraphs: [
        {
          label: "A",
          text: "Universal basic income, or UBI, refers to a regular, unconditional cash payment made by a government to every citizen, regardless of their income, employment status, or wealth. Though the idea has circulated in various forms for centuries, it has attracted renewed attention in recent years amid concerns about automation, job insecurity, and the complexity of existing welfare systems.",
        },
        {
          label: "B",
          text: "Supporters argue that UBI's simplicity is one of its greatest strengths. Unlike traditional welfare programmes, which often require extensive means-testing and can create disincentives to work by withdrawing benefits as income rises, a universal payment avoids these complications entirely, since everyone receives the same amount regardless of their circumstances.",
        },
        {
          label: "C",
          text: "Proponents also point to evidence from pilot programmes, including trials in Finland, Kenya, and parts of the United States, suggesting that recipients generally do not reduce their work hours significantly, countering a common assumption that guaranteed income would discourage employment. Some trials have also reported improvements in recipients' mental health and overall financial stability.",
        },
        {
          label: "D",
          text: "Critics, however, raise concerns about cost. Providing a meaningful payment to every citizen, rather than targeting support at those most in need, is enormously expensive, and opponents argue the money would be better spent strengthening existing targeted welfare programmes rather than spreading it evenly across people who may not need financial support at all.",
        },
        {
          label: "E",
          text: "A further criticism concerns inflation. Some economists worry that if a UBI were introduced without corresponding increases in productivity or the supply of goods and services, the additional spending power could simply push prices upward, eroding much of the payment's real value over time, particularly for essential goods like housing.",
        },
        {
          label: "F",
          text: "Defenders of UBI respond that most pilot programmes have been too small and short-term to reveal how a large permanent national scheme would actually behave, acknowledging that this remains a genuine, unresolved uncertainty rather than a settled question. They argue that larger, longer trials are needed before firm conclusions can be drawn either way.",
        },
        {
          label: "G",
          text: "Whatever the eventual verdict, the debate has already had one clear effect: it has pushed discussion of alternative approaches to social support, from targeted automation taxes to simplified conditional benefits, further into mainstream political conversation than at almost any point in recent decades.",
        },
      ],
      questions: [
        { id: "mt3-r-27", number: 27, tag: "multiple-choice", kind: "choice", prompt: "According to paragraph A, UBI is a payment that is", options: [{ value: "a", label: "given only to unemployed citizens" }, { value: "b", label: "given to every citizen regardless of circumstances" }, { value: "c", label: "conditional on income level" }], correct: "b" },
        { id: "mt3-r-28", number: 28, tag: "multiple-choice", kind: "choice", prompt: "Supporters see UBI's simplicity as an advantage because it", options: [{ value: "a", label: "avoids the complications of means-testing" }, { value: "b", label: "costs less than other welfare systems" }, { value: "c", label: "requires more administrative staff" }], correct: "a" },
        { id: "mt3-r-29", number: 29, tag: "multiple-choice", kind: "choice", prompt: "Pilot programmes mentioned in paragraph C generally found that recipients", options: [{ value: "a", label: "significantly reduced their work hours" }, { value: "b", label: "did not significantly reduce their work hours" }, { value: "c", label: "stopped working entirely" }], correct: "b" },
        { id: "mt3-r-30", number: 30, tag: "multiple-choice", kind: "choice", prompt: "Critics in paragraph D argue that money would be better spent on", options: [{ value: "a", label: "targeted welfare programmes" }, { value: "b", label: "automation taxes" }, { value: "c", label: "inflation control" }], correct: "a" },
        { id: "mt3-r-31", number: 31, tag: "multiple-choice", kind: "choice", prompt: "Defenders of UBI in paragraph F argue that pilot programmes so far have been", options: [{ value: "a", label: "conclusive and sufficient" }, { value: "b", label: "too small and short-term to be conclusive" }, { value: "c", label: "proof that UBI should be abandoned" }], correct: "b" },
        { id: "mt3-r-32", number: 32, tag: "yes-no-not-given", kind: "choice", prompt: "All economists agree that UBI would cause significant inflation.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "no" },
        { id: "mt3-r-33", number: 33, tag: "yes-no-not-given", kind: "choice", prompt: "Some pilot programmes reported improvements in recipients' mental health.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "yes" },
        { id: "mt3-r-34", number: 34, tag: "yes-no-not-given", kind: "choice", prompt: "A full-scale national UBI programme has already been implemented successfully somewhere.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "ng" },
        { id: "mt3-r-35", number: 35, tag: "yes-no-not-given", kind: "choice", prompt: "The debate over UBI has increased interest in alternative social support approaches.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "yes" },
        { id: "mt3-r-36", number: 36, tag: "yes-no-not-given", kind: "choice", prompt: "Kenya's pilot programme was larger than Finland's.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "ng" },
        { id: "mt3-r-37", number: 37, tag: "summary-completion", kind: "text", prompt: "Unlike UBI, traditional welfare often requires extensive means-_______.", correct: ["testing"] },
        { id: "mt3-r-38", number: 38, tag: "summary-completion", kind: "text", prompt: "Critics worry UBI could push up _______ if spending power rises without more supply.", correct: ["prices", "inflation"] },
        { id: "mt3-r-39", number: 39, tag: "summary-completion", kind: "text", prompt: "Providing UBI to every citizen rather than targeting support is extremely _______.", correct: ["expensive", "costly"] },
        { id: "mt3-r-40", number: 40, tag: "summary-completion", kind: "text", prompt: "Defenders say larger, longer _______ are needed before firm conclusions are drawn.", correct: ["trials"] },
      ],
    },
  ],
};
