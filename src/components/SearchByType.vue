<template>
  <div class="searchByType">
    <div class="searchByType__input">
      <div>Поиск</div>
      <v-text-field
        :width="500"
        class="searchByType__textField"
        placeholder="Поиск по названию и коду подразделения"
        @input="event => handleInputDeb(event.target.value)"
    ></v-text-field>
    </div>
    <EasyDataTable
      buttons-pagination
      :headers="headers"
      :items="issueBy"
      :rowsPerPage="5"
    />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import api from '../api/api'
  import { Suggestions } from '@/types/apiTypes'
  import { divisDict } from '@/dict/suggestionsDict'
  import _debounce from 'lodash/debounce';


  const props = defineProps({
    type: {
      type: Number,
      required: true,
      default: 0
    }
  })

  const headers = [
      {
        text: 'Код подразделения',
        align: 'start',
        value: 'data.code',
      },
      { text: 'Название', value: 'value' },
      { text: 'Код региона', value: 'data.region_code' },
      { text: 'Вид подразделения', value: 'data.type' }];
      
  let issueBy = ref<Suggestions[]>([])
  
  const handleInput = async (value: string) => {
    const request = {
      "query": value,
      "filters": [
        {
            "type": props.type
        }
      ]
    };

    const result = await api.query(request);
    issueBy.value = result.suggestions;

    for (const issue of issueBy.value) {
      issue.data.type = divisDict[props.type]
    }
  }
  
  const handleInputDeb = _debounce(handleInput, 1000) 
</script>
<style lang="scss">
.searchByType {
  &__input {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 800px;
    margin-left: 5px;
  }
  &__textField {
    margin-top: 10px;
    margin-left: 10px;
  }
}
</style>