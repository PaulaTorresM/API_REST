const app=require('./app');

app.listen(app.get("port"),() =>{
  console.log(`Express server listening on http://localhost:${app.get("port")}`);
});