module.exports = mongoose => {
	
	var schema = mongoose.Schema(
	{ 
		name: {
        type: String,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true,
        min: 1 // Minimum guests is 1
    },
    roomOption: {
        type: String,
        enum: ['single', 'double', 'suite'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    coordinates: {
        type: {
            latitude: Number,
            longitude: Number
        },
        default: null // Default value for coordinates
    },
    selectedDates: {
        type: Map,
        of: {
            selected: Boolean,
            selectedColor: String
        },
        default: {}
    },
    isCancelled: {
        type: Boolean,
        default: false
    },
    searchQuery: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Price must be a non-negative value
    },
    currency: {
        type: String,
        default: 'USD'
    },
    convertedPrice: {
        type: Number,
        default: null // Default value for converted price
    
	},
   
   { timestamps: true }
    );


   schema.method("toJSON", function() {
       const {__v,_id,...object} = this.toObject();
	   object.id=_id;
	   return object;
	});	   
	
	const Booking = mongoose.model("booking",schema);
	 return Booking;
	 
}; 