<script setup lang="ts">
import { Divide } from 'lucide-vue-next';

</script>

<template>
  <div class="flex flex-col gap-6 h-full overflow-y-auto scrollbar-hide">
    <div class="flex flex-col sm:flex-row gap-12">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col space-between ">
          <h1 class="scroll-m-20 grow text-4xl font-extrabold tracking-tight text-balance">
            God förmiddag Henrik.
          </h1>
          <span class="text-xl text-muted-foreground">
            Redo för en ny dag?
          </span>
        </div>
        <div class="flex gap-4 justify-between items-center">
          <Item>
            <ItemContent class="flex items-center gap-4">
              <div class="flex flex-col">
                <span class="text-lg font-medium">185 hp</span>
                <span class="text-sm text-muted-foreground">Din poängstatus</span>
              </div>
            </ItemContent>
          </Item>
          <Separator orientation="vertical" class="data-[orientation=vertical]:h-8" />
          <Item>
            <ItemContent class="flex items-center gap-4">
              <div class="flex flex-col">
                <span class="text-lg font-medium">38</span>
                <span class="text-sm text-muted-foreground">Kurser avklarade</span>
              </div>
            </ItemContent>
          </Item>
          <Separator orientation="vertical" class="data-[orientation=vertical]:h-8" />
          <Item>
            <ItemContent class="flex items-center gap-4">
              <div class="flex flex-col">
                <span class="text-lg font-medium">0</span>
                <span class="text-sm text-muted-foreground">Kurser kuggade</span>
              </div>
            </ItemContent>
          </Item>
        </div>
      </div>
      <div class="flex flex-col grow">
        <Item class="w-full">
          <ItemContent class="w-full">
            <ItemTitle>Din kommande skoldag</ItemTitle>
            <Schedule :one-day="true" />
          </ItemContent>
        </Item>
      </div>
    </div>



    <Item>
      <ItemContent class="w-full">
        <ItemTitle>LiuFlow nyheter</ItemTitle>
        <News />
      </ItemContent>
    </Item>

    <Item>
      <ItemContent class="w-full">
        <ItemTitle>Lokaler</ItemTitle>
        <Houses />
      </ItemContent>
    </Item>



  </div>
</template>
