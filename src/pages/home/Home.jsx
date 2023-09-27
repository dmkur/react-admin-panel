import "./home.css";
import {WidgetLg, WidgetSm, FeaturedInfo,Chart} from "../../components";
import { useEffect, useMemo, useState } from "react";
import { userService } from "../../services";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    [],
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const { data } = await userService.getUsersStats();
        // setUserStats(data)
        data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]),
        );
      } catch (e) {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export { Home };
