export interface RegisterUser {
    id?: number
    name: string
    email: string
    telefone: number
    cep: number
    bairro: string
    complemento: string
    uf: string
    localidade: string
    logradouro: string    
    urlFoto?: string
}