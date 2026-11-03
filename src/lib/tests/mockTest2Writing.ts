import { WritingTask } from "../types";

export const mockTest2Writing: { tasks: WritingTask[]; durationMinutes: number } = {
  durationMinutes: 60,
  tasks: [
    {
      taskNumber: 1,
      prompt:
        "The chart below shows average weekly household spending on four categories in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: {
        kind: "bar",
        caption: "Average weekly household spending by category (£), 2000 vs 2020",
        data: [
          { name: "Housing", series: "2000", value: 95 },
          { name: "Food", series: "2000", value: 60 },
          { name: "Transport", series: "2000", value: 45 },
          { name: "Leisure", series: "2000", value: 30 },
          { name: "Housing", series: "2020", value: 160 },
          { name: "Food", series: "2020", value: 85 },
          { name: "Transport", series: "2020", value: 55 },
          { name: "Leisure", series: "2020", value: 70 },
        ],
      },
      minWords: 150,
      suggestedMinutes: 20,
    },
    {
      taskNumber: 2,
      prompt:
        "Some people think governments should invest more in public transport rather than building new roads for cars. To what extent do you agree or disagree? Write at least 250 words.",
      minWords: 250,
      suggestedMinutes: 40,
    },
  ],
};
