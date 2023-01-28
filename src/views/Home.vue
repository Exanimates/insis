<template>
  <v-app>
      <v-layout>
        <v-navigation-drawer
          permanent
        >
          <v-list>
            <v-list-item
              title="ИНСИС"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item title="Главная" value="main"></v-list-item>
            <v-list-item title="ФМС" value="fms"></v-list-item>
            <v-list-item title="ГУВД или МВД" value="guvdormvd"></v-list-item>
            <v-list-item title="УВД или ОВД" value="uvdormvd"></v-list-item>
            <v-list-item title="Отделение полиции" value="police"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 500px"></v-main>
      </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
