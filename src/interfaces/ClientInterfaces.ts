export enum ClientStatus {
  active = "active",
  sanctioned = "sanctioned",
}

export interface ClientInterfaceHB {
  id_client: string;
  nam_client: string;
}

export interface ClientInfoInterface {
  client_name: string;
  client_id: string;
  client_secret: string;
}
