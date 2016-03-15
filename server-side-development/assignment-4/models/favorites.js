var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    favList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }],
    favBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;
