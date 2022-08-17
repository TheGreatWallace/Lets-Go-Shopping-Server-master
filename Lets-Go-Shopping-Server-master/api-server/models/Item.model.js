const mongoose = require('mongoose')

    var schema = mongoose.Schema(
        {
            id: String,

            name: {
                type: String,
                required: [true, 'You must specify a Name for the item']
            },

            categorie: {
                type: String,
                required: [true, 'You must specify a Categorie for the item'],
                default: 'Food and Drink'
            },

            amount: {
                type: Number,
                required: [true, 'You must specify an Amount for the item'],
                default: '2'
            },

            price: {
                type: String,
                required: [true, 'You must specify an Price for the item/s'],
            },
            
            bought: {
                type: Boolean,
                default: false
            }
        },
        { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    
module.exports =  mongoose.model("Items", schema);




