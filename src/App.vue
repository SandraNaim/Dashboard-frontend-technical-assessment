<template>
  <div id="app" style="overflow:hidden">
    <v-app>
      <v-main>
        <v-container>
          <v-row>
            <WelcomeCard />
          </v-row>
          <v-row>
             <v-col cols="12" class="pr-0 pl-0">
              <v-row>
                <v-col :cols="item.colNb" v-for="(item, index) in cards" :key="index">
                  <MoneyCard v-if="item.card === cardsName.MONEY_CARD" :title="item.title" :price="item.price" :discountedPercentage="item.discountedPercentage"/>
                  <DataTable v-if="item.card === cardsName.DATATABLE" :title="item.title" :data="tableData"/>
                  <ProgressLine v-if="item.card === cardsName.PROGRESS_LINE" :title="item.title"/>
                  <!-- <PieChart v-if="item.card === cardsName.PIE_CHART" :title="item.title"/> -->
                  <BarChart v-if="item.card === cardsName.BAR_CHART" :title="item.title" />
                  <HearAboutUs v-if="item.card === cardsName.HEAR_ABOUT_US" />
                </v-col>
              </v-row>
             </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style>
</style>

<script>
  import WelcomeCard from "./components/WelcomeCard";
  import MoneyCard from "./components/MoneyCard";
  // import PieChart from "./components/PieChart";
  import BarChart from "./components/BarChart";
  import ProgressLine from "./components/ProgressLine";
  import HearAboutUs from "./components/HearAboutUs";
  import DataTable from "./components/DataTable.vue";
  import CardsName from "./constants/CardsName";
  import {cardsData} from './cardsData.json';
  import {ticketsData} from './ticketsData.json';

export default {
  name: "App",

  components: {
    WelcomeCard,
    MoneyCard,
    HearAboutUs,
    // PieChart,
    BarChart,
    ProgressLine,
    DataTable
  },
  data() {
    return {
      cardsName: CardsName,
      cards: cardsData,
      tableData: ticketsData
    }
  },
  methods: {
  },
};
</script>

<style scoped>
#app{
  background-color: #F1F1F1;
}
</style>
<style>
  .v-card{
      padding: 15px;
  }
  .bold-text{
    font-weight: bold;
  }
</style>
