<script setup lang="ts">
// import type { LucideIcon } from "lucide-vue-next"
import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
} from "lucide-vue-next"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import Badge from "./ui/badge/Badge.vue";
import { computed } from "vue";

const props = defineProps<{
  courses: {
    name: string
    id: string
    current: boolean
  }[]
}>()

const { isMobile } = useSidebar()

const current_courses = computed(() => {
  return props.courses.filter((c) => c.current == true)
})
</script>

<template>
  <SidebarGroup class="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel>Kurser</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in current_courses" :key="item.name">
        <SidebarMenuButton as-child>
            <RouterLink :to="`/courses/${item.id}`" class="w-full flex justify-between">
              <span class="truncate">{{ item.name }}</span>
              <Badge variant="outline">{{item.id}}</Badge>
            </RouterLink>
          <!-- <a :href="item.url" class="w-full flex justify-between">
            <span class="truncate">{{ item.name }}</span>
            <Badge variant="outline">{{item.id}}</Badge>
          </a> -->
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
