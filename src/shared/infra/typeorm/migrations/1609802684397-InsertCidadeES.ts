import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeES1609802684397 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(3200102, 'Afonso Cláudio', 8),
      (3200136, 'Água Doce do Norte', 8),
      (3200169, 'Águia Branca', 8),
      (3200201, 'Alegre', 8),
      (3200300, 'Alfredo Chaves', 8),
      (3200359, 'Alto Rio Novo', 8),
      (3200409, 'Anchieta', 8),
      (3200508, 'Apiacá', 8),
      (3200607, 'Aracruz', 8),
      (3200706, 'Atílio Vivácqua', 8),
      (3200805, 'Baixo Guandu', 8),
      (3200904, 'Barra de São Francisco', 8),
      (3201001, 'Boa Esperança', 8),
      (3201100, 'Bom Jesus do Norte', 8),
      (3201159, 'Brejetuba', 8),
      (3201209, 'Cachoeiro de Itapemirim', 8),
      (3201308, 'Cariacica', 8),
      (3201407, 'Castelo', 8),
      (3201506, 'Colatina', 8),
      (3201605, 'Conceição da Barra', 8),
      (3201704, 'Conceição do Castelo', 8),
      (3201803, 'Divino de São Lourenço', 8),
      (3201902, 'Domingos Martins', 8),
      (3202009, 'Dores do Rio Preto', 8),
      (3202108, 'Ecoporanga', 8),
      (3202207, 'Fundão', 8),
      (3202256, 'Governador Lindenberg', 8),
      (3202306, 'Guaçuí', 8),
      (3202405, 'Guarapari', 8),
      (3202454, 'Ibatiba', 8),
      (3202504, 'Ibiraçu', 8),
      (3202553, 'Ibitirama', 8),
      (3202603, 'Iconha', 8),
      (3202652, 'Irupi', 8),
      (3202702, 'Itaguaçu', 8),
      (3202801, 'Itapemirim', 8),
      (3202900, 'Itarana', 8),
      (3203007, 'Iúna', 8),
      (3203056, 'Jaguaré', 8),
      (3203106, 'Jerônimo Monteiro', 8),
      (3203130, 'João Neiva', 8),
      (3203163, 'Laranja da Terra', 8),
      (3203205, 'Linhares', 8),
      (3203304, 'Mantenópolis', 8),
      (3203320, 'Marataízes', 8),
      (3203346, 'Marechal Floriano', 8),
      (3203353, 'Marilândia', 8),
      (3203403, 'Mimoso do Sul', 8),
      (3203502, 'Montanha', 8),
      (3203601, 'Mucurici', 8),
      (3203700, 'Muniz Freire', 8),
      (3203809, 'Muqui', 8),
      (3203908, 'Nova Venécia', 8),
      (3204005, 'Pancas', 8),
      (3204054, 'Pedro Canário', 8),
      (3204104, 'Pinheiros', 8),
      (3204203, 'Piúma', 8),
      (3204252, 'Ponto Belo', 8),
      (3204302, 'Presidente Kennedy', 8),
      (3204351, 'Rio Bananal', 8),
      (3204401, 'Rio Novo do Sul', 8),
      (3204500, 'Santa Leopoldina', 8),
      (3204559, 'Santa Maria de Jetibá', 8),
      (3204609, 'Santa Teresa', 8),
      (3204658, 'São Domingos do Norte', 8),
      (3204708, 'São Gabriel da Palha', 8),
      (3204807, 'São José do Calçado', 8),
      (3204906, 'São Mateus', 8),
      (3204955, 'São Roque do Canaã', 8),
      (3205002, 'Serra', 8),
      (3205010, 'Sooretama', 8),
      (3205036, 'Vargem Alta', 8),
      (3205069, 'Venda Nova do Imigrante', 8),
      (3205101, 'Viana', 8),
      (3205150, 'Vila Pavão', 8),
      (3205176, 'Vila Valério', 8),
      (3205200, 'Vila Velha', 8),
      (3205309, 'Vitória', 8);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 8`);
  }

}