
export const defaultCategories = [
  {
    id: "c1",
    name: "Sales Dashboard",
    widgets: [
      { id: "w1", name: "Sales Graph", text: "Graph displaying monthly sales data", isDefault: true },
      { id: "w2", name: "Revenue Bar Chart", text: "Bar chart showing revenue per quarter", isDefault: true }
    ]
  },
  {
    id: "c2",
    name: "Marketing Dashboard",
    widgets: [
      { id: "w3", name: "Traffic Sources", text: "Pie chart showing traffic sources", isDefault: true },
      { id: "w4", name: "Conversion Rates", text: "Line chart displaying conversion rates", isDefault: true }
    ]
  },
  {
    id: "c3",
    name: "Finance Dashboard",
    widgets: [
      { id: "w5", name: "Expense Breakdown", text: "Pie chart showing expense categories", isDefault: true },
      { id: "w6", name: "Profit & Loss", text: "Bar chart showing profit and loss over time", isDefault: true }
    ]
  }
];
