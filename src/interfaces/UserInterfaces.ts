enum UserStatus {
  active = "active",
  sanctioned = "sanctioned",
}

export interface UserInterfaceHB {
  id_user: string;
  nom_user: string;
  ape_user: string;
  email_user: string;
  usr_user: string;
  pas_user: string;
  ena_usuario: boolean;
  sta_usuario: UserStatus;
}
