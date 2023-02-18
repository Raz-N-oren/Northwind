import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import RandomDiscount from "../RandomDiscount/RandomDiscount";
import Recommendations from "../Recommendations/Recommendations";
import Sale from "../Sale/Sale";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            {/* Interpolation */}
            <Discount />

            {/* conditional rendering: */}
            <Specials />

            {/* Displaying Lists:  */}
            <Desserts />

            {/* Events */}
            <Recommendations />

            {/* props */}
            <Sale category="Beverages" percent={10} />
            <Sale category="Candies" percent={15} />

            {/* State */}
            <BestSeller />
            <RandomDiscount />

            {/* useEffect */}
            <Clock />
        </div>
    );
}

export default Home;
