<template>
  <div class="home">
    <div class="home__general">
      <h2>Общие данные</h2>
    </div>
    <div class="home__doughnut">
      <Doughnut :data="douData" :options="douOptions" />
    </div>
    <div class="home__bar">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Bar, Doughnut } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
  } from 'chart.js'

  ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#00CB9A',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  const douData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }

  const douOptions = {
    responsive: true,
    maintainAspectRatio: false
  }
</script>

<style scoped lang="scss">
 .home {
    display: grid;
    gap: 20px;

    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(240px, 1fr));

    grid-template-areas:
    "gen dou"
    "bar dou";

    &__general {
      grid-area: gen;
    }
    &__doughnut {
      grid-area: dou;
    }
    &__bar {
      grid-area: bar;
    }
 }
</style>