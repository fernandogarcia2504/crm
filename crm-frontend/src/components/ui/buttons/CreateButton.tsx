import React from "react"

interface CreateButtonProps {
    title: string;
    onClick?: () => void;
}

export default function CreateButton({title, onClick}: CreateButtonProps) {
    
    return(
        <button onClick={onClick} className="w-[15%] bg-[#232323] py-2 px-2 rounded-md shadow-lg">
            {title}
        </button>
    )
}