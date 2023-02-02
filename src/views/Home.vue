<template>
  <div class="home">
    <div class="home__general">
      <h2>Общие данные</h2>
      <div class="home__nav">
        <div class="home__elem">
          <div>{{ issueBy.fmsLen }}</div>
          <div>подразделение ФМС</div>
        </div>
        <div class="home__elem">
          <div>{{ issueBy.guvdOrMvd }}</div>
          <div>подразделений ГУВД или МВД региона</div>
        </div>
        <div class="home__elem">
          <div>{{ issueBy.uvdOrOvd }}</div>
          <div>подразделений УВД или ОВД района или города</div>
        </div>
        <div class="home__elem">
          <div>{{ issueBy.police }}</div>
          <div>подразделений отделения полиции</div>
        </div>
      </div>
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
  interface Dataset {
    label: string | null,
    backgroundColor: string[],
    data: number[]
  }

  interface Refs {
    labels: string[];
    datasets: Dataset[];
  }
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

  const labels = [
      'ФМС',
      'ГУВД или МВД',
      'УВД или ОВД',
      'Отделение полиции'
  ];
  
  const dataIssue: number[] = [];
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
  }

  let data = ref<Refs>({
    labels: [''],
    datasets: [
      {
        label: null,
        backgroundColor: [''],
        data: [0] 
      },
    ]
  });
  
  let douData = ref<Refs>({
    labels: [''],
    datasets: [
      {
        label: null,
        backgroundColor: [''],
        data: [0] 
      },
    ]
  });

  const douOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  onMounted(async () => {
    const request = {
      "query": 'Иван',
    };
    const result = await api.query(request);

    issueBy.fmsLen = result.suggestions.filter(elem => elem.data.type == division.Fms.toString()).length
    issueBy.guvdOrMvd = result.suggestions.filter(elem => elem.data.type == division.GuvdOrMvd.toString()).length
    issueBy.uvdOrOvd = result.suggestions.filter(elem => elem.data.type == division.UvdOrOvd.toString()).length
    issueBy.police = result.suggestions.filter(elem => elem.data.type == division.Police.toString()).length

    for (var issue of Object.values(issueBy)) {
        dataIssue.push(issue);
    }
    
    data.value = {
      labels: labels,
      datasets: [
        {
          label: '',
          backgroundColor: ['#00CB9A'],
          data: dataIssue
        }
      ]
    }

    douData.value = {
      labels: labels,
      datasets: [
        {
          label: null,
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: dataIssue
        }
      ]
    }
  })


</script>

<style scoped lang="scss">
 .home {
    display: grid;
    gap: 20px;

    grid-template-columns: 75% 25%;
    grid-template-rows: 1.5fr 1.5fr;

    grid-template-areas:
    "gen dou"
    "bar .";

    height: 600px;

    &__general {
      grid-area: gen;

      background: #EBEBEB;
      margin-top: 40px;
      padding: 20px;
    }
    &__doughnut {
      grid-area: dou;
      width: 400px;
    }
    &__bar {
      grid-area: bar;
    }
    &__nav {
      display: flex;
      flex-wrap: wrap;

      justify-content: space-between;
    }
    &__elem {
      margin-left: 10px;
    }
 }
</style>