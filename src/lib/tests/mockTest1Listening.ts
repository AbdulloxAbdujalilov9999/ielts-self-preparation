import { ListeningPart } from "../types";

export const mockTest1Listening: { parts: ListeningPart[]; durationMinutes: number } = {
  durationMinutes: 30,
  parts: [
    {
      partNumber: 1,
      title: "Enrolling in a Photography Course",
      context:
        "You will hear a phone conversation between a caller and a receptionist at the Riverside Community Centre. The caller wants to join a photography course.",
      script: `Receptionist: Good morning, Riverside Community Centre, how can I help you?
Caller: Hi, I saw a poster about your evening photography course and I'd like to sign up.
Receptionist: Great, let me take your details. Can I have your full name, please?
Caller: It's Daniel Petrov. That's P-E-T-R-O-V.
Receptionist: Thanks, Daniel. And a contact phone number?
Caller: Sure, it's 0 7 7 2 4 4 5 1 9 0.
Receptionist: Perfect. The course is called "Photography for Beginners." It runs on Tuesday evenings from six to eight.
Caller: Tuesday, got it. How many weeks does it run for?
Receptionist: It's an eight week course, starting on the third of March.
Caller: And what's the fee?
Receptionist: The full course fee is one hundred and forty five pounds, but that includes use of the studio equipment.
Caller: That sounds reasonable. Do I need to bring my own camera?
Receptionist: Yes, you'll need a digital camera with manual settings — a basic DSLR is fine. It doesn't need to be expensive.
Caller: Okay, I have one of those. Where exactly is the course held?
Receptionist: It's in Room 12, on the second floor of the Arts Building, just behind the main reception.
Caller: Great. Could I get a confirmation email?
Receptionist: Of course, what's your email address?
Caller: It's d dot petrov, all one word, at mailbox dot com.
Receptionist: Got it. One last thing — can you give me the name of someone we can contact in an emergency?
Caller: Yes, my sister, Elena Petrov, she's listed as my emergency contact.
Receptionist: Perfect, that's everything booked in. You'll get a confirmation email within 24 hours.
Caller: Thank you very much.`,
      questions: [
        {
          id: "mt1-l-1",
          number: 1,
          tag: "form-completion",
          kind: "text",
          prompt: "Caller's surname: _______",
          correct: ["petrov"],
        },
        {
          id: "mt1-l-2",
          number: 2,
          tag: "form-completion",
          kind: "text",
          prompt: "Contact phone number: _______",
          correct: ["07724451 90", "0772445190", "07724 45190"],
        },
        {
          id: "mt1-l-3",
          number: 3,
          tag: "form-completion",
          kind: "text",
          prompt: "Course name: Photography for _______",
          correct: ["beginners"],
        },
        {
          id: "mt1-l-4",
          number: 4,
          tag: "form-completion",
          kind: "text",
          prompt: "Day of the week the course runs: _______",
          correct: ["tuesday"],
        },
        {
          id: "mt1-l-5",
          number: 5,
          tag: "form-completion",
          kind: "text",
          prompt: "Length of the course: _______ weeks",
          correct: ["eight", "8"],
        },
        {
          id: "mt1-l-6",
          number: 6,
          tag: "form-completion",
          kind: "text",
          prompt: "Course fee: £_______",
          correct: ["145", "one hundred and forty five", "145.00"],
        },
        {
          id: "mt1-l-7",
          number: 7,
          tag: "form-completion",
          kind: "text",
          prompt: "Equipment the caller must bring: a digital camera with manual _______",
          correct: ["settings"],
        },
        {
          id: "mt1-l-8",
          number: 8,
          tag: "form-completion",
          kind: "text",
          prompt: "Room number: _______",
          correct: ["12", "room 12"],
        },
        {
          id: "mt1-l-9",
          number: 9,
          tag: "form-completion",
          kind: "text",
          prompt: "Location: second floor of the _______ Building",
          correct: ["arts"],
        },
        {
          id: "mt1-l-10",
          number: 10,
          tag: "form-completion",
          kind: "text",
          prompt: "Emergency contact name: _______",
          correct: ["elena petrov", "elena"],
        },
      ],
    },
    {
      partNumber: 2,
      title: "A Tour of the City Arts Centre",
      context:
        "You will hear a guide giving new visitors information about the City Arts Centre.",
      script: `Welcome, everyone, to the City Arts Centre. I'm going to tell you a little about what we offer before you explore on your own.

We opened in 2015 in what used to be an old textile factory, and we've kept a lot of the original brick walls and iron beams — it gives the building real character.

Let's talk about what's on each floor. On the ground floor, you'll find the main gallery, which currently has a photography exhibition, and also the gift shop and the information desk. The first floor is home to the ceramics studio, where you can book a pottery class, and the Centre's small cinema, which shows independent films every weekend. On the second floor we have artist studios that are rented out to local painters and sculptors — these aren't usually open to the public, but we do open them during our annual Open Studios weekend in June. Finally, the top floor, the third floor, is our café and rooftop terrace, which has a lovely view over the river.

Now, a few practical points. Entry to the main gallery is free, but special exhibitions, like the one we have at the moment, cost six pounds for adults, though it's free for anyone under eighteen. If you want to join a pottery class, I'd recommend booking at least a week in advance, because they fill up quickly, especially at weekends. The cinema tickets are seven pounds fifty, but we do student discounts with ID.

If you're interested in buying local art, the best time to visit is during the Open Studios weekend, because that's when you can meet the artists directly and buy work without the usual gallery fee being added. We also run free guided tours every day at eleven and at two, which last about forty minutes.

One more thing — the café on the top floor is run independently, not by the Centre, so if you have any feedback about the food, that should go to them directly rather than to our front desk.`,
      questions: [
        {
          id: "mt1-l-11",
          number: 11,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "The City Arts Centre building was originally used as a",
          options: [
            { value: "a", label: "warehouse" },
            { value: "b", label: "textile factory" },
            { value: "c", label: "railway station" },
          ],
          correct: "b",
        },
        {
          id: "mt1-l-12",
          number: 12,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "Entry to the special photography exhibition for adults costs",
          options: [
            { value: "a", label: "free" },
            { value: "b", label: "£6" },
            { value: "c", label: "£7.50" },
          ],
          correct: "b",
        },
        {
          id: "mt1-l-13",
          number: 13,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "Visitors are advised to book pottery classes",
          options: [
            { value: "a", label: "on the same day" },
            { value: "b", label: "at least a week ahead" },
            { value: "c", label: "only on weekends" },
          ],
          correct: "b",
        },
        {
          id: "mt1-l-14",
          number: 14,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "The best time to buy art directly from local artists is during",
          options: [
            { value: "a", label: "the weekend film screenings" },
            { value: "b", label: "the free guided tours" },
            { value: "c", label: "the Open Studios weekend" },
          ],
          correct: "c",
        },
        {
          id: "mt1-l-15",
          number: 15,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "Feedback about the café food should be given to",
          options: [
            { value: "a", label: "the Centre's front desk" },
            { value: "b", label: "the café itself" },
            { value: "c", label: "the information desk" },
          ],
          correct: "b",
        },
        {
          id: "mt1-l-16",
          number: 16,
          tag: "matching-features",
          kind: "choice",
          prompt: "Main gallery and gift shop",
          options: [
            { value: "ground", label: "Ground floor" },
            { value: "first", label: "First floor" },
            { value: "second", label: "Second floor" },
            { value: "third", label: "Third floor" },
          ],
          correct: "ground",
        },
        {
          id: "mt1-l-17",
          number: 17,
          tag: "matching-features",
          kind: "choice",
          prompt: "Ceramics studio and cinema",
          options: [
            { value: "ground", label: "Ground floor" },
            { value: "first", label: "First floor" },
            { value: "second", label: "Second floor" },
            { value: "third", label: "Third floor" },
          ],
          correct: "first",
        },
        {
          id: "mt1-l-18",
          number: 18,
          tag: "matching-features",
          kind: "choice",
          prompt: "Private artist studios",
          options: [
            { value: "ground", label: "Ground floor" },
            { value: "first", label: "First floor" },
            { value: "second", label: "Second floor" },
            { value: "third", label: "Third floor" },
          ],
          correct: "second",
        },
        {
          id: "mt1-l-19",
          number: 19,
          tag: "matching-features",
          kind: "choice",
          prompt: "Café and rooftop terrace",
          options: [
            { value: "ground", label: "Ground floor" },
            { value: "first", label: "First floor" },
            { value: "second", label: "Second floor" },
            { value: "third", label: "Third floor" },
          ],
          correct: "third",
        },
        {
          id: "mt1-l-20",
          number: 20,
          tag: "short-answer",
          kind: "text",
          prompt: "How long do the free guided tours last? (in minutes)",
          correct: ["40", "forty"],
        },
      ],
    },
    {
      partNumber: 3,
      title: "Discussing a Research Project",
      context:
        "You will hear two students, Maya and Tom, discussing a research project for their environmental science course.",
      script: `Maya: So, our project is on urban heat islands — basically why cities are hotter than the countryside around them. Have you started the reading?

Tom: A bit. I thought it was mainly about traffic and pollution, but it looks like building materials matter even more.

Maya: Right, dark surfaces like asphalt and concrete absorb heat during the day and release it slowly at night. That's actually the biggest factor in most of the studies I found.

Tom: Interesting — I'd assumed cars and air conditioners were the main cause.

Maya: They do contribute, but it's more like a secondary effect. What really surprised me was how much green space matters. Even small parks can lower the surrounding temperature by a couple of degrees.

Tom: So for our proposal, should we focus on solutions, like green roofs, or more on explaining the causes?

Maya: I think we should spend more time on causes, because our tutor said last week that too many groups jump straight to solutions without really explaining the mechanism first.

Tom: Fair enough. I disagree a little, though — I think a strong solutions section is what will make our project stand out, since most groups will cover the causes in a similar way.

Maya: That's true. Maybe we do both, but keep the causes section tighter and let the solutions section be more detailed and original.

Tom: Sounds good. Who should we interview for our case study? I was thinking a city planner.

Maya: A city planner would be good, but I actually think a resident who's lived through several heatwaves would give us a more personal angle.

Tom: We could do both if we have time. I'll draft an interview request this week.

Maya: Great. I'll start the literature review and send you a draft by Thursday.

Tom: Perfect. Let's check in again on Friday before the proposal is due Monday.`,
      questions: [
        {
          id: "mt1-l-21",
          number: 21,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "According to the reading Maya did, the biggest cause of urban heat islands is",
          options: [
            { value: "a", label: "traffic emissions" },
            { value: "b", label: "building materials" },
            { value: "c", label: "air conditioning use" },
          ],
          correct: "b",
        },
        {
          id: "mt1-l-22",
          number: 22,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "Tom originally assumed the main cause was",
          options: [
            { value: "a", label: "cars and air conditioners" },
            { value: "b", label: "a lack of green space" },
            { value: "c", label: "dark building surfaces" },
          ],
          correct: "a",
        },
        {
          id: "mt1-l-23",
          number: 23,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "Their tutor advised groups to",
          options: [
            { value: "a", label: "focus mainly on solutions" },
            { value: "b", label: "explain the causes thoroughly first" },
            { value: "c", label: "avoid discussing causes" },
          ],
          correct: "b",
        },
        {
          id: "mt1-l-24",
          number: 24,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "Tom thinks their project will stand out because of",
          options: [
            { value: "a", label: "a detailed, original solutions section" },
            { value: "b", label: "a long causes section" },
            { value: "c", label: "interviewing a city planner" },
          ],
          correct: "a",
        },
        {
          id: "mt1-l-25",
          number: 25,
          tag: "multiple-choice",
          kind: "choice",
          prompt: "They finally agree to try to interview",
          options: [
            { value: "a", label: "only a city planner" },
            { value: "b", label: "only a resident" },
            { value: "c", label: "both a planner and a resident" },
          ],
          correct: "c",
        },
        {
          id: "mt1-l-26",
          number: 26,
          tag: "matching-features",
          kind: "choice",
          prompt: "Wants to prioritise explaining causes over solutions",
          options: [
            { value: "maya", label: "Maya" },
            { value: "tom", label: "Tom" },
            { value: "both", label: "Both" },
          ],
          correct: "maya",
        },
        {
          id: "mt1-l-27",
          number: 27,
          tag: "matching-features",
          kind: "choice",
          prompt: "Believes a strong solutions section will make the project stand out",
          options: [
            { value: "maya", label: "Maya" },
            { value: "tom", label: "Tom" },
            { value: "both", label: "Both" },
          ],
          correct: "tom",
        },
        {
          id: "mt1-l-28",
          number: 28,
          tag: "matching-features",
          kind: "choice",
          prompt: "Will write the literature review",
          options: [
            { value: "maya", label: "Maya" },
            { value: "tom", label: "Tom" },
            { value: "both", label: "Both" },
          ],
          correct: "maya",
        },
        {
          id: "mt1-l-29",
          number: 29,
          tag: "matching-features",
          kind: "choice",
          prompt: "Will contact a potential interviewee this week",
          options: [
            { value: "maya", label: "Maya" },
            { value: "tom", label: "Tom" },
            { value: "both", label: "Both" },
          ],
          correct: "tom",
        },
        {
          id: "mt1-l-30",
          number: 30,
          tag: "short-answer",
          kind: "text",
          prompt: "On what day is their proposal due?",
          correct: ["monday"],
        },
      ],
    },
    {
      partNumber: 4,
      title: "A Lecture on Urban Beekeeping",
      context: "You will hear part of a lecture on the rise of urban beekeeping.",
      script: `Today I want to talk about a trend that's grown quickly over the past two decades: urban beekeeping — keeping bees not on farms, but on the rooftops and balconies of cities.

It might seem surprising, but studies have shown that honeybee colonies often survive better in cities than in the countryside. One major reason is diversity of food. Rural areas are increasingly dominated by single-crop farming, which gives bees access to only one type of flower for weeks at a time. Cities, by contrast, are full of parks, gardens, and even window boxes with a wide variety of flowering plants, giving bees a more balanced diet across the whole season.

A second reason is reduced pesticide exposure. Agricultural land is often treated with chemicals that can weaken or kill bee colonies, while city gardens are, on average, treated far less intensively.

Of course, urban beekeeping isn't without challenges. The first is space — hives need to be placed somewhere secure, and that usually means negotiating with building owners for access to a roof. The second challenge is neighbour relations; even though honeybees are generally not aggressive, the fear of being stung means beekeepers often need to communicate clearly with people living nearby before installing hives. The third challenge is water — bees need a nearby source of fresh water, and in dense urban areas this sometimes has to be provided artificially, for example with a shallow dish on the same rooftop.

Despite these challenges, many cities now actively encourage the practice. Some local governments offer small grants to cover the cost of equipment, and a number of businesses have installed hives on their roofs partly for the environmental benefit and partly as a marketing tool, since customers tend to view it positively.

Looking ahead, researchers are now studying whether urban honey has a distinctive flavour profile shaped by the particular mix of city plants, which could eventually make city honey a specialty product in its own right.`,
      questions: [
        {
          id: "mt1-l-31",
          number: 31,
          tag: "note-completion",
          kind: "text",
          prompt: "Reason 1 bees do well in cities: greater _______ of food sources",
          correct: ["diversity"],
        },
        {
          id: "mt1-l-32",
          number: 32,
          tag: "note-completion",
          kind: "text",
          prompt: "Rural farms often grow only one type of _______",
          correct: ["crop", "flower"],
        },
        {
          id: "mt1-l-33",
          number: 33,
          tag: "note-completion",
          kind: "text",
          prompt: "Reason 2: lower exposure to _______",
          correct: ["pesticides", "chemicals"],
        },
        {
          id: "mt1-l-34",
          number: 34,
          tag: "note-completion",
          kind: "text",
          prompt: "Challenge 1: finding secure _______ for hives",
          correct: ["space"],
        },
        {
          id: "mt1-l-35",
          number: 35,
          tag: "note-completion",
          kind: "text",
          prompt: "Challenge 2: managing relations with _______",
          correct: ["neighbours", "neighbors"],
        },
        {
          id: "mt1-l-36",
          number: 36,
          tag: "note-completion",
          kind: "text",
          prompt: "Challenge 3: providing a nearby source of fresh _______",
          correct: ["water"],
        },
        {
          id: "mt1-l-37",
          number: 37,
          tag: "note-completion",
          kind: "text",
          prompt: "Some local governments offer small _______ for equipment costs",
          correct: ["grants"],
        },
        {
          id: "mt1-l-38",
          number: 38,
          tag: "note-completion",
          kind: "text",
          prompt: "Businesses install hives partly as a _______ tool",
          correct: ["marketing"],
        },
        {
          id: "mt1-l-39",
          number: 39,
          tag: "note-completion",
          kind: "text",
          prompt: "Researchers are studying the distinctive _______ of urban honey",
          correct: ["flavour", "flavor", "flavour profile", "taste"],
        },
        {
          id: "mt1-l-40",
          number: 40,
          tag: "note-completion",
          kind: "text",
          prompt: "This could make city honey a _______ product",
          correct: ["specialty", "speciality"],
        },
      ],
    },
  ],
};
