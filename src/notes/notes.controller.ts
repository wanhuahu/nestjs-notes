import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  async findAll() {
    return this.notesService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notesService.delete(id);
  }
}