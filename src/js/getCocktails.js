export function getCocktailByName(cocktailName) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export function getCocktailByLetter(cocktailLetter) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${cocktailLetter}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export function getCocktailById(cocktailId) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export function getIngrByName(ingrName) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingrName}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export function getRandomCocktail() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(
    response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    }
  );
}

export function getIngrImg(inrgName) {
  // there 3 img sizes available and function must receive parameter as follow: "gin-Small.png" or "gin-Medium.png" or "gin.png"

  return fetch(
    `https://www.thecocktaildb.com/images/ingredients/${inrgName}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.url;
  });
}
