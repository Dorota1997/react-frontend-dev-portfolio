<script>
  export let titles;
  export let currentLanguage;
  import LanguageButton from "$lib/components/LanguageButton.svelte";
  import ContactButton from "../ContactButton.svelte";
  import AnimatedBlob from "../AnimatedBlob.svelte";
</script>

<div
  class="relative w-full h-[100svh] flex flex-col justify-center items-center gap-[16px] bg-transparent overflow-hidden"
>
  <AnimatedBlob />
  <div>
    <h1 class="m-0 leading-[2.7rem] uppercase lg:text-[125px] text-left">
      <span class="lg:leading-[125%]">Sean</span>
      <br />
      <span>Redmon</span>
    </h1>
    <p class="leading-[2.7rem] lg:mt-[24px] lg:text-[24px] text-left">
      {titles}
    </p>
  </div>

  <ContactButton />

  <div class="absolute bottom-0 mb-[16px] h-[56px]">
    <LanguageButton language="en" isSelected={currentLanguage === "en"} />
    <LanguageButton language="zh" isSelected={currentLanguage === "zh"} />
    <LanguageButton language="fr" isSelected={currentLanguage === "fr"} />
  </div>
  <hr class="absolute bottom-0 w-full max-w-[1110px] h-[3px] bg-black" />
</div>
