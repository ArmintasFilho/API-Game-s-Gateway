import express from 'express'; //Importando o framework express do Node.js. Podendo ser substituido por "const express = require(express);"
const APP = express(); //Instanciando um objeto do express.
APP.use(express.json()); //Fazendo com que o express entenda o JSON .

//Criando um array contendo os produtos da API.
const PRODUTOS = [
    {
        "id": "1",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE MONSGEEK MX108, BLUETOOTH, 1200DPI, PRETO E PRATA , MONSGEEK-MX108-SILVER",
        "de": 223.52,
        "por": 145.99,
        "caracteristica": "O Kit Monsgeek MX108 é um conjunto sem fio perfeito para quem busca praticidade em um conjunto silencioso. <br>Teclado Full Size com Switchs no do estilo scissor para uma digitação mais suave e silenciosa.<br>Mouse com 1200dpi para uma movimentação rápida e precisa e switch silenciosos para manter o baixo ruído do conjunto.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/o/monsgeek-mx108-silver8.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/o/monsgeek-mx108-silver1.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/o/monsgeek-mx108-silver6.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/o/monsgeek-mx108-silver2.jpg"
    },
    {
        "id": "2",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE GAMER MANCER KRINUS, RAINBOW, TECLADO ABNT2, MOUSE 3600DPI, MCR-KRS-RBW01",
        "de": 211.65,
        "por": 69.99,
        "caracteristica": "O teclado gamer possui acionamento em membrana de alta qualidade e uma vida útil de até 10 milhões de pressionamentos! <br> Nosso mouse possui um visual arrojado e ergonômico, entregando beleza e desempenho na medida certa. <br> Ele possui 6 botões configuráveis, DPI ajustável que varia de 800 à 3600 DPI e a vida útil das teclas de 3 milhões de cliques!",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-krs-rbw014.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-krs-rbw012.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-krs-rbw016.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-krs-rbw011.jpg"
    },
    {
        "id": "3",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE AKKO MX108, BLUETOOTH, 1200DPI, BRANCO E AZUL, AKKO-MX108-WH",
        "de": 223.52,
        "por": 145.99,
        "caracteristica": "	O Kit Akko MX108 é um conjunto sem fio perfeito para quem busca praticidade em um conjunto silencioso. <br>Teclado Full Size com Switchs no do estilo scissor para uma digitação mais suave e silenciosa. <br>Mouse com 1200dpi para uma movimentação rápida e precisa e switch silenciosos para manter o baixo ruído do conjunto.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/k/akko-mx108-wh8.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/k/akko-mx108-wh2.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/k/akko-mx108-wh3.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/k/akko-mx108-wh1.jpg"
    },
    {
        "id": "4",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE LOGITECH MK270 USB WIRELESS PRETO, 920-004433",
        "de": 194.11,
        "por": 140.99,
        "caracteristica": "A tecnologia sem fio Logitech Advanced 2.4 GHz garante conexão de longo alcance com altíssima qualidade. <br>Tenha conforto e usabilidade a uma distância de até dez metros, sem nenhum atraso de resposta ou quedas de conexão. <br>O mouse ergonômico e o teclado de ótimo espaçamento entre teclas são confortáveis e garantem facilidade para acessar comandos com apenas um toque. <br> Pause seu filme, passe para a música seguinte, aumente ou abaixe o volume a qualquer hora.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-00443301102.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-00443301103.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-00443301101.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-0044330110.jpg"
    },
    {
        "id": "5",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE COOLER MASTER DEVASTATOR 3 RGB, ABNT2, SGB-3000-KKMF4-BR",
        "de": 352.82,
        "por": 259.99,
        "caracteristica": "O DEVASTATOR 3 RGB oferece um conjunto completo de teclado e mouse gamer que garante que você pareça uma lenda dentro e fora do campo de batalha. <br> Mouse com sensor óptico com sete níveis de DPI ajustáveis permite que você acerte os inimigos independente da situação.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/g/sgb-3000-kkmf4-br7.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/g/sgb-3000-kkmf4-br6.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/g/sgb-3000-kkmf4-br8.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/g/sgb-3000-kkmf4-br3.jpg"
    },
    {
        "id": "6",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE WIRELESS INTELBRAS CSI 50, ABNT2, 1200DPI, CSI50-PRETO",
        "de": 176.46,
        "por": 129.99,
        "caracteristica": "Conexão de 2.4 GHz sem fio. <br> Conectividade via Dongle Plug & Play sem necessidade de instalação de software adicional. <br> Acabamento leve e confortável. <br> Click silencioso, permitindo maior foco ao usuário. <br> Pés retráteis. <br>4 zonas independentes: Alfanumérica / Numérica / Navegação / Funcional. <br>Indicadores de nível de bateria, CapsLock e NumLock",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/s/csi50-preto2.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/s/csi50-preto4.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/s/csi50-preto3.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/s/csi50-preto1.jpg"
    },
    {
        "id": "7",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE TRUST GXT 838 AZOR, T23289",
        "de": 207.05,
        "por": 159.99,
        "caracteristica": "	Layout em tamanho real. <br> controle completo sobre o seu jogo. <br>Iluminado por LED com 3 modos de cores combinados e brilho ajustável. <br>Anti-ghosting de 8 teclas; <br> cada tecla pressionada é importante quando o modo gaming desativa a tecla Windows para manter sua cabeça no jogo. <br> As 12 teclas multimídia ajudam a controlar seus vídeos e músicas. <br> Inclui um mouse para jogos responsivo com botão de seleção de velocidade (800 - 3000DPI). <br> Teclado seguro com pés antiderrapantes. <br>mouse suave com almofadas deslizantes de baixa fricção",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/2/t232892.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/2/t23289.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/2/t232896.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/2/t232893.jpg"
    },
    {
        "id": "8",
        "categoria": "teclado",
        "nome": "KIT TECLADO E MOUSE LOGITECH MK850 PERFORMANCE BLUETOOTH, 920-008219",
        "de": 588.22,
        "por": 399.99,
        "caracteristica": "Percorra documentos e páginas da Web com rolagem rápida e digite de forma silenciosa e eficiente em um teclado de tamanho normal com teclas côncavas cuidadosamente elaboradas.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-0082193.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-0082192.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-0082191.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/2/920-008219.jpg"
    },
    {
        "id": "9",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER MANCER WARD V2, RAINBOW, MID-TOWER, LATERAL DE VIDRO, COM 3 FANS, PRETO, MCR-WRDV2-BK",
        "de": 470.58,
        "por": 209.99,
        "caracteristica": "Com seu design arrojado e inovador, Ward V2 é equipado com três ventoinhas de 120mm com iluminação Rainbow e lateral de vidro temperado, que permite que você possa expor todo o seu setup interno. <br> Dessa forma, Ward é altamente personalizável além de permitir as mais variadas combinações de estilos para montar seu setup.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-wrdv2-bk1.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-wrdv2-bk3.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-wrdv2-bk4.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-wrdv2-bk.jpg"
    },
    {
        "id": "10",
        "categoria": "gabinete",
        "nome": "GABINETE AEROCOOL CYLON BRANCO RGB LATERAL ACRILICO",
        "de": 411.75,
        "por": 295.99,
        "caracteristica": "O Gabinete Aerocool Cylon Branco é um verdadeiro destaque visual, com sua elegância e estilo moderno. <br> Seu design exclusivo atrai os olhares dos entusiastas de tecnologia e gamers. <br> O acabamento em branco sólido confere uma aparência sofisticada e limpa, ideal para qualquer configuração de PC.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/y/cylon-branco-rgb3.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/y/cylon-branco-rgb1.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/y/cylon-branco-rgb2.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/y/cylon-branco-rgb.jpg"
    },
    {
        "id": "11",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER AIGO DARKFLASH POLLUX PRETO LATERAL ACRILICO",
        "de": 494.00,
        "por": 148.99,
        "caracteristica": "Com um design futurista e elegante, o gabinete Gamer Aigo DarkFlash Pollux Preto é o sonho de qualquer entusiasta de jogos. <br> Sua característica exclusiva inclui um sistema de iluminação RGB personalizável, proporcionando uma atmosfera envolvente para suas batalhas virtuais. <br> Além disso, sua lateral em acrílico permite que você exiba orgulhosamente seus componentes internos de alta performance, enquanto mantém uma estética moderna e deslumbrante. <br> Prepare-se para uma experiência imersiva como nenhuma outra, com o gabinete Gamer Aigo DarkFlash Pollux Preto.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-pollux23128_1.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-pollux23125.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-pollux23129_1.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-pollux23127.jpg"
    },
    {
        "id": "12",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER AIGO DARKFLASH DLM 21 PRETO LATERAL VIDRO",
        "de": 727.16,
        "por": 194.99,
        "caracteristica": "O gabinete Gamer Aigo DarkFlash DLM 21 Preto é uma obra-prima da engenharia moderna, projetada para elevar sua experiência de jogo a novos patamares. Sua característica marcante é o elegante painel lateral de vidro temperado, que oferece uma visão deslumbrante do interior do seu PC, exibindo seus componentes de alta performance com estilo e sofisticação. Além disso, sua estrutura compacta e eficiente permite uma montagem fácil e organizada, garantindo que você possa focar no que realmente importa: sua jogabilidade. Domine o campo de batalha virtual com o gabinete Gamer Aigo DarkFlash DLM 21 Preto e mergulhe em uma experiência visual sem igual.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-dlm-21-preto.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-dlm-21-preto3.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-dlm-21-preto1_.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-dlm-21-preto2.jpg"
    },
    {
        "id": "13",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER BLUECASE PRETO LED RGB, BG-009",
        "de": 235.28,
        "por": 159.99,
        "caracteristica": "O Gabinete Gamer Bluecase BG-009 apresenta um design robusto e agressivo, perfeito para os entusiastas de jogos que desejam uma aparência poderosa para sua configuração. Com um acabamento em preto elegante e detalhes em LED RGB que iluminam o ambiente, este gabinete atrai a atenção e eleva o estilo da sua estação de batalha.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg-009155013.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg-009155.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg-009155014.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg-009155015.jpg"
    },
    {
        "id": "14",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER TGT CARBON, RAINBOW, MID-TOWER, LATERAL DE VIDRO, BRANCO, TGT-CBN-WH01",
        "de": 611.64,
        "por": 159.99,
        "caracteristica": "Design Futurista: O Gabinete Gamer TGT Carbon Rainbow oferece um design futurista e elegante, perfeito para os entusiastas de jogos que buscam uma estética moderna e sofisticada. <br> Com sua estrutura robusta e acabamento em branco imaculado, este gabinete se destaca em qualquer configuração de PC, adicionando um toque de estilo e classe ao seu ambiente de jogo.<br> Iluminação Rainbow Vibrante: Equipado com iluminação Rainbow RGB, o TGT-CBN-WH01 oferece uma explosão de cores e efeitos de iluminação dinâmicos que transformam sua estação de batalha em um espetáculo visual. <br>Personalize facilmente as cores e os padrões de iluminação para combinar com seu estilo ou preferências de jogo, criando uma atmosfera envolvente e imersiva",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-cbn-wh01.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-cbn-wh011.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-cbn-wh015.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-cbn-wh016.jpg"
    },
    {
        "id": "15",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER AIGO DARKFLASH KNIGHT-K1 PRETO/LARANJA LATERAL VIDRO",
        "de": 477.16,
        "por": 159.99,
        "caracteristica": "O Gabinete Gamer Aigo DarkFlash Knight-K1 apresenta um design arrojado e agressivo, perfeito para os entusiastas de jogos que desejam destacar sua estação de batalha. <br> Com uma combinação de cores preto e laranja vibrante, este gabinete se destaca visualmente, adicionando um toque de estilo único à sua configuração de PC.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-knight-k132121.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-knight-k132123.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-knight-k132122.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/i/aigo-darkflash-knight-k132124.jpg"
    },
    {
        "id": "16",
        "categoria": "gabinete",
        "nome": "GABINETE GAMER BLUECASE BG-024W LATERAL VIDRO TEMP BRANCO, BG024WGCASE",
        "de": 223.52,
        "por": 169.99,
        "caracteristica": "Destaque-se na arena gamer com o gabinete Gamer Bluecase BG-024W. <br> Sua característica exclusiva é o deslumbrante painel lateral de vidro temperado, que oferece uma visão cristalina dos seus componentes internos e iluminação personalizada. <br> Com um design elegante e moderno em branco, este gabinete não apenas proporciona um visual impressionante, mas também oferece excelente ventilação para manter seus componentes resfriados mesmo durante as sessões de jogo mais intensas. <br> Prepare-se para elevar seu setup gamer a um novo patamar com o Bluecase BG-024W e deixe sua personalidade brilhar através do seu PC",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg024wgcase04554.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg024wgcase045545.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg024wgcase045543.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/g/bg024wgcase045544.jpg"
    },
    {
        "id": "17",
        "categoria": "console",
        "nome": "CONSOLE NINTENDO SWITCH, 32GB, COM JOGO MARIO KART DELUXE 8, HADSKABL1BRA",
        "de": 2478.99,
        "por": 2049.99,
        "caracteristica": "Desfrute de horas intermináveis de diversão com o console Nintendo Switch 32GB, agora com o emocionante jogo Mario Kart Deluxe 8 incluído. <br> Com sua característica exclusiva de versatilidade, o Nintendo Switch permite que você jogue tanto em casa quanto em movimento, proporcionando uma experiência de jogo verdadeiramente flexível. <br> Além disso, o Mario Kart Deluxe 8 oferece corridas emocionantes e competitivas, com seus personagens favoritos da franquia Mario em pistas incríveis. <br> Prepare-se para acelerar, derrapar e competir com seus amigos em uma aventura multiplayer inesquecível. <br> Com o Nintendo Switch e Mario Kart Deluxe 8, a diversão está garantida onde quer que você esteja!",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/h/a/hadskabl1bra.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/h/a/hadskabl1bra8.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/h/a/hadskabl1bra7.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/h/a/hadskabl1bra4.jpg"
    },
    {
        "id": "18",
        "categoria": "console",
        "nome": "CONSOLE SONY PLAYSTATION 5 SLIM EDICAO DIGITAL, SSD 1TB, 1 CONTROLE, BRANCO, 1214B",
        "de": 5647.05,
        "por": 3699.99,
        "caracteristica": "O Console Sony PlayStation 5 Slim oferece uma experiência de jogo imersiva e envolvente, com gráficos de última geração e tempos de carregamento ultrarrápidos, graças ao seu poderoso SSD de 1TB. <br> Edição Digital:Esta edição do PlayStation 5 Slim é totalmente digital, eliminando a necessidade de discos físicos. <br> Faça o download dos seus jogos favoritos diretamente da PlayStation Store e desfrute de uma biblioteca vasta e diversificada de títulos. <br> Design Elegante e Moderno:Com seu design elegante e moderno em branco, o PlayStation 5 Slim adiciona um toque de sofisticação à sua sala de estar ou espaço de jogo",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/2/1214b2.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/2/1214b.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/2/1214b1.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/2/1214a6.jpg"
    },
    {
        "id": "19",
        "categoria": "console",
        "nome": "CONSOLE MICROSOFT XBOX SERIES S, 512GB, 1 CONTROLE, BRANCO, RRS-00006",
        "de": 3450.05,
        "por": 2649.99,
        "caracteristica": "O Xbox Velocity Architecture, equipado com um SSD personalizado, funciona em conjunto com o sistema inovador em uma tecnologia de chip (SOC) para fornecer jogabilidade de até 120 FPS em nosso menor console de todos os tempos. <br> Equipado com as arquiteturas Zen 2 e RDNA 2 da AMD, o rastreamento de raios DirectX oferece iluminação real, sombras e reflexos precisos para criar mundos vivos e dinâmicos. Os cartões de expansão de armazenamento Seagate para Xbox Series X|S são conectados à parte traseira do console por meio da porta dedicada de expansão de armazenamento e replicam a experiência SSD personalizada do console, fornecendo armazenamento adicional de jogos com o mesmo desempenho. (Vendido separadamente, disponível em vários tamanhos.)",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrs-000067.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrs-000066.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrs-000061.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrs-000064.jpg"
    },
    {
        "id": "20",
        "categoria": "console",
        "nome": "CONSOLE MICROSOFT XBOX SERIES X FORZA HORIZON 5 PREMIUM EDITION, 1TB, 1 CONTROLE, PRETO, RRT-00057",
        "de": 5764.59,
        "por": 3999.99,
        "caracteristica": "O Console Microsoft Xbox Series X proporciona uma experiência de jogo de última geração, com gráficos de alta qualidade, tempos de carregamento rápidos e desempenho excepcional. <br> Edição Especial Forza Horizon 5 Premium:Esta edição especial inclui o jogo Forza Horizon 5 Premium Edition, permitindo que você mergulhe em corridas emocionantes e aventuras automobilísticas em um mundo aberto vibrante e detalhado. <br> Design Robusto e Elegante: Com seu design robusto e elegante em preto, o Xbox Series X adiciona um toque de sofisticação ao seu espaço de jogo, proporcionando uma presença visual marcante.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrt-000575.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrt-000574.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrt-000571.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/r/rrt-000572.jpg"
    },
    {
        "id": "21",
        "categoria": "monitor",
        "nome": "MONITOR AOC PORSCHE DESIGN AUDACITY U32U1, 32.5 POL, IPS, UHD, 4MS, 60HZ, U32U1",
        "de": 7646.94,
        "por": 5099.99,
        "caracteristica": "MONITOR AOC PORSCHE DESIGN AUDACITY U32U1 Projetado pelo Studio F.A. Porsche com um design ergonômico premiado Red Dot Design Award 2019, o monitor U32U1 possui um painel IPS de 31,5 com resolução4K, Display HDR 600 e Adobe RGB 111% para que você desfrute de imagens de tirar o fôlego e um design impecável.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/u/3/u32u110.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/u/3/u32u15.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/u/3/u32u14.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/u/3/u32u1.jpg"
    },
    {
        "id": "22",
        "categoria": "monitor",
        "nome": "MONITOR LG 29WL500-B, 29 POL. IPS, WFHD, 5MS, 75HZ, FREESYNC, HDMI, 29WL500-B",
        "de": 1647.05,
        "por": 1099.99,
        "caracteristica": "A resolução (2560x1080) UltraWide™ Full HD de 21:9 oferece 33% mais espaço de tela em comparação com o monitor de resolução Full HD. <br> Aproveite seu webinar com materiais maiores e mais participantes graças à tela. Este monitor, com 99% de cobertura do espectro sRGB, é uma excelente solução para fotógrafos, designers gráficos ou qualquer pessoa em busca de alta precisão de cores. <br> Permite trabalhar em relatórios com agilidade visualizando planilhas e slides lado a lado sem alternar telas.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/9/29wl500-b8.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/9/29wl500-b5.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/9/29wl500-b3.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/9/29wl500-b1.jpg"
    },
    {
        "id": "23",
        "categoria": "monitor",
        "nome": "MONITOR GAMER MSI G27C4X, 27 POL, VA, FHD, 1MS, 250HZ, HDMI/DP, G27C4X",
        "de": 2352.93,
        "por": 1699.99,
        "caracteristica": "MONITOR GAMER MSI G27C4X. Visualize sua vitória com o monitor MSI G27C4X Curved Gaming™. Equipado com um painel de 1920x1080, taxa de atualização de 250 Hz e tempo de resposta de 1 ms, o G27C4X lhe dará a vantagem competitiva necessária para derrotar seus oponentes. <br> Construído com tecnologia de sincronização adaptativa, o G27C4X pode combinar a taxa de atualização da tela com a sua GPU para uma jogabilidade ultra suave. <br> Os monitores MSI são equipados com uma taxa de atualização de 250 Hz + painel LED VA de tempo de resposta de 1 ms que oferece o maior benefício em gêneros de jogos rápidos, como jogos de tiro em primeira pessoa, lutadores, simuladores de corrida, estratégia em tempo real e esportes. <br> O monitor de jogos MSI está equipado com tecnologia HDR que pode produzir imagens com mais detalhes, maior gama de cores e parecer mais semelhante ao que é visto pelo olho humano quando comparado ao monitor tradicional.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/2/g27c4x.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/2/g27c4x3.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/2/g27c4x1.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/2/g27c4x4.jpg"
    },
    {
        "id": "24",
        "categoria": "monitor",
        "nome": "MONITOR GAMER ASUS ROG STRIX XG309CM, 29.5 POL, FAST IPS, ULTRAWIDE FHD",
        "de": 5058.81,
        "por": 3099.98,
        "caracteristica": "O monitor gaming ROG Strix XG309CM possui um painel ultra wide de 29,5 polegadas 2560 x 1080 para que você aproveite mais detalhes ao jogar ou assistir a filmes. <br> Seu painel de formato 21:9 ultra wide oferece mais espaço na área de trabalho na tela do que um monitor 16:9, portanto, você terá ainda mais espaço para as várias janelas de aplicativos na hora de trabalhar. <br> A tecnologia ASUS Fast IPS permite que o monitor ligue e desligue até quatro vezes mais rápido do que os painéis IPS convencionais, dando ao XG309CM um tempo de resposta GTG de 1ms e pouca ou nenhuma mancha ou desfoque de movimento.",
        "imagem1": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/x/g/xg309cm6.jpg",
        "imagem2": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/x/g/xg309cm3.jpg",
        "imagem3": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/x/g/xg309cm4.jpg",
        "imagem4": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/x/g/xg309cm1.jpg"
    },
    {
        "id": "25",
        "categoria": "jogos",
        "nome": "JOGO MARVEL SPIDER-MAN 2 PS5 BR",
        "de": 450.99,
        "por": 349.99,
        "caracteristica": "Sejam Melhores. Juntos. <br> O próximo jogo da franquia Marvel's Spider-Man: Peter Parker e Miles Morales enfrentam o maior teste de suas vidas para proteger a cidade contra Venom e a ameaça simbionte. <br> Explore a Nova York da Marvel.",
        "imagem1": "https://images-americanas.b2w.io/produtos/7484677745/imagens/jogo-marvel-s-spider-man-2-ps5-br/7484677745_1_xlarge.jpg",
        "imagem2": "https://images-americanas.b2w.io/produtos/7484677745/imagens/jogo-marvel-s-spider-man-2-ps5-br/7484677745_2_xlarge.jpg",
        "imagem3": "https://images-americanas.b2w.io/produtos/7484677745/imagens/jogo-marvel-s-spider-man-2-ps5-br/7484677745_3_xlarge.jpg",
        "imagem4": "https://images-americanas.b2w.io/produtos/7484677745/imagens/jogo-marvel-s-spider-man-2-ps5-br/7484677745_4_xlarge.jpg"
    },
    {
        "id": "26",
        "categoria": "jogos",
        "nome": "JOGO MORTAL KOMBAT 11 - XBOX ONE MÍDIA FÍSICA",
        "de": 128.99,
        "por": 66.99,
        "caracteristica": "Mortal Kombat está de volta em uma evolução da icônica franquia! <br> Com lutadores clássicos, o jogo oferece todas as variações de customização de personagens para que você tenha liberdade total na hora de personalizá-los e torná-los únicos. Além disso, gráficos aproximam ainda mais o jogador da luta, com crânios rachados e olhos saltados. O modo história de Mortal Kombat continua a contar a saga épica de 25 anos atrás, por meio de incríveis cinemáticas. <br> E o melhor de tudo: o jogo está dublado em português! Não perca essa oportunidade de mergulhar nessa experiência de luta incrível. <br> Adquira já o seu Mortal Kombat e comece a lutar!",
        "imagem1": "https://images-americanas.b2w.io/produtos/7373491931/imagens/jogo-mortal-kombat-11-xbox-one-midia-fisica/7373491931_1_large.jpg",
        "imagem2": "https://images-americanas.b2w.io/produtos/7373491931/imagens/jogo-mortal-kombat-11-xbox-one-midia-fisica/7373491931_2_large.jpg",
        "imagem3": "https://images-americanas.b2w.io/produtos/7373491931/imagens/jogo-mortal-kombat-11-xbox-one-midia-fisica/7373491931_3_xlarge.jpg",
        "imagem4": "https://images-americanas.b2w.io/produtos/7373491931/imagens/jogo-mortal-kombat-11-xbox-one-midia-fisica/7373491931_4_xlarge.jpg"
    },
    {
        "id": "27",
        "categoria": "jogos",
        "nome": " UNCHARTED: LEGACY OF THIEVES COLLECTION STANDARD PS5 FISICO",
        "de": 299.99,
        "por": 199.95,
        "caracteristica": "A UNCHARTED: Legacy of Thieves Collection para PlayStation 5 reúne dois dos jogos mais icônicos da série Uncharted em um único pacote emocionante: UNCHARTED 4: A Thief's End e UNCHARTED: The Lost Legacy.",
        "imagem1": "https://images-americanas.b2w.io/produtos/7476915068/imagens/uncharted-legacy-of-thieves-collection-standard-ps5-fisico/7476915068_1_xlarge.jpg",
        "imagem2": "https://images-americanas.b2w.io/produtos/7476915068/imagens/uncharted-legacy-of-thieves-collection-standard-ps5-fisico/7476915068_2_xlarge.jpg",
        "imagem3": "https://images-americanas.b2w.io/produtos/7476915068/imagens/uncharted-legacy-of-thieves-collection-standard-ps5-fisico/7476915068_4_xlarge.jpg",
        "imagem4": "https://images-americanas.b2w.io/produtos/7476915068/imagens/uncharted-legacy-of-thieves-collection-standard-ps5-fisico/7476915068_5_xlarge.jpg"
    },
    {
        "id": "28",
        "categoria": "jogos",
        "nome": "SUPER MARIO 3D WORLD + BOWSER'S FURY - SWITCH",
        "de": 373.80,
        "por": 336.42,
        "caracteristica": "Junte-se a Mario, Luigi, Princesa Peach e Toad em uma missão para salvar o Sprixie Kingdom em Super Mario 3D World + Bowser's Fury, atacando Nintendo Switch! Bowser sequestrou a Princesa Sprixie e cabe aos nossos heróis resgatá-la! Escale paredes e arranhe seus inimigos usando o Super Bell, clone-se com a Double Cherry ou coloque a caixa de canhão em sua cabeça e atire projéteis em seus inimigos. <br> Esta versão aprimorada de Super Mario 3D World também vem com melhorias de jogabilidade, como maior velocidade de corrida para todos os personagens e a capacidade de subir mais alto usando o Super Bell. <br> Você pode até jogar usando controles de giroscópio!",
        "imagem1": "https://images-americanas.b2w.io/produtos/2926798458/imagens/super-mario-3d-world-bowser-s-fury-switch/2926798458_1_xlarge.jpg",
        "imagem2": "https://images-americanas.b2w.io/produtos/2926798458/imagens/super-mario-3d-world-bowser-s-fury-switch/2926798458_2_xlarge.jpg",
        "imagem3": "https://images-americanas.b2w.io/produtos/2926798458/imagens/super-mario-3d-world-bowser-s-fury-switch/2926798458_3_xlarge.jpg",
        "imagem4": "https://images-americanas.b2w.io/produtos/2926798458/imagens/super-mario-3d-world-bowser-s-fury-switch/2926798458_4_xlarge.jpg"
    }
]

//Criando um array contendo as imagens de forma de pagamento.
const PAGAMENTO = [
    {
        "id": "1",
        "title": "Visa",
        "imagem": "https://www.pichau.com.br/_next/image?url=https%3A%2F%2Fstatic.pichau.com.br%2Fimages%2Fvisa.png&w=128&q=75"
    },
    {
        "id": "2",
        "title": "MasterCard",
        "imagem": "https://www.pichau.com.br/_next/image?url=https%3A%2F%2Fstatic.pichau.com.br%2Fimages%2Fmastercard.png&w=128&q=75"
    },
    {
        "id": "5",
        "title": "Nubank",
        "imagem": "https://www.pichau.com.br/_next/image?url=https%3A%2F%2Fstatic.pichau.com.br%2Fimages%2Fnubank.svg&w=128&q=75"
    },
    {
        "id": "6",
        "title": "Pix",
        "imagem": "https://www.pichau.com.br/_next/image?url=https%3A%2F%2Fstatic.pichau.com.br%2Fimages%2Fpix.png&w=128&q=75"
    }
]

//Criando a rota padrão ou raiz.
APP.get('/', (req, res) => {
    return res.json("Hello");
});

//Criando a rota para acessar as imagens de pagamento.
APP.get('/pag', (req, res) => {
    return res.status(200).json(PAGAMENTO);
});

//Criando a rota para acessar os produtos por nome, id e categoria.
APP.get('/prod', (req, res) => {
    const { categoria, id, nome } = req.query;

    if (categoria) {
        const FILTRARPRODUTOS = PRODUTOS.filter(produto => produto.categoria === categoria);
        return res.status(200).json(FILTRARPRODUTOS);
    }

    else if (id) {
        const FILTRARPRODUTOS = PRODUTOS.filter(produto => produto.id === id);
        return res.status(200).json(FILTRARPRODUTOS);
    }

    else if (nome) {
        const FILTRARPRODUTOS = PRODUTOS.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()));
        return res.status(200).json(FILTRARPRODUTOS);
    }

    return res.status(200).json(PRODUTOS);
});

export default APP; //Exportando o app para que possa ser usado em outro arquivo. Podendo ser substituido por "module.exports = app;"
