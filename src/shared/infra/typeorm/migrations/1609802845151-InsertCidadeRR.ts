import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeRR1609802845151 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(1400050, 'Amajari', 23),
    (1400027, 'Alto Alegre', 23),
    (1400100, 'Boa Vista', 23),
    (1400159, 'Bonfim', 23),
    (1400175, 'Cantá', 23),
    (1400209, 'Caracaraí', 23),
    (1400233, 'Caroebe', 23),
    (1400282, 'Iracema', 23),
    (1400308, 'Mucajaí', 23),
    (1400407, 'Normandia', 23),
    (1400456, 'Pacaraima', 23),
    (1400472, 'Rorainópolis', 23),
    (1400506, 'São João da Baliza', 23),
    (1400605, 'São Luiz', 23),
    (1400704, 'Uiramutã', 23);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 23`);
  }

}
