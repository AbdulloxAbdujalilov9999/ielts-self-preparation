import { ReadingPassage } from "../types";

export const mockTest2Reading: { passages: ReadingPassage[]; durationMinutes: number } = {
  durationMinutes: 60,
  passages: [
    {
      passageNumber: 1,
      title: "The History of the Umbrella",
      paragraphs: [
        {
          label: "A",
          text: "Few everyday objects have as long a history as the umbrella. The earliest versions, found in carvings from ancient Egypt, Assyria, and China dating back over three thousand years, were not designed for rain at all. Instead, they were sunshades, often large and elaborately decorated, carried above kings and nobles as a symbol of status rather than a practical tool.",
        },
        {
          label: "B",
          text: "The Chinese are generally credited with being the first to waterproof umbrellas, by coating paper canopies in wax, sometime around the first century. This innovation allowed the umbrella to serve a dual purpose, protecting against both sun and rain, and the design gradually spread along trade routes into other parts of Asia and, much later, into Europe.",
        },
        {
          label: "C",
          text: "In eighteenth century Europe, however, umbrellas carried an unexpected social stigma, at least for men. Carrying one was associated with weakness, since a gentleman was expected to own a carriage rather than walk through the rain. It took a particularly persistent Englishman, Jonas Hanway, to change this perception. He carried an umbrella publicly through London for roughly thirty years, enduring ridicule, until the practice gradually became accepted, and even fashionable, for men as well as women.",
        },
        {
          label: "D",
          text: "The modern folding umbrella, with its collapsible metal ribs, emerged in the nineteenth century, made possible by advances in steel production that allowed for thin, flexible, yet durable spokes. Samuel Fox, an English businessman, is often credited with popularising the steel-ribbed design in the 1850s, which was far lighter and more reliable than earlier versions made from whalebone or wood.",
        },
        {
          label: "E",
          text: "Today, the basic mechanical design of the umbrella has changed remarkably little since Fox's era, though materials have continued to improve, with lightweight aluminium and fibreglass replacing much of the steel. Interestingly, despite constant minor innovations, including various attempts at wind-resistant and automatic-opening designs, no single new design has managed to fully replace the classic folding umbrella in everyday use.",
        },
      ],
      questions: [
        { id: "mt2-r-1", number: 1, tag: "true-false-not-given", kind: "choice", prompt: "The earliest umbrellas were designed mainly to protect against rain.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "false" },
        { id: "mt2-r-2", number: 2, tag: "true-false-not-given", kind: "choice", prompt: "Waterproof umbrellas were first developed in China.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "true" },
        { id: "mt2-r-3", number: 3, tag: "true-false-not-given", kind: "choice", prompt: "In eighteenth century Europe, umbrellas were seen as fashionable for men.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "false" },
        { id: "mt2-r-4", number: 4, tag: "true-false-not-given", kind: "choice", prompt: "Jonas Hanway carried an umbrella publicly for around thirty years.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "true" },
        { id: "mt2-r-5", number: 5, tag: "true-false-not-given", kind: "choice", prompt: "Samuel Fox invented the very first folding umbrella design.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "ng" },
        { id: "mt2-r-6", number: 6, tag: "true-false-not-given", kind: "choice", prompt: "A completely new umbrella design has fully replaced the classic folding version.", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }], correct: "false" },
        { id: "mt2-r-7", number: 7, tag: "matching-information", kind: "choice", prompt: "A reference to a material once used for umbrella ribs before steel", options: [{ value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" }, { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" }], correct: "D" },
        { id: "mt2-r-8", number: 8, tag: "matching-information", kind: "choice", prompt: "A reference to umbrellas as a symbol of status rather than protection", options: [{ value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" }, { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" }], correct: "A" },
        { id: "mt2-r-9", number: 9, tag: "matching-information", kind: "choice", prompt: "A reference to lightweight modern materials replacing steel", options: [{ value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" }, { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" }], correct: "E" },
        { id: "mt2-r-10", number: 10, tag: "short-answer", kind: "text", prompt: "What material was used to coat paper canopies to make them waterproof?", correct: ["wax"] },
        { id: "mt2-r-11", number: 11, tag: "short-answer", kind: "text", prompt: "What material allowed Samuel Fox's ribs to be thin, flexible, and durable?", correct: ["steel"] },
        { id: "mt2-r-12", number: 12, tag: "short-answer", kind: "text", prompt: "In which decade did Samuel Fox popularise the steel-ribbed umbrella?", correct: ["1850s", "the 1850s"] },
        { id: "mt2-r-13", number: 13, tag: "short-answer", kind: "text", prompt: "What was Jonas Hanway's nationality?", correct: ["english", "englishman"] },
      ],
    },
    {
      passageNumber: 2,
      title: "Noise Pollution in Modern Cities",
      paragraphs: [
        {
          label: "A",
          text: "When people think about urban pollution, images of smog and litter usually come to mind first. Yet researchers increasingly argue that noise deserves equal attention as a pollutant, given mounting evidence of its effects on both physical and mental health.",
        },
        {
          label: "B",
          text: "Unlike visible pollution, constant low-level noise is easy to dismiss as a mere inconvenience rather than a genuine health risk. However, studies tracking residents near busy roads and airports have found measurably higher rates of high blood pressure and heart disease compared with people living in quieter areas, even after controlling for other lifestyle factors.",
        },
        {
          label: "C",
          text: "Sleep disruption is one of the clearest mechanisms behind these effects. Even noise too quiet to fully wake a sleeper can trigger brief increases in heart rate and stress hormone levels, preventing the deep, restorative sleep stages the body needs, a pattern that, repeated night after night, appears to contribute meaningfully to long-term cardiovascular strain.",
        },
        {
          label: "D",
          text: "Children appear to be particularly vulnerable. Several studies conducted near major airports have found that children attending schools in high-noise areas show slower progress in reading, a difference researchers attribute to the way chronic noise interferes with concentration and short-term memory during lessons.",
        },
        {
          label: "E",
          text: "Tackling urban noise is proving difficult, partly because there is no single dominant source to target. Traffic, construction, and nightlife each contribute significantly, meaning that effective policy usually requires several measures acting together, such as stricter vehicle noise limits, quieter road surfaces, and buffer zones of vegetation between busy roads and residential buildings.",
        },
        {
          label: "F",
          text: "Some cities have nonetheless made notable progress. Several European capitals now operate real-time noise-monitoring networks that feed directly into traffic management systems, automatically rerouting heavy vehicles away from residential streets during sensitive night-time hours. Early results suggest measurable reductions in reported sleep disturbance in the areas covered.",
        },
        {
          label: "G",
          text: "Looking forward, some researchers argue that noise should be factored into urban planning decisions as routinely as air quality already is, with new developments required to model and limit expected noise levels before construction begins, rather than attempting to fix problems only after residents have moved in.",
        },
      ],
      questions: [
        { id: "mt2-r-14", number: 14, tag: "matching-headings", kind: "choice", prompt: "Paragraph B", options: [{ value: "i", label: "i. A call for noise to shape future planning decisions" }, { value: "ii", label: "ii. Why effective solutions need several combined measures" }, { value: "iii", label: "iii. Evidence linking noise to cardiovascular illness" }, { value: "iv", label: "iv. An example of technology reducing night-time disturbance" }, { value: "v", label: "v. How poor sleep links noise to physical strain" }, { value: "vi", label: "vi. A particularly vulnerable group of city residents" }, { value: "vii", label: "vii. An overlooked category of urban pollution" }], correct: "iii" },
        { id: "mt2-r-15", number: 15, tag: "matching-headings", kind: "choice", prompt: "Paragraph C", options: [{ value: "i", label: "i. A call for noise to shape future planning decisions" }, { value: "ii", label: "ii. Why effective solutions need several combined measures" }, { value: "iii", label: "iii. Evidence linking noise to cardiovascular illness" }, { value: "iv", label: "iv. An example of technology reducing night-time disturbance" }, { value: "v", label: "v. How poor sleep links noise to physical strain" }, { value: "vi", label: "vi. A particularly vulnerable group of city residents" }, { value: "vii", label: "vii. An overlooked category of urban pollution" }], correct: "v" },
        { id: "mt2-r-16", number: 16, tag: "matching-headings", kind: "choice", prompt: "Paragraph D", options: [{ value: "i", label: "i. A call for noise to shape future planning decisions" }, { value: "ii", label: "ii. Why effective solutions need several combined measures" }, { value: "iii", label: "iii. Evidence linking noise to cardiovascular illness" }, { value: "iv", label: "iv. An example of technology reducing night-time disturbance" }, { value: "v", label: "v. How poor sleep links noise to physical strain" }, { value: "vi", label: "vi. A particularly vulnerable group of city residents" }, { value: "vii", label: "vii. An overlooked category of urban pollution" }], correct: "vi" },
        { id: "mt2-r-17", number: 17, tag: "matching-headings", kind: "choice", prompt: "Paragraph E", options: [{ value: "i", label: "i. A call for noise to shape future planning decisions" }, { value: "ii", label: "ii. Why effective solutions need several combined measures" }, { value: "iii", label: "iii. Evidence linking noise to cardiovascular illness" }, { value: "iv", label: "iv. An example of technology reducing night-time disturbance" }, { value: "v", label: "v. How poor sleep links noise to physical strain" }, { value: "vi", label: "vi. A particularly vulnerable group of city residents" }, { value: "vii", label: "vii. An overlooked category of urban pollution" }], correct: "ii" },
        { id: "mt2-r-18", number: 18, tag: "matching-headings", kind: "choice", prompt: "Paragraph F", options: [{ value: "i", label: "i. A call for noise to shape future planning decisions" }, { value: "ii", label: "ii. Why effective solutions need several combined measures" }, { value: "iii", label: "iii. Evidence linking noise to cardiovascular illness" }, { value: "iv", label: "iv. An example of technology reducing night-time disturbance" }, { value: "v", label: "v. How poor sleep links noise to physical strain" }, { value: "vi", label: "vi. A particularly vulnerable group of city residents" }, { value: "vii", label: "vii. An overlooked category of urban pollution" }], correct: "iv" },
        { id: "mt2-r-19", number: 19, tag: "matching-headings", kind: "choice", prompt: "Paragraph G", options: [{ value: "i", label: "i. A call for noise to shape future planning decisions" }, { value: "ii", label: "ii. Why effective solutions need several combined measures" }, { value: "iii", label: "iii. Evidence linking noise to cardiovascular illness" }, { value: "iv", label: "iv. An example of technology reducing night-time disturbance" }, { value: "v", label: "v. How poor sleep links noise to physical strain" }, { value: "vi", label: "vi. A particularly vulnerable group of city residents" }, { value: "vii", label: "vii. An overlooked category of urban pollution" }], correct: "i" },
        { id: "mt2-r-20", number: 20, tag: "sentence-completion", kind: "text", prompt: "Even quiet noise can raise heart rate and _______ hormone levels during sleep.", correct: ["stress"] },
        { id: "mt2-r-21", number: 21, tag: "sentence-completion", kind: "text", prompt: "Children near airports show slower progress in _______.", correct: ["reading"] },
        { id: "mt2-r-22", number: 22, tag: "sentence-completion", kind: "text", prompt: "Noise interferes with concentration and short-term _______ during lessons.", correct: ["memory"] },
        { id: "mt2-r-23", number: 23, tag: "sentence-completion", kind: "text", prompt: "Some cities use real-time noise-monitoring networks linked to _______ management systems.", correct: ["traffic"] },
        { id: "mt2-r-24", number: 24, tag: "matching-features", kind: "choice", prompt: "Reroutes heavy vehicles away from homes at night", options: [{ value: "monitoring", label: "Noise-monitoring network" }, { value: "zone", label: "Vegetation buffer zone" }, { value: "limit", label: "Vehicle noise limit" }], correct: "monitoring" },
        { id: "mt2-r-25", number: 25, tag: "matching-features", kind: "choice", prompt: "Placed between busy roads and residential buildings", options: [{ value: "monitoring", label: "Noise-monitoring network" }, { value: "zone", label: "Vegetation buffer zone" }, { value: "limit", label: "Vehicle noise limit" }], correct: "zone" },
        { id: "mt2-r-26", number: 26, tag: "matching-features", kind: "choice", prompt: "A stricter rule applied directly to vehicles", options: [{ value: "monitoring", label: "Noise-monitoring network" }, { value: "zone", label: "Vegetation buffer zone" }, { value: "limit", label: "Vehicle noise limit" }], correct: "limit" },
      ],
    },
    {
      passageNumber: 3,
      title: "Automation and the Future of Work",
      paragraphs: [
        {
          label: "A",
          text: "Predictions about automation eliminating jobs are nothing new; similar warnings accompanied the introduction of mechanised looms, the assembly line, and the personal computer. Each time, large numbers of jobs did indeed disappear, yet overall employment eventually recovered as new kinds of work emerged that previous generations could not have anticipated.",
        },
        {
          label: "B",
          text: "Economists who study this pattern generally distinguish between two effects operating simultaneously: a displacement effect, where machines directly replace tasks previously done by people, and a productivity effect, where the resulting efficiency gains lower costs, increase demand, and ultimately create new jobs, sometimes in entirely different industries.",
        },
        {
          label: "C",
          text: "What makes the current wave of automation, driven substantially by artificial intelligence, different in the view of some economists is its reach. Earlier waves of automation mainly affected manual and routine tasks. Current AI systems, by contrast, are increasingly capable of handling tasks previously considered to require judgement, creativity, or specialised training, such as drafting legal documents or writing basic news reports.",
        },
        {
          label: "D",
          text: "This has led some researchers to argue that the historical pattern of recovery may not repeat itself this time, since both routine and non-routine work could be affected simultaneously, leaving fewer obvious directions for displaced workers to move into. Others push back, pointing out that similarly dire predictions have consistently underestimated the pace at which entirely new job categories emerge once a technology matures.",
        },
        {
          label: "E",
          text: "A further complication is timing. Even if new jobs do eventually emerge in sufficient numbers, there is no guarantee they will appear quickly enough, or in the same locations, to absorb workers displaced in the short term. A factory worker who loses their job to automation may not be well placed, geographically or in terms of training, to take up a new role in, say, software maintenance or renewable energy installation.",
        },
        {
          label: "F",
          text: "Policy responses under discussion include large-scale retraining programmes, stronger social safety nets during the transition period, and in some proposals, a universal basic income intended to cushion the impact regardless of how the labour market eventually adjusts. None of these approaches has yet been tested at the scale that a truly broad wave of automation might require.",
        },
        {
          label: "G",
          text: "What seems reasonably clear, even to economists who disagree sharply on the overall outlook, is that the transition period itself is likely to be disruptive for a significant number of workers, regardless of whether total employment eventually balances out. The debate is less about whether change is coming than about how well societies prepare for the disruption along the way.",
        },
      ],
      questions: [
        { id: "mt2-r-27", number: 27, tag: "multiple-choice", kind: "choice", prompt: "According to paragraph A, past waves of automation", options: [{ value: "a", label: "permanently reduced total employment" }, { value: "b", label: "eliminated jobs but employment eventually recovered" }, { value: "c", label: "had no measurable effect on jobs" }], correct: "b" },
        { id: "mt2-r-28", number: 28, tag: "multiple-choice", kind: "choice", prompt: "The 'productivity effect' described in paragraph B refers to", options: [{ value: "a", label: "machines directly replacing worker tasks" }, { value: "b", label: "efficiency gains eventually creating new jobs" }, { value: "c", label: "workers becoming more efficient through training" }], correct: "b" },
        { id: "mt2-r-29", number: 29, tag: "multiple-choice", kind: "choice", prompt: "Paragraph C argues that current AI-driven automation differs from earlier waves because it", options: [{ value: "a", label: "only affects manual, routine tasks" }, { value: "b", label: "can also affect tasks requiring judgement or creativity" }, { value: "c", label: "is slower than previous automation" }], correct: "b" },
        { id: "mt2-r-30", number: 30, tag: "multiple-choice", kind: "choice", prompt: "The example of a factory worker in paragraph E illustrates a problem with", options: [{ value: "a", label: "the cost of retraining programmes" }, { value: "b", label: "timing and location mismatches for new jobs" }, { value: "c", label: "universal basic income proposals" }], correct: "b" },
        { id: "mt2-r-31", number: 31, tag: "multiple-choice", kind: "choice", prompt: "Paragraph G suggests that economists mostly disagree about", options: [{ value: "a", label: "whether automation is happening at all" }, { value: "b", label: "whether the transition period will be disruptive" }, { value: "c", label: "the long-term outcome for total employment" }], correct: "c" },
        { id: "mt2-r-32", number: 32, tag: "yes-no-not-given", kind: "choice", prompt: "All economists agree that this wave of automation will reduce total employment permanently.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "no" },
        { id: "mt2-r-33", number: 33, tag: "yes-no-not-given", kind: "choice", prompt: "Some researchers doubt that the historical pattern of job recovery will repeat this time.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "yes" },
        { id: "mt2-r-34", number: 34, tag: "yes-no-not-given", kind: "choice", prompt: "Universal basic income has already been tested at a large scale with clear success.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "no" },
        { id: "mt2-r-35", number: 35, tag: "yes-no-not-given", kind: "choice", prompt: "Retraining programmes are more effective than social safety nets.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "ng" },
        { id: "mt2-r-36", number: 36, tag: "yes-no-not-given", kind: "choice", prompt: "Most economists expect the transition period to cause disruption for many workers.", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "ng", label: "Not Given" }], correct: "yes" },
        { id: "mt2-r-37", number: 37, tag: "summary-completion", kind: "text", prompt: "Past automation caused a _______ effect, removing tasks previously done by people.", correct: ["displacement"] },
        { id: "mt2-r-38", number: 38, tag: "summary-completion", kind: "text", prompt: "Current AI can affect tasks requiring judgement, not just _______ tasks.", correct: ["routine"] },
        { id: "mt2-r-39", number: 39, tag: "summary-completion", kind: "text", prompt: "Displaced workers may lack the right _______ or location for new roles.", correct: ["training"] },
        { id: "mt2-r-40", number: 40, tag: "summary-completion", kind: "text", prompt: "Proposed policy responses include retraining and a universal basic _______.", correct: ["income"] },
      ],
    },
  ],
};
