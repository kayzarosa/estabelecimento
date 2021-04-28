import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import uploadConfig from '@config/upload';

import { Exclude, Expose } from 'class-transformer';
import Estado from '@modules/estados/infra/typeorm/entities/Estado';
import Cidade from '@modules/cidades/infra/typeorm/entities/Cidade';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 16 })
  cpf_cnpj: string;

  @Column({ length: 255 })
  codigo_integracao: string;

  @Column()
  foto: string;

  @Column()
  nome_razao_social: string;

  @Column()
  apelido_nome_fantasia: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  cep: string;

  @Column()
  bairro: string;

  @Column('int')
  estado_id: number;

  @ManyToOne(() => Estado, usuarioEstado => usuarioEstado, {
    eager: true,
  })
  @JoinColumn({ name: 'estado_id' })
  usuarioEstado: Estado;

  @Column('int')
  cidade_id: number;

  @ManyToOne(() => Cidade, cidadeUsuarioUs => cidadeUsuarioUs, {
    eager: true,
  })
  @JoinColumn({ name: 'cidade_id' })
  cidadeUsuarioUs: Cidade;

  @Column()
  email: string;

  @Column()
  @Exclude()
  senha: string;

  @Column()
  telefone: string;

  @Column('boolean')
  usuario_ativo: boolean;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @Expose({ name: 'foto_usuario' })
  getLogotipoUrl(): string | null {
    if (!this.foto) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.foto}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.foto}`;
      default:
        return null;
    }
  }
}

export default Usuario;
