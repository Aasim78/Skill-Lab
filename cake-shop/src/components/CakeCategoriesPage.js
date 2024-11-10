import CakeCategory from './CakeCategory'; // Ensure CakeCategory is imported correctly
import cakesData from '../data/cakes.json';  // Ensure cakesData is imported correctly

function CakeCategoriesPage() {
  return (
    <div className="cake-categories">
      <h2>Our Cake Categories</h2>
      <div className="category-grid">
        {/* Rendering each cake inside CakeCategory */}
        {cakesData.map((cake) => (
          <CakeCategory key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
}


export default CakeCategoriesPage;
