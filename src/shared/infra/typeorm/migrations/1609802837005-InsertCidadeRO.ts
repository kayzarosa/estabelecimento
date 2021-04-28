import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeRO1609802837005 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(1100015, "Alta Floresta d'Oeste", 22),
    (1100379, 'Alto Alegre dos Parecis', 22),
    (1100403, 'Alto Paraíso', 22),
    (1100346, "Alvorada d'Oeste", 22),
    (1100023, 'Ariquemes', 22),
    (1100452, 'Buritis', 22),
    (1100031, 'Cabixi', 22),
    (1100601, 'Cacaulândia', 22),
    (1100049, 'Cacoal', 22),
    (1100700, 'Campo Novo de Rondônia', 22),
    (1100809, 'Candeias do Jamari', 22),
    (1100908, 'Castanheiras', 22),
    (1100056, 'Cerejeiras', 22),
    (1100924, 'Chupinguaia', 22),
    (1100064, 'Colorado do Oeste', 22),
    (1100072, 'Corumbiara', 22),
    (1100080, 'Costa Marques', 22),
    (1100940, 'Cujubim', 22),
    (1100098, "Espigão d'Oeste", 22),
    (1101005, 'Governador Jorge Teixeira', 22),
    (1100106, 'Guajará-Mirim', 22),
    (1101104, 'Itapuã do Oeste', 22),
    (1100114, 'Jaru', 22),
    (1100122, 'Ji-Paraná', 22),
    (1100130, "Machadinho d'Oeste", 22),
    (1101203, 'Ministro Andreazza', 22),
    (1101302, 'Mirante da Serra', 22),
    (1101401, 'Monte Negro', 22),
    (1100148, "Nova Brasilândia d'Oeste", 22),
    (1100338, 'Nova Mamoré', 22),
    (1101435, 'Nova União', 22),
    (1100502, 'Novo Horizonte do Oeste', 22),
    (1100155, 'Ouro Preto do Oeste', 22),
    (1101450, 'Parecis', 22),
    (1100189, 'Pimenta Bueno', 22),
    (1101468, 'Pimenteiras do Oeste', 22),
    (1100205, 'Porto Velho', 22),
    (1100254, 'Presidente Médici', 22),
    (1101476, 'Primavera de Rondônia', 22),
    (1100262, 'Rio Crespo', 22),
    (1100288, 'Rolim de Moura', 22),
    (1100296, "Santa Luzia d'Oeste", 22),
    (1101484, "São Felipe d'Oeste", 22),
    (1101492, 'São Francisco do Guaporé', 22),
    (1100320, 'São Miguel do Guaporé', 22),
    (1101500, 'Seringueiras', 22),
    (1101559, 'Teixeirópolis', 22),
    (1101609, 'Theobroma', 22),
    (1101708, 'Urupá', 22),
    (1101757, 'Vale do Anari', 22),
    (1101807, 'Vale do Paraíso', 22),
    (1100304, 'Vilhena', 22);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 22`);
  }

}
