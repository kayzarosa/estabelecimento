import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeAM1609802428044 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO cidades (codigo_ibge, nome, estado_id) VALUES(1300029, 'Alvarães', 4),
        (1300060, 'Amaturá', 4),
        (1300086, 'Anamã', 4),
        (1300102, 'Anori', 4),
        (1300144, 'Apuí', 4),
        (1300201, 'Atalaia do Norte', 4),
        (1300300, 'Autazes', 4),
        (1300409, 'Barcelos', 4),
        (1300508, 'Barreirinha', 4),
        (1300607, 'Benjamin Constant', 4),
        (1300631, 'Beruri', 4),
        (1300680, 'Boa Vista do Ramos', 4),
        (1300706, 'Boca do Acre', 4),
        (1300805, 'Borba', 4),
        (1300839, 'Caapiranga', 4),
        (1300904, 'Canutama', 4),
        (1301001, 'Carauari', 4),
        (1301100, 'Careiro', 4),
        (1301159, 'Careiro da Várzea', 4),
        (1301209, 'Coari', 4),
        (1301308, 'Codajás', 4),
        (1301407, 'Eirunepé', 4),
        (1301506, 'Envira', 4),
        (1301605, 'Fonte Boa', 4),
        (1301654, 'Guajará', 4),
        (1301704, 'Humaitá', 4),
        (1301803, 'Ipixuna', 4),
        (1301852, 'Iranduba', 4),
        (1301902, 'Itacoatiara', 4),
        (1301951, 'Itamarati', 4),
        (1302009, 'Itapiranga', 4),
        (1302108, 'Japurá', 4),
        (1302207, 'Juruá', 4),
        (1302306, 'Jutaí', 4),
        (1302405, 'Lábrea', 4),
        (1302504, 'Manacapuru', 4),
        (1302553, 'Manaquiri', 4),
        (1302603, 'Manaus', 4),
        (1302702, 'Manicoré', 4),
        (1302801, 'Maraã', 4),
        (1302900, 'Maués', 4),
        (1303007, 'Nhamundá', 4),
        (1303106, 'Nova Olinda do Norte', 4),
        (1303205, 'Novo Airão', 4),
        (1303304, 'Novo Aripuanã', 4),
        (1303403, 'Parintins', 4),
        (1303502, 'Pauini', 4),
        (1303536, 'Presidente Figueiredo', 4),
        (1303569, 'Rio Preto da Eva', 4),
        (1303601, 'Santa Isabel do Rio Negro', 4),
        (1303700, 'Santo Antônio do Içá', 4),
        (1303809, 'São Gabriel da Cachoeira', 4),
        (1303908, 'São Paulo de Olivença', 4),
        (1303957, 'São Sebastião do Uatumã', 4),
        (1304005, 'Silves', 4),
        (1304062, 'Tabatinga', 4),
        (1304104, 'Tapauá', 4),
        (1304203, 'Tefé', 4),
        (1304237, 'Tonantins', 4),
        (1304260, 'Uarini', 4),
        (1304302, 'Urucará', 4),
        (1304401, 'Urucurituba', 4);
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 4`);
  }

}
