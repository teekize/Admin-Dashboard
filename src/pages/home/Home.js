import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import Charts from "../../components/charts/Charts";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetLg from "../../components/widgetlg/WidgetLg";

import { data } from "../../dummyData";

const Home = () => {

    return (

        <div className="home">

            <FeaturedInfo />

            <Charts data={data} title="Users Analytics" dataKey="Active users" grid />

            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;