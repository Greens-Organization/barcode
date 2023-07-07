# Código de Barras

O código de barras mais utilizado atualmente é chamado de [ean13](https://en.wikipedia.org/wiki/International_Article_Number) (Número da Artigo Europeu, que utiliza treze dígitos) sendo ele dividido em partes que trazem informações de acordo com a figura abaixo:

1. Os três primeiros mostram o país em que o código foi gerado. O número do Brasil é **789**.
2. Após a identificação do país que gerou o código é preciso mostrar o número da empresa que produziu o item.
3. A descrição das características de cada item é representada por três números. Ao ser lida, a combinação acessa informações como altura, peso, largura, datas, de fabricação e de validade, por exemplo.
4. Dígito verificador. Sua função é comprovar que a sequência numérica é verdadeiro.

Ex: `789 8357 41 001 5`

1. `789` representa o país.
2. `8357 41` diz respeito a empresa.
3. `001` são as características do item.
4. `5` dígito verificador.

Códigos de alguns países (podem ter dois ou três números):

| País          | Inicial   |
| ------------- | --------- |
| Brasil        | 789       |
| USA ou Canadá | 00 a 13   |
| China         | 690 a 693 |
| Argentina     | 779       |

## Como funciona na prática

Nós usamos o dígito verificador para validar se aquela sequência de 13 dígitos é realmente válida.

- O último dígito é obtido a partir dos anteriores da seguinte forma:

  1. Os dígitos que o precedem devem ser multiplicados por 1 e 3 alternadamente e somados:

  Ex: `590 1234 12 345 7`

  (5 _ 1) + (9 _ 3) + (0 _ 1) + (1 _ 3) + (2 _ 1) + (3 _ 3) + (4 _ 1) + (1 _ 3) + (2 _ 1) + (3 _ 3) + (4 _ 1) + (5 _ 3) =
  5 + 27 + 0 + 3 + 2 + 9 + 4 + 3 + 2 + 9 + 4 + 15 = 83

  OBS: Essa processo é chamado comumente de _checksum_.

  2. O número encontrado deve ser subtraído do próximo múltiplo de 10:
     **Pegando o exemplo anterior**: O próximo múltiplo de 10 é 90. Logo, 90 - 83 = 7.

  3. O resultado dessa operação é o dígito verificador.

- Por fim, é assim que geramos o dígito verificador.

Em questão de código, para fazer uma verificação se o número do item é válido ou não. Faremos o seguinte processo, ao fazer a primeira etapa com os 12 primeiros números, somaremos o dígito verificador (o último número) com o seu resultado. E caso ele seja múltiplo de 10, ele é um código de barra válido.

## Referências

- [Material de Algoritmos da Unicamp](https://www.ime.unicamp.br/sites/default/files/lem/material/julianasdalgoritmos.pdf)
- [ean13](https://en.wikipedia.org/wiki/International_Article_Number)
