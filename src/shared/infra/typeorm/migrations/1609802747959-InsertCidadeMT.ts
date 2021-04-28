import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCidadeMT1609802747959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(5100102, 'Acorizal', 11),
        (5100201, 'Água Boa', 11),
        (5100250, 'Alta Floresta', 11),
        (5100300, 'Alto Araguaia', 11),
        (5100359, 'Alto Boa Vista', 11),
        (5100409, 'Alto Garças', 11),
        (5100508, 'Alto Paraguai', 11),
        (5100607, 'Alto Taquari', 11),
        (5100805, 'Apiacás', 11),
        (5101001, 'Araguaiana', 11),
        (5101209, 'Araguainha', 11),
        (5101258, 'Araputanga', 11),
        (5101308, 'Arenápolis', 11),
        (5101407, 'Aripuanã', 11),
        (5101605, 'Barão de Melgaço', 11),
        (5101704, 'Barra do Bugres', 11),
        (5101803, 'Barra do Garças', 11),
        (5101852, 'Bom Jesus do Araguaia', 11),
        (5101902, 'Brasnorte', 11),
        (5102504, 'Cáceres', 11),
        (5102603, 'Campinápolis', 11),
        (5102637, 'Campo Novo do Parecis', 11),
        (5102678, 'Campo Verde', 11),
        (5102686, 'Campos de Júlio', 11),
        (5102694, 'Canabrava do Norte', 11),
        (5102702, 'Canarana', 11),
        (5102793, 'Carlinda', 11),
        (5102850, 'Castanheira', 11),
        (5103007, 'Chapada dos Guimarães', 11),
        (5103056, 'Cláudia', 11),
        (5103106, 'Cocalinho', 11),
        (5103205, 'Colíder', 11),
        (5103254, 'Colniza', 11),
        (5103304, 'Comodoro', 11),
        (5103353, 'Confresa', 11),
        (5103361, "Conquista d'Oeste", 11),
        (5103379, 'Cotriguaçu', 11),
        (5103403, 'Cuiabá', 11),
        (5103437, 'Curvelândia', 11),
        (5103452, 'Denise', 11),
        (5103502, 'Diamantino', 11),
        (5103601, 'Dom Aquino', 11),
        (5103700, 'Feliz Natal', 11),
        (5103809, "Figueirópolis d'Oeste", 11),
        (5103858, 'Gaúcha do Norte', 11),
        (5103908, 'General Carneiro', 11),
        (5103957, "Glória d'Oeste", 11),
        (5104104, 'Guarantã do Norte', 11),
        (5104203, 'Guiratinga', 11),
        (5104500, 'Indiavaí', 11),
        (5104526, 'Ipiranga do Norte', 11),
        (5104542, 'Itanhangá', 11),
        (5104559, 'Itaúba', 11),
        (5104609, 'Itiquira', 11),
        (5104807, 'Jaciara', 11),
        (5104906, 'Jangada', 11),
        (5105002, 'Jauru', 11),
        (5105101, 'Juara', 11),
        (5105150, 'Juína', 11),
        (5105176, 'Juruena', 11),
        (5105200, 'Juscimeira', 11),
        (5105234, "Lambari d'Oeste", 11),
        (5105259, 'Lucas do Rio Verde', 11),
        (5105309, 'Luciara', 11),
        (5105580, 'Marcelândia', 11),
        (5105606, 'Matupá', 11),
        (5105622, "Mirassol d'Oeste", 11),
        (5105903, 'Nobres', 11),
        (5106000, 'Nortelândia', 11),
        (5106109, 'Nossa Senhora do Livramento', 11),
        (5106158, 'Nova Bandeirantes', 11),
        (5106208, 'Nova Brasilândia', 11),
        (5106216, 'Nova Canaã do Norte', 11),
        (5108808, 'Nova Guarita', 11),
        (5106182, 'Nova Lacerda', 11),
        (5108857, 'Nova Marilândia', 11),
        (5108907, 'Nova Maringá', 11),
        (5108956, 'Nova Monte Verde', 11),
        (5106224, 'Nova Mutum', 11),
        (5106174, 'Nova Nazaré', 11),
        (5106232, 'Nova Olímpia', 11),
        (5106190, 'Nova Santa Helena', 11),
        (5106240, 'Nova Ubiratã', 11),
        (5106257, 'Nova Xavantina', 11),
        (5106273, 'Novo Horizonte do Norte', 11),
        (5106265, 'Novo Mundo', 11),
        (5106315, 'Novo Santo Antônio', 11),
        (5106281, 'Novo São Joaquim', 11),
        (5106299, 'Paranaíta', 11),
        (5106307, 'Paranatinga', 11),
        (5106372, 'Pedra Preta', 11),
        (5106422, 'Peixoto de Azevedo', 11),
        (5106455, 'Planalto da Serra', 11),
        (5106505, 'Poconé', 11),
        (5106653, 'Pontal do Araguaia', 11),
        (5106703, 'Ponte Branca', 11),
        (5106752, 'Pontes e Lacerda', 11),
        (5106778, 'Porto Alegre do Norte', 11),
        (5106802, 'Porto dos Gaúchos', 11),
        (5106828, 'Porto Esperidião', 11),
        (5106851, 'Porto Estrela', 11),
        (5107008, 'Poxoréu', 11),
        (5107040, 'Primavera do Leste', 11),
        (5107065, 'Querência', 11),
        (5107156, 'Reserva do Cabaçal', 11),
        (5107180, 'Ribeirão Cascalheira', 11),
        (5107198, 'Ribeirãozinho', 11),
        (5107206, 'Rio Branco', 11),
        (5107578, 'Rondolândia', 11),
        (5107602, 'Rondonópolis', 11),
        (5107701, 'Rosário Oeste', 11),
        (5107750, 'Salto do Céu', 11),
        (5107248, 'Santa Carmem', 11),
        (5107743, 'Santa Cruz do Xingu', 11),
        (5107768, 'Santa Rita do Trivelato', 11),
        (5107776, 'Santa Terezinha', 11),
        (5107263, 'Santo Afonso', 11),
        (5107792, 'Santo Antônio do Leste', 11),
        (5107800, 'Santo Antônio de Leverger', 11),
        (5107859, 'São Félix do Araguaia', 11),
        (5107297, 'São José do Povo', 11),
        (5107305, 'São José do Rio Claro', 11),
        (5107354, 'São José do Xingu', 11),
        (5107107, 'São José dos Quatro Marcos', 11),
        (5107404, 'São Pedro da Cipa', 11),
        (5107875, 'Sapezal', 11),
        (5107883, 'Serra Nova Dourada', 11),
        (5107909, 'Sinop', 11),
        (5107925, 'Sorriso', 11),
        (5107941, 'Tabaporã', 11),
        (5107958, 'Tangará da Serra', 11),
        (5108006, 'Tapurah', 11),
        (5108055, 'Terra Nova do Norte', 11),
        (5108105, 'Tesouro', 11),
        (5108204, 'Torixoréu', 11),
        (5108303, 'União do Sul', 11),
        (5108352, 'Vale de São Domingos', 11),
        (5108402, 'Várzea Grande', 11),
        (5108501, 'Vera', 11),
        (5105507, 'Vila Bela da Santíssima Trindade', 11),
        (5108600, 'Vila Rica', 11);
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 11`);
    }

}
