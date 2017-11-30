module.exports = (app) => {

    app.get("/work",(req,res) => {
        res.send("work");
    });

}