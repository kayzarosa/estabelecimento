import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCidadeMA1609802757378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO cidades(codigo_ibge, nome, estado_id) VALUES(2100055, 'Açailândia', 10),
        (2100105, 'Afonso Cunha', 10),
        (2100154, 'Água Doce do Maranhão', 10),
        (2100204, 'Alcântara', 10),
        (2100303, 'Aldeias Altas', 10),
        (2100402, 'Altamira do Maranhão', 10),
        (2100436, 'Alto Alegre do Maranhão', 10),
        (2100477, 'Alto Alegre do Pindaré', 10),
        (2100501, 'Alto Parnaíba', 10),
        (2100550, 'Amapá do Maranhão', 10),
        (2100600, 'Amarante do Maranhão', 10),
        (2100709, 'Anajatuba', 10),
        (2100808, 'Anapurus', 10),
        (2100832, 'Apicum-Açu', 10),
        (2100873, 'Araguanã', 10),
        (2100907, 'Araioses', 10),
        (2100956, 'Arame', 10),
        (2101004, 'Arari', 10),
        (2101103, 'Axixá', 10),
        (2101202, 'Bacabal', 10),
        (2101251, 'Bacabeira', 10),
        (2101301, 'Bacuri', 10),
        (2101350, 'Bacurituba', 10),
        (2101400, 'Balsas', 10),
        (2101509, 'Barão de Grajaú', 10),
        (2101608, 'Barra do Corda', 10),
        (2101707, 'Barreirinhas', 10),
        (2101772, 'Bela Vista do Maranhão', 10),
        (2101731, 'Belágua', 10),
        (2101806, 'Benedito Leite', 10),
        (2101905, 'Bequimão', 10),
        (2101939, 'Bernardo do Mearim', 10),
        (2101970, 'Boa Vista do Gurupi', 10),
        (2102002, 'Bom Jardim', 10),
        (2102036, 'Bom Jesus das Selvas', 10),
        (2102077, 'Bom Lugar', 10),
        (2102101, 'Brejo', 10),
        (2102150, 'Brejo de Areia', 10),
        (2102200, 'Buriti', 10),
        (2102309, 'Buriti Bravo', 10),
        (2102325, 'Buriticupu', 10),
        (2102358, 'Buritirana', 10),
        (2102374, 'Cachoeira Grande', 10),
        (2102408, 'Cajapió', 10),
        (2102507, 'Cajari', 10),
        (2102556, 'Campestre do Maranhão', 10),
        (2102606, 'Cândido Mendes', 10),
        (2102705, 'Cantanhede', 10),
        (2102754, 'Capinzal do Norte', 10),
        (2102804, 'Carolina', 10),
        (2102903, 'Carutapera', 10),
        (2103000, 'Caxias', 10),
        (2103109, 'Cedral', 10),
        (2103125, 'Central do Maranhão', 10),
        (2103158, 'Centro do Guilherme', 10),
        (2103174, 'Centro Novo do Maranhão', 10),
        (2103208, 'Chapadinha', 10),
        (2103257, 'Cidelândia', 10),
        (2103307, 'Codó', 10),
        (2103406, 'Coelho Neto', 10),
        (2103505, 'Colinas', 10),
        (2103554, 'Conceição do Lago Açu', 10),
        (2103604, 'Coroatá', 10),
        (2103703, 'Cururupu', 10),
        (2103752, 'Davinópolis', 10),
        (2103802, 'Dom Pedro', 10),
        (2103901, 'Duque Bacelar', 10),
        (2104008, 'Esperantinópolis', 10),
        (2104057, 'Estreito', 10),
        (2104073, 'Feira Nova do Maranhão', 10),
        (2104081, 'Fernando Falcão', 10),
        (2104099, 'Formosa da Serra Negra', 10),
        (2104107, 'Fortaleza dos Nogueiras', 10),
        (2104206, 'Fortuna', 10),
        (2104305, 'Godofredo Viana', 10),
        (2104404, 'Gonçalves Dias', 10),
        (2104503, 'Governador Archer', 10),
        (2104552, 'Governador Edison Lobão', 10),
        (2104602, 'Governador Eugênio Barros', 10),
        (2104628, 'Governador Luiz Rocha', 10),
        (2104651, 'Governador Newton Bello', 10),
        (2104677, 'Governador Nunes Freire', 10),
        (2104701, 'Graça Aranha', 10),
        (2104800, 'Grajaú', 10),
        (2104909, 'Guimarães', 10),
        (2105005, 'Humberto de Campos', 10),
        (2105104, 'Icatu', 10),
        (2105153, 'Igarapé do Meio', 10),
        (2105203, 'Igarapé Grande', 10),
        (2105302, 'Imperatriz', 10),
        (2105351, 'Itaipava do Grajaú', 10),
        (2105401, 'Itapecuru-Mirim', 10),
        (2105427, 'Itinga do Maranhão', 10),
        (2105450, 'Jatobá', 10),
        (2105476, 'Jenipapo dos Vieiras', 10),
        (2105500, 'João Lisboa', 10),
        (2105609, 'Joselândia', 10),
        (2105658, 'Junco do Maranhão', 10),
        (2105708, 'Lago da Pedra', 10),
        (2105807, 'Lago do Junco', 10),
        (2105948, 'Lago dos Rodrigues', 10),
        (2105906, 'Lago Verde', 10),
        (2105922, 'Lagoa do Mato', 10),
        (2105963, 'Lagoa Grande do Maranhão', 10),
        (2105989, 'Lajeado Novo', 10),
        (2106003, 'Lima Campos', 10),
        (2106102, 'Loreto', 10),
        (2106201, 'Luís Domingues', 10),
        (2106300, 'Magalhães de Almeida', 10),
        (2106326, 'Maracaçumé', 10),
        (2106359, 'Marajá do Sena', 10),
        (2106375, 'Maranhãozinho', 10),
        (2106409, 'Mata Roma', 10),
        (2106508, 'Matinha', 10),
        (2106607, 'Matões', 10),
        (2106631, 'Matões do Norte', 10),
        (2106672, 'Milagres do Maranhão', 10),
        (2106706, 'Mirador', 10),
        (2106755, 'Miranda do Norte', 10),
        (2106805, 'Mirinzal', 10),
        (2106904, 'Monção', 10),
        (2107001, 'Montes Altos', 10),
        (2107100, 'Morros', 10),
        (2107209, 'Nina Rodrigues', 10),
        (2107258, 'Nova Colinas', 10),
        (2107308, 'Nova Iorque', 10),
        (2107357, 'Nova Olinda do Maranhão', 10),
        (2107407, "Olho d'Água das Cunhãs", 10),
        (2107456, 'Olinda Nova do Maranhão', 10),
        (2107506, 'Paço do Lumiar', 10),
        (2107605, 'Palmeirândia', 10),
        (2107704, 'Paraibano', 10),
        (2107803, 'Parnarama', 10),
        (2107902, 'Passagem Franca', 10),
        (2108009, 'Pastos Bons', 10),
        (2108058, 'Paulino Neves', 10),
        (2108108, 'Paulo Ramos', 10),
        (2108207, 'Pedreiras', 10),
        (2108256, 'Pedro do Rosário', 10),
        (2108306, 'Penalva', 10),
        (2108405, 'Peri Mirim', 10),
        (2108454, 'Peritoró', 10),
        (2108504, 'Pindaré-Mirim', 10),
        (2108603, 'Pinheiro', 10),
        (2108702, 'Pio XII', 10),
        (2108801, 'Pirapemas', 10),
        (2108900, 'Poção de Pedras', 10),
        (2109007, 'Porto Franco', 10),
        (2109056, 'Porto Rico do Maranhão', 10),
        (2109106, 'Presidente Dutra', 10),
        (2109205, 'Presidente Juscelino', 10),
        (2109239, 'Presidente Médici', 10),
        (2109270, 'Presidente Sarney', 10),
        (2109304, 'Presidente Vargas', 10),
        (2109403, 'Primeira Cruz', 10),
        (2109452, 'Raposa', 10),
        (2109502, 'Riachão', 10),
        (2109551, 'Ribamar Fiquene', 10),
        (2109601, 'Rosário', 10),
        (2109700, 'Sambaíba', 10),
        (2109759, 'Santa Filomena do Maranhão', 10),
        (2109809, 'Santa Helena', 10),
        (2109908, 'Santa Inês', 10),
        (2110005, 'Santa Luzia', 10),
        (2110039, 'Santa Luzia do Paruá', 10),
        (2110104, 'Santa Quitéria do Maranhão', 10),
        (2110203, 'Santa Rita', 10),
        (2110237, 'Santana do Maranhão', 10),
        (2110278, 'Santo Amaro do Maranhão', 10),
        (2110302, 'Santo Antônio dos Lopes', 10),
        (2110401, 'São Benedito do Rio Preto', 10),
        (2110500, 'São Bento', 10),
        (2110609, 'São Bernardo', 10),
        (2110658, 'São Domingos do Azeitão', 10),
        (2110708, 'São Domingos do Maranhão', 10),
        (2110807, 'São Félix de Balsas', 10),
        (2110856, 'São Francisco do Brejão', 10),
        (2110906, 'São Francisco do Maranhão', 10),
        (2111003, 'São João Batista', 10),
        (2111029, 'São João do Caru', 10),
        (2111052, 'São João do Paraíso', 10),
        (2111078, 'São João do Soter', 10),
        (2111102, 'São João dos Patos', 10),
        (2111201, 'São José de Ribamar', 10),
        (2111250, 'São José dos Basílios', 10),
        (2111300, 'São Luís', 10),
        (2111409, 'São Luís Gonzaga do Maranhão', 10),
        (2111508, 'São Mateus do Maranhão', 10),
        (2111532, 'São Pedro da Água Branca', 10),
        (2111573, 'São Pedro dos Crentes', 10),
        (2111607, 'São Raimundo das Mangabeiras', 10),
        (2111631, 'São Raimundo do Doca Bezerra', 10),
        (2111672, 'São Roberto', 10),
        (2111706, 'São Vicente Ferrer', 10),
        (2111722, 'Satubinha', 10),
        (2111748, 'Senador Alexandre Costa', 10),
        (2111763, 'Senador La Rocque', 10),
        (2111789, 'Serrano do Maranhão', 10),
        (2111805, 'Sítio Novo', 10),
        (2111904, 'Sucupira do Norte', 10),
        (2111953, 'Sucupira do Riachão', 10),
        (2112001, 'Tasso Fragoso', 10),
        (2112100, 'Timbiras', 10),
        (2112209, 'Timon', 10),
        (2112233, 'Trizidela do Vale', 10),
        (2112274, 'Tufilândia', 10),
        (2112308, 'Tuntum', 10),
        (2112407, 'Turiaçu', 10),
        (2112456, 'Turilândia', 10),
        (2112506, 'Tutóia', 10),
        (2112605, 'Urbano Santos', 10),
        (2112704, 'Vargem Grande', 10),
        (2112803, 'Viana', 10),
        (2112852, 'Vila Nova dos Martírios', 10),
        (2112902, 'Vitória do Mearim', 10),
        (2113009, 'Vitorino Freire', 10),
        (2114007, 'Zé Doca', 10);
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`delete from cidades where id not in (1, 2, 3, 4, 5, 6, 7) and estado_id = 10`);
    }

}
