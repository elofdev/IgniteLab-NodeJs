import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty() // Não aceita vazio
  @IsUUID() // Aceita somente código gerado/formato UUID
  recipientId: String;
  
  @IsNotEmpty() 
  @Length(5,249) // Tamanho do texto, mínimo 5 caracteres máximo de 249
  content:String;
  
  @IsNotEmpty() 
  category: String;
}