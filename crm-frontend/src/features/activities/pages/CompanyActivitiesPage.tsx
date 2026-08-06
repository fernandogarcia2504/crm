import CreateButton from "../../../components/ui/buttons/CreateButton"

export default function CompanyActivitiesPage() {

    return(
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-end mt-12">
                <CreateButton title="Agregar Actividad" />
            </div>
        </div>
    )
}