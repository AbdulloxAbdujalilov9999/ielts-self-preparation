import { WritingTask } from "../types";

export const mockTest3Writing: { tasks: WritingTask[]; durationMinutes: number } = {
  durationMinutes: 60,
  tasks: [
    {
      taskNumber: 1,
      prompt:
        "The chart below shows the main sources of renewable energy production in five countries in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: {
        kind: "bar",
        caption: "Share of renewable energy production by source, 2023 (%)",
        data: [
          { name: "Country A", value: 62 },
          { name: "Country B", value: 48 },
          { name: "Country C", value: 35 },
          { name: "Country D", value: 27 },
          { name: "Country E", value: 18 },
        ],
      },
      minWords: 150,
      suggestedMinutes: 20,
    },
    {
      taskNumber: 2,
      prompt:
        "Some people believe that university education should be free for all students, while others think students should pay for their own studies. Discuss both views and give your own opinion. Write at least 250 words.",
      minWords: 250,
      suggestedMinutes: 40,
    },
  ],
};
