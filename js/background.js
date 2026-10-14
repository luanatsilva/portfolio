document.addEventListener("DOMContentLoaded", () => {
    const bg = document.getElementById("space-background");
    
    
    const starCount = 120; 
    const moonCount = 5;
    const maxCodeLines = 4;

    // linhas de código
    const codeSnippets = [
        "const portfolio = new Lua();",
        "document.querySelector('#portfolio');",
        "function animarEstrelas() {",
        "background: radial-gradient(circle);",
        "display: flex; justify-content: center;",
        "import { criatividade } from 'moon';",
        "console.log('Olá Mundo!');",
        "if (ideia.creative === true) {",
        "transform: scale(1.05) rotate(5deg);",
        "const lua = document.createElement('div');",
        "SELECT * FROM especialidades WHERE id = 1;",
        "<?php echo 'Bem-vindo ao meu portfólio'; ?>"
    ];

    // criar Estrelas
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${Math.random() * 5 + 3}s`);
        star.style.setProperty('--delay', `${Math.random() * 5}s`);
        star.style.setProperty('--max-opacity', `${Math.random() * 0.5 + 0.2}`);

        if (Math.random() > 0.85) {
            star.classList.add("blue-glow");
        }
        bg.appendChild(star);
    }

    // Criar Luas
    for (let i = 0; i < moonCount; i++) {
        const moon = document.createElement("div");
        moon.classList.add("moon-silhouette");
        moon.style.left = `${Math.random() * 90 + 5}%`;
        moon.style.top = `${Math.random() * 95 + 5}%`;
        const scale = Math.random() * 0.5 + 0.7;
        moon.style.transform = `scale(${scale})`;
        moon.style.animationDelay = `${Math.random() * 4}s`;
        bg.appendChild(moon);
    }

    // Efeito de Escrita de Código
    function typeCodeLine() {
        // Limita o número de linhas ativas ao mesmo tempo no fundo
        const activeLines = document.querySelectorAll('.floating-code');
        if (activeLines.length >= maxCodeLines) {
            setTimeout(typeCodeLine, 4000);
            return;
        }

        const codeElement = document.createElement("span");
        codeElement.classList.add("floating-code");
        
        // Posição aleatória na ecrã
        codeElement.style.left = `${Math.random() * 75 + 5}%`;
        codeElement.style.top = `${Math.random() * 85 + 5}%`;
        
        // Ativa o cursor a piscar via CSS
        codeElement.style.animation = "blink 0.6s step-end infinite";
        codeElement.style.opacity = "1";
        
        bg.appendChild(codeElement);

        const fullText = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        let charIndex = 0;

        // Função interna que digita letra a letra
        function typeChar() {
            if (charIndex < fullText.length) {
                codeElement.textContent += fullText.charAt(charIndex);
                charIndex++;
                // Velocidade de digitação aleatória para parecer real (entre 50ms e 120ms)
                setTimeout(typeChar, Math.random() * 70 + 50);
            } else {
                // Terminou de digitar: mantém visível por 5 segundos e depois faz desaparecer
                setTimeout(() => {
                    codeElement.style.animation = "fadeOutCode 2s ease-in-out forwards";
                    // Remove o elemento do HTML após o fade-out terminar
                    setTimeout(() => {
                        codeElement.remove();
                    }, 2000);
                }, 5000);
            }
        }

        // Inicia a digitação após um pequeno atraso
        setTimeout(typeChar, 500);
    }

    // Dispara a primeira linha e continua a criar novas linhas ao longo do tempo
    typeCodeLine();
    setInterval(typeCodeLine, 6000); // Tenta criar uma nova linha a cada 6 segundos
});