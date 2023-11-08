import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateComprasMercadoDto } from './dto/create-compras-mercado.dto';
import { UpdateComprasMercadoDto } from './dto/update-compras-mercado.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ComprasMercado } from './entities/compras-mercado.entity';

@ApiTags('ComprasMercado') // Titulo Da Cadeia de Metodos
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('alteracao')
  alteracao() {
    return "ESSA PORRA TÁ ALTERADA"
  }
  
  @ApiCreatedResponse({
    type: ComprasMercado, // aqui definimos o tipo de resposta
  }) 
  @Post()
  create(@Body() createClienteDto: CreateComprasMercadoDto) {
    return this.appService.create(createClienteDto);
  }

  @ApiCreatedResponse({
    type: ComprasMercado, // aqui definimos o tipo de resposta
  }) 
  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @ApiCreatedResponse({
    type: ComprasMercado, // aqui definimos o tipo de resposta
  }) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateComprasMercadoDto) {
    return this.appService.update(+id, updateClienteDto);
  }

  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}
