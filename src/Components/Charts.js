import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import bgImage from '../Components/image/bg_image.png'

ChartJS.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Bar Chart'
        },
    },
};
const Charts = () => {
    const [data, setData] = useState(
        {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Dataset1',
                    data: [1, 2, 3, 4, 5, 4],
                    borderColor: 'rgb(255,99,132)',
                    backgroundColor: 'rgba(255,99,132,0.5)',
                },
                {
                    label: 'Dataset2',
                    data: [1, 2, 3, 4, 5, 2],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.5)',
                }

            ]

        }
    )
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const dataSet1 = []
            const dataSet2 = []
            fetch(url, { method: 'GET' }).then(data => {
                const res = data.json()
                return res
            }).then((res) => {
                for (const val of res) {
                    dataSet1.push(val.id)
                    dataSet2.push(val.postId)
                }
                setData(
                    {
                        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        datasets: [
                            {
                                label: 'Dataset1',
                                data: dataSet1,
                                borderColor: 'rgb(255,99,132)',
                                backgroundColor: 'rgba(255,99,132,0.5)',
                            },
                            {
                                label: 'Dataset2',
                                data: dataSet2,
                                borderColor: 'rgb(53,162,235)',
                                backgroundColor: 'rgba(53,162,235,0.5)',
                            }

                        ]

                    }
                )
            }).catch(e => {

            })
        }
        fetchData();
    }, [])
    return (
        <>
            <div
                class="bg_image"
                style={{
                    backgroundImage: 'url(' + bgImage + ')',
                    backgroundSize: "cover",
                     height: "100vh",
                    color: "#faf3f3",
                }}>
                    <div  className="chart">
                    <Bar data={data} options={options} />
                    </div>
               
            </div>

        </>
    )
}
export default Charts;