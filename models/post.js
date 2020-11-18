// dependencies ===============
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// post schema ===============
const postSchema = new Schema ({
  title: String,
  body: String
})
// create mongoose model ===============
const Post = mongoose.model('Post', postSchema);
// exports ===============
module.exports = Post;
