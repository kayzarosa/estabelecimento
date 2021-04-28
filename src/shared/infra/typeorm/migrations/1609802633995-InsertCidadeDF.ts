import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeDF1609802633995 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(5300108, 'Brasília', 7),
      (5300108, 'Gama', 7),
      (5300108, 'Taguatinga', 7),
      (5300108, 'Brazlândia', 7),
      (5300108, 'Sobradinho', 7),
      (5300108, 'Planaltina', 7),
      (5300108, 'Paranoá', 7),
      (5300108, 'Riacho Fundo', 7),
      (5300108, 'Núcleo Bandeirante', 7),
      (5300108, 'Ceilândia', 7),
      (5300108, 'Guará', 7),
      (5300108, 'Cruzeiro', 7),
      (5300108, 'Samambaia', 7),
      (5300108, 'Candangolândia', 7),
      (5300108, 'Recanto das Emas', 7),
      (5300108, 'Lago Norte', 7),
      (5300108, 'Lago Sul', 7),
      (5300108, 'Santa Maria', 7),
      (5300108, 'São Sebastião', 7);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 7`);
  }

}
