import { ListeningPart, ReadingPassage, WritingTask } from "../types";

export const quickDiagnosticListening: { parts: ListeningPart[]; durationMinutes: number } = {
  durationMinutes: 10,
  parts: [
    {
      partNumber: 1,
      title: "Joining a Gym",
      context:
        "You will hear a phone conversation between a caller and a receptionist at Hillcrest Fitness Centre.",
      script: `Receptionist: Hillcrest Fitness Centre, good afternoon.
Caller: Hi, I'd like some information about membership, please.
Receptionist: Sure, can I take your name?
Caller: It's Sophie Marlow, M-A-R-L-O-W.
Receptionist: Thanks, Sophie. We have two main options: a standard membership for thirty two pounds a month, or a premium one at forty nine pounds, which includes the pool and all the classes.
Caller: I think I'd like the premium one. Is there a joining fee?
Receptionist: There's a one-off joining fee of twenty pounds, but that's waived if you sign up before the end of this month.
Caller: Great, that works for me then. What are the opening hours?
Receptionist: We're open from six in the morning until ten at night on weekdays, and eight until six on weekends.
Caller: And is parking available?
Receptionist: Yes, there's free parking at the back of the building, on Orchard Lane.
Caller: Perfect. One last question — do you require a medical form?
Receptionist: Yes, we'll need a short health questionnaire filled in on your first visit.
Caller: No problem, thank you.`,
      questions: [
        {
          id: "qd-l-1", number: 1, tag: "form-completion", kind: "text",
          prompt: "Caller's surname: _______",
          correct: ["marlow"],
        },
        {
          id: "qd-l-2", number: 2, tag: "form-completion", kind: "text",
          prompt: "Standard membership cost: £_______ per month",
          correct: ["32", "thirty two"],
        },
        {
          id: "qd-l-3", number: 3, tag: "form-completion", kind: "text",
          prompt: "Premium membership cost: £_______ per month",
          correct: ["49", "forty nine"],
        },
        {
          id: "qd-l-4", number: 4, tag: "form-completion", kind: "text",
          prompt: "Joining fee: £_______",
          correct: ["20", "twenty"],
        },
        {
          id: "qd-l-5", number: 5, tag: "form-completion", kind: "text",
          prompt: "Weekday closing time: _______",
          correct: ["10pm", "10 pm", "ten", "ten at night"],
        },
        {
          id: "qd-l-6", number: 6, tag: "form-completion", kind: "text",
          prompt: "Weekend opening time: _______",
          correct: ["8am", "8 am", "eight"],
        },
        {
          id: "qd-l-7", number: 7, tag: "form-completion", kind: "text",
          prompt: "Parking location: _______ Lane",
          correct: ["orchard"],
        },
        {
          id: "qd-l-8", number: 8, tag: "form-completion", kind: "text",
          prompt: "New members must complete a health _______",
          correct: ["questionnaire", "form"],
        },
        {
          id: "qd-l-9", number: 9, tag: "multiple-choice", kind: "choice",
          prompt: "The joining fee is waived if you sign up",
          options: [
            { value: "a", label: "within the first week" },
            { value: "b", label: "before the end of the month" },
            { value: "c", label: "on a weekend" },
          ],
          correct: "b",
        },
        {
          id: "qd-l-10", number: 10, tag: "multiple-choice", kind: "choice",
          prompt: "The premium membership includes",
          options: [
            { value: "a", label: "parking only" },
            { value: "b", label: "the pool and classes" },
            { value: "c", label: "a personal trainer" },
          ],
          correct: "b",
        },
      ],
    },
  ],
};

export const quickDiagnosticReading: { passages: ReadingPassage[]; durationMinutes: number } = {
  durationMinutes: 18,
  passages: [
    {
      passageNumber: 1,
      title: "The Benefits of Urban Trees",
      paragraphs: [
        {
          label: "A",
          text: "Trees lining city streets are often planted mainly for their appearance, but research over the past twenty years has shown that their practical benefits go far beyond aesthetics. Urban trees improve air quality, reduce temperatures, and even appear to have measurable effects on residents' wellbeing.",
        },
        {
          label: "B",
          text: "Air quality improvements come from a tree's leaves trapping small particles of pollution, which are then washed to the ground by rain rather than remaining suspended in the air that people breathe. A single mature tree can filter a surprisingly large volume of air over the course of a year.",
        },
        {
          label: "C",
          text: "Trees also provide shade that can lower the surface temperature of pavements and roads by several degrees, which in turn reduces the amount of heat radiating back into the surrounding air during hot weather, a particularly valuable effect in cities experiencing more frequent heatwaves.",
        },
        {
          label: "D",
          text: "Perhaps the most surprising finding relates to mental health. Several studies have found that residents living on tree-lined streets report lower stress levels than those on streets without greenery, even when factors like income and neighbourhood are accounted for.",
        },
        {
          label: "E",
          text: "Despite these clear benefits, many cities struggle to maintain their tree populations. Underground pipes, limited soil space, and the cost of ongoing care all make large-scale planting more difficult than it might first appear, meaning that ambitious tree-planting targets are not always fully met.",
        },
      ],
      questions: [
        {
          id: "qd-r-1", number: 1, tag: "true-false-not-given", kind: "choice",
          prompt: "Urban trees were originally valued mainly for practical reasons.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "false",
        },
        {
          id: "qd-r-2", number: 2, tag: "true-false-not-given", kind: "choice",
          prompt: "Rain helps remove pollution particles trapped by leaves.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "true",
        },
        {
          id: "qd-r-3", number: 3, tag: "true-false-not-given", kind: "choice",
          prompt: "Every city has already met its tree-planting targets.",
          options: [{ value: "true", label: "True" }, { value: "false", label: "False" }, { value: "ng", label: "Not Given" }],
          correct: "false",
        },
        {
          id: "qd-r-4", number: 4, tag: "matching-information", kind: "choice",
          prompt: "A reference to a mental-health benefit of trees",
          options: [
            { value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" },
            { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" },
          ],
          correct: "D",
        },
        {
          id: "qd-r-5", number: 5, tag: "matching-information", kind: "choice",
          prompt: "A reference to practical obstacles to planting more trees",
          options: [
            { value: "A", label: "Paragraph A" }, { value: "B", label: "Paragraph B" },
            { value: "C", label: "Paragraph C" }, { value: "D", label: "Paragraph D" }, { value: "E", label: "Paragraph E" },
          ],
          correct: "E",
        },
        {
          id: "qd-r-6", number: 6, tag: "short-answer", kind: "text",
          prompt: "What do tree leaves trap that improves air quality?",
          correct: ["pollution", "particles", "pollution particles", "small particles"],
        },
        {
          id: "qd-r-7", number: 7, tag: "short-answer", kind: "text",
          prompt: "What effect does shade have on pavement surface temperature?",
          correct: ["lowers it", "reduces it", "lower", "lowers temperature", "reduces temperature"],
        },
      ],
    },
  ],
};

export const quickDiagnosticWriting: { tasks: WritingTask[]; durationMinutes: number } = {
  durationMinutes: 40,
  tasks: [
    {
      taskNumber: 2,
      prompt:
        "Many people now work from home instead of commuting to an office. Do you think the advantages of working from home outweigh the disadvantages? Write at least 250 words.",
      minWords: 250,
      suggestedMinutes: 40,
    },
  ],
};
