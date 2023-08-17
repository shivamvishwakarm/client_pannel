// models/form.js
import mongoose, {Schema, model, models} from "mongoose";

const OD = new Schema({
    role: {
      type: String,
      require: true,
    },
    customer_id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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
      avialable_balance:{
        type: String,
        require: true,
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
    father_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
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
    type_of_org: {
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
    relationship_nominee: {
      type: String,
      require: true,
    },
    nominee_name: {
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
  
  // const odMember = model("odMember", OD);
  const odMember = models.odMember || model('odMember', OD);

  export default odMember;