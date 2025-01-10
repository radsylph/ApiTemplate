
export interface TokenEndpoints {
	Url1: (baseURL: string, realm: string) => string;
}

export interface UserEndpoints {
	Url1: (realm: string) => string;
	Url2: (realm: string, userId: string) => string;
}

export interface GroupEndpoints {
	Url1: (realm: string) => string;
	Url2: (realm: string, groupId: string) => string;
	Url3: (realm: string, userId: string) => string;
	Url4: (realm: string, groupId: string, scope: string) => string;
	Url5: (realm: string, fatherId: string) => string;
	Url6: (realm: string, groupId: string) => string;
	Url7: (realm: string, groupId: string, userId: string) => string;
}

export interface ClientRoleEndpoints {
	Url1: (realm: string, clientId: string) => string;
	Url2: (realm: string, clientId: string, roleName: string) => string;
	Url3: (realm: string, clientId: string, roleName: string) => string;
	Url4: (realm: string, userId: string, clientId: string) => string;
}

export interface RealmRoleEndpoints {
	Url1: (realm: string) => string;
	Url2: (realm: string, roleName: string) => string;
	Url3: (realm: string, roleName: string) => string;
	Url4: (realm: string, userId: string) => string;
}

export interface RoleEndpoints {
	ClientRoles: ClientRoleEndpoints;
	RealmRoles: RealmRoleEndpoints;
}

export interface ClientEndpoints {
	getToken: {
		Url: string,
	};
	getClients: {
		Url: string,
	};
}
