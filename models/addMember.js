import {Schema, model, models} from "mongoose";

const AddMemeber = new Schema({
  role: {
    type: String,
    require: true,
  },
  omt_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  aadhar_no: {
    type: String,
    required: true,
  },
  pan_no: {
    type: String,
    required: true,
  },
  name_of_entrepreneur: {
    type: String,
    required: true,
  },
  type_of_org: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  social_category_entrepreneur: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  physically_handicapped: {
    type: String,
    require: true,
  },
  name_of_enterprise: {
    type: String,
  },
  // here "r" stand for residential address
  r_village: {
    type: String,
    require: true,
  },
  r_block: {
    type: String,
    require: true,
  },
  r_city: {
    type: String,
    require: true,
  },
  r_district: {
    type: String,
    require: true,
  },
  r_state: {
    type: String,
    require: true,
  },
  r_pincode: {
    type: String,
    require: true,
  },
  // here "o" stand for Offical address"
  o_village: {
    type: String,
    require: true,
  },
  o_block: {
    type: String,
    require: true,
  },
  o_city: {
    type: String,
    require: true,
  },
  o_district: {
    type: String,
    require: true,
  },
  o_state: {
    type: String,
    require: true,
  },
  o_pincode: {
    type: String,
    require: true,
  },
  payment_received: {
    type: String,
    require: true,
  },
  payment_awaiting: {
    type: String,
    require: true,
  },
  bank_name: {
    type: String,
    require: true,
  },
  branch_name: {
    type: String,
    require: true,
  },
  // bank account number
  bank_ac: {
    type: String,
    require: true,
  },

  image1: {
    type: String,
    required: true,
  },

  image2: {
    type: String,
    required: true,
  },
});

// const Member = model("Member", AddMemeber);
const Member = models.Member || model('Member', AddMemeber);


export default Member;
