import MainPage from "./schema.mjs";

const { create, find } = MainPage;

function home(app) {
  app.post("/home/login", async (req, res) => {
    console.log(req.body);
    try {
      const response = await create(req.body);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      res.status(500).send("Data not created");
    }
  });

  app.get("/home/create", async (req, res) => {
    const { email } = req.query;
    console.log(email);
    try {
      const response = await find(email);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      res.status(500).send("Data not found");
    }
  });
}

export default home;
