import { Detalle_documento } from "./Detalle_documento.model";

export class CabeceraDocumento{
    public CABECERA_DOCUMENTO_ID : number;
    public FECHA_EMISION :Date
    public FECHA_ENVIO : Date
    public  FECHA_RETIRO :Date
    public CLIENTE_ID  : number;
    public DESTINATARIO_ID : number;
    public ESTADO_ID : number;
    public SERVICIO_ID : number
    public  EMPRESA_ID  : number
    public  TIPO_DOCUMENTO_ID : number;
    public  Detalle : Detalle_documento[] = [];
}