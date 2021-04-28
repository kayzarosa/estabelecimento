import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import Cidade from '@modules/cidades/infra/typeorm/entities/Cidade';

@Entity('estados')
class Estado {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  sigla: string;

  @Column()
  nome: string;

  @OneToMany(() => Usuario, usuarioEstado => usuarioEstado.usuarioEstado)
  usuarioEstado: Usuario;

  @OneToMany(() => Cidade, cidadeEstado => cidadeEstado.estadoCidade)
  cidadeEstado: Cidade;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;
}

export default Estado;
