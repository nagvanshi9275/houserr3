
import User from "../Model/user.model.js";


import Product from "../Model/product.model.js";


export default async function Productdata(req, res){


    try{

        const { product, location, pricing2Bhk, pricing3Bhk, name, email } = req.body;

        const user = await User.findOne({email})

        if(!user) return res.status(404).json({message: "User not found"})

        let productdata = await Product.findOne({email: user.email})

      //  let kitnibar  = 1;

        if(!productdata){

          productdata = new Product({

            product,
            location,
            pricing2Bhk,
            pricing3Bhk,
            email: user.email,
            name: user.name,
            times: 1






          })

          await productdata.save()

          res.status(201).json({message: "product added successfully", productdata})


        } else {

          // await productdata.save()
         // kitnibar++

          productdata.product = [...productdata.product, product];
          productdata.location = [...productdata.location, location];
          productdata.pricing2Bhk = pricing2Bhk;
          productdata.pricing3Bhk = pricing3Bhk;
           
          productdata.times += 1;

          await productdata.save();


         //  await productdata.location.push(location).save()

           res.status(200).json({message: "product updated successfully", productdata})


        }
      


    } catch(error) {

     console.log(error.message)

    }








}















