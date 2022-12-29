const app = require("../index");
const cors = require("cors");
const corsOptions = {
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(express.json());

app.use(cors(corsOptions))
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server listening on port 3000');
});

