export interface GroupInterfaceHB {
    id_group: string;
    nam_group: string;
    pat_group: string;
    realm_name: string;
    father_id?: string;
    sub_groups?: GroupInterfaceHB[];
}

export interface GroupxUserInterfaceHB {
    id_group: string;
    id_user: string;
}

export interface GroupxRoleInterfaceHB {
    id_group: string;
    id_role: string;
}