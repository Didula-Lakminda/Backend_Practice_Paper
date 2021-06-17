const Category = require("../models/category.model");

const createCategory = async (req, res) => {
  if (req.body) {
    //create object    //up difine
    const category = new Category(req.body);
    await category
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllCategories = async (req, res) => {
    await Category.find({  })
    .then(data => {
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
};

const getVehiclesForCategory = async (req, res) => {
  //check if the url have parameter
  if(req.params && req.params.id) {
      //return promise
      await Category.findById(req.params.id).populate('vehicles', 'code model type name price')
      .then(data => {
                                          //get only subjects without course details
          res.status(200).send({ vehicles: data.vehicles });
      })
      .catch(error => {
          res.status(500).send({ error: error.message });
      });
      
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getVehiclesForCategory
};
