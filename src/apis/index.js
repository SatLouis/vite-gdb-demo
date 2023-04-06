export async function getGdp() {
  return fetch('/api/gdp.json').then((response) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response.json());
      }, 600);
    });
  });
}
