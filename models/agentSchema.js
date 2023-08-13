import mongoose, {Schema, model, models} from "mongoose";

const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  pincode: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  }
})

// const Agent = model("Agent", agentSchema);
const Agent = models.Agent || model('Agent', agentSchema);


export default Agent;