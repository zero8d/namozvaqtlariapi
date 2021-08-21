const express = require("express")
const app = express()
const { default: axios } = require("axios")
const HtmlTableToJson = require("html-table-to-json")
const { parse } = require("node-html-parser")
const regions = require("./regions.json")
const months = require("./months.json")
const port = process.env.PORT
app.use(express.json())

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome our API! <br/> <a href="https://github.com/zero8d/namozvaqtlariapi/">Read API documentation</a></h1>`
  )
})
app.get("/api/monthly/", async (req, res) => {
  let { region, month } = req.body
  month = Number(month)
  if (!region) {
    res.status(403)
    return res.json({ status: "error", message: "Invalid region" })
  }
  if (!month) {
    res.status(403)
    return res.json({ status: "error", message: "Bad request" })
  }
  region = capitalize(region)
  try {
    const respData = await getData(regions[region], month)
    res.send(respData)
  } catch (error) {
    res.status(503)
    res.json(error)
  }
})

app.get("/api/daily/", async (req, res) => {
  let { region, month, day } = req.body
  month = Number(month)
  day = Number(day)
  if (!region) {
    res.status(403)
    return res.json({ status: "error", message: "Invalid region" })
  }
  if (!month || !day) {
    res.status(403)
    return res.json({ status: "Error", message: "Bad request" })
  }
  region = capitalize(region)
  try {
    const readyData = await getData(regions[region], month)
    const respData = readyData.find(date => {
      return date[months[month]] == day
    })

    res.send(respData)
  } catch (err) {
    res.json(err)
  }
})

app.listen(port)

async function getData(region, month) {
  const resData = await axios.get(`https://islom.uz/vaqtlar/${region}/${month}`)
  const parsedD = parse(resData.data)
  const tableHead = parsedD
    .querySelector("thead")
    .toString()
    .replace("thead", "th")
    .replace("thead", "th")
  const tableBody = parsedD
    .querySelector("tbody")
    .toString()
    .replace("12<tr", "<tr")
  const tableString = `<table>${tableHead}${tableBody}</table>`
  const tableObj = HtmlTableToJson.parse(tableString).results[0]
  return tableObj
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
