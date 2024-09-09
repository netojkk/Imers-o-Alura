let filmes = [
    {
        titulo: "Como treinar seu Dragão",
        descricao: "A história se passa na ilha de Berk, onde vikings e dragões travam uma batalha épica. No entanto, Hiccup, um jovem viking diferente dos outros, descobre que a amizade com os dragões é possível. A relação entre Hiccup e o dragão Desdentado desafia as tradições e muda para sempre a forma como os vikings veem essas criaturas.",
        diretor: "Dean DeBlois",
        anoLancamento: 2010,
        tags: ["vikings", "dragões", "amizade", "aventura", "fantasia", "ilha de Berk", "batalha épica"]
    },
    {
        titulo: "Toy Story",
        descricao: "Uma aventura emocionante que se passa no mundo dos brinquedos, onde um grupo de amigos vive grandes aventuras quando seus donos não estão por perto. Woody, um boneco cowboy, e Buzz Lightyear, um astronauta, enfrentam desafios e competem pela atenção do menino Andy, descobrindo o verdadeiro significado da amizade e da lealdade.",
        diretor: "John Lasseter",
        anoLancamento: 1995,
        tags: ["brinquedos", "aventura", "amigos", "lealdade", "Woody", "Buzz Lightyear", "mundo dos brinquedos"]
    },
    {
        titulo: "Toy Story 2",
        descricao: "Woody é sequestrado por um colecionador de brinquedos e Buzz Lightyear e seus amigos precisam resgatá-lo. Enquanto Woody descobre que faz parte de uma coleção valiosa e considera uma nova vida com outros brinquedos colecionáveis, seus amigos enfrentam perigos e se aventuram para trazê-lo de volta para Andy.",
        diretor: "John Lasseter",
        anoLancamento: 1999,
        tags: ["sequestro", "colecionador de brinquedos", "resgate", "aventura", "Woody", "Buzz Lightyear", "amigos"]
    },
    {
        titulo: "Toy Story 3",
        descricao: "Os brinquedos são doados para uma creche e precisam encontrar uma maneira de voltar para Andy. Enfrentando desafios em um ambiente desconhecido, os brinquedos devem superar suas diferenças e lutar para encontrar um novo lar e garantir que a lealdade e o amor entre eles prevaleçam.",
        diretor: "Lee Unkrich",
        anoLancamento: 2010,
        tags: ["creche", "doação", "aventura", "desafios", "lealdade", "amor entre brinquedos", "novo lar"]
    },
    {
        titulo: "A Bela e a Fera",
        descricao: "Uma clássica história de amor entre uma bela jovem e uma fera encantada, que quebra a maldição através do amor verdadeiro. Belle, uma jovem inteligente e independente, aprende a ver além das aparências e descobre a bondade e a humanidade por trás da Fera, transformando seu coração e seu destino.",
        diretor: "Gary Trousdale e Kirk Wise",
        anoLancamento: 1991,
        tags: ["amor verdadeiro", "maldição", "transformação", "contos de fadas", "Belle", "Fera", "bela jovem"]
    },
    {
        titulo: "Moana",
        descricao: "Uma jovem aventureira embarca em uma jornada épica pelo oceano junto com seu porquinho para salvar seu povo e encontrar seu próprio destino. Moana enfrenta perigos e desafios enquanto busca encontrar o demigod Maui e restaurar o coração da deusa Te Fiti para trazer prosperidade a sua ilha.",
        diretor: "Ron Clements e John Musker",
        anoLancamento: 2016,
        tags: ["oceano", "aventura", "demigod", "prosperidade", "Moana", "Maui", "coração da deusa Te Fiti"]
    },
    {
        titulo: "Frozen",
        descricao: "As irmãs Elsa e Anna embarcam em uma jornada épica e fria para encontrar Elsa e quebrar uma maldição que congelou seu reino. Enquanto Elsa luta para controlar seus poderes de gelo e Anna enfrenta perigos, as duas irmãs descobrem a força do amor verdadeiro e o significado da verdadeira família.",
        diretor: "Chris Buck e Jennifer Lee",
        anoLancamento: 2013,
        tags: ["gelado", "maldição", "irmãs", "amor verdadeiro", "Elsa", "Anna", "poderes de gelo"]
    },
    {
        titulo: "Spider-Man: Into the Spider-Verse",
        descricao: "Miles Morales se torna o Homem-Aranha e une forças com outras versões do herói para salvar o multiverso de inimigos formidáveis. Cada versão do Homem-Aranha traz suas próprias habilidades e histórias únicas, formando uma equipe diversificada para enfrentar uma ameaça que pode destruir todas as realidades.",
        diretor: "Bob Persichetti, Peter Ramsey e Rodney Rothman",
        anoLancamento: 2018,
        tags: ["multiverso", "super-heróis", "Homem-Aranha", "equipe", "realidades alternativas", "Miles Morales"]
    },
    {
        titulo: "Shrek",
        descricao: "Um ogro solitário vive feliz em seu pântano até que sua vida é interrompida pela invasão de diversos personagens de contos de fadas. Para recuperar a paz e seu lar, Shrek embarca em uma missão para resgatar a Princesa Fiona e devolvê-la a Lord Farquad, descobrindo no processo que o verdadeiro amor pode mudar tudo.",
        diretor: "Andrew Adamson, Vicky Jenson",
        anoLancamento: 2001,
        tags: ["ogro", "pântano", "contos de fadas", "resgate", "Princesa Fiona", "Lord Farquad", "amor verdadeiro"]
    },
    {
        titulo: "Shrek 2",
        descricao: "Shrek e Fiona se casam e são convidados para o reino dos pais de Fiona, onde enfrentam novos desafios e revelações. O encontro com o rei e a rainha leva a situações hilárias e conflitos inesperados, enquanto Shrek luta para ser aceito e reconquistar o amor de Fiona.",
        diretor: "Andrew Adamson, Kelly Asbury",
        anoLancamento: 2004,
        tags: ["casamento", "reino dos pais", "rei e rainha", "aceitação", "conflitos", "Shrek e Fiona"]
    },
    {
        titulo: "Shrek Terceiro",
        descricao: "Shrek se torna rei e precisa encontrar um sucessor para o trono, enquanto enfrenta um novo vilão que ameaça seu reino. Com a ajuda de seus amigos e enfrentando desafios pessoais, Shrek embarca em uma nova jornada para encontrar o legítimo herdeiro e garantir o futuro do reino.",
        diretor: "Chris Miller, Raman Hui",
        anoLancamento: 2007,
        tags: ["realeza", "sucessor", "vilão", "jornada", "amigos", "Shrek"]
    },
    {
        titulo: "Madagascar",
        descricao: "Um grupo de animais do zoológico de Nova York, incluindo um leão, uma zebra, uma girafa e uma hipopótamo, escapa e se aventura em Madagascar. Adaptando-se a uma vida selvagem e enfrentando novos desafios, eles aprendem sobre a amizade e a sobrevivência fora do conforto de sua antiga vida no zoológico.",
        diretor: "Eric Darnell, Tom McGrath",
        anoLancamento: 2005,
        tags: ["zoológico", "vida selvagem", "leão", "zebra", "girafa", "hipopótamo", "aventura", "amigos"]
    },
    {
        titulo: "Madagascar 2",
        descricao: "Os animais de Madagascar tentam voltar para Nova York e se envolvem em novas aventuras na África. Enfrentando perigos e descobrindo a importância de sua verdadeira identidade, eles vivenciam uma série de eventos engraçados e emocionantes enquanto tentam encontrar o caminho de volta para casa.",
        diretor: "Eric Darnell, Tom McGrath",
        anoLancamento: 2008,
        tags: ["retorno", "África", "aventura", "identidade", "comédia", "animais de Madagascar"]
    },
    {
        titulo: "Madagascar 3: Procurados em Europa",
        descricao: "Os animais de Madagascar se juntam a um circo na Europa para tentar voltar para casa. Enquanto tentam se adaptar à vida circense, enfrentam novos inimigos e desafios, descobrindo o valor da amizade e da equipe enquanto lutam para retornar à sua cidade natal.",
        diretor: "Eric Darnell, Conrad Vernon",
        anoLancamento: 2012,
        tags: ["circo", "Europa", "vida circense", "amigos", "desafios", "aventura"]
    },
    {
        titulo: "Kung Fu Panda",
        descricao: "Um panda atrapalhado descobre que é o escolhido para se tornar um guerreiro dragão. Com a ajuda dos mestres de kung fu e enfrentando seus próprios medos e inseguranças, Po embarca em uma jornada para se tornar um verdadeiro herói e defender sua vila das forças do mal.",
        diretor: "Mark Osborne, John Stevenson",
        anoLancamento: 2008,
        tags: ["kung fu", "panda", "guerreiro dragão", "jornada", "herói", "mestre de kung fu", "defesa"]
    },
    {
        titulo: "Kung Fu Panda 2",
        descricao: "Po continua sua jornada como o Guerreiro Dragão enquanto enfrenta um novo vilão que ameaça a paz da China. Ao mesmo tempo, ele descobre segredos sobre seu passado e suas origens, encontrando uma nova força interior e um propósito maior como defensor do kung fu.",
        diretor: "Jennifer Yuh Nelson",
        anoLancamento: 2011,
        tags: ["kung fu", "Guerreiro Dragão", "vilão", "paz da China", "segredos do passado", "força interior", "propósito"]
    },
    {
        titulo: "Kung Fu Panda 3",
        descricao: "Po se reúne com seu pai biológico e descobre uma aldeia secreta de pandas, enfrentando um novo inimigo que ameaça destruir todos os kung fu. Com a ajuda de seus amigos e a orientação dos pandas, Po precisa unir a força da família e a sabedoria do kung fu para salvar o dia.",
        diretor: "Jennifer Yuh Nelson, Alessandro Carloni",
        anoLancamento: 2016,
        tags: ["pandas", "kung fu", "família", "inimigo", "aldeia secreta", "ação", "sabedoria"]
    },
    {
        titulo: "Hotel Transylvania",
        descricao: "Drácula cria um hotel luxuoso para monstros e sua filha Mavis, mas sua vida muda quando um jovem humano, Jonathan, descobre o local. A chegada de Jonathan leva a uma série de eventos que desafiam as normas do hotel e forçam Drácula a repensar suas crenças sobre os humanos.",
        diretor: "Genndy Tartakovsky",
        anoLancamento: 2012,
        tags: ["hotel de monstros", "Drácula", "dracula", "humano", "Mavis", "aventura", "eventos inesperados", "crenças"]
    },
    {
        titulo: "Hotel Transylvania 2",
        descricao: "Drácula está animado com o nascimento do neto Dennis e tenta garantir que ele seja um verdadeiro monstro. Enquanto o pequeno Dennis mostra sinais de ser mais humano do que vampiro, a família enfrenta novas aventuras e conflitos que desafiam suas ideias sobre o que significa ser um monstro.",
        diretor: "Genndy Tartakovsky",
        anoLancamento: 2015,
        tags: ["neto", "monstro", "aventura", "família", "conflitos", "identidade", "vampiro"]
    },
    {
        titulo: "Hotel Transylvania 3: Férias Monstruosas",
        descricao: "Drácula e sua família embarcam em um cruzeiro para monstros, onde Drácula se apaixona por uma misteriosa mulher chamada Ericka. Enquanto a família aproveita as férias e explora as atrações do navio, eles descobrem que Ericka tem um segredo sombrio que pode ameaçar a segurança de todos a bordo. Juntos, eles enfrentam novas aventuras e desafios para proteger a diversão e a paz do cruzeiro.",
        diretor: "Genndy Tartakovsky",
        anoLancamento: 2018,
        tags: ["cruzeiro", "monstros", "Ericka", "aventura", "segredo sombrio", "família", "diversão"]
    },
    {
        titulo: "Zootopia",
        descricao: "Em uma cidade onde todos os animais vivem em harmonia, uma coelha policial e uma raposa trapaceira se unem para resolver um mistério envolvendo o desaparecimento de animais. Juntas, elas enfrentam preconceitos e descobrem uma conspiração maior.",
        diretor: "Byron Howard e Rich Moore",
        anoLancamento: 2016,
        tags: ["cidade dos animais", "coelha policial", "raposa", "mistério", "desaparecimento", "preconceito", "conspiração"]
    },
    {
        titulo: "Klaus",
        descricao: "Um carteiro desencantado e um fabricante de brinquedos solitário formam uma improvável amizade em uma vila gelada e esquecida, trazendo a magia do Natal de volta a uma comunidade que havia perdido a esperança.",
        diretor: "Sergio Pablos",
        anoLancamento: 2019,
        tags: ["Natal", "amizade", "carteiro", "fabricante de brinquedos", "vila gelada", "magia", "esperança"]
    },
    {
        titulo: "Coco",
        descricao: "Miguel, um jovem aspirante a músico, acidentalmente se encontra na Terra dos Mortos durante o Dia dos Mortos e deve encontrar sua tataravó para voltar para casa. Em sua jornada, ele descobre segredos sobre sua família e a importância da memória e das tradições.",
        diretor: "Lee Unkrich e Adrian Molina",
        anoLancamento: 2017,
        tags: ["Terra dos Mortos", "Dia dos Mortos", "música", "família", "memória", "tradições", "jornada"]
    },
    {
        titulo: "A Viagem de Chihiro",
        descricao: "Chihiro, uma jovem de 10 anos, encontra-se em um mundo mágico e sombrio quando seus pais são transformados em porcos. Ela deve encontrar uma maneira de salvar seus pais e retornar ao mundo real, enfrentando criaturas estranhas e poderosos espíritos.",
        diretor: "Hayao Miyazaki",
        anoLancamento: 2001,
        tags: ["mundo mágico", "transformação", "pais", "creaturas estranhas", "espíritos", "aventura", "salvação"]
    },
    {
        titulo: "O Menino e o Mundo",
        descricao: "Um menino parte em uma jornada fantástica em busca de seu pai. No caminho, ele descobre um mundo de cores e formas únicas e enfrenta os desafios e maravilhas de uma sociedade em transformação.",
        diretor: "Alê Abreu",
        anoLancamento: 2013,
        tags: ["jornada", "cores", "formas", "sociedade", "transformação", "aventura", "descoberta"]
    },
    {
        titulo: "Os Croods",
        descricao: "Uma família pré-histórica precisa deixar sua caverna após um terremoto e embarcar em uma jornada épica para encontrar um novo lar. Ao longo do caminho, eles conhecem um inventivo jovem que desafia suas crenças sobre o mundo e a evolução.",
        diretor: "Kirk DeMicco e Chris Sanders",
        anoLancamento: 2013,
        tags: ["pré-história", "terremoto", "jornada épica", "novo lar", "invenção", "evolução", "família"]
    },
    {
        titulo: "Luca",
        descricao: "Luca, um jovem monstro marinho, se aventura para a superfície e forma uma amizade com um garoto humano. Enquanto ele explora o mundo dos humanos e enfrenta seus medos, ele aprende sobre a importância da aceitação e da identidade pessoal.",
        diretor: "Enrico Casarosa",
        anoLancamento: 2021,
        tags: ["monstro marinho", "amizade", "mundo dos humanos", "medos", "aceitação", "identidade", "aventura"]
    },
    {
        titulo: "Raya e o Último Dragão",
        descricao: "Raya, uma guerreira solitária, embarca em uma jornada para encontrar o último dragão e salvar seu reino de uma antiga ameaça. Ao longo do caminho, ela aprende sobre confiança, unidade e a importância de acreditar no melhor nas pessoas.",
        diretor: "Don Hall e Carlos López Estrada",
        anoLancamento: 2021,
        tags: ["guerreira", "último dragão", "jornada", "antiga ameaça", "confiança", "unidade", "salvação"]
    },
    {
        titulo: "O Livro da Vida",
        descricao: "Manolo, um jovem dividido entre seguir a tradição da família e buscar seu próprio destino, embarca em uma jornada através de mundos mágicos durante o Dia dos Mortos para provar seu valor e conquistar o coração da mulher que ama.",
        diretor: "Jorge R. Gutierrez",
        anoLancamento: 2014,
        tags: ["tradição", "destino", "mundos mágicos", "Dia dos Mortos", "jornada", "valor", "amor"]
    },
    {
        titulo: "A Era do Gelo: As Aventuras de Scrat",
        descricao: "Scrat, o esquilo pré-histórico em busca da sua preciosa avelã, se envolve em uma série de aventuras e desventuras que afetam o mundo ao seu redor. Essas pequenas histórias mostram o impacto de suas ações na grande escala dos eventos da Era do Gelo.",
        diretor: "Michael Thurmeier e Galen T. Chu",
        anoLancamento: 2016,
        tags: ["esquilo pré-histórico", "aventuras", "avelã", "impacto", "Era do Gelo", "histórias pequenas", "desventuras"]
    },
    {
        titulo: "Os Incríveis",
        descricao: "Após anos vivendo escondidos, a família de super-heróis Parr é forçada a retornar à ação quando um novo vilão ameaça a cidade. Mr. Incrível, Mulher-Elástica e seus filhos, que também têm superpoderes, devem unir forças para enfrentar o perigo e restaurar a justiça.",
        diretor: "Brad Bird",
        anoLancamento: 2004,
        tags: ["super-heróis", "família", "ação", "vilão", "poderes", "justiça", "aventura"]
    },
    {
        titulo: "Os Incríveis 2",
        descricao: "A família Parr retorna em uma nova missão para combater o crime e restaurar a reputação dos super-heróis. Enquanto Mr. Incrível fica em casa cuidando dos filhos, Mulher-Elástica é chamada para liderar uma campanha que visa tornar os super-heróis legais novamente. A família deve enfrentar um novo vilão e usar suas habilidades para proteger a cidade e uns aos outros.",
        diretor: "Brad Bird",
        anoLancamento: 2018,
        tags: ["super-heróis", "família", "ação", "vilão", "poderes", "aventura", "justiça", "retorno"]
    }


];
