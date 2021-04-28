import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertEstado1609801249898 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO estados (id, sigla, nome, data_criacao, data_alteracao) VALUES (3, 'AP', 'Amapá', '2020-08-15 06:18:24.0', '2020-08-15 06:18:24.0');`);

    await queryRunner.query(`update cidades set codigo_ibge = 3515509 where id = 6;`);
    await queryRunner.query(`update cidades set codigo_ibge = 3550308 where id = 4;`);
    await queryRunner.query(`update cidades set codigo_ibge = 3557105 where id = 5;`);
    await queryRunner.query(`update cidades set codigo_ibge = 3134400 where id = 3;`);
    await queryRunner.query(`update cidades set codigo_ibge = 3152808 where id = 7;`);
    await queryRunner.query(`update cidades set codigo_ibge = 3170107 where id = 2;`);
    await queryRunner.query(`update cidades set codigo_ibge = 3170206 where id = 1;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from estados where id = 3`);

    await queryRunner.query(`update cidades set codigo_ibge = null where id in (1, 2, 3, 4, 5, 6, 7);`);
  }

}
