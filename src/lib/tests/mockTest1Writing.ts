import { WritingTask } from "../types";

export const mockTest1Writing: { tasks: WritingTask[]; durationMinutes: number } = {
  durationMinutes: 60,
  tasks: [
    {
      taskNumber: 1,
      prompt:
        "The chart below shows the percentage of households with access to high-speed internet in four countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: {
        kind: "line",
        caption: "Household high-speed internet access (%), 2000–2020",
        data: [
          { name: "2000", series: "Country A", value: 5 },
          { name: "2005", series: "Country A", value: 35 },
          { name: "2010", series: "Country A", value: 68 },
          { name: "2015", series: "Country A", value: 85 },
          { name: "2020", series: "Country A", value: 94 },
          { name: "2000", series: "Country B", value: 2 },
          { name: "2005", series: "Country B", value: 15 },
          { name: "2010", series: "Country B", value: 40 },
          { name: "2015", series: "Country B", value: 62 },
          { name: "2020", series: "Country B", value: 80 },
          { name: "2000", series: "Country C", value: 1 },
          { name: "2005", series: "Country C", value: 6 },
          { name: "2010", series: "Country C", value: 18 },
          { name: "2015", series: "Country C", value: 37 },
          { name: "2020", series: "Country C", value: 58 },
        ],
      },
      minWords: 150,
      suggestedMinutes: 20,
    },
    {
      taskNumber: 2,
      prompt:
        "Some people believe that unpaid community service should be a compulsory part of high school education, while others think students should be free to choose how they spend their free time. Discuss both views and give your own opinion. Write at least 250 words.",
      minWords: 250,
      suggestedMinutes: 40,
    },
  ],
};
