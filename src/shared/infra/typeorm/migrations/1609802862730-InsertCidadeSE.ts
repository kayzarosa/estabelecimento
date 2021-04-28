import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeSE1609802862730 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(2800100, "Amparo de São Francisco", 26),
    (2800209, "Aquidabã", 26),
    (2800308, "Aracaju", 26),
    (2800407, "Arauá", 26),
    (2800506, "Areia Branca", 26),
    (2800605, "Barra dos Coqueiros", 26),
    (2800670, "Boquim", 26),
    (2800704, "Brejo Grande", 26),
    (2801009, "Campo do Brito", 26),
    (2801108, "Canhoba", 26),
    (2801207, "Canindé de São Francisco", 26),
    (2801306, "Capela", 26),
    (2801405, "Carira", 26),
    (2801504, "Carmópolis", 26),
    (2801603, "Cedro de São João", 26),
    (2801702, "Cristinápolis", 26),
    (2801900, "Cumbe", 26),
    (2802007, "Divina Pastora", 26),
    (2802106, "Estância", 26),
    (2802205, "Feira Nova", 26),
    (2802304, "Frei Paulo", 26),
    (2802403, "Gararu", 26),
    (2802502, "General Maynard", 26),
    (2802601, "Graccho Cardoso", 26),
    (2802700, "Ilha das Flores", 26),
    (2802809, "Indiaroba", 26),
    (2802908, "Itabaiana", 26),
    (2803005, "Itabaianinha", 26),
    (2803104, "Itabi", 26),
    (2803203, "Itaporanga d'Ajuda", 26),
    (2803302, "Japaratuba", 26),
    (2803401, "Japoatã", 26),
    (2803500, "Lagarto", 26),
    (2803609, "Laranjeiras", 26),
    (2803708, "Macambira", 26),
    (2803807, "Malhada dos Bois", 26),
    (2803906, "Malhador", 26),
    (2804003, "Maruim", 26),
    (2804102, "Moita Bonita", 26),
    (2804201, "Monte Alegre de Sergipe", 26),
    (2804300, "Muribeca", 26),
    (2804409, "Neópolis", 26),
    (2804458, "Nossa Senhora Aparecida", 26),
    (2804508, "Nossa Senhora da Glória", 26),
    (2804607, "Nossa Senhora das Dores", 26),
    (2804706, "Nossa Senhora de Lourdes", 26),
    (2804805, "Nossa Senhora do Socorro", 26),
    (2804904, "Pacatuba", 26),
    (2805000, "Pedra Mole", 26),
    (2805109, "Pedrinhas", 26),
    (2805208, "Pinhão", 26),
    (2805307, "Pirambu", 26),
    (2805406, "Poço Redondo", 26),
    (2805505, "Poço Verde", 26),
    (2805604, "Porto da Folha", 26),
    (2805703, "Propriá", 26),
    (2805802, "Riachão do Dantas", 26),
    (2805901, "Riachuelo", 26),
    (2806008, "Ribeirópolis", 26),
    (2806107, "Rosário do Catete", 26),
    (2806206, "Salgado", 26),
    (2806305, "Santa Luzia do Itanhy", 26),
    (2806503, "Santa Rosa de Lima", 26),
    (2806404, "Santana do São Francisco", 26),
    (2806602, "Santo Amaro das Brotas", 26),
    (2806701, "São Cristóvão", 26),
    (2806800, "São Domingos", 26),
    (2806909, "São Francisco", 26),
    (2807006, "São Miguel do Aleixo", 26),
    (2807105, "Simão Dias", 26),
    (2807204, "Siriri", 26),
    (2807303, "Telha", 26),
    (2807402, "Tobias Barreto", 26),
    (2807501, "Tomar do Geru", 26),
    (2807600, "Umbaúba", 26);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 26`);
  }

}