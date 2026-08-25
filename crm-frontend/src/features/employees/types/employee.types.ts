export type EmployeeStatus = "Activo" | "Inactivo";

export interface CourseAccount {
    username: string;
    credentialsIssuedAt: string | null;
    enrolled: boolean;
    enrolledAt: string | null;
    completed: boolean;
    completedAt: string | null;
    progress: number;
}

export interface Employee {
    _id: string;
    business: string;
    company: string;

    fullName: string;
    position: string;
    email: string;
    sector: string;

    status: EmployeeStatus;

    courseAccount: CourseAccount;

    // Solo viene presente justo despues de crear/regenerar credenciales
    temporaryPassword?: string;

    notes?: string;

    createdAt: string;
    updatedAt: string;
}

export interface CreateEmployeeData {
    fullName: string;
    position: string;
    email: string;
    sector: string;
    notes?: string;
}

export interface UpdateEmployeeData {
    fullName?: string;
    position?: string;
    sector?: string;
    status?: EmployeeStatus;
    notes?: string;
    courseAccount?: {
        enrolled?: boolean;
        completed?: boolean;
        progress?: number;
    };
}

export interface BulkCreateSkipped {
    row: Partial<CreateEmployeeData>;
    reason: string;
}

export interface GetEmployeesResponse {
    employees: Employee[];
}

export interface GetEmployeeResponse {
    employee: Employee;
}

export interface CreateEmployeeResponse {
    message: string;
    employee: Employee;
}

export interface BulkCreateEmployeesResponse {
    message: string;
    created: Employee[];
    skipped: BulkCreateSkipped[];
}
