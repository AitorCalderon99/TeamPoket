<script setup>
    const props = defineProps(['id']);
    const id = props.id;
</script>

<template>
    <div>
        <pre>{{id}}</pre>
    </div>
</template>