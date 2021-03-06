import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInicial1604605762271 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO estados (id, sigla, nome, data_criacao, data_alteracao) VALUES
    (1, 'AC', 'Acre', '2020-08-15 06:18:15.0', '2020-08-15 06:18:15.0'),
    (2, 'AL', 'Alagoas', '2020-08-15 06:18:24.0', '2020-08-15 06:18:24.0'),
    (4, 'AM', 'Amazonas', '2020-08-15 06:18:30.0', '2020-08-15 06:18:30.0'),
    (5, 'BA', 'Bahia', '2020-08-15 06:18:33.0', '2020-08-15 06:18:33.0'),
    (6, 'CE', 'Ceará', '2020-08-15 06:18:34.0', '2020-08-15 06:18:34.0'),
    (7, 'DF', 'Distrito Federal', '2020-08-15 06:18:35.0', '2020-08-15 06:18:35.0'),
    (8, 'ES', 'Espírito Santo', '2020-08-15 06:18:37.0', '2020-08-15 06:18:37.0'),
    (9, 'GO', 'Goiás', '2020-08-15 06:18:38.0', '2020-08-15 06:18:38.0'),
    (10, 'MA', 'Maranhão', '2020-08-15 06:18:40.0', '2020-08-15 06:18:40.0'),
    (11, 'MT', 'Mato Grosso', '2020-08-15 06:18:43.0', '2020-08-15 06:18:43.0'),
    (12, 'MS', 'Mato Grosso do Sul', '2020-08-15 06:18:44.0', '2020-08-15 06:18:44.0'),
    (13, 'MG', 'Minas Gerais', '2020-08-15 06:18:47.0', '2020-08-15 06:18:47.0'),
    (14, 'PA', 'Pará', '2020-08-15 06:18:48.0', '2020-08-15 06:18:48.0'),
    (15, 'PB', 'Paraíba', '2020-08-15 06:18:50.0', '2020-08-15 06:18:50.0'),
    (16, 'PR', 'Paraná', '2020-08-15 06:18:52.0', '2020-08-15 06:18:52.0'),
    (17, 'PE', 'Pernambuco', '2020-08-15 06:18:53.0', '2020-08-15 06:18:53.0'),
    (18, 'PI', 'Piauí', '2020-08-15 06:18:55.0', '2020-08-15 06:18:55.0'),
    (19, 'RJ', 'Rio de Janeiro', '2020-08-15 06:18:57.0', '2020-08-15 06:18:57.0'),
    (20, 'RN', 'Rio Grande do Norte', '2020-08-15 06:18:58.0', '2020-08-15 06:18:58.0'),
    (21, 'RS', 'Rio Grande do Sul', '2020-08-15 06:19:00.0', '2020-08-15 06:19:00.0'),
    (22, 'RO', 'Rondônia', '2020-08-15 06:19:01.0', '2020-08-15 06:19:01.0'),
    (23, 'RR', 'Roraima', '2020-08-15 06:19:03.0', '2020-08-15 06:19:03.0'),
    (24, 'SC', 'Santa Catarina', '2020-08-15 06:19:05.0', '2020-08-15 06:19:05.0'),
    (25, 'SP', 'São Paulo', '2020-08-15 06:19:06.0', '2020-08-15 06:19:06.0'),
    (26, 'SE', 'Sergipe', '2020-08-15 06:19:08.0', '2020-08-15 06:19:08.0'),
    (27, 'TO', 'Tocantins', '2020-08-15 06:19:09.0', '2020-08-15 06:19:09.0')`);
  
    await queryRunner.query(`INSERT INTO cidades (id, codigo_ibge, nome, estado_id, data_criacao, data_alteracao) VALUES
    (1, NULL, 'Uberlândia', 13, '2020-08-15 21:01:52.0', '2020-08-15 21:01:52.0'),
    (2, NULL, 'Uberaba', 13, '2020-08-15 21:02:36.0', '2020-08-15 21:02:36.0'),
    (3, NULL, 'Iturama', 13, '2020-08-15 21:02:36.0', '2020-08-15 21:02:36.0'),
    (4, NULL, 'São Paulo', 25, '2020-08-15 21:02:36.0', '2020-08-15 21:02:36.0'),
    (5, NULL, 'Votuporanga', 25, '2020-08-15 21:03:02.0', '2020-08-15 21:03:02.0'),
    (6, NULL, 'Fernandopólis', 25, '2020-08-15 21:03:02.0', '2020-08-15 21:03:02.0'),
    (7, NULL, 'Prata', 13, '2020-08-16 01:19:32.0', '2020-08-16 01:19:32.0')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from estados`);
    await queryRunner.query(`delete from cidades`);

  }

}
