const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  user : {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'User Id must be there.']
  },
  name: {
      type: String,
      required: [true, 'Name must be there.']
  },
  recipeId: {
      type: String,
      required: [true, 'recipeId must be there.']
  },
  category: {
    type: String,
    required: [true, 'category must be there.']
  },
    price: {
        type: String,
        required: [true, 'price must be there.']
   },
   description: {
    type: String,
    required: [true, 'description must be there.']
   },
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

recipeSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;