import mongoose from "mongoose";

const OpportunitySchema = new mongoose.Schema ({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business",
        required: true
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },

    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"
    },

    serviceTemplate: {
        type: mongoose.Schema.Types.ObjectId,
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

    nextActionDate: Date,

    lastActivityAt: Date,

    project: {
        type: ObjectId,
        ref: "Project",
        default: null
    }
    
}, {
    timestamps: true
})

export default mongoose.model("Opportunity", OpportunitySchema);