const notFound = (req, res) => res.status(404).send('Route does not exist')
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'products name must be provided'],
  }, 
  price: {
    type: Number, 
    required: [true, 'product price must be provide'],
  }, 
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    //   enum:['ikea','liddy','caressa','marcos'],
  },
});

module.exports = mongoose.model('Product', productSchema);
