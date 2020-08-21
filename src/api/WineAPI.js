export default async function getWines() {
  const response = await fetch("http://localhost:3333/wines");
  if (!response.ok);

  const result = await response.json();
  return result;
}

// export default async function fetchWine() {
//   const wineFetch = await fetch(" http://localhost:3333/wines");
//   const response = await wineFetch.json();
//   const uniqueWines = response.results.filter(
//     (wine, index) =>
//       response.results.findIndex((other) => other.lwin === wine.lwin) === index
//   );
//   return uniqueWines;
// }
