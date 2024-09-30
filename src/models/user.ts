import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  username: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false, default: null },
  created: { type: Date, default: new Date() }, // need to fix this
})

// Export the model
export default mongoose.model('User', UserSchema)
