import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadeTO1609802870361 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(1700251, "Abreulândia", 27),
    (1700301, "Aguiarnópolis", 27),
    (1700350, "Aliança do Tocantins", 27),
    (1700400, "Almas", 27),
    (1700707, "Alvorada", 27),
    (1701002, "Ananás", 27),
    (1701051, "Angico", 27),
    (1701101, "Aparecida do Rio Negro", 27),
    (1701309, "Aragominas", 27),
    (1701903, "Araguacema", 27),
    (1702000, "Araguaçu", 27),
    (1702109, "Araguaína", 27),
    (1702158, "Araguanã", 27),
    (1702208, "Araguatins", 27),
    (1702307, "Arapoema", 27),
    (1702406, "Arraias", 27),
    (1702554, "Augustinópolis", 27),
    (1702703, "Aurora do Tocantins", 27),
    (1702901, "Axixá do Tocantins", 27),
    (1703008, "Babaçulândia", 27),
    (1703057, "Bandeirantes do Tocantins", 27),
    (1703073, "Barra do Ouro", 27),
    (1703107, "Barrolândia", 27),
    (1703206, "Bernardo Sayão", 27),
    (1703305, "Bom Jesus do Tocantins", 27),
    (1703602, "Brasilândia do Tocantins", 27),
    (1703701, "Brejinho de Nazaré", 27),
    (1703800, "Buriti do Tocantins", 27),
    (1703826, "Cachoeirinha", 27),
    (1703842, "Campos Lindos", 27),
    (1703867, "Cariri do Tocantins", 27),
    (1703883, "Carmolândia", 27),
    (1703891, "Carrasco Bonito", 27),
    (1703909, "Caseara", 27),
    (1704105, "Centenário", 27),
    (1705102, "Chapada da Natividade", 27),
    (1704600, "Chapada de Areia", 27),
    (1705508, "Colinas do Tocantins", 27),
    (1716703, "Colméia", 27),
    (1705557, "Combinado", 27),
    (1705607, "Conceição do Tocantins", 27),
    (1706001, "Couto de Magalhães", 27),
    (1706100, "Cristalândia", 27),
    (1706258, "Crixás do Tocantins", 27),
    (1706506, "Darcinópolis", 27),
    (1707009, "Dianópolis", 27),
    (1707108, "Divinópolis do Tocantins", 27),
    (1707207, "Dois Irmãos do Tocantins", 27),
    (1707306, "Dueré", 27),
    (1707405, "Esperantina", 27),
    (1707553, "Fátima", 27),
    (1707652, "Figueirópolis", 27),
    (1707702, "Filadélfia", 27),
    (1708205, "Formoso do Araguaia", 27),
    (1708304, "Goianorte", 27),
    (1709005, "Goiatins", 27),
    (1709302, "Guaraí", 27),
    (1709500, "Gurupi", 27),
    (1709807, "Ipueiras", 27),
    (1710508, "Itacajá", 27),
    (1710706, "Itaguatins", 27),
    (1710904, "Itapiratins", 27),
    (1711100, "Itaporã do Tocantins", 27),
    (1711506, "Jaú do Tocantins", 27),
    (1711803, "Juarina", 27),
    (1711902, "Lagoa da Confusão", 27),
    (1711951, "Lagoa do Tocantins", 27),
    (1712009, "Lajeado", 27),
    (1712157, "Lavandeira", 27),
    (1712405, "Lizarda", 27),
    (1712454, "Luzinópolis", 27),
    (1712504, "Marianópolis do Tocantins", 27),
    (1712702, "Mateiros", 27),
    (1712801, "Maurilândia do Tocantins", 27),
    (1713205, "Miracema do Tocantins", 27),
    (1713304, "Miranorte", 27),
    (1713601, "Monte do Carmo", 27),
    (1713700, "Monte Santo do Tocantins", 27),
    (1713957, "Muricilândia", 27),
    (1714203, "Natividade", 27),
    (1714302, "Nazaré", 27),
    (1714880, "Nova Olinda", 27),
    (1715002, "Nova Rosalândia", 27),
    (1715101, "Novo Acordo", 27),
    (1715150, "Novo Alegre", 27),
    (1715259, "Novo Jardim", 27),
    (1715507, "Oliveira de Fátima", 27),
    (1721000, "Palmas", 27),
    (1715705, "Palmeirante", 27),
    (1713809, "Palmeiras do Tocantins", 27),
    (1715754, "Palmeirópolis", 27),
    (1716109, "Paraíso do Tocantins", 27),
    (1716208, "Paranã", 27),
    (1716307, "Pau d'Arco", 27),
    (1716505, "Pedro Afonso", 27),
    (1716604, "Peixe", 27),
    (1716653, "Pequizeiro", 27),
    (1717008, "Pindorama do Tocantins", 27),
    (1717206, "Piraquê", 27),
    (1717503, "Pium", 27),
    (1717800, "Ponte Alta do Bom Jesus", 27),
    (1717909, "Ponte Alta do Tocantins", 27),
    (1718006, "Porto Alegre do Tocantins", 27),
    (1718204, "Porto Nacional", 27),
    (1718303, "Praia Norte", 27),
    (1718402, "Presidente Kennedy", 27),
    (1718451, "Pugmil", 27),
    (1718501, "Recursolândia", 27),
    (1718550, "Riachinho", 27),
    (1718659, "Rio da Conceição", 27),
    (1718709, "Rio dos Bois", 27),
    (1718758, "Rio Sono", 27),
    (1718808, "Sampaio", 27),
    (1718840, "Sandolândia", 27),
    (1718865, "Santa Fé do Araguaia", 27),
    (1718881, "Santa Maria do Tocantins", 27),
    (1718899, "Santa Rita do Tocantins", 27),
    (1718907, "Santa Rosa do Tocantins", 27),
    (1719004, "Santa Tereza do Tocantins", 27),
    (1720002, "Santa Terezinha do Tocantins", 27),
    (1720101, "São Bento do Tocantins", 27),
    (1720150, "São Félix do Tocantins", 27),
    (1720200, "São Miguel do Tocantins", 27),
    (1720259, "São Salvador do Tocantins", 27),
    (1720309, "São Sebastião do Tocantins", 27),
    (1720499, "São Valério", 27),
    (1720655, "Silvanópolis", 27),
    (1720804, "Sítio Novo do Tocantins", 27),
    (1720853, "Sucupira", 27),
    (1708254, "Tabocão", 27),
    (1720903, "Taguatinga", 27),
    (1720937, "Taipas do Tocantins", 27),
    (1720978, "Talismã", 27),
    (1721109, "Tocantínia", 27),
    (1721208, "Tocantinópolis", 27),
    (1721257, "Tupirama", 27),
    (1721307, "Tupiratins", 27),
    (1722081, "Wanderlândia", 27),
    (1722107, "Xambioá", 27);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 27`);
  }

}
