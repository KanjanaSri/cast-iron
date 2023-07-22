export function getIngredient(meal) {
  const ingredients = [];
  for (let i = 1; meal[`strIngredient${i}`]; i++) {
    if (meal[`strIngredient${i}`] === "") return;

    const stringredients = `${meal[`strMeasure${i}`]} ${
      meal[`strIngredient${i}`]
    }`;
    ingredients.push(stringredients);
  }
  return ingredients;
}
