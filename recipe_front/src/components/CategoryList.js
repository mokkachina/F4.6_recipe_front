import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/categories/").then((res) => {
            setCategories(res.data);
        });
    }, []);

    return (
        <div>
            <h1>Категории блюд</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.slug}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}