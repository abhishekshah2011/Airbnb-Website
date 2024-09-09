const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new  Schema ({
    title: {
     type: String, 
     required: true, 
    },

    description: String,
    image:  {
        type: String, 
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1ZgSBIc7q7d2yLjwULYgR8Grxb0tn3wLMw&s",
       set: (v) => 
        v === "" 
       ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1ZgSBIc7q7d2yLjwULYgR8Grxb0tn3wLMw&s" : v,
       },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;