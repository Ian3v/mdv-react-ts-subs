
export interface Sub{
    nick: string
    avatar:string
    subMonths:number
    description?:string
}


//Tipo que recibira del API- poruqe?
// porque TS si salta las aletas en el codgio en el Build 
// pero cuando se ejecuta con, osea esta corriendo, este no salta ningung error, ejemplo
// cunado recibe un Dato de un API, este se recibe en ejecucion
// entonces TS no captura erroes, porq ya se ah convertiddo a JS
// entonces hay q hacer esto, recibir este tipo al gais
export type SubsResponseFromApi = Array<{
    nick:string
    months:number
    profileUrl:string
    description:string
}>