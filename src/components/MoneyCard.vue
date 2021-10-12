<template>
    <v-card>
        <v-card-title>
            <span>{{title}}</span>
        </v-card-title>
        <v-card-text>
            <v-divider />
            <div class="mt-5">${{price}}</div>
            <div class="mt-5">
                <v-row>
                    <v-col cols="6">
                        ({{discountedPercentage}}%)
                    </v-col>
                    <v-col cols="6" class="text-end">
                        {{discountedPrice}}
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: 0
        },
        discountedPercentage: {
            type: Number,
            default: 0
        },
    },
    computed: {
        discountedPrice() {
            let p = (this.discountedPercentage/100)*this.price
            return this.price-p
        }
    },
}
</script>
