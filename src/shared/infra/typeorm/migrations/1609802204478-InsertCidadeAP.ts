import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCidadeAP1609802204478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO cidades (codigo_ibge, nome, estado_id) VALUES(1600105, 'Amapá', 3),
        (1600204, 'Calçoene', 3),
        (1600212, 'Cutias', 3),
        (1600238, 'Ferreira Gomes', 3),
        (1600253, 'Itaubal', 3),
        (1600279, 'Laranjal do Jari', 3),
        (1600303, 'Macapá', 3),
        (1600402, 'Mazagão', 3),
        (1600501, 'Oiapoque', 3),
        (1600154, 'Pedra Branca do Amapari', 3),
        (1600535, 'Porto Grande', 3),
        (1600550, 'Pracuúba', 3),
        (1600600, 'Santana', 3),
        (1600055, 'Serra do Navio', 3),
        (1600709, 'Tartarugalzinho', 3),
        (1600808, 'Vitória do Jari', 3);
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 3`);
    }

}
