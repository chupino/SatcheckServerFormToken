/*Ingresar Valores del Back Office Vendedor, ruta: Configuraion -> Tienda -> Claves de API REST*/

/*
  Si no tiene una cuenta Izipay puede utilizar
  Credenciales de prueba extraidas desde la pagina web "MI CUENTA WEB"
  Web: https://secure.micuentaweb.pe/doc/es-PE/rest/V4.0/api/get_my_keys.html
*/

const keys = {    
    "username"   : "64736775",
    "password"   : "testpassword_uV6m4VxGQZxgeFqydHn5RUBWnKBwJY69rZ95rZqoxzwn2",
    "endpoint"   : "https://api.micuentaweb.pe",
    "publickey"  : "64736775:testpublickey_AjgTGrbzofvvlblc4TnpM6Ou9n3IpcqwyVSLqr20wwTEq",
    "HMACSHA256" : "E1bN49bGaMuR8N20c7MrOD1mY20PDjEHy9FdlNUbI1YIY"
}

module.exports =  keys