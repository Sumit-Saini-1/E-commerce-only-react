<<<<<<< HEAD
const express= require('express');
const sellerRoute=express();
const {signupseller,loginseller,verifyEmail,toAproveSellers,approveSeller,rejectSeller,logout,monthlyReport,yearlyReport}=require("../controllers/sellerController");
const multer = require('multer');
const {isSeller}=require("../auth");


const upload = multer({ 
    dest: 'SellerIdentity/',
    limits:{
        fileSize:250000
    } 
});
sellerRoute.use(upload.single("aadhar"));
sellerRoute.use(express.static("Productimages"));

sellerRoute.post("/signup",signupseller);

sellerRoute.post("/login",loginseller);

sellerRoute.get("/logout", logout);

sellerRoute.get("/verify/:token",verifyEmail);

sellerRoute.get("/getSellersToApprove/:page",toAproveSellers);
sellerRoute.get("/approveseller/:sid",approveSeller);
sellerRoute.get("/rejectseller/:sid",rejectSeller);
sellerRoute.post("/monthlyReport",isSeller,monthlyReport);
sellerRoute.post("/yearlyReport",isSeller,yearlyReport);

module.exports={
    sellerRoute
=======
const express= require('express');
const sellerRoute=express();
const {signupseller,loginseller,verifyEmail,toAproveSellers,approveSeller,rejectSeller,logout,monthlyReport,yearlyReport}=require("../controllers/sellerController");
const multer = require('multer');
const {isSeller}=require("../auth");


const upload = multer({ 
    dest: 'SellerIdentity/',
    limits:{
        fileSize:250000
    } 
});
sellerRoute.use(upload.single("aadhar"));
sellerRoute.use(express.static("Productimages"));

sellerRoute.post("/signup",signupseller);

sellerRoute.post("/login",loginseller);

sellerRoute.get("/logout", logout);

sellerRoute.get("/verify/:token",verifyEmail);

sellerRoute.get("/getSellersToApprove/:page",toAproveSellers);
sellerRoute.get("/approveseller/:sid",approveSeller);
sellerRoute.get("/rejectseller/:sid",rejectSeller);
sellerRoute.post("/monthlyReport",isSeller,monthlyReport);
sellerRoute.post("/yearlyReport",isSeller,yearlyReport);

module.exports={
    sellerRoute
>>>>>>> 95c16b221da5d51e5eb1644b0324a568807180eb
}