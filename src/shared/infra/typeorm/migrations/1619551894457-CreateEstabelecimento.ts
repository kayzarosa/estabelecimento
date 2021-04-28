import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEstabelecimento1619551894457 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estabelecimentos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'descricao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'inativo',
            type: 'boolean',
            default: 0,
          },
          {
            name: 'ordem',
            type: 'integer',
          },
          {
            name: 'codigo_externo',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
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
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('estabelecimentos');
  }

}
