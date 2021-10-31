const catchAsync = require('../utils/catchAsync');
const Recipe = require('../models/recipeModel');

exports.addRecipe = catchAsync(async(req,res,next) => {
    console.log(req.body);
    req.body.user = req.user.id;

    const newRecipe = await Recipe.create(req.body);

    res.status(200).json({
        status: 'success'
    });
})

exports.getAllRecipesofUser = catchAsync(async(req,res,next) => {
    const data = await Recipe.findById(req.user.id);
    console.log(data);
    res.status(200).json({
      status: 'success',
      data
    })
})

exports.deleteRecipe = catchAsync(async(req,res,next) => {
    const id = req.params.id;
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, {active: false});
    res.status(200).json({
      status: 'success'
    });
})

exports.getAllRecipes = catchAsync(async(req,res,next) => {
    const data = await Recipe.find();
    console.log(data);
    res.status(200).json({
      status: 'success',
      data
    })
})