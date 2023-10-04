import {IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateComprasMercadoDto {
    @Exclude()
    idConta: number;

    @ApiPropertyOptional()
    @IsOptional()
    @MaxLength(100,{message:"O descricaoCompra TEM QUER CONTER ATÉ 100 CARACTERES"})
    descricaoCompra: string | null;
    
    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    valor: number;
    
    @Exclude()
    createdDate: string;
    
    @Exclude()
    updatedDate: string;
    
    @Exclude()
    deletedDate: string;
}