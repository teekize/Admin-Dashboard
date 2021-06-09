import "./featuredInfo.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const FeaturedInfo = () => {

    return (

        <div className="featured">

            <div className="featured-item">
                <span className="featured-title">Revenue</span>

                <div className="featured-money-container">

                    <span className="featured-money">$24,000</span>
                    <span className="featured-money-rate">-11.2 <ArrowDownwardIcon className="featured-icon negative" /></span>


                </div>

                <span className="featured-sub">Compared to last month</span>
            </div>


            <div className="featured-item">
                <span className="featured-title">Sales</span>

                <div className="featured-money-container">

                    <span className="featured-money">$4,000</span>
                    <span className="featured-money-rate">-5.2 <ArrowDownwardIcon className="featured-icon negative" /></span>


                </div>

                <span className="featured-sub">Compared to last month</span>
            </div>

            <div className="featured-item">
                <span className="featured-title">Cost</span>

                <div className="featured-money-container">

                    <span className="featured-money">$2,100</span>
                    <span className="featured-money-rate">+1.2 <ArrowUpwardIcon className="featured-icon" /></span>


                </div>

                <span className="featured-sub">Compared to last month</span>
            </div>



        </div>
    )
}

export default FeaturedInfo;