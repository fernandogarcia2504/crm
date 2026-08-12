import { Phone } from "lucide-react";
import { StickyNote } from "lucide-react";
import { Calendar } from "lucide-react";
import { Mail } from "lucide-react";

type ActivityType = "call" | "email" | "meeting" | "note";

interface SetActivityCardProps {
    subject: string;
    result: string;
    nextStep: string;
    date: string;
    type: ActivityType;
    isLast?: boolean;
}

const activityConfig = {
    call: {
        icon: Phone,
        color: "#2F76D2"
    },
    meeting: {
        icon: Calendar,
        color: "#6B2FD2"
    },
    note: {
        icon: StickyNote,
        color: "#D2CC2F"
    },
    email: {
        icon: Mail,
        color: "#2FD260"
    }
}

export default function({ subject, result, nextStep, date, type, isLast=false}: SetActivityCardProps) {

    const {icon: Icon, color} = activityConfig[type];

    return(
        <div className="w-full grid grid-cols-[3%_60%_25%_10%] px-3 items-center gap-2 cursor-pointer">

            <div className="flex flex-col items-center relative">
                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center z-10"
                    style={{ backgroundColor: color }}
                >
                    <Icon size={18} />
                </div>

                {!isLast && (
                    <div
                        className="absolute top-9 left-1/2 -translate-x-1/2 w-0 h-10 border-l-2 border-dashed border-gray-500"
                    />
                )}

            </div>

            <div className="flex flex-col ">
                <p>{subject}</p>
                <p className="text-sm text-[#959595]">{nextStep}</p>
            </div>

            <p className="text-sm text-[#959595]">{date}</p>

            <p className="text-sm text-[#959595] text-right">{result}</p>
        </div>
    )
}