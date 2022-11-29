// Velocidade máxima de até 70km/h
// a cada 5km acima do limite, você ganha 1 ponto
// Math.Floor()
// pontos maior que 12 -> "Carteira Suspensa"

verificarVelocidade(100);

function verificarVelocidade(velocidade) {
    const velMax = 70;
    const kmPorPonto = 5;

    if (velocidade <= velMax)
        console.log('Você está no limite!');
    else {
        const pontos = Math.floor(((velocidade - velMax) / kmPorPonto));
        if (pontos >= 12)
        console.log('Carteira suspensa!');
        else 
            console.log('Você recebeu', pontos, 'pontos na carteira!');
    }

}
