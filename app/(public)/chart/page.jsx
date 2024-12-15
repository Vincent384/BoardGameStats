'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDataPage = () => {
  const [chartData, setChartData] = useState(null); 
  const [scoreData, setScoreData] = useState(null); 

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('http://localhost:3000/api/score');
        const data = await res.json();

        const filterArray = data.responseData.map((item) => item.scores); 
        setScoreData(filterArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);


  useEffect(() => {
    if (scoreData) {

        const labels = scoreData.map((array) => array.map((item) => item.name));
        const scores = scoreData.map((array) => array.map((score) => score.result));

        const datasets = [
            {
              label: 'Score',
              data: scores.flat(), // Flat för att hantera flera poäng per användare
              backgroundColor: 'rgba(0, 0, 139, 0.7)',
              borderColor: 'rgba(0, 0, 139, 1)',
              borderWidth: 1,
              datalabels: {
                display: true,
                align: 'center',
                color: 'white',
                font: {
                  weight: 'bold',
                },
              }
            },
        ];

        const transformedData = {
          labels: labels.flat(), // Får användarnamn som etiketter
          datasets,
        };
        
        setChartData(transformedData);
    }
  }, [scoreData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Scores',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}`; // Tooltip text (visar bara poängen)
          },
        },
      },
      datalabels: {
        align: 'center',
        anchor: 'center',
        color: 'white',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: function (value, context) {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${value}`;
        },
      },
    },
    scales: {
      x: {
        // x-axeln kommer att hålla användarnamnen
        stacked: false, // Gör så att staplarna inte staplas
        title: {
          display: true,
          text: 'User Names',
        },
      },
      y: {
        // y-axeln kommer att hålla poängen
        beginAtZero: true, // Ser till att y-axeln börjar på 0
        ticks: {
          stepSize: 50, // Stegstorlek för y-axeln
        },
        title: {
          display: true,
          text: 'Scores',
        },
      },
    },
  };

  return (
    <div className="p-4">
      {chartData ? (
        <Bar data={chartData} options={options} /> // Bar är från react-chartjs-2
      ) : (
        <p>Loading chart...</p>
      )}
      <div className="flex justify-center items-center mt-10">
        <Link href="/">
          <button className="bg-blue-900 text-white px-8 py-2 text-3xl font-semibold rounded-full">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ChartDataPage;
