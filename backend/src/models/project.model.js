import mongoose from "mongoose";

const ProjectSchema = new Schema ({

    business:{
        type:ObjectId,
        ref:"Business"
    },

    company:{
        type:ObjectId,
        ref:"Company"
    },

    opportunity:{
        type:ObjectId,
        ref:"Opportunity"
    },

    serviceTemplate:{
        type:ObjectId,
        ref:"ServiceTemplate"
    },

    name: String,

    status:{
        type:String,
        enum:[
            "Planeacion",
            "Ejecucion",
            "Reporte",
            "Entrega",
            "Cerrado"
        ]
    },

    manager: String, 

    startDate: Date,

    dueDate: Date,

    deliveryDate: Date,

    scope:{

        domains:[String],

        subdomains:[String],

        ips:[String],

        applications:[String],

        apis:[String],

        exclusions:[String],

        allowedHours:String,

        technicalContact:String

    },

    assets:[{

        name:String,

        ip:String,

        hostname:String,

        type:String,

        operatingSystem:String,

        criticality:String,

        comments:String

    }],

    phases:[{

        name:String,

        order:Number,

        status:String,

        startedAt:Date,

        finishedAt:Date,

        checklist:[{

            task:String,

            completed:Boolean,

            completedAt:Date

        }]

    }],

    deliverables:[{

        name:String,

        completed:Boolean,

        version:Number,

        deliveredAt:Date

    }],

    timeline:[{

        title:String,

        description:String,

        user:String,

        createdAt:Date

    }]
}, {
    timestamps: true
})

export default mongoose.model("Project", ProjectSchema);