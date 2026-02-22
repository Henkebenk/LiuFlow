<script setup lang="ts">
import { ref } from 'vue'
const selectedCourses = ref<string[]>(["TDP030"])
</script>

<template>
    <div class="flex gap-4 items-start overflow-hidden">
        <Schedule :courses="selectedCourses" class="grow"/>
        <Item variant="default" class="w-80 shrink-0">
            <ItemContent>
                <ItemTitle>Filtrering</ItemTitle>
                <CourseSelection v-model:coursesRef="selectedCourses"/>
            </ItemContent>
        </Item>
    </div>

</template>
