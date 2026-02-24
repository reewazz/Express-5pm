import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running....");
});

const products = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product 2",
  },
];

app.get("/riwaj", (req, res) => {
  res.json(products);
});


app.get('/product/:id',(req,res)=>{


    const id = req.params.id
    console.log(req.params.id)

   const newvalue = products.find((item,index)=>(
        item.id == id
    ))

    console.log()
    res.json(newvalue)
})

app.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});
