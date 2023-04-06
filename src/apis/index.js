export async function getGdp() {
  return import('../assets/gdp.json').then((response) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response.default);
      }, 600);
    });
  });
}
