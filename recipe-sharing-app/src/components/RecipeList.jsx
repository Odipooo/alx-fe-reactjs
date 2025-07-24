import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;