<<<<<<< HEAD
const express= require("express");
const deliveryRoute=express();
const {logIn,delivered,ordersToDeliver}=require("../controllers/deliveryPersonController");
const {isDeliveryPerson}=require("../auth");


deliveryRoute.post("/login",logIn);

deliveryRoute.post("/delivered",isDeliveryPerson,delivered);
deliveryRoute.get("/ordersToDeliver",isDeliveryPerson,ordersToDeliver);

deliveryRoute.get("/logout", function (req, res) {
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.status(200).send("logout");
});

module.exports={
    deliveryRoute
=======
const express= require("express");
const deliveryRoute=express();
const {logIn,delivered,ordersToDeliver}=require("../controllers/deliveryPersonController");
const {isDeliveryPerson}=require("../auth");


deliveryRoute.post("/login",logIn);

deliveryRoute.post("/delivered",isDeliveryPerson,delivered);
deliveryRoute.get("/ordersToDeliver",isDeliveryPerson,ordersToDeliver);

deliveryRoute.get("/logout", function (req, res) {
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.status(200).send("logout");
});

module.exports={
    deliveryRoute
>>>>>>> 95c16b221da5d51e5eb1644b0324a568807180eb
}