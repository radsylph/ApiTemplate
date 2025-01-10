export interface RoleInterfaceHB {
    id_role: string;
    nam_role: string;
    composite: boolean;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    attributes?: Record<string, any>;
}

export interface RolexUserInterfaceHB {
    id_role: string;
    id_user: string;
}

