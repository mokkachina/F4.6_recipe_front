import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import RecipesByCategory from "./components/RecipesByCategory";
import RecipeDetail from "./components/RecipeDetail";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Главная</Link>
            </nav>
            <Routes>
                <Route path="/" element={<CategoryList />} />
                <Route path="/categories/:slug" element={<RecipesByCategory />} />
                <Route path="/recipes/:slug" element={<RecipeDetail />} />
            </Routes>
        </Router>
    );
}

export default App;