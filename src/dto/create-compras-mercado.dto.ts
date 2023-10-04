import {IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class CreateComprasMercadoDto {
    @Exclude()
    idCompra: number;

    @ApiProperty()//Quando estiver decorado com @IsNotEmpty
    @IsNotEmpty({message:"CAMPO descricaoCompra OBRIGATÓRIO"})
    @MaxLength(100,{message:"O descricaoCompra TEM QUER CONTER ATÉ 100 CARACTERES"})
    descricaoCompra: string | null;
    
    //Quando estiver decorado como @IsOptional -> decoramos com @ApiPropertyOptional()

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    valor: number;
    
    @Exclude()
    createdDate: string;
    
    @Exclude()
    updatedDate: string;
    
    @Exclude()
    deletedDate: string;
}