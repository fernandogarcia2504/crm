import CreateButton from "../../../components/ui/buttons/CreateButton"

import ContactCard from "../components/ContactCard"

export default function CompanyContactsPage() {

    return(
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Contacto" />
            </div>

            <div className="w-full grid grid-cols-[20%_20%_20%_30%_10%] pt-8">
                <p className="text-[#959595]">Nombre</p>
                <p className="text-[#959595]">Puesto</p>
                <p className="text-[#959595]">Teléfono</p>
                <p className="text-[#959595]">Correo electrónico</p>
                <p className="text-[#959595]">Principal</p>
            </div>

            <ContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <ContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <ContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <ContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <ContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
            <ContactCard fullName="Fernando Garcia Tejeda" position="Auditor Sr." phone="5559518331" email="nando.garcia2504@gmail.com" main="Si" />
        </div>
    )
}