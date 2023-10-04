import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComprasMercado } from './entities/compras-mercado.entity';
import { CreateComprasMercadoDto } from './dto/create-compras-mercado.dto';
import { UpdateComprasMercadoDto } from './dto/update-compras-mercado.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ComprasMercado) private comprasMercadoRepo: Repository<ComprasMercado>,
  ) {}

  async create(createComprasMercadoDto: CreateComprasMercadoDto) {
    
    const cliente: ComprasMercado = this.comprasMercadoRepo.create(createComprasMercadoDto);
    return await this.comprasMercadoRepo.save(cliente);

  }

  findAll() {
    return this.comprasMercadoRepo.find()
  }

  findOne(id: number) {
    return this.comprasMercadoRepo.findOne({where: {idCompra: id}})
  }

  update(id: number, updateComprasMercadoDto: UpdateComprasMercadoDto) {
    return this.comprasMercadoRepo.update(id, updateComprasMercadoDto)
  }

  remove(id: number) {
    return this.comprasMercadoRepo.delete(id)
  }
}
