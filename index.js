const { evalReasonCode } = require("./evalReasonCode");
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
 app.use(
    cors({
      credentials: true,
      origin: [
        "http://localhost:3000",
        "https://memcode.leoancap.now.sh",
        "https://memcode.now.sh",
      ],
    }),
  )

app.set("port", process.env.PORT || 1234);

app.post("*", (req, res) => {
  const { code, solution, tests, isTesting } = req.body;
  console.log("here");
  const results = evalReasonCode(isTesting ? code : solution, solution, tests);
  res.writeHeader(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(results));
});

app.listen(app.get("port"), () => {
  console.log("listening on " + app.get("port"));
});
