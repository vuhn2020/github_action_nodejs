import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 5000;
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/tutorial', async (req, res) => {
  try {
    const tutorials = await prisma.tutorial.findMany({
      where: { published: true }
    })
    res.json(tutorials)
  } catch {
    res.status(404).send("Oh uh, something went wrong");
  }
})

//routers and controllers
app.post('/tutorial', async (req, res) => {
  const { title, description } = req.body
  try {
    const tutorial = await prisma.tutorial.create({
      data: {
        title,
        description,
        published: true
      },
    })
    res.json(tutorial)
  } catch {
    res.status(404).send("Oh uh, something went wrong");
  }

})

app.put('/tutorial/:id', async (req, res) => {
  const { title, description, published } = req.body
  const { id } = req.params
  try {
    const tutorial = await prisma.tutorial.update({
      where: { id: Number(id) },
      data: {
        title: title,
        description: description,
        published: published,
      },
    })
    res.json(tutorial)
  } catch {
    res.status(404).send("Oh uh, something went wrong");
  }
})

app.delete('/tutorial/:id', async (req, res) => {
  const { id } = req.params
  try {
    const tutorial = await prisma.tutorial.delete({
      where: {
        id: Number(id)
      },
    })
    res.json(tutorial)
  } catch {
    res.status(404).send("Oh uh, something went wrong");
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})