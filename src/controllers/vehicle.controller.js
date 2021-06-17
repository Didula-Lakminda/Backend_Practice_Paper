const Vehicle = require('../models/vehicle.model');

const createVehicle = async (req, res) => {
    if (req.body) {
      //create object    //up difine
      const vehicle = new Vehicle(req.body);
      await vehicle
        .save()
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    }
  }

  const getAllVehicles = async (req, res) => {
    await Vehicle.find({  })
    .then(data => {
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

// const getVehicleForCategory = async (req, res) => {
//     //check if the url have parameter
//     if(req.params && req.params.id) {
//         //return promise
//         await Vehicle.findById(req.params.id).populate('categories', 'code model type name price')
//         .then(data => {
//                                             //get only subjects without course details
//             res.status(200).send({ vehicles: data.vehicles });
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message });
//         });
        
//     }
// }

//delete operation
const Delete = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id)
  .then(data => {
    res.status(200).send({ data: "Deleted Successfully" });
  })
  .catch(error => {
      res.status(500).send({ error: error.message });
  });
}

//find correct vehicle
const FindVehicle = async (req, res) => {
  await Vehicle.findById(req.params.id)
  .then(data => {
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message })
  })
}

//update operation
const Update = async(req, res) => {
  if(req.body && req.params.id)
  {
    await Vehicle.findByIdAndUpdate(req.params.id, {
      code: req.body.code,
      model: req.body.model,
      type: req.body.type,
      name: req.body.name,
      price: req.body.price
    })
    .then((data) => {
      res.status(200).send({ data: data })
    })
    .catch((error) => {
      res.status(500).send({ error: error.message })
    })
  }
}


//calculation
const calculateRent = async (req, res) => {
  if(req.params && req.params.id) {
      
    const vehicle = await Vehicle.findById(req.params.id);
    let amount = 0;
    amount = req.params.duration * vehicle.price;

    res.status(200).send({ amount: amount })
  }
}


  module.exports = {
      createVehicle,
      getAllVehicles,
      FindVehicle,
      Delete,
      Update,
      calculateRent
     // getVehicleForCategory
  }