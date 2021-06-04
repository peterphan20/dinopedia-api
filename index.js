require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { router } = require("./routes/dinoRoutes");

// Create express server
const app = express();
// Declare port for express server, either the server env or 5000
const PORT = process.env.PORT || 5000;

// Middlewares found here
// ======================
app.use(express.json());
// Parses urlencoded bodies
app.use(express.urlencoded({ extended: true }));
// Allows cross origin requests
app.use(cors());

// Express router as middleman for all routing purposes
app.use("/api", router);

// For those who visits the Dinopedia API homepage
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

// Mongoose helps us connect to MongDB
mongoose
	.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Server is connected to the database");
	})
	.catch((err) => console.error(err));

// Attach event listener for db here
const db = mongoose.connection;

// Setting up listening at our server port
app.listen(PORT, () => {
	console.log(`Server is now listening to port ${PORT}`);
});
