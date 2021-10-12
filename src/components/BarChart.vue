<template>
    <v-card>
        <v-card-title>
            <span>{{title}}</span>
        </v-card-title>
        <v-card-text>
            <v-chart :options="chartOptionsBar"> </v-chart>
        </v-card-text>
    </v-card>
</template>

<script>
    import ECharts from 'vue-echarts/components/ECharts'

    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'

export default {
    components: {
        'v-chart': ECharts,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            chartOptionsBar: {
                legend: {
                    show: true,
                    top: "30px"
                },
                tooltip: {
                    show: true
                },
                xAxis: {
                    data: ['Doner', 'Pizza', 'Burger', 'Fries']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        type: 'bar',
                        name: 'monday',
                        data: [63, 20, 55, 84],
                        itemSttyle: [ 5, 5, 0, 0 ]
                    },
                    {
                        type: 'bar',
                        name: 'Tuesday',
                        data: [25, 61, 50, 40],
                        itemSttyle: [ 5, 5, 0, 0 ]
                    },
                    {
                        type: 'bar',
                        name: 'Wednesday',
                        data: [15, 15, 50, 60],
                        itemSttyle: [ 5, 5, 0, 0 ]
                    },
                    {
                        type: 'bar',
                        name: 'thursday',
                        data: [55, 25, 10, 50],
                        itemSttyle: [ 5, 5, 0, 0 ]
                    }
                ]
            }
        }
    },
}
</script>
<style scoped>
.echarts > div{    
    height: 300px;
    width: 300px;
}
</style>