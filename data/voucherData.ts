export const data = {
  vouchers: {
    active: [
      {
        id: 1,
        logo: require("../assets/images/efficient-towing.png"),
        merchant: "Efficient Towing",
        title: "1 Car Wash",
        expiry: "28 Apr 2024",
      },
      {
        id: 2,
        logo: require("../assets/images/orozocos.png"),
        merchant: "Orozco's",
        title: "1 Free Car Inspection or Cleaning Service",
        expiry: "28 Apr 2024",
      },
    ],
    past: [
      {
        id: 3,
        logo: require("../assets/images/orozocos.png"),
        merchant: "Orozoco's",
        title: "1 Free Car Inspection or Cleaning Service",
        redeemedAt: "22 Apr 2024",
      },
    ],
  },

  transactions: [
    {
      id: 1,
      logo: require("../assets/images/grab.jpg"),
      title: "Grab Taxi Ride",
      date: "10 Mar 2024",
      time: "1:15 pm",
      amount: "$22.50",
      type: "expense",
    },
    {
      id: 2,
      logo: require("../assets/images/food-panda.jpg"),
      title: "Food Panda",
      date: "10 Mar 2024",
      time: "1:15 pm",
      amount: "$18.44",
      type: "expense",
    },
    {
      id: 3,
      logo: require("../assets/images/arrow-circle.png"),
      title: "Cash Received!",
      date: "10 Mar 2024",
      time: "1:15 pm",
      amount: "$125",
      type: "income",
    },
    {
      id: 4,
      logo: require("../assets/images/city-mart.png"),
      title: "City Mart",
      date: "09 Mar 2024",
      time: "1:15 pm",
      amount: "$12.64",
      type: "expense",
    },
    {
      id: 5,
      logo: require("../assets/images/grab.jpg"),
      title: "Grab Food",
      date: "08 Mar 2024",
      time: "1:15 pm",
      amount: "$20.50",
      type: "expense",
    },
  ],
};