const apiV1 = require("express").Router();
const authController = require('./../controllers/authController');
const recipeController = require('./../controllers/recipeController');


apiV1.use(authController.protect);

apiV1.post('/', recipeController.addRecipe);
apiV1.get('/', recipeController.getAllRecipesofUser)
apiV1.delete('/:id', recipeController.deleteRecipe)
apiV1.get('/get-all-recipes', recipeController.getAllRecipes)

module.exports = apiV1;