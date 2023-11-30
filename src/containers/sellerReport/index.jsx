import { useState, useEffect } from "react";
import Charts from "../../components/pieChart";
import Style from "./style.module.css";
import ReportTable from "../../components/ReportTable";
import Select from "../../components/select";
import { MonthlyReportApi, YearlyReportApi } from "../../../apis/sellers";

export default function SellerReport() {
    const monthList = ["Ichigatsu", "Nigatsu", "Sangatsu", "Shigatsu", "Gogatsu", "Rokugatsu", "Sichigatsu", "Hachigatsu", "Kugatsu", "Juugatsu", "Juuichigatsu", "Juunigatsu"];
    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(23), (val, index) => year - index);
    const [reportData, setReportData] = useState([]);
    const [reportType, setReportType] = useState("Monthly");
    const [reportMonth, setReportMonth] = useState(monthList[new Date().getMonth()]);
    const [reportYear, setReportYear] = useState(year);
    const [pieChartData,setPieChartData]=useState([]);
    useEffect(() => {
        monthlyReport(new Date().getMonth() + 1, new Date().getFullYear());
    }, []);

    function monthlyReport(month, year) {
        MonthlyReportApi(month, year).then(function (data) {
            setReportData(data);
            formatPieChartData(data);
        }).catch(function (err) {
            console.log(JSON.stringify(err));
        });
    }
    function yearlyReport(year) {
        YearlyReportApi(year).then(function (data) {
            setReportData(data);
            formatPieChartData(data);
        }).catch(function (err) {
            console.log(err);
        })
    }

    function onChangeReportType(ev) {
        setReportType(ev.target.value);
        if (ev.target.value == "Monthly") {
            monthlyReport(monthList.indexOf(reportMonth) + 1, reportYear);
        }
        if (ev.target.value == "Yearly") {
            yearlyReport(reportYear);
        }
    }
    function onChangeReportMonth(ev) {
        setReportMonth(ev.target.value);
        if (reportType == "Monthly") {
            monthlyReport(monthList.indexOf(ev.target.value) + 1, reportYear);
        }
        if (reportType == "Yearly") {
            yearlyReport(reportYear);
        }
    }
    function onChangeReportYear(ev) {
        setReportYear(ev.target.value);
        if (reportType == "Monthly") {
            monthlyReport(monthList.indexOf(reportMonth) + 1, ev.target.value);
        }
        if (reportType == "Yearly") {
            yearlyReport(ev.target.value);
        }
    }
    function formatPieChartData(data){
        console.log(data);
        let d=[["product","order received"]]
        data.map(value=>{
            d.push([value.name,value.received]);
        });
        console.log(d);
        setPieChartData(d)
    }

    return (
        <div className={Style.outerContainer}>
            <div>Select type of report: <Select styles={{ width: "120px" }} value={reportType} onChange={onChangeReportType} options={["Monthly", "Yearly"]} />
                Select Month: <Select styles={{ width: "120px" }} value={reportMonth} onChange={onChangeReportMonth} options={monthList} />
                Select Year: <Select styles={{ width: "120px" }} value={reportYear} onChange={onChangeReportYear} options={years} /></div>
            <ReportTable data={reportData} />
            <Charts options={{title:"Piechart of orders according to product"}} data={pieChartData}/>
        </div>
    )
}

