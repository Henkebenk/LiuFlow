<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'

useHead({
  link: [
    { rel: 'icon', href: '/favicon-light.ico', type: 'image/x-icon' },
    { rel: 'icon', href: '/favicon-light.ico', type: 'image/x-icon', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', href: '/favicon-dark.ico', type: 'image/x-icon', media: '(prefers-color-scheme: dark)' },
  ],
  //link
  title: 'LiuFlow',
})

</script>

<template>
  <Toaster :position="'top-right'"/>
  <SidebarProvider class="h-full">


    <AppSidebar />

    <div class="w-full p-4 flex flex-col gap-3 overflow-hidden">
      <div class="flex gap-2 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Hem
              </BreadcrumbLink>
            </BreadcrumbItem>
            <!-- <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Schema
              </BreadcrumbLink>
            </BreadcrumbItem> -->
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <NuxtPage/>

    </div>

  </SidebarProvider>
</template>
