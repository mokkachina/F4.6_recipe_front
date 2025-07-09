import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RecipeDetail() {
    const { slug } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${slug}/`).then((res) => {
            setRecipe(res.data);
        });
    }, [slug]);

    if (!recipe) return <div>Загрузка...</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>Категория: {recipe.category.name}</p>
            <h2>Ингредиенты:</h2>
            <p>{recipe.ingredients}</p>
            <h2>Инструкции:</h2>
            <p>{recipe.instructions}</p>
            <p>Время приготовления: {recipe.cooking_time} мин.</p>
        </div>
    );
}