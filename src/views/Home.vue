<template>
  <div class="home">
    <div class="home__general">
      <h2>Общие данные</h2>
      <div class="home__nav">
        <div class="home__fms">
          <div>{{ issueBy.fmsLen }}</div>
          <div>подразделение ФМС</div>
        </div>
        <div class="home__guvdOrMvd">
          <div>{{ issueBy.guvdOrMvd }}</div>
          <div>подразделений ГУВД или МВД региона</div>
        </div>
        <div class="home__uvdOrOvd">
          <div>{{ issueBy.uvdOrOvd }}</div>
          <div>подразделений УВД или ОВД района или города</div>
        </div>
        <div class="home__police">
          <div>{{ issueBy.police }}</div>
          <div>подразделений отделения полиции</div>
        </div>
      </div>
    </div>
    <div class="home__doughnut">
      <Doughnut width="200px" :data="douData" :options="douOptions" />
    </div>
    <div class="home__bar">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Bar, Doughnut } from 'vue-chartjs'
  import { onMounted, ref, reactive } from 'vue'
  import api from '../api/api'
  import division from '../types/divisions'

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

  const issueBy = reactive({
    fmsLen: 0,
    guvdOrMvd: 0,
    uvdOrOvd: 0,
    police: 0
  });

  onMounted(async () => {

    debugger;
    const request = {
      "query": 'И',
      "filters": [
          {
              "type": division.Fms
          },
          {
              "type": division.GuvdOrMvd
          },
          {
              "type": division.UvdOrOvd
          },
          {
              "type": division.Police
          },
      ]
    };
    const result = await api.query(request);

    issueBy.fmsLen = result.suggestions.filter(elem => elem.data.type == division.Fms.toString()).length
    issueBy.guvdOrMvd = result.suggestions.filter(elem => elem.data.type == division.GuvdOrMvd.toString()).length
    issueBy.uvdOrOvd = result.suggestions.filter(elem => elem.data.type == division.UvdOrOvd.toString()).length
    issueBy.police = result.suggestions.filter(elem => elem.data.type == division.Police.toString()).length

  })
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

    grid-template-columns: repeat(auto-fit, minmax(840px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(240px, 1fr));

    grid-template-areas:
    "gen dou"
    "bar dou";

    &__general {
      background: #EBEBEB;
      margin-top: 40px;
      grid-area: gen;
    }
    &__doughnut {
      grid-area: dou;
      
      width: 300px;
    }
    &__bar {
      grid-area: bar;
    }
    &__nav {
      display: flex;
      flex-wrap: wrap;

      justify-content: space-between;
    }
 }
</style>