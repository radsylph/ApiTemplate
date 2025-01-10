import type { ClientInfoInterface } from "./ClientInterfaces";

export interface RealmInterfaceHB {
	id_realm: string;
	nam_realm: string;
}

export interface RealmInfoInterface {
	realm_id: string;
	realm_name: string;
	clients: ClientInfoInterface[];
}
