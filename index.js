const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.end(`
  <div>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
    <h2>Home page</h2>
  </div>
  `);
});

app.get("/about", (req, res) => {
  res.end(`<div><h2>About</h2></div>`);
});

app.listen(PORT, () => {
  console.log("server has been started!");
});
