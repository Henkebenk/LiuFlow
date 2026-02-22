<template>
  <div class="flex flex-col gap-6 h-full overflow-y-auto scrollbar-hide">
    <div class="flex flex-col gap-12">
      <h1 class="scroll-m-20  text-4xl font-extrabold tracking-tight text-balance">
        God förmiddag Henrik.
      </h1>
      <Item>
        <ItemContent class="w-full">
          <ItemTitle>Din kommande skoldag</ItemTitle>
          <Schedule :one-day="true"/>
        </ItemContent>
      </Item>
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
