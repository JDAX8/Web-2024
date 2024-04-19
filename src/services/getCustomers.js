const getCustomers = () => {
  const customers = [
    {
        name: "Jeremy Clarke",
        age: 21,
        location: "Seattle",
        gender: "Male",
        income: "$120,000",
        id: crypto.randomUUID()
    },
    {
        name: "Matty Bing",
        age: 25,
        location: "Florida",
        gender: "Female",
        income: "$950,000",
        id: crypto.randomUUID()
    },
    {
        name: "Philip Anderson",
        age: 18,
        location: "New York City",
        gender: "Female",
        income: "$150,000",
        id: crypto.randomUUID()
    },
    {
        name: "John Smith",
        age: 25,
        location: "Philadephia",
        gender: "Male",
        income: "$200,000",
        id: crypto.randomUUID()
    },
    {
        name: "Adam Gilly",
        age: 32,
        location: "Denver",
        gender: "Male",
        income: "$2,200,000",
        id: crypto.randomUUID()
    },
    {
        name: "Erica Edwards",
        age: 25,
        location: "Portland",
        gender: "Female",
        income: "$2,200,000",
        id: crypto.randomUUID()
    },
  ]
  
  return Promise.resolve(customers)
  
}

export default getCustomers