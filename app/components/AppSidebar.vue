<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  Grid2X2,
  HomeIcon,
  Settings2,
} from "lucide-vue-next"
import NavMain from '@/components/NavMain.vue'
import NavCourses from '@/components/NavCourses.vue'
import NavUser from '@/components/NavUser.vue'
import liuLogo from '../assets/liu.svg';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import LiuLogo from './LiuLogo.vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

const data = {
  user: {
    name: "Henrik Hårshagen",
    email: "henha806@student.liu.se",
    avatar: "https://avatars.githubusercontent.com/u/50397669?v=4&size=64",
  },
  navMain: [
    {
      title: "Hem",
      url: "#",
      icon: HomeIcon,
      isActive: true,
      items: [
        {
          title: "Startsida",
          url: "/",
          is_external: false,
        },
        {
          title: "Schema",
          url: "/schedule",
          is_external: false,
        },
        {
          title: "Om sidan",
          url: "/about",
          is_external: false,
        },
      ],
    },
    {
      title: "Office 365",
      url: "#",
      icon: Grid2X2,
      items: [
        {
          title: "Outlook",
          url: "https://outlook.office.com/mail/",
          is_external: true,
        },
        {
          title: "Onedrive",
          url: "https://onedrive.live.com/",
          is_external: true,
        },
        {
          title: "Word",
          url: "https://office.com/launch/word",
          is_external: true,
        },
      ],
    },
    {
      title: "Inställningar",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Allmänt",
          url: "#",
          is_external: false,
        },
        {
          title: "Utseende",
          url: "/settings/looks",
          is_external: false,
        },
      ],
    },
  ],
  courses: [
    {
      name: "Vetenskaplig metod inom programmering",
      id: "TDP026",
      current: true,
    },
    {
      name: "Språkteknologi",
      id: "TDP030",
      current: true,
    },
    {
      name: "Starta och driva eget företag",
      id: "TEAE22",
      current: true,
    },
    {
      name: "Första",
      id: "TDP001",
      current: false,
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <div class="flex gap-1">
        <LiuLogo class="h-5 w-auto text-neutral-700"/>
        <!-- <span>Lisam</span> -->
      </div>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavCourses :courses="data.courses" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
