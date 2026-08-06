
interface SetContactsProp {
    fullName: string;
    position: string;
    email: string;
    phone: string;
    main: string;
}

export default function ContactCard({fullName, position, email, phone, main}: SetContactsProp) {

    return(
        <div className="w-full grid grid-cols-[20%_20%_20%_30%_10%] pt-8">
            <p className="">{fullName}</p>
            <p className="">{position}</p>
            <p className="">{phone}</p>
            <p className="">{email}</p>
            <p className="">{main}</p>
        </div>
    )
}