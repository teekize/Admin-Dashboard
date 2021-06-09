import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import Charts from "../../components/charts/Charts";

import { data } from "../../dummyData";

const Home = () => {

    return (

        <div className="home">

            <FeaturedInfo />

            <Charts data={data} title="Users Analytics" dataKey="Active users" grid />
        </div>
    )
}

export default Home;