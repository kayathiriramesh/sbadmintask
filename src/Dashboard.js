import React from 'react'
import Card from './Card'
import {useSearchParams,createSearchParams} from 'react-router-dom';
import {Doughnut,Line} from "react-chartjs-2";
  /* react-chartjs-2package install*/
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
function Dashboard() {

  const [searchParams, setParams] = useSearchParams();
  console.log([...searchParams]);//[['status','draft'],['id','6']]
  console.log(Object.fromEntries([...searchParams]))//{status:'draft',id:'6'}
  return (
    <>
    <button onClick={() =>
    {
      setParams(createSearchParams({...Object.fromEntries([...searchParams]),price:50}))
    }}> Change Price</button>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" 
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
           </a>
        </div>
        <div className="row">
         <Card  title="Monthly Earnings" value="40000" color="primary"/> 
         <Card  title="Total Products" value="50" color="info"/> 
         <Card  title="Total Users" value="60" color="warning"/> 
         <Card  title="Online Users" value="10" color="success"/> 
        </div>
        <div className="row">
            <div className="col-lg-4">
                <Doughnut data={{
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                }}/>
            </div>
            <div className="col-lg-8">
                <Line 
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                position: 'top',
                                },
                                title: {
                                display: true,
                                text: 'Chart.js Line Chart',
                                },
                            },
                            }} 
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [{
                                label: 'My First Dataset',
                                data: [65, 59, 80, 81, 56, 55, 40],
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            },],
                        }}
                    />
            </div>
        </div>
    </>
  );
}

export default Dashboard