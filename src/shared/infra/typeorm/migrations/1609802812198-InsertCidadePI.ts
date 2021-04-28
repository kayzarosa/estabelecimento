import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCidadePI1609802812198 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(2200053, 'Acauã', 18),
    (2200103, 'Agricolândia', 18),
    (2200202, 'Água Branca', 18),
    (2200251, 'Alagoinha do Piauí', 18),
    (2200277, 'Alegrete do Piauí', 18),
    (2200301, 'Alto Longá', 18),
    (2200400, 'Altos', 18),
    (2200459, 'Alvorada do Gurgueia', 18),
    (2200509, 'Amarante', 18),
    (2200608, 'Angical do Piauí', 18),
    (2200707, 'Anísio de Abreu', 18),
    (2200806, 'Antônio Almeida', 18),
    (2200905, 'Aroazes', 18),
    (2200954, 'Aroeiras do Itaim', 18),
    (2201002, 'Arraial', 18),
    (2201051, 'Assunção do Piauí', 18),
    (2201101, 'Avelino Lopes', 18),
    (2201150, 'Baixa Grande do Ribeiro', 18),
    (2201176, "Barra d'Alcântara", 18),
    (2201200, 'Barras', 18),
    (2201309, 'Barreiras do Piauí', 18),
    (2201408, 'Barro Duro', 18),
    (2201507, 'Batalha', 18),
    (2201556, 'Bela Vista do Piauí', 18),
    (2201572, 'Belém do Piauí', 18),
    (2201606, 'Beneditinos', 18),
    (2201705, 'Bertolínia', 18),
    (2201739, 'Betânia do Piauí', 18),
    (2201770, 'Boa Hora', 18),
    (2201804, 'Bocaina', 18),
    (2201903, 'Bom Jesus', 18),
    (2201919, 'Bom Princípio do Piauí', 18),
    (2201929, 'Bonfim do Piauí', 18),
    (2201945, 'Boqueirão do Piauí', 18),
    (2201960, 'Brasileira', 18),
    (2201988, 'Brejo do Piauí', 18),
    (2202000, 'Buriti dos Lopes', 18),
    (2202026, 'Buriti dos Montes', 18),
    (2202059, 'Cabeceiras do Piauí', 18),
    (2202075, 'Cajazeiras do Piauí', 18),
    (2202083, 'Cajueiro da Praia', 18),
    (2202091, 'Caldeirão Grande do Piauí', 18),
    (2202109, 'Campinas do Piauí', 18),
    (2202117, 'Campo Alegre do Fidalgo', 18),
    (2202133, 'Campo Grande do Piauí', 18),
    (2202174, 'Campo Largo do Piauí', 18),
    (2202208, 'Campo Maior', 18),
    (2202251, 'Canavieira', 18),
    (2202307, 'Canto do Buriti', 18),
    (2202406, 'Capitão de Campos', 18),
    (2202455, 'Capitão Gervásio Oliveira', 18),
    (2202505, 'Caracol', 18),
    (2202539, 'Caraúbas do Piauí', 18),
    (2202554, 'Caridade do Piauí', 18),
    (2202604, 'Castelo do Piauí', 18),
    (2202653, 'Caxingó', 18),
    (2202703, 'Cocal', 18),
    (2202711, 'Cocal de Telha', 18),
    (2202729, 'Cocal dos Alves', 18),
    (2202737, 'Coivaras', 18),
    (2202752, 'Colônia do Gurgueia', 18),
    (2202778, 'Colônia do Piauí', 18),
    (2202802, 'Conceição do Canindé', 18),
    (2202851, 'Coronel José Dias', 18),
    (2202901, 'Corrente', 18),
    (2203008, 'Cristalândia do Piauí', 18),
    (2203107, 'Cristino Castro', 18),
    (2203206, 'Curimatá', 18),
    (2203230, 'Currais', 18),
    (2203271, 'Curral Novo do Piauí', 18),
    (2203255, 'Curralinhos', 18),
    (2203305, 'Demerval Lobão', 18),
    (2203354, 'Dirceu Arcoverde', 18),
    (2203404, 'Dom Expedito Lopes', 18),
    (2203453, 'Dom Inocêncio', 18),
    (2203420, 'Domingos Mourão', 18),
    (2203503, 'Elesbão Veloso', 18),
    (2203602, 'Eliseu Martins', 18),
    (2203701, 'Esperantina', 18),
    (2203750, 'Fartura do Piauí', 18),
    (2203800, 'Flores do Piauí', 18),
    (2203859, 'Floresta do Piauí', 18),
    (2203909, 'Floriano', 18),
    (2204006, 'Francinópolis', 18),
    (2204105, 'Francisco Ayres', 18),
    (2204154, 'Francisco Macedo', 18),
    (2204204, 'Francisco Santos', 18),
    (2204303, 'Fronteiras', 18),
    (2204352, 'Geminiano', 18),
    (2204402, 'Gilbués', 18),
    (2204501, 'Guadalupe', 18),
    (2204550, 'Guaribas', 18),
    (2204600, 'Hugo Napoleão', 18),
    (2204659, 'Ilha Grande', 18),
    (2204709, 'Inhuma', 18),
    (2204808, 'Ipiranga do Piauí', 18),
    (2204907, 'Isaías Coelho', 18),
    (2205003, 'Itainópolis', 18),
    (2205102, 'Itaueira', 18),
    (2205151, 'Jacobina do Piauí', 18),
    (2205201, 'Jaicós', 18),
    (2205250, 'Jardim do Mulato', 18),
    (2205276, 'Jatobá do Piauí', 18),
    (2205300, 'Jerumenha', 18),
    (2205359, 'João Costa', 18),
    (2205409, 'Joaquim Pires', 18),
    (2205458, 'Joca Marques', 18),
    (2205508, 'José de Freitas', 18),
    (2205516, 'Juazeiro do Piauí', 18),
    (2205524, 'Júlio Borges', 18),
    (2205532, 'Jurema', 18),
    (2205557, 'Lagoa Alegre', 18),
    (2205573, 'Lagoa de São Francisco', 18),
    (2205565, 'Lagoa do Barro do Piauí', 18),
    (2205581, 'Lagoa do Piauí', 18),
    (2205599, 'Lagoa do Sítio', 18),
    (2205540, 'Lagoinha do Piauí', 18),
    (2205607, 'Landri Sales', 18),
    (2205706, 'Luís Correia', 18),
    (2205805, 'Luzilândia', 18),
    (2205854, 'Madeiro', 18),
    (2205904, 'Manoel Emídio', 18),
    (2205953, 'Marcolândia', 18),
    (2206001, 'Marcos Parente', 18),
    (2206050, 'Massapê do Piauí', 18),
    (2206100, 'Matias Olímpio', 18),
    (2206209, 'Miguel Alves', 18),
    (2206308, 'Miguel Leão', 18),
    (2206357, 'Milton Brandão', 18),
    (2206407, 'Monsenhor Gil', 18),
    (2206506, 'Monsenhor Hipólito', 18),
    (2206605, 'Monte Alegre do Piauí', 18),
    (2206654, 'Morro Cabeça no Tempo', 18),
    (2206670, 'Morro do Chapéu do Piauí', 18),
    (2206696, 'Murici dos Portelas', 18),
    (2206704, 'Nazaré do Piauí', 18),
    (2206720, 'Nazária', 18),
    (2206753, 'Nossa Senhora de Nazaré', 18),
    (2206803, 'Nossa Senhora dos Remédios', 18),
    (2207959, 'Nova Santa Rita', 18),
    (2206902, 'Novo Oriente do Piauí', 18),
    (2206951, 'Novo Santo Antônio', 18),
    (2207009, 'Oeiras', 18),
    (2207108, "Olho d'Água do Piauí", 18),
    (2207207, 'Padre Marcos', 18),
    (2207306, 'Paes Landim', 18),
    (2207355, 'Pajeú do Piauí', 18),
    (2207405, 'Palmeira do Piauí', 18),
    (2207504, 'Palmeirais', 18),
    (2207553, 'Paquetá', 18),
    (2207603, 'Parnaguá', 18),
    (2207702, 'Parnaíba', 18),
    (2207751, 'Passagem Franca do Piauí', 18),
    (2207777, 'Patos do Piauí', 18),
    (2207793, "Pau d'Arco do Piauí", 18),
    (2207801, 'Paulistana', 18),
    (2207850, 'Pavussu', 18),
    (2207900, 'Pedro II', 18),
    (2207934, 'Pedro Laurentino', 18),
    (2208007, 'Picos', 18),
    (2208106, 'Pimenteiras', 18),
    (2208205, 'Pio IX', 18),
    (2208304, 'Piracuruca', 18),
    (2208403, 'Piripiri', 18),
    (2208502, 'Porto', 18),
    (2208551, 'Porto Alegre do Piauí', 18),
    (2208601, 'Prata do Piauí', 18),
    (2208650, 'Queimada Nova', 18),
    (2208700, 'Redenção do Gurgueia', 18),
    (2208809, 'Regeneração', 18),
    (2208858, 'Riacho Frio', 18),
    (2208874, 'Ribeira do Piauí', 18),
    (2208908, 'Ribeiro Gonçalves', 18),
    (2209005, 'Rio Grande do Piauí', 18),
    (2209104, 'Santa Cruz do Piauí', 18),
    (2209153, 'Santa Cruz dos Milagres', 18),
    (2209203, 'Santa Filomena', 18),
    (2209302, 'Santa Luz', 18),
    (2209377, 'Santa Rosa do Piauí', 18),
    (2209351, 'Santana do Piauí', 18),
    (2209401, 'Santo Antônio de Lisboa', 18),
    (2209450, 'Santo Antônio dos Milagres', 18),
    (2209500, 'Santo Inácio do Piauí', 18),
    (2209559, 'São Braz do Piauí', 18),
    (2209609, 'São Félix do Piauí', 18),
    (2209658, 'São Francisco de Assis do Piauí', 18),
    (2209708, 'São Francisco do Piauí', 18),
    (2209757, 'São Gonçalo do Gurgueia', 18),
    (2209807, 'São Gonçalo do Piauí', 18),
    (2209856, 'São João da Canabrava', 18),
    (2209872, 'São João da Fronteira', 18),
    (2209906, 'São João da Serra', 18),
    (2209955, 'São João da Varjota', 18),
    (2209971, 'São João do Arraial', 18),
    (2210003, 'São João do Piauí', 18),
    (2210052, 'São José do Divino', 18),
    (2210102, 'São José do Peixe', 18),
    (2210201, 'São José do Piauí', 18),
    (2210300, 'São Julião', 18),
    (2210359, 'São Lourenço do Piauí', 18),
    (2210375, 'São Luís do Piauí', 18),
    (2210383, 'São Miguel da Baixa Grande', 18),
    (2210391, 'São Miguel do Fidalgo', 18),
    (2210409, 'São Miguel do Tapuio', 18),
    (2210508, 'São Pedro do Piauí', 18),
    (2210607, 'São Raimundo Nonato', 18),
    (2210623, 'Sebastião Barros', 18),
    (2210631, 'Sebastião Leal', 18),
    (2210656, 'Sigefredo Pacheco', 18),
    (2210706, 'Simões', 18),
    (2210805, 'Simplício Mendes', 18),
    (2210904, 'Socorro do Piauí', 18),
    (2210938, 'Sussuapara', 18),
    (2210953, 'Tamboril do Piauí', 18),
    (2210979, 'Tanque do Piauí', 18),
    (2211001, 'Teresina', 18),
    (2211100, 'União', 18),
    (2211209, 'Uruçuí', 18),
    (2211308, 'Valença do Piauí', 18),
    (2211357, 'Várzea Branca', 18),
    (2211407, 'Várzea Grande', 18),
    (2211506, 'Vera Mendes', 18),
    (2211605, 'Vila Nova do Piauí', 18),
    (2211704, 'Wall Ferraz', 18);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 18`);
  }

}
