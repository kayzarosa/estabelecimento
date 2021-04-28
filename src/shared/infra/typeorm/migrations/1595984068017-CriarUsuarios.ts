import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarUsuario1595984068017 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'codigo_integracao',
            type: 'varchar(255)',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'cpf_cnpj',
            type: 'varchar(16)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'foto',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_razao_social',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'apelido_nome_fantasia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'logradouro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'numero',
            type: 'varchar(7)',
            isNullable: true,
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cep',
            type: 'varchar(9)',
            isNullable: true,
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'estado_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'cidade_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'senha',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'telefone',
            type: 'varchar(20)',
            isNullable: true,
          },
          {
            name: 'usuario_ativo',
            type: 'boolean',
            default: 1,
          },
          {
            name: 'data_criacao',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'data_alteracao',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_estado_empresa',
            referencedTableName: 'estados',
            referencedColumnNames: ['id'],
            columnNames: ['estado_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_cidade_empresa',
            referencedTableName: 'cidades',
            referencedColumnNames: ['id'],
            columnNames: ['cidade_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }

}
