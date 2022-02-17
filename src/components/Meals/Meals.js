import MealsSummary from "./MealsSummary"
import Availablemeals from "./AvailableMeals"
import { Fragment } from "react/cjs/react.production.min";

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <Availablemeals />
    </Fragment>
}

export default Meals;