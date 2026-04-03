
const filterBy = (prop) => (value) => (data) =>
  data.filter((item) => item[prop] === value);


const users = [
  { name: "Alice", status: "active", country: "USA", membership: "free" },
  { name: "Bob", status: "inactive", country: "Canada", membership: "premium" },
  { name: "Charlie", status: "active", country: "USA", membership: "premium" },
  { name: "Diana", status: "active", country: "UK", membership: "free" },
  { name: "Ethan", status: "inactive", country: "USA", membership: "free" },
];


const filterByStatus = filterBy("status");

const findActiveUsers = filterByStatus("active");
const findInactiveUsers = filterByStatus("inactive");

const findUsersFromUSA = filterBy("country")("USA");
const findPremiumMembers = filterBy("membership")("premium");




console.log("Active Users:");
console.log(findActiveUsers(users));


console.log("\nUsers from USA:");
console.log(findUsersFromUSA(users));


console.log("\nPremium Members:");
console.log(findPremiumMembers(users));

