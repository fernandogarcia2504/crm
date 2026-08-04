import React from "react"

interface CreateButtonProps {
    title: string;
}

export default function CreateButton({title}: CreateButtonProps) {
    
    return(
        <button className="w-[15%] bg-[#232323] py-2 px-2 rounded-md shadow-lg">
            {title}
        </button>
    )
}