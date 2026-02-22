<script setup lang="ts">
interface Course {
    id: string | number
    title: string
}

const course = ref<Course | null>(null)

</script>

<template>
    <div>
        <p>Kurssida för {{ course?.title }}</p>
    </div>
</template>
