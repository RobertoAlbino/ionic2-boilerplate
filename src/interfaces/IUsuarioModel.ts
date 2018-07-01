export enum EPerfil {
  Usuario = 0,
  Fornecedor = 1
}

export interface IUsuarioModel {
  nome: string,
  email: string,
  telefone: string,
  senha: string,
  segundaSenha: string,
  perfil: EPerfil
}
