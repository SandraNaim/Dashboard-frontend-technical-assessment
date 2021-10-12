<template>
    <v-card>
        <v-card-title>
            <span>{{title}}</span>
        </v-card-title>
        <v-card-text>
            <v-divider />
            <v-row>
                <v-col cols="4">
                    <span>Facebook</span>
                    <v-checkbox
                        off-icon="radio_button_unchecked"
                        on-icon="check_circle"
                        color="accent"
                        v-model="facebook"
                    />
                </v-col>
                <v-col cols="4">
                    <span>Linkedin</span>
                    <v-checkbox
                        off-icon="radio_button_unchecked"
                        on-icon="check_circle"
                        color="accent"
                        v-model="linkedin"
                    />
                </v-col>
                <v-col cols="4">
                    <span>Others</span>
                    <v-checkbox
                        off-icon="radio_button_unchecked"
                        on-icon="check_circle"
                        color="accent"
                        v-model="others"
                    />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'How did you hear about us'
        },
    },
    data () {
      return {
        others: 1,
        facebook: 1,
        linkedin: 1,
      }
    },
}
</script>