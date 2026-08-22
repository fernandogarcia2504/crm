import type { Activity, CreateActivityResponse, CreateActivityData, GetActivitiesResponse, GetActivityResponse } from "../types/activities.types";

const API_URL = "http://localhost:3000/api/activities";

export const getActivities = async(opportunityId: string): Promise<Activity[]> => {
    const response = await fetch(`${API_URL}/${opportunityId}`)

    if(!response.ok) {
        throw new Error (
            "Error al obtener las actividades de la oportunidad"
        )
    }

    const data: GetActivitiesResponse = await response.json()

    return data.activities
}

export const getActivity = async (opportunityId: string, activityId: string): Promise<Activity> => {

    const response = await fetch(`${API_URL}/${opportunityId}/${activityId}`)

    if (!response.ok) {
        throw new Error(
            "Error al obtener la actividad"
        );
    }

    const data: GetActivityResponse = await response.json();

    return data.activity;

}

export const createActivity = async (opportunityId: string, activityData: CreateActivityData): Promise<CreateActivityResponse> => {

    const response = await fetch(`${API_URL}/${opportunityId}`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(activityData)
    })

    const data: CreateActivityResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Error al crear la actividad"
        );
    }

    return data;
}