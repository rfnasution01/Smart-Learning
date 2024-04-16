export type LoginType = {
  username: string
  password: string
}

export type ChangePasswordType = {
  old_password: string
  new_password: string
}

export type ActivateAccountType = {
  token: string
  nisn: string
}
