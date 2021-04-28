import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Estado from '@modules/estados/infra/typeorm/entities/Estado';
import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';

@Entity('cidades')
class Cidade {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo_ibge: string;

  @Column()
  nome: string;

  @Column('int')
  estado_id: number;

  @ManyToOne(() => Estado, estadoCidade => estadoCidade, {
    eager: true,
  })
  @JoinColumn({ name: 'estado_id' })
  estadoCidade: Estado;

  @OneToMany(() => Usuario, usuarioCidade => usuarioCidade.cidadeUsuarioUs)
  usuarioCidade: Usuario;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;
}

export default Cidade;
