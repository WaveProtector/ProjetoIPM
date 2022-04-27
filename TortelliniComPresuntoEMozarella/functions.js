function showPasso(p) {
    var x = document.getElementById("preparacao-passo");
    switch(p) {
        case 1:
            x.innerHTML = "Passo 1: Para os tortellini: salpique a bancada de trabalho com farinha e misture aí a farinha e o sal. Abra uma cova e acrescente o azeite e os ovos. Amasse bem com as mãos, até obter uma massa consistente e homogénea. Deixe descansar 15 minutos. Com um rolo, estenda a massa até ficar muito fina. Corte-a em pequenos círculos com cerca de 8cm, usando um corta-massas ou um copo.";
            break;
        case 2:
            x.innerHTML = "Passo 2: Para o recheio: pique finamente as chalotas e os dentes de alho e salteie-os no azeite quente até a chalota começar a murchar. Adicione o queijo Mozzarella cortado em cubos, o presunto e o tomate seco laminado.";
            break;
        case 3:
            x.innerHTML = "Passo 3: Envolva bem e tempere com metade do sal, pimenta e a salva cortada em troços finos. Retire do lume, deixe arrefecer um pouco e recheie os tortellini. Reserve.";
            break;
        case 4:
            x.innerHTML = "Passo 4: Coloque um pouco de recheio no centro dos círculos de massa e feche-os, unindo as pontas. Passe com um pouco de água nos bordos e pressione para prender melhor.";
            break;
        case 5:
            x.innerHTML = "Passo 5: Lamine o manjericão e a salva, coloque-os num tacho pequeno e adicione o azeite e a mostarda em grão. Envolva bem e leve ao lume até levantar fervura. Retire e reserve.";
            break;

        case 6:
            x.innerHTML = "Passo 6: Coza a massa em água a ferver temperada com sal durante 3 minutos ou até ficar al dente. Retire, escorra e coloque os tortellini num prato fundo. Regue-os com o molho de ervas quente. Sirva de imediato.";
            break;
    }
}