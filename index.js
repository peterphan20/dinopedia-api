require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./routes/dinoRoutes");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

mongoose
	.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Server is connected to the database");
	})
	.catch((err) => console.error(err));

const db = mongoose.connection;

app.get("/", (req, res) => {
	res.status(200).send(`
    <h1>Hello from Dinopedia API ^.^</h1>
    <pre>
            ______
          &lt; Moo! &gt;
            ------
                  \\   ^__^
                    \\ (oo)\\_______
                      (__)\\       )\\/\\
                          ||----w |
                          ||     ||
    </pre>
  `);
});
app.listen(PORT, () => {
	console.log(`Server is now listening to port ${PORT}`);
});
