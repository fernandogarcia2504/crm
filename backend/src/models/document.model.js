import mongoose from "mongoose";

const DocumentSchema = new Schema = ({

    business:{
        type:ObjectId,
        ref:"Business"
    },

    company:{
        type:ObjectId,
        ref:"Company"
    },

    project:{
        type:ObjectId,
        ref:"Project"
    },

    category:{
        type:String,
        enum:[
            "Contrato",
            "NDA",
            "Cotizacion",
            "Reporte Ejecutivo",
            "Reporte Tecnico",
            "Presentacion",
            "Factura",
            "Evidencia",
            "Otro"
        ]
    },

    fileName:String,

    originalName:String,

    mimeType:String,

    size:Number,

    version:Number,

    storagePath:String,

    notes:String
})

export default mongoose.model("Document", DocumentSchema);