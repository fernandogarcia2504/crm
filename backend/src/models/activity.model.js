import mongoose from "mongoose";

const ActivitySchema = new Schema ({

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

    contact: {
        type: ObjectId,
        ref: "Contact"
    },

    opportunity: {
        type: ObjectId,
        ref: "Opportunity",
        default: null
    },

    category: {
        type: String,
        enum: [
            "Prospeccion",
            "Negociacion",
            "Seguimiento",
            "Postventa"
        ],
        required: true
    },

    type: {
        type: String,
        enum: [
            "Correo",
            "Llamada",
            "WhatsApp",
            "LinkedIn",
            "Reunion",
            "Demo",
            "Visita",
            "Otro"
        ]
    },

    subject: String,

    notes: String, //1 a n

    result: String, // agendado, completado, programado, fin, etc.

    nextStep: String,

    scheduledDate: Date,

    completedDate: Date,

}, {
    timestamps: true
})

export default mongoose.model("Activity", ActivitySchema);