import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function RecipesByCategory() {
    const { slug } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/categories/${slug}/`).then((res) => {
            setCategory(res.data);
        });
        axios.get(`http://localhost:8000/api/categories/${slug}/recipes/`).then((res) => {
            setRecipes(res.data);
        });
    }, [slug]);

    return (
        <div>
            <h1>Рецепты в категории: {category?.name}</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}