import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {orderService} from "../../services";

export default function FeaturedInfo() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);
    console.log(income, '!@')
    console.log(perc, '!@')

    useEffect(() => {
        const getIncome = async () => {
            try {
                const {data} = await orderService.getOrdersStats()
                setIncome(data)
                setPerc((data[1].total * 100) / data[1].total - 100)
            } catch (e) {
            }
        }
        getIncome()
    }, [])


    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoneyRate">
            % {Math.floor(perc)}
                        {perc < 0
                            ? <ArrowDownward className="featuredIcon negative"/>
                            : <ArrowDownward className="featuredIcon negative"/>
                        }
          </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}
