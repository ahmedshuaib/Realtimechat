<template>
    <div>
        <li class="list-group-item badge badge-primary border-0" :class="color"><slot></slot></li>
        <span class="text-muted float-right mr-1">{{ user }}</span>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },

        props: [
            'user',
            'color'
        ]
    }
</script>
