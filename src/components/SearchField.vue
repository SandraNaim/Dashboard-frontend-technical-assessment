<template>
    <div>
        <label class="font-weight-bold">{{title}}</label>
        <v-text-field
            dense 
            solo
            :label="labelName"
            append-icon="search"
        ></v-text-field>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Search'
        },
        labelName: {
            type: String,
            default: 'Search'
        },
    },
}
</script>