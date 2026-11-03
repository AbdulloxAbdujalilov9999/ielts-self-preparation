import { ListeningPart } from "../types";

export const mockTest3Listening: { parts: ListeningPart[]; durationMinutes: number } = {
  durationMinutes: 30,
  parts: [
    {
      partNumber: 1,
      title: "Renting a Storage Unit",
      context:
        "You will hear a phone conversation between a caller and a staff member at Hartley Self-Storage.",
      script: `Staff: Hartley Self-Storage, how can I help you?
Caller: Hi, I'm moving house soon and need somewhere to store some furniture for a couple of months.
Staff: No problem. Can I take your name?
Caller: Yes, it's Owen Baxter. B-A-X-T-E-R.
Staff: Thanks, Owen. Roughly how much space do you think you'll need?
Caller: I've got a sofa, a bed frame, and about ten boxes, so maybe a medium unit?
Staff: That sounds right — our medium unit is twenty five square feet, and it's thirty eight pounds a week.
Caller: That works. Is there a minimum rental period?
Staff: Yes, the minimum is four weeks, even if you only need it for less time.
Caller: That's fine, I'll probably need it for about eight weeks anyway. Do I need my own padlock?
Staff: You can bring your own, or we sell them here for six pounds.
Caller: I'll just buy one from you then. What are your access hours?
Staff: The site is accessible from seven in the morning until nine at night, every day including weekends.
Caller: Great. Is the unit indoors or outdoors?
Staff: All our units are indoors, in a heated building, so your furniture will be protected from damp.
Caller: Perfect, that's important for the sofa. One last thing — do I need insurance?
Staff: It's not compulsory, but we strongly recommend it. Basic cover is two pounds fifty a week.
Caller: I'll take that too, to be safe.`,
      questions: [
        { id: "mt3-l-1", number: 1, tag: "form-completion", kind: "text", prompt: "Caller's surname: _______", correct: ["baxter"] },
        { id: "mt3-l-2", number: 2, tag: "form-completion", kind: "text", prompt: "Unit size recommended: _______ square feet", correct: ["25", "twenty five"] },
        { id: "mt3-l-3", number: 3, tag: "form-completion", kind: "text", prompt: "Weekly cost of the unit: £_______", correct: ["38", "thirty eight"] },
        { id: "mt3-l-4", number: 4, tag: "form-completion", kind: "text", prompt: "Minimum rental period: _______ weeks", correct: ["4", "four"] },
        { id: "mt3-l-5", number: 5, tag: "form-completion", kind: "text", prompt: "Cost of a padlock from the company: £_______", correct: ["6", "six"] },
        { id: "mt3-l-6", number: 6, tag: "form-completion", kind: "text", prompt: "Site access closes at: _______ at night", correct: ["9pm", "9 pm", "nine"] },
        { id: "mt3-l-7", number: 7, tag: "form-completion", kind: "text", prompt: "Units are located: indoors, in a _______ building", correct: ["heated"] },
        { id: "mt3-l-8", number: 8, tag: "form-completion", kind: "text", prompt: "Weekly cost of basic insurance: £_______", correct: ["2.50", "2.5", "two fifty", "two pounds fifty"] },
        { id: "mt3-l-9", number: 9, tag: "multiple-choice", kind: "choice", prompt: "How long does the caller expect to need the unit for?", options: [{ value: "a", label: "About 4 weeks" }, { value: "b", label: "About 8 weeks" }, { value: "c", label: "About 12 weeks" }], correct: "b" },
        { id: "mt3-l-10", number: 10, tag: "multiple-choice", kind: "choice", prompt: "Is insurance compulsory?", options: [{ value: "a", label: "Yes, always" }, { value: "b", label: "No, but it is recommended" }, { value: "c", label: "Only for furniture" }], correct: "b" },
      ],
    },
    {
      partNumber: 2,
      title: "A Guide to Fernhill Wildlife Park",
      context: "You will hear a guide introducing visitors to Fernhill Wildlife Park.",
      script: `Welcome to Fernhill Wildlife Park. Before you head off to explore, let me give you a quick overview of the site.

The park is divided into four main zones. Near the entrance is the Woodland Zone, home to native species like foxes and owls — this area is best visited in the early morning or late afternoon, when the animals are most active. Beyond that is the Wetlands Zone, built around a series of ponds, which is particularly good for birdwatching, and includes a covered hide where you can observe without disturbing the wildlife. Further along is the Savannah Zone, our largest area, home to giraffes and zebras, and finally, at the far end of the park, is the Nocturnal House, a dark indoor building for animals that are active at night, such as bats and owls.

A few practical notes. Feeding sessions for the giraffes happen daily at eleven and at three, and visitors can buy a bag of approved food for two pounds to feed them under keeper supervision. The Nocturnal House requires your eyes to adjust to the darkness, so we recommend waiting just inside the entrance for a minute or two before moving further in.

If you're visiting with young children, there's a dedicated play area next to the café, which is roughly in the centre of the park. Buggies can be hired at the main entrance for three pounds for the whole day.

Finally, please note that flash photography is not permitted anywhere in the Nocturnal House, as it can seriously startle the animals. Photography without flash is absolutely fine throughout the rest of the park.`,
      questions: [
        { id: "mt3-l-11", number: 11, tag: "matching-features", kind: "choice", prompt: "Foxes and owls, best seen morning or late afternoon", options: [{ value: "woodland", label: "Woodland Zone" }, { value: "wetlands", label: "Wetlands Zone" }, { value: "savannah", label: "Savannah Zone" }, { value: "nocturnal", label: "Nocturnal House" }], correct: "woodland" },
        { id: "mt3-l-12", number: 12, tag: "matching-features", kind: "choice", prompt: "Good for birdwatching, has a covered hide", options: [{ value: "woodland", label: "Woodland Zone" }, { value: "wetlands", label: "Wetlands Zone" }, { value: "savannah", label: "Savannah Zone" }, { value: "nocturnal", label: "Nocturnal House" }], correct: "wetlands" },
        { id: "mt3-l-13", number: 13, tag: "matching-features", kind: "choice", prompt: "Home to giraffes and zebras", options: [{ value: "woodland", label: "Woodland Zone" }, { value: "wetlands", label: "Wetlands Zone" }, { value: "savannah", label: "Savannah Zone" }, { value: "nocturnal", label: "Nocturnal House" }], correct: "savannah" },
        { id: "mt3-l-14", number: 14, tag: "matching-features", kind: "choice", prompt: "Dark indoor building, home to bats", options: [{ value: "woodland", label: "Woodland Zone" }, { value: "wetlands", label: "Wetlands Zone" }, { value: "savannah", label: "Savannah Zone" }, { value: "nocturnal", label: "Nocturnal House" }], correct: "nocturnal" },
        { id: "mt3-l-15", number: 15, tag: "multiple-choice", kind: "choice", prompt: "Giraffe feeding sessions happen", options: [{ value: "a", label: "once a day" }, { value: "b", label: "at eleven and three" }, { value: "c", label: "only at weekends" }], correct: "b" },
        { id: "mt3-l-16", number: 16, tag: "multiple-choice", kind: "choice", prompt: "How much does a bag of food for the giraffes cost?", options: [{ value: "a", label: "£2" }, { value: "b", label: "£3" }, { value: "c", label: "Free" }], correct: "a" },
        { id: "mt3-l-17", number: 17, tag: "multiple-choice", kind: "choice", prompt: "Visitors to the Nocturnal House are advised to", options: [{ value: "a", label: "use flash photography" }, { value: "b", label: "wait near the entrance for their eyes to adjust" }, { value: "c", label: "avoid bringing children" }], correct: "b" },
        { id: "mt3-l-18", number: 18, tag: "multiple-choice", kind: "choice", prompt: "The children's play area is located", options: [{ value: "a", label: "near the main entrance" }, { value: "b", label: "next to the café" }, { value: "c", label: "inside the Nocturnal House" }], correct: "b" },
        { id: "mt3-l-19", number: 19, tag: "short-answer", kind: "text", prompt: "How much does it cost to hire a buggy for the day?", correct: ["3", "£3", "three pounds"] },
        { id: "mt3-l-20", number: 20, tag: "short-answer", kind: "text", prompt: "Where exactly is flash photography not permitted?", correct: ["nocturnal house", "the nocturnal house"] },
      ],
    },
    {
      partNumber: 3,
      title: "Choosing a Fieldwork Topic",
      context: "You will hear two geography students, Leah and Marcus, discussing their fieldwork topic.",
      script: `Leah: So we need to decide on our fieldwork topic by Friday. I was thinking river erosion along the coast near the campus.

Marcus: That's a solid option, but I wonder if it's been done too many times by previous student groups. Our tutor did mention wanting something a bit more original this year.

Leah: True. What about urban heat patterns in the city centre instead?

Marcus: I like that idea more, actually, because we could use the temperature sensors the geography department just bought, which almost no one's used for a project yet.

Leah: Good point. Though it does mean we'd need to collect data at several different times of day, which is more time-consuming than a single river survey.

Marcus: True, but I think the originality is worth the extra effort. We could also tie it into the vegetation cover study method we learned last term.

Leah: That's a good connection. I'm a bit worried about access, though — would we need permission to set up sensors in public spaces?

Marcus: I checked already, actually. As long as we're not blocking footpaths, we don't need special permission for short-term handheld readings.

Leah: Oh, that's a relief. Okay, I'm convinced — let's go with the urban heat idea.

Marcus: Great. I'll draft the research question tonight and send it to you tomorrow morning.

Leah: Perfect. I'll start putting together the equipment list and figure out which days we're both free to collect data.

Marcus: Sounds good. Let's aim to have the full proposal ready by Thursday, a day before it's due.`,
      questions: [
        { id: "mt3-l-21", number: 21, tag: "multiple-choice", kind: "choice", prompt: "Marcus is concerned that the river erosion topic", options: [{ value: "a", label: "requires special permission" }, { value: "b", label: "has been done too often by other students" }, { value: "c", label: "is too time-consuming" }], correct: "b" },
        { id: "mt3-l-22", number: 22, tag: "multiple-choice", kind: "choice", prompt: "Marcus prefers the urban heat topic partly because", options: [{ value: "a", label: "it requires less data collection" }, { value: "b", label: "new equipment is available for it" }, { value: "c", label: "it needs no permission at all" }], correct: "b" },
        { id: "mt3-l-23", number: 23, tag: "multiple-choice", kind: "choice", prompt: "Leah's main concern about the urban heat topic is", options: [{ value: "a", label: "the amount of time data collection will take" }, { value: "b", label: "a lack of suitable equipment" }, { value: "c", label: "that it has already been studied" }], correct: "a" },
        { id: "mt3-l-24", number: 24, tag: "multiple-choice", kind: "choice", prompt: "According to Marcus, permission is not required as long as they", options: [{ value: "a", label: "work only at night" }, { value: "b", label: "don't block footpaths" }, { value: "c", label: "use fewer than three sensors" }], correct: "b" },
        { id: "mt3-l-25", number: 25, tag: "multiple-choice", kind: "choice", prompt: "Their full proposal needs to be ready by", options: [{ value: "a", label: "Wednesday" }, { value: "b", label: "Thursday" }, { value: "c", label: "Friday" }], correct: "b" },
        { id: "mt3-l-26", number: 26, tag: "matching-features", kind: "choice", prompt: "Suggests the original river erosion topic", options: [{ value: "leah", label: "Leah" }, { value: "marcus", label: "Marcus" }, { value: "both", label: "Both" }], correct: "leah" },
        { id: "mt3-l-27", number: 27, tag: "matching-features", kind: "choice", prompt: "Already checked the permission requirements", options: [{ value: "leah", label: "Leah" }, { value: "marcus", label: "Marcus" }, { value: "both", label: "Both" }], correct: "marcus" },
        { id: "mt3-l-28", number: 28, tag: "matching-features", kind: "choice", prompt: "Will draft the research question", options: [{ value: "leah", label: "Leah" }, { value: "marcus", label: "Marcus" }, { value: "both", label: "Both" }], correct: "marcus" },
        { id: "mt3-l-29", number: 29, tag: "matching-features", kind: "choice", prompt: "Will prepare the equipment list", options: [{ value: "leah", label: "Leah" }, { value: "marcus", label: "Marcus" }, { value: "both", label: "Both" }], correct: "leah" },
        { id: "mt3-l-30", number: 30, tag: "short-answer", kind: "text", prompt: "What method from last term might they connect to the project?", correct: ["vegetation cover study", "vegetation cover", "vegetation cover method"] },
      ],
    },
    {
      partNumber: 4,
      title: "A Lecture on the History of Street Lighting",
      context: "You will hear part of a lecture on the history of street lighting.",
      script: `Today I want to trace how cities moved from dark, dangerous streets at night to the brightly lit roads we take for granted today.

Before any form of public lighting, city streets after dark were considered genuinely hazardous, both because of crime and simply because of the risk of falling or getting lost. The earliest organised attempts at street lighting, in seventeenth century Europe, relied on oil lamps, hung outside selected houses or on posts, and lit manually each evening by a hired lamplighter.

The real transformation came with gas lighting in the early nineteenth century. Gas lamps burned far more brightly and consistently than oil, and crucially, they could be connected to a central supply network, meaning one company could light an entire street rather than relying on individual households. London is often credited as an early adopter, with gas street lighting spreading rapidly through the city from around 1807 onward.

Gas lighting, however, still required a lamplighter to light and later extinguish each lamp by hand, a labour-intensive job that employed thousands of people across major cities. This changed with the introduction of electric street lighting toward the end of the nineteenth century, which could, for the first time, be switched on and off centrally, eliminating the need for individual lamplighters almost entirely.

Early electric lighting used arc lamps, which were extremely bright but harsh and prone to flickering, making them more suitable for large public squares than residential streets. The incandescent bulb, and later more efficient designs, gradually made electric lighting practical for everyday streets, and by the mid-twentieth century, gas street lighting had largely disappeared from most major cities.

The most recent major shift has been the move toward LED street lighting, which uses a fraction of the electricity of older sodium or mercury-vapour lamps, while also allowing for dimming during low-traffic hours, a feature increasingly used by cities trying to reduce both energy costs and light pollution.`,
      questions: [
        { id: "mt3-l-31", number: 31, tag: "note-completion", kind: "text", prompt: "Before public lighting, dark streets were risky due to crime and the danger of _______", correct: ["falling", "getting lost", "falling or getting lost"] },
        { id: "mt3-l-32", number: 32, tag: "note-completion", kind: "text", prompt: "Earliest street lamps used _______ and were lit by a lamplighter", correct: ["oil"] },
        { id: "mt3-l-33", number: 33, tag: "note-completion", kind: "text", prompt: "Gas lamps could be connected to a central supply _______", correct: ["network"] },
        { id: "mt3-l-34", number: 34, tag: "note-completion", kind: "text", prompt: "Gas street lighting spread through London from around _______", correct: ["1807"] },
        { id: "mt3-l-35", number: 35, tag: "note-completion", kind: "text", prompt: "Electric lighting removed the need for individual _______", correct: ["lamplighters", "lamplighter"] },
        { id: "mt3-l-36", number: 36, tag: "note-completion", kind: "text", prompt: "Early electric arc lamps were bright but prone to _______", correct: ["flickering"] },
        { id: "mt3-l-37", number: 37, tag: "note-completion", kind: "text", prompt: "Arc lamps suited large public _______ more than residential streets", correct: ["squares"] },
        { id: "mt3-l-38", number: 38, tag: "note-completion", kind: "text", prompt: "Gas lighting had largely disappeared by the mid-_______ century", correct: ["twentieth", "20th"] },
        { id: "mt3-l-39", number: 39, tag: "note-completion", kind: "text", prompt: "LED lighting uses a fraction of the _______ of older lamps", correct: ["electricity"] },
        { id: "mt3-l-40", number: 40, tag: "note-completion", kind: "text", prompt: "LED lamps can be dimmed to reduce costs and light _______", correct: ["pollution"] },
      ],
    },
  ],
};
