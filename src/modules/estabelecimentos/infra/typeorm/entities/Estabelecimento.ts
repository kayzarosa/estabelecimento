import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

@Entity('estabelecimentos')
class Estabelecimento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  descricao: string;

  @Column('boolean')
  inativo: boolean;

  @Column('int')
  ordem: number;

  @Column()
  codigo_externo: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;
}

export default Estabelecimento;
