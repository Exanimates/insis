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
                            <router-link to="/" class="link" active-class="active">Главная</router-link>
                            <router-link to="/fms" class="link" active-class="active">ФМС</router-link>
                            <router-link to="/guvdOrMvd" class="link" active-class="active">ГУВД или МВД</router-link>
                            <router-link to="/uvdOrOvd" class="link" active-class="active">УВД или ОВД</router-link>
                            <router-link to="/police" class="link" active-class="active">Отделение полиции</router-link >
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
.link {
    padding: 8px 0px 8px 32px;
    border-left: 1px solid transparent;
    text-decoration: none;
    color: #767676;
}
.active {
  border-left: 1px solid #767676;
  cursor: pointer;
}
.navigation {
    display: flex;
    flex-direction: column;
}
</style>