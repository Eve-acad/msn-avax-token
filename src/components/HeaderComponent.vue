<template>
      <div class="text-white bg-blue-primary py-4 flex flex-col lg:flex-row justify-around items-center gap-3">
        <router-link to="/"><img src="@/assets/MSN_Logo.png" style="height: 140px;" /></router-link>
    <div class="flex flex-col gap-1 text-sm px-6 lg:px-0">
      <div class="flex text-white gap-2 flex-wrap">
        <div class="text-yellow-500">Web</div>
        <div>| <a href="#"><router-link to="/">Home</router-link></a> |</div>
        <div><a href="#">Images</a> |</div>
        <div><a href="#">Videos</a> |</div>
        <div><a href="#">Shopping</a> |</div>
        <div><a href="#">News</a> |</div>
        <div><a href="#">Maps</a></div>
      </div>
      <div class="flex p-1.5 border border-white gap-2 rounded-md">
        <div class="bg-white border flex justify-between py-0.5 w-full">
          <input type="text" class="w-full text-placeholder text-left ml-2 text-black" />
          <div class="bg-orange-500 px-2 rounded-lg">search</div>
        </div>
        <div>bing</div>
      </div>
      <div>
        Search: Hot pepe girls? | Skibidi toilet rizzler? | 1000x Gems $MSN?
      </div>
    </div>
    <div class="flex flex-col">
      <div>69°C</div>
      <div>Degen Town, Web 3</div>
    </div>
  </div>
</template>

<style scoped>
a:hover{
  text-decoration: underline;
}
</style>