# Convite de casamento - Camila & Mateo

Pagina estatica em HTML/CSS para convite de casamento.

## Como trocar a foto

1. Entre na pasta `fotos`.
2. Suba a foto principal com o nome `casal.jpg`.
3. Aguarde o GitHub atualizar a pagina.

A pagina ja tem uma imagem provisoria. Quando `fotos/casal.jpg` existir, ela passa a usar a foto enviada.

## Como publicar no GitHub Pages

1. Crie ou abra o repositorio no GitHub.
2. Envie estes arquivos para o repositorio.
3. Va em `Settings` > `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve. O GitHub vai gerar um link parecido com:

```text
https://seu-usuario.github.io/nome-do-repositorio/
```

## Verificacao local

Rode:

```bash
node scripts/verify-page.js
```
