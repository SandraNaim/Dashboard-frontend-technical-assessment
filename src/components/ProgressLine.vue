<template>
    <v-card>
        <v-card-title>
            <v-row>
                <v-col cols="12">
                    <v-img contain :src="require('../assets/logo.png')" height="50"></v-img>
                </v-col>
                <v-col cols="12">
                    <div>{{t("storeProfile")}}</div>        
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>
            <v-progress-linear
                v-model="knowledge"
                height="25"
                color="blue"
                rounded
            >
                <strong>{{ Math.ceil(knowledge) }}%</strong>
            </v-progress-linear>
            <div>{{t("completeYourProfile")}}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            knowledge: 33
        }
    },
}
</script>