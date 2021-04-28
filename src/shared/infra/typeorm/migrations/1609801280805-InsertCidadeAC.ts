import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeAC1609801280805 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO cidades (codigo_ibge, nome, estado_id) VALUES(1200013, 'Acrelândia', 1),
        (1200054, 'Assis Brasil', 1),
        (1200104, 'Brasiléia', 1),
        (1200138, 'Bujari', 1),
        (1200179, 'Capixaba', 1),
        (1200203, 'Cruzeiro do Sul', 1),
        (1200252, 'Epitaciolândia', 1),
        (1200302, 'Feijó', 1),
        (1200328, 'Jordão', 1),
        (1200336, 'Manoel Urbano', 1),
        (1200344, 'Marechal Thaumaturgo', 1),
        (1200351, 'Mâncio Lima', 1),
        (1200385, 'Plácido de Castro', 1),
        (1200807, 'Porto Acre', 1),
        (1200393, 'Porto Walter', 1),
        (1200401, 'Rio Branco', 1),
        (1200427, 'Rodrigues Alves', 1),
        (1200435, 'Santa Rosa do Purus', 1),
        (1200500, 'Sena Madureira', 1),
        (1200450, 'Senador Guiomard', 1),
        (1200609, 'Tarauacá', 1),
        (1200708, 'Xapuri', 1);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 1`);
  }

}
