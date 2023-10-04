import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";

  @Index("PK_Compra", ["idCompra"], { unique: true })

  @Entity("ComprasMercado")
  export class ComprasMercado {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "int", name: "id_compra" })
    idCompra: number;

    @ApiProperty()
    @Column("varchar", { name: "descricao_compra", length: 100 })
    descricaoCompra: string | null;
  
    @ApiProperty()
    @Column("decimal", { name: "valor", precision: 10, scale: 2 })
    valor: number;

    @ApiProperty()
    @CreateDateColumn({ type: 'timestamptz', precision: 3 })
    createdDate: string;
    
    @ApiProperty()
    @UpdateDateColumn({ type: 'timestamptz', precision: 3 })
    updatedDate: string;
     
    @ApiProperty()
    @DeleteDateColumn({ type: 'timestamptz', precision: 3 })
    deletedDate: string;
  }
  