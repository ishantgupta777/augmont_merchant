const mongoose = require("mongoose")

const schema = mongoose.Schema({
  userName: {
    type:mongoose.SchemaTypes.String,
    required: true
  },
  mobileNumber: {
    type:mongoose.SchemaTypes.String,
    required: true
  },
	accountId: mongoose.SchemaTypes.String,
  uniqueId: mongoose.SchemaTypes.String,
	userBankId: mongoose.SchemaTypes.String,
	accountNumber: mongoose.SchemaTypes.String,
	accountName: mongoose.SchemaTypes.String,
	IFSCCode: mongoose.SchemaTypes.String,
	address: mongoose.SchemaTypes.String, 
	pinCode: mongoose.SchemaTypes.Number,
  panNumber: mongoose.SchemaTypes.String,      
  panAttachment: mongoose.SchemaTypes.String,
  aadharNumber: mongoose.SchemaTypes.String,
  aadharAttachment: mongoose.SchemaTypes.String, 
  kycStatus: mongoose.SchemaTypes.String,
	goldBalance: mongoose.SchemaTypes.Decimal128,
  silverBalance: mongoose.SchemaTypes.Decimal128,
})

module.exports = mongoose.model("User", schema)