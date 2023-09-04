import "./widgetLg.css";
import {useEffect, useState} from "react";
import {orderService} from "../../services";
import {format} from "timeago.js";

export default function WidgetLg() {
    const [orders, setOrders] = useState([]);
    console.log(orders, '1')

    useEffect(() => {
        const getOrders = async () => {
            try {
                const {data} = await orderService.getOrders()
                setOrders(data)
            } catch (e) {
            }
        }
        getOrders()
    }, [])

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">

                <tbody>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                </tbody>
                {orders.map(order => (

                    <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{format(order.createdAt)}</td>
                        <td className="widgetLgAmount">{order.amount}</td>
                        <td className="widgetLgStatus">
                            <Button type={order.status}/>
                        </td>
                    </tr>
                    </tbody>
                ))}


            </table>
        </div>
    );
}