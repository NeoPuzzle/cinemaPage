require("dotenv").config();
const { PORT } = process.env
const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then((res) => {
app.listen(PORT, () => {
    console.log(`Servidor escuchando Port: ${PORT}`);
});
})
.catch((err) => {
    throw new Error(err);
}
);