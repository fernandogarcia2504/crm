import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({

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

    fullName: { type: String, required: true },
    position: String,
    email: { type: String, required: true },

    sector: String,

    status: {
        type: String,
        enum: ["Activo", "Inactivo"],
        default: "Activo"
    },

    // Credenciales del curso de concientizacion. La contraseña nunca se
    // guarda en texto plano, solo su hash; el texto plano se devuelve
    // una unica vez en la respuesta del endpoint que la genera.
    courseAccount: {

        username: String,

        passwordHash: String,

        credentialsIssuedAt: Date,

        enrolled: { type: Boolean, default: false },
        enrolledAt: Date,

        completed: { type: Boolean, default: false },
        completedAt: Date,

        progress: { type: Number, default: 0 }

    },

    notes: String

}, {
    timestamps: true
});

// Un mismo correo no deberia repetirse dos veces dentro de la misma empresa
EmployeeSchema.index({ company: 1, email: 1 }, { unique: true });

export default mongoose.model("Employee", EmployeeSchema);