import type { ServiceTemplate, CreateServiceTemplateData, CreateServiceTemplateResponse, GetServiceTemplateResponse, GetServiceTemplatesResponse } from "../types/templates.types";

const API_URL = "http://localhost:3000/api";

export const getTemplates = async (businessId: string): Promise<ServiceTemplate[]> => {
    
    const response = await fetch(`${API_URL}/service-templates/${businessId}`)

    if(!response.ok){
        throw new Error(
            "Error al obtener los templates"
        );
    }

    const data: GetServiceTemplatesResponse = await response.json();

    return data.serviceTemplates
}

export const getTemplate = async (businessId: string, templateId: string): Promise<ServiceTemplate> => {

    const response = await fetch(`${API_URL}/service-templates/${businessId}/templates/${templateId}`)

    if (!response.ok) {
        throw new Error(
            "Error al obtener el template"
        );
    }

    const data: GetServiceTemplateResponse = await response.json();

    return data.serviceTemplate;

}

export const createTemplate = async (businessId: string, templatedata: CreateServiceTemplateData): Promise<ServiceTemplate> => {
    
    const response = await fetch(`${API_URL}/service-templates/${businessId}`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(templatedata)
    })

    const data: CreateServiceTemplateResponse = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Error al crear el template"
        );
    }

    return data.serviceTemplate;
}