<script setup lang="ts">
import { CheckIcon, ChevronDown } from 'lucide-vue-next'
import { ListboxContent, ListboxFilter, ListboxItem, ListboxItemIndicator, ListboxRoot, useFilter } from 'reka-ui'
import { ref, computed, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'

const courses = [
    { value: 'tdp026', label: 'TDP026' },
    { value: 'tdp030', label: 'TDP030' },
    { value: 'teae22', label: 'TEAE22' },
]

// Change to v-model
const props = defineProps<{
    coursesRef: string[]
}>()

const emit = defineEmits(['update:coursesRef'])

const searchTerm = ref('')
const coursesRef = ref<string[]>([...(props.coursesRef ?? [])])
const open = ref(false)




const { contains } = useFilter({ sensitivity: 'base' })

const filteredCourses = computed(() =>
    searchTerm.value === ''
        ? courses
        : courses.filter(option => contains(option.label, searchTerm.value)),
)

watch(searchTerm, (f) => {
    if (f) {
        open.value = true
    }
})

watch(coursesRef, (val) => {
    emit('update:coursesRef', val)
}, { deep: true })
</script>

<template>
    <Popover v-model:open="open">
        <ListboxRoot v-model="coursesRef" highlight-on-hover multiple>
            <PopoverAnchor class="inline-flex ">
                <TagsInput v-slot="{ modelValue: tags }" v-model="coursesRef" class="w-full">
                    <TagsInputItem v-for="item in tags" :key="item.toString()" :value="item.toString()">
                        <TagsInputItemText />
                        <TagsInputItemDelete />
                    </TagsInputItem>

                    <ListboxFilter v-model="searchTerm" as-child>
                        <TagsInputInput placeholder="Kurser..." @keydown.enter.prevent @keydown.down="open = true" />
                    </ListboxFilter>

                    <PopoverTrigger as-child>
                        <Button size="icon-sm" variant="ghost" class="order-last self-start ml-auto">
                            <ChevronDown class="size-3.5" />
                        </Button>
                    </PopoverTrigger>
                </TagsInput>
            </PopoverAnchor>

            <PopoverContent class="p-1" @open-auto-focus.prevent>
                <ListboxContent
                    class="max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto empty:after:content-['No_options'] empty:p-1 empty:after:block"
                    tabindex="0">
                    <ListboxItem v-for="item in filteredCourses" :key="item.value"
                        class="data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4"
                        :value="item.label" @select="() => {
                            searchTerm = ''
                        }">
                        <span>{{ item.label }}</span>

                        <ListboxItemIndicator class="ml-auto inline-flex items-center justify-center">
                            <CheckIcon />
                        </ListboxItemIndicator>
                    </ListboxItem>
                </ListboxContent>
            </PopoverContent>
        </ListboxRoot>
    </Popover>
</template>
