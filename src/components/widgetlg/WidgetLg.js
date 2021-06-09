import "./WidgetLg.css";


const WidgetSm = () => {

    const Button = ({ type }) => {
        return (
            <button className={"widget-lg-button " + type}>{type}</button>
        )
    }
    return (

        <div className="widget-lg">
            <h3 className="widget-lg-title">Latest Transactions</h3>

            <table className="widget-lg-table">

                <tr className="widget-lg-row">

                    <th className="widget-lg-th">
                        Customer
                    </th>

                    <th className="widget-lg-th">
                        Date
                    </th>

                    <th className="widget-lg-th">
                        Amount
                    </th>

                    <th className="widget-lg-th">
                        Status
                    </th>
                </tr>

                <tr className="widget-lg-row">

                    <td className="widget-lg-user">

                        <img className="widget-lg-img" alt="image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" />
                        <span className="widget-lg-name">Kevin Thuita</span>
                    </td>

                    <td className="widget-lg-date">2 June 2021</td>
                    <td className="widget-lg-amount">$ 350</td>
                    <td className="widget-lg-status">
                        <Button type="Approved" />
                    </td>
                </tr>

                <tr className="widget-lg-row">

                    <td className="widget-lg-user">

                        <img className="widget-lg-img" alt="image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" />
                        <span className="widget-lg-name">Kevin Thuita</span>
                    </td>

                    <td className="widget-lg-date">2 June 2021</td>
                    <td className="widget-lg-amount">$ 350</td>
                    <td className="widget-lg-status">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className="widget-lg-row">

                    <td className="widget-lg-user">

                        <img className="widget-lg-img" alt="image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" />
                        <span className="widget-lg-name">Kevin Thuita</span>
                    </td>

                    <td className="widget-lg-date">2 June 2021</td>
                    <td className="widget-lg-amount">$ 350</td>
                    <td className="widget-lg-status">
                        <Button type="Rejected" />
                    </td>
                </tr>

                <tr className="widget-lg-row">

                    <td className="widget-lg-user">

                        <img className="widget-lg-img" alt="image" src="https://lh3.googleusercontent.com/ogw/ADea4I5Zmq8Da4GL7w1Bi0NPQTomAbVrc6oMrn_pZiEugw=s32-c-mo" />
                        <span className="widget-lg-name">Kevin Thuita</span>
                    </td>

                    <td className="widget-lg-date">2 June 2021</td>
                    <td className="widget-lg-amount">$ 350</td>
                    <td className="widget-lg-status">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>

        </div>
    )

}

export default WidgetSm;