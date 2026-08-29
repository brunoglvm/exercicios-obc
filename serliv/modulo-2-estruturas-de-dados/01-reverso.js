let nomes = ['joão', 'maria', 'daniel', 'beatriz', 'ricardo', 'luciene'];

for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes.length - i, nomes[i].charAt(0).toUpperCase() + nomes[i].slice(1));
}
