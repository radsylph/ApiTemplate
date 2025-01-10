export interface databaseConfigInterface {
	host: string;
	port: number;
	user: string;
	pass: string;
	name: string;
	dialect: string;
}

export interface configInterface {
	baseURL: string;
	baseAdminURL: string;
	realmName: string;
	clientId: string;
	clientSecret: string;
	grant: string;
	port: number;
	// db_HB_Host: string;
	// db_HB_Port: number;
	// db_HB_User: string;
	// db_HB_Pass: string;
	// db_HB_Name: string;
	// db_HB_Dialect: string;
}
