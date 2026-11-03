import { ListeningPart } from "../types";

export const mockTest2Listening: { parts: ListeningPart[]; durationMinutes: number } = {
  durationMinutes: 30,
  parts: [
    {
      partNumber: 1,
      title: "Booking a Conference Room",
      context:
        "You will hear a phone conversation between a caller and a staff member at the Lakeside Conference Centre.",
      script: `Staff: Lakeside Conference Centre, good morning.
Caller: Hello, I'd like to book a room for a small company training day.
Staff: Sure, can I take your name first?
Caller: It's Priya Chandran. That's C-H-A-N-D-R-A-N.
Staff: Thanks, Priya. How many people will be attending?
Caller: There will be eighteen of us.
Staff: In that case I'd recommend the Birchwood Room — it holds up to twenty five.
Caller: That sounds good. What's the hire cost?
Staff: It's ninety five pounds for a full day, including tea and coffee.
Caller: Great. Is a projector included?
Staff: Yes, the room has a built-in projector and screen at no extra cost, but if you need a microphone that's an additional fifteen pounds.
Caller: We won't need one, thanks. What date were you thinking of? I was hoping for the fourteenth of April.
Staff: Let me check... yes, that's available.
Caller: Perfect. And what time can we access the room?
Staff: You can come in from eight in the morning, and the room needs to be cleared by six in the evening.
Caller: That works well. Is parking available on site?
Staff: Yes, there's a car park at the back, accessed from Mill Street.
Caller: Great, thank you. Can I pay a deposit now?
Staff: Yes, we require a fifty pound deposit to confirm the booking.
Caller: No problem, I'll pay that now by card.`,
      questions: [
        { id: "mt2-l-1", number: 1, tag: "form-completion", kind: "text", prompt: "Caller's surname: _______", correct: ["chandran"] },
        { id: "mt2-l-2", number: 2, tag: "form-completion", kind: "text", prompt: "Number of attendees: _______", correct: ["18", "eighteen"] },
        { id: "mt2-l-3", number: 3, tag: "form-completion", kind: "text", prompt: "Room recommended: the _______ Room", correct: ["birchwood"] },
        { id: "mt2-l-4", number: 4, tag: "form-completion", kind: "text", prompt: "Full day hire cost: £_______", correct: ["95", "ninety five"] },
        { id: "mt2-l-5", number: 5, tag: "form-completion", kind: "text", prompt: "Extra cost for a microphone: £_______", correct: ["15", "fifteen"] },
        { id: "mt2-l-6", number: 6, tag: "form-completion", kind: "text", prompt: "Booking date: the _______ of April", correct: ["14th", "fourteenth", "14"] },
        { id: "mt2-l-7", number: 7, tag: "form-completion", kind: "text", prompt: "Room must be cleared by: _______ in the evening", correct: ["6pm", "6 pm", "six"] },
        { id: "mt2-l-8", number: 8, tag: "form-completion", kind: "text", prompt: "Car park accessed from: _______ Street", correct: ["mill"] },
        { id: "mt2-l-9", number: 9, tag: "form-completion", kind: "text", prompt: "Deposit required: £_______", correct: ["50", "fifty"] },
        { id: "mt2-l-10", number: 10, tag: "multiple-choice", kind: "choice", prompt: "What is included free with the Birchwood Room?", options: [{ value: "a", label: "A microphone" }, { value: "b", label: "A projector and screen" }, { value: "c", label: "Lunch for all attendees" }], correct: "b" },
      ],
    },
    {
      partNumber: 2,
      title: "Orientation Tour of the Grand Library",
      context: "You will hear a librarian giving new members an orientation tour of the Grand Library.",
      script: `Good morning, everyone, and welcome to the Grand Library. Before you start exploring, let me quickly explain how the building is organised.

The ground floor holds the general lending collection — fiction and non-fiction books you can borrow — along with the main issue desk and a small café. The first floor is dedicated to reference material and local history archives; books up here can't be borrowed, but you're welcome to photocopy or photograph pages for personal use. The second floor is our quiet study floor, with individual desks and no group work allowed, and the third floor houses the children's section along with a dedicated story-time room.

A few practical points. Membership itself is free, but borrowing more than six items at once requires an upgraded membership, which costs twelve pounds a year. Returning items late incurs a fine of ten pence per item per day, though there's no fine at all for children's books. If you want to reserve a book that's currently out on loan, you can do that for free at the issue desk or through our website.

We also run free computer classes for beginners every Wednesday afternoon, and a more advanced digital skills session on the first Friday of each month. Both need to be booked in advance, as spaces are limited to ten people per session.

Finally, if you ever need a quiet room for a job interview or an online meeting, we have two small private booths on the first floor that can be booked for up to one hour at a time, completely free of charge.`,
      questions: [
        { id: "mt2-l-11", number: 11, tag: "matching-features", kind: "choice", prompt: "General lending collection and café", options: [{ value: "ground", label: "Ground floor" }, { value: "first", label: "First floor" }, { value: "second", label: "Second floor" }, { value: "third", label: "Third floor" }], correct: "ground" },
        { id: "mt2-l-12", number: 12, tag: "matching-features", kind: "choice", prompt: "Reference material and local history archives", options: [{ value: "ground", label: "Ground floor" }, { value: "first", label: "First floor" }, { value: "second", label: "Second floor" }, { value: "third", label: "Third floor" }], correct: "first" },
        { id: "mt2-l-13", number: 13, tag: "matching-features", kind: "choice", prompt: "Individual quiet study desks", options: [{ value: "ground", label: "Ground floor" }, { value: "first", label: "First floor" }, { value: "second", label: "Second floor" }, { value: "third", label: "Third floor" }], correct: "second" },
        { id: "mt2-l-14", number: 14, tag: "matching-features", kind: "choice", prompt: "Children's section and story-time room", options: [{ value: "ground", label: "Ground floor" }, { value: "first", label: "First floor" }, { value: "second", label: "Second floor" }, { value: "third", label: "Third floor" }], correct: "third" },
        { id: "mt2-l-15", number: 15, tag: "multiple-choice", kind: "choice", prompt: "Borrowing more than six items at once requires", options: [{ value: "a", label: "a late fee" }, { value: "b", label: "an upgraded membership" }, { value: "c", label: "a reference pass" }], correct: "b" },
        { id: "mt2-l-16", number: 16, tag: "multiple-choice", kind: "choice", prompt: "Late fines do not apply to", options: [{ value: "a", label: "reference books" }, { value: "b", label: "children's books" }, { value: "c", label: "reserved books" }], correct: "b" },
        { id: "mt2-l-17", number: 17, tag: "multiple-choice", kind: "choice", prompt: "Reserving a book that is out on loan costs", options: [{ value: "a", label: "ten pence" }, { value: "b", label: "twelve pounds" }, { value: "c", label: "nothing" }], correct: "c" },
        { id: "mt2-l-18", number: 18, tag: "multiple-choice", kind: "choice", prompt: "The advanced digital skills session runs", options: [{ value: "a", label: "every Wednesday afternoon" }, { value: "b", label: "on the first Friday of each month" }, { value: "c", label: "every weekend" }], correct: "b" },
        { id: "mt2-l-19", number: 19, tag: "short-answer", kind: "text", prompt: "How many people can book a computer class session?", correct: ["10", "ten"] },
        { id: "mt2-l-20", number: 20, tag: "short-answer", kind: "text", prompt: "For how long can a private booth be booked at a time?", correct: ["1 hour", "one hour", "an hour", "up to one hour"] },
      ],
    },
    {
      partNumber: 3,
      title: "Choosing an Internship",
      context: "You will hear two students, Ben and Clara, discussing internship options for the summer.",
      script: `Ben: So, have you decided between the marketing internship and the data analysis one yet?

Clara: Not completely. The marketing role is with a bigger company, which looks great on paper, but I'd probably just be doing small admin tasks most of the time.

Ben: Whereas the data role?

Clara: It's a smaller company, but the supervisor told me I'd actually be working on a real project from day one, analysing customer feedback data.

Ben: That sounds more useful for your CV, honestly. I chose my internship mainly based on location, which in hindsight wasn't the smartest approach.

Clara: Why, what happened?

Ben: It's a great company, but I'm barely learning anything new — a lot of it overlaps with what we already covered in second year.

Clara: That's a shame. I think I'm leaning toward the data role now, even though the company's smaller and I was initially worried that would look less impressive.

Ben: I wouldn't worry about that. Employers care more about what you actually did than the size of the company.

Clara: True. There's also a stipend difference — the marketing role pays a bit more.

Ben: How much more?

Clara: About fifty pounds a week more, which isn't nothing, but I don't think it should be the deciding factor.

Ben: Agreed. If you want, I can introduce you to someone who did a similar data internship last year — she could tell you what to expect.

Clara: That would be really helpful, thank you. I'll email you her contact details? Or could you ask her directly first?

Ben: I'll message her today and ask if it's okay to pass on her email.

Clara: Perfect, thanks. I think I'll make my final decision by the end of the week.`,
      questions: [
        { id: "mt2-l-21", number: 21, tag: "multiple-choice", kind: "choice", prompt: "At the marketing company, Clara would mostly do", options: [{ value: "a", label: "a real data project" }, { value: "b", label: "small admin tasks" }, { value: "c", label: "customer interviews" }], correct: "b" },
        { id: "mt2-l-22", number: 22, tag: "multiple-choice", kind: "choice", prompt: "Ben chose his internship mainly based on", options: [{ value: "a", label: "the pay" }, { value: "b", label: "the company's reputation" }, { value: "c", label: "its location" }], correct: "c" },
        { id: "mt2-l-23", number: 23, tag: "multiple-choice", kind: "choice", prompt: "Ben's main complaint about his internship is that", options: [{ value: "a", label: "it pays too little" }, { value: "b", label: "it overlaps with what he already studied" }, { value: "c", label: "it is too far away" }], correct: "b" },
        { id: "mt2-l-24", number: 24, tag: "multiple-choice", kind: "choice", prompt: "Clara was initially worried that the data internship", options: [{ value: "a", label: "would look less impressive" }, { value: "b", label: "paid too little" }, { value: "c", label: "required too much travel" }], correct: "a" },
        { id: "mt2-l-25", number: 25, tag: "multiple-choice", kind: "choice", prompt: "The marketing internship pays approximately how much more per week?", options: [{ value: "a", label: "£15" }, { value: "b", label: "£50" }, { value: "c", label: "£150" }], correct: "b" },
        { id: "mt2-l-26", number: 26, tag: "matching-features", kind: "choice", prompt: "Believes employers value experience over company size", options: [{ value: "ben", label: "Ben" }, { value: "clara", label: "Clara" }, { value: "both", label: "Both" }], correct: "ben" },
        { id: "mt2-l-27", number: 27, tag: "matching-features", kind: "choice", prompt: "Regrets how they chose their own internship", options: [{ value: "ben", label: "Ben" }, { value: "clara", label: "Clara" }, { value: "both", label: "Both" }], correct: "ben" },
        { id: "mt2-l-28", number: 28, tag: "matching-features", kind: "choice", prompt: "Is now leaning toward the data analysis role", options: [{ value: "ben", label: "Ben" }, { value: "clara", label: "Clara" }, { value: "both", label: "Both" }], correct: "clara" },
        { id: "mt2-l-29", number: 29, tag: "matching-features", kind: "choice", prompt: "Will contact a former intern today", options: [{ value: "ben", label: "Ben" }, { value: "clara", label: "Clara" }, { value: "both", label: "Both" }], correct: "ben" },
        { id: "mt2-l-30", number: 30, tag: "short-answer", kind: "text", prompt: "By when does Clara plan to make her final decision?", correct: ["end of the week", "by the end of the week", "the end of the week"] },
      ],
    },
    {
      partNumber: 4,
      title: "A Lecture on Vertical Farming",
      context: "You will hear part of a lecture about the growth of vertical farming.",
      script: `This lecture looks at vertical farming — growing crops in stacked layers indoors, usually under artificial light, rather than in open fields.

The idea has existed for decades, but it's only in the last ten years or so that falling costs for LED lighting have made it commercially realistic. Unlike sunlight, LED lighting can be precisely tuned to the wavelengths each specific crop needs, which can actually speed up growth compared to a traditional farm.

One major advantage is land use. A vertical farm can produce many times more food per square metre than an open field, because it stacks multiple growing layers on top of each other, sometimes ten or more layers high. This makes vertical farming particularly attractive in cities, where land is expensive and farmland is simply not available.

Water use is another advantage. Most vertical farms use a technique called hydroponics, where plant roots sit in a nutrient-rich water solution rather than soil. Because the water is recirculated rather than draining away, vertical farms can use up to ninety percent less water than conventional agriculture.

However, there are significant challenges too. The first is energy cost. Running LED lights around the clock uses a large amount of electricity, and in regions where electricity is expensive, this can make vertical farming unprofitable compared to traditional farming.

A second challenge is crop choice. Vertical farming currently works well for leafy greens like lettuce and herbs, which are small and fast-growing, but it's far less practical for staple crops like wheat or rice, which need much more space and sunlight-equivalent energy per calorie produced.

A third issue is startup cost. Building a vertical farm requires a significant upfront investment in lighting, climate control, and automation systems, which means it can take several years before a new facility becomes profitable.

Looking ahead, researchers are focused on reducing energy costs through more efficient lighting and on expanding the range of crops that can be grown profitably indoors.`,
      questions: [
        { id: "mt2-l-31", number: 31, tag: "note-completion", kind: "text", prompt: "Falling costs of _______ lighting made vertical farming realistic", correct: ["led"] },
        { id: "mt2-l-32", number: 32, tag: "note-completion", kind: "text", prompt: "LED light can be tuned to the exact _______ each crop needs", correct: ["wavelengths", "wavelength"] },
        { id: "mt2-l-33", number: 33, tag: "note-completion", kind: "text", prompt: "Advantage 1: much higher food output per square _______", correct: ["metre", "meter"] },
        { id: "mt2-l-34", number: 34, tag: "note-completion", kind: "text", prompt: "Most vertical farms use a technique called _______", correct: ["hydroponics"] },
        { id: "mt2-l-35", number: 35, tag: "note-completion", kind: "text", prompt: "Water is recirculated, using up to 90% less _______", correct: ["water"] },
        { id: "mt2-l-36", number: 36, tag: "note-completion", kind: "text", prompt: "Challenge 1: high _______ cost from running lights continuously", correct: ["energy", "electricity"] },
        { id: "mt2-l-37", number: 37, tag: "note-completion", kind: "text", prompt: "Challenge 2: works well for leafy greens but not for _______ crops like wheat", correct: ["staple"] },
        { id: "mt2-l-38", number: 38, tag: "note-completion", kind: "text", prompt: "Challenge 3: a large _______ investment is needed to start", correct: ["upfront", "startup"] },
        { id: "mt2-l-39", number: 39, tag: "note-completion", kind: "text", prompt: "New facilities can take several years to become _______", correct: ["profitable"] },
        { id: "mt2-l-40", number: 40, tag: "note-completion", kind: "text", prompt: "Researchers are working to expand the range of _______ that can be grown indoors", correct: ["crops"] },
      ],
    },
  ],
};
