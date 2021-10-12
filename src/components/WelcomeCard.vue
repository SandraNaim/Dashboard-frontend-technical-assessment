<template>
    <v-card>
        <v-row align="center" justify="center">
            <v-col cols="4">
                <h2 class="font-weight-bold">{{t("welcomeTimCollins")}}</h2>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col cols="3" v-for="(item, index) in fields" :key="index">
                        <SearchField :title="item.title"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import SearchField from "./SearchField.vue";
import { fields } from "../searchFields.json";
export default {
    components: {
        SearchField,
    },
    data() {
        return {
            fields: fields
        }
    },
    
}
</script>
