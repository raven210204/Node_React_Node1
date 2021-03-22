//inisialisasi library
const express = require("express")
const app = express()

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai", pegawai)

//membuat web server dengan port 2000
app.listen(2910, () => {
    console.log("server run on port 2910")
})
