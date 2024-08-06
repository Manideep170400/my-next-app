import MainPage from "./schema.mjs";

const [init] = MainPage();

function home(app) {
  app.post("/home/login", async (req, res) => {
    console.log(req.body);
    try {
      const response = await init.create(req.body);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      console.log("data not created");
    }
  });
  app.get("/home/create", async (req, res) => {
    console.log(req.body);
    try {
      const response = await init.find(req.body.email);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      console.log("data not found");
    }
  });
}

export default home;
