<<<<<<< HEAD
const express= require('express');
const {isAdmin}=require("../auth");
const adminRoute=express();
adminRoute.use(express.static("Productimages"));
adminRoute.use(express.static("SellerIdentity"));

const {createDistributor}=require("../controllers/adminController");

adminRoute.post("/createDistributor",isAdmin,createDistributor);

module.exports={
    adminRoute
=======
const express= require('express');
const {isAdmin}=require("../auth");
const adminRoute=express();
adminRoute.use(express.static("Productimages"));
adminRoute.use(express.static("SellerIdentity"));

const {createDistributor}=require("../controllers/adminController");

adminRoute.post("/createDistributor",isAdmin,createDistributor);

module.exports={
    adminRoute
>>>>>>> 95c16b221da5d51e5eb1644b0324a568807180eb
}