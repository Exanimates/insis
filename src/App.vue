<template>
    <div class="container">
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
                        <div class="navigation">
                            <router-link to="/" active-class="active">Главная</router-link>
                            <router-link to="/fms" active-class="active">ФМС</router-link>
                            <router-link to="/guvdOrMvd" active-class="active">ГУВД или МВД</router-link>
                            <router-link to="/uvdOrOvd" active-class="active">УВД или ОВД</router-link>
                            <router-link to="/police" active-class="active">Отделение полиции</router-link >
                        </div>
                    </v-list>
                </v-navigation-drawer>
        
                <v-main style="height: 500px"></v-main>
            </v-layout>
        </v-app>
        <div class="router">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
body {
    background-color: #F5F5F5;
}
.container {
    display: flex;
}
.router {
    width: 100%;
    overflow: hidden;
}
.active {
  background-color: rgb(167, 167, 167);
  cursor: pointer;
  transition: .5s;
}
.navigation {
    display: flex;
    flex-direction: column;
}
</style>