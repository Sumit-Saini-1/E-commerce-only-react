<<<<<<< HEAD
const express= require("express");
const distributorRoute=express();
const {logIn,toRecieve,received,toShip,shipped,createDeliveryPerson}=require("../controllers/distributorController");
const {isDistributor}=require("../auth");


distributorRoute.post("/login",logIn);
distributorRoute.get("/toReceive",isDistributor,toRecieve);
distributorRoute.get("/toShip",isDistributor,toShip);
distributorRoute.post("/received",isDistributor,received);
distributorRoute.post("/shipped",isDistributor,shipped);
distributorRoute.post("/createDeliveryPerson",isDistributor,createDeliveryPerson);

distributorRoute.get("/logout", function (req, res) {
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.redirect("/distributor/login");
});

module.exports={
    distributorRoute
=======
const express= require("express");
const distributorRoute=express();
const {logIn,toRecieve,received,toShip,shipped,createDeliveryPerson}=require("../controllers/distributorController");
const {isDistributor}=require("../auth");


distributorRoute.post("/login",logIn);
distributorRoute.get("/toReceive",isDistributor,toRecieve);
distributorRoute.get("/toShip",isDistributor,toShip);
distributorRoute.post("/received",isDistributor,received);
distributorRoute.post("/shipped",isDistributor,shipped);
distributorRoute.post("/createDeliveryPerson",isDistributor,createDeliveryPerson);

distributorRoute.get("/logout", function (req, res) {
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.redirect("/distributor/login");
});

module.exports={
    distributorRoute
>>>>>>> 95c16b221da5d51e5eb1644b0324a568807180eb
}