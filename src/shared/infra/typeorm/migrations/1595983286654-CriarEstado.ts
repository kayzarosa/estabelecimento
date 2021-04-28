import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarEstado1595983286654 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estados',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'sigla',
            type: 'varchar(2)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'nome',
            type: 'varchar(50)',
            isNullable: false,
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
    await queryRunner.dropTable("estados");
  }

}
