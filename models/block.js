var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var BlockSchema = new Schema({
    blockhash: { type: String, lowercase: true, unique: true, index: true},
    height: {type: Number, default: 0},
    timestamp: { type: Number, default: 0 },
    hashprev: { type: String },
    vtx: { type: Array, default: [] },
    type: { type: String},
    difficulty: { type: Number, default: 0 },
    size: { type: Number, default: 0 },
}, {id: false});

module.exports = mongoose.model('Block', BlockSchema);
