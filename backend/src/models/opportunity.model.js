import mongoose from "mongoose";

const OpportunitySchema = new Schema ({
    business: {
        type: ObjectId,
        ref: "Business",
        required: true
    },

    company: {
        type: ObjectId,
        ref: "Company",
        required: true
    },

    primaryContact: {
        type: ObjectId,
        ref: "Contact"
    },

    serviceTemplate: {
        type: ObjectId,
        ref: "ServiceTemplate",
        required: true
    },

    title: String,

    stage: {
        type: String,
        enum: [
            "Descubrimiento",
            "Propuesta",
            "Negociacion",
            "Contrato",
            "Ganado",
            "Perdido"
        ],
        default: "Descubrimiento"
    },

    estimatedAmount: Number,

    probability: Number,

    estimatedCloseDate: Date,

    expectedStartDate: Date,

    priority: {
        type: String,
        enum:[
            "Baja",
            "Media",
            "Alta"
        ],
        default:"Media"
    },

    lostReason: String,

    nextAction: String,

    notes: String,

    project: {
        type: ObjectId,
        ref: "Project",
        default: null
    }
    
}, {
    timestamps: true
})

export default mongoose.model("Opportunity", OpportunitySchema);