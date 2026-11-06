# SEGURLUZ — demonstração comercial

Website estático em português de Portugal. Demonstração não oficial, ainda não aprovada pelo proprietário. Sem frameworks, instalação, compilação, formulários, ferramentas de análise ou serviços externos obrigatórios. As fontes são as do sistema. O Instagram só é aberto quando o visitante escolhe um dos respetivos links.

## Publicação no GitHub e Netlify

1. Extraia o ZIP. Abra a pasta `segurluz-demo`.
2. Envie **todo o conteúdo dessa pasta**, incluindo `assets` com as suas subpastas, para a raiz do repositório GitHub. Não achate a pasta `assets` nem carregue apenas os ficheiros HTML/CSS/JS.
3. Na raiz do repositório devem aparecer `index.html`, `styles.css`, `script.js`, `netlify.toml`, `robots.txt` e `assets/`.
4. Ligue o repositório ao Netlify. **Base directory: vazia. Build command: vazio. Publish directory: `.`**. O `netlify.toml` já define a pasta de publicação.
5. Se optar por colocar a pasta `segurluz-demo` inteira dentro de outro repositório, configure a base do Netlify como `segurluz-demo`; mantenha a publicação em `.` relativamente a essa base. A opção recomendada é colocar diretamente o conteúdo na raiz.

Não é necessário Git LFS. Os dois vídeos têm aproximadamente 2 MB e 6,2 MB. Não crie uma pasta `public` ou `dist` e não altere os nomes ou a capitalização dos ficheiros. Preserve a estrutura no GitHub.

## Pré-visualização local

Na pasta que contém `index.html`, execute `python -m http.server 8000` (se tiver Python instalado) e abra `http://localhost:8000/`. Python é apenas uma opção para teste local; não é uma dependência de publicação. O site também pode ser aberto diretamente por `index.html`, mas os testes de entrega foram realizados por HTTP.

## Materiais incluídos

- `assets/videos/hero.mp4`: exclusivamente de `Video2.mp4`, do segundo 1,5 ao 9,0. Duração 7,5 s, sem áudio, H.264, 720 × 1280, reprodução automática silenciosa em ciclo. Exclui o encerramento preto com logótipo. Sem recorte ou distorção do enquadramento vertical.
- `assets/videos/trabalhos.mp4`: exclusivamente de `video1.mp4`, aproximadamente 23 s, vídeo original preservado e áudio convertido para AAC LC para compatibilidade, com controlos. Sem reprodução automática.
- Quatro fotografias originais, copiadas sem alteração do conteúdo: finais `(3) (1)`, `(4) (1)`, `(5) (1)` e `(6) (1)`, respetivamente `projeto-01.jpg` a `projeto-04.jpg`.
- `logo.png` e `simbolo.png`: recortes do logótipo original da captura fornecida com final `(7)`. Não são uma recriação da marca. A resolução é limitada pela captura recebida.

As duas fotografias do espaço comercial são apresentadas como registos de intervenção, sem sugerir obras diferentes ou comparação antes/depois. A fotografia da escada mostra preparação da iluminação, sem a apresentar como trabalho concluído. A fotografia do portão, com identificação de terceiros, e as capturas do Instagram não integram a galeria. A comparação 3000 K / 4000 K não é apresentada como obra realizada.

## Conteúdo e contactos

Os botões de orçamento abrem `https://www.instagram.com/segurluz_/`. Não foram acrescentados telefone, e-mail, morada, zonas de cobertura, avaliações ou estatísticas. As referências DGEG e Alvará não são apresentadas como certificações verificadas. Não foi contactada a empresa.

## Indexação e movimento

Inclui `noindex, nofollow` no HTML e no cabeçalho configurado para o Netlify, além de `robots.txt` com bloqueio geral de rastreio. Isto não constitui controlo de acesso: quem tiver o endereço poderá visitar a demonstração publicada.

Inclui preloader curto sem bloquear a interação, entrada do hero, revelações ao scroll, hovers discretos, menu móvel e ampliação da galeria. Com `prefers-reduced-motion`, as animações e o scroll suave são desativados, e o hero fica pausado com botão para reprodução voluntária. A reprodução automática pode ser limitada pelo navegador ou pelo modo de poupança do dispositivo; existe controlo manual.

## Estado da entrega

Pasta autónoma e validada localmente. A configuração Netlify foi inspecionada. **Não foi efetuada publicação no GitHub ou Netlify; a verificação dos URLs e da reprodução em produção está pendente.** Consulte `../TESTES-SEGURLUZ.md` na entrega para os testes efetivamente realizados. O teste móvel usa dimensões de ecrã no navegador de desktop, não um telefone físico.
