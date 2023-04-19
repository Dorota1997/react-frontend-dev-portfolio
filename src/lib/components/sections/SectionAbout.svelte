<script>
  import WindowBar from "../WindowBar.svelte";
  import Icon from "@iconify/svelte";
  import Typewriter from "svelte-typewriter";

  export let bioImage;
  export let bioImageAlt;
  export let bioText;
</script>

<section class="flex flex-col justify-center items-center mb-[64px]">
  <h3>About Me</h3>
  <div class="w-full md:grid md:gap-[6rem] md:grid-cols-bio">
    <div
      class="flex flex-col justify-center items-center border-2 border-black dark:bg-darkSmoke rounded-xl mb-[32px] md:mb-0 p-[16px]"
    >
      <img class="mb-[16px]" src={bioImage} alt={bioImageAlt} />
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sean-redmon/"
            class="hover:opacity-75 transition-opacity"
            ><Icon icon="bi:linkedin" width="50px" /></a
          >
        </li>
        <li>
          <a
            href="https://github.com/seanred360"
            class="hover:opacity-75 transition-opacity"
            ><Icon icon="mdi:github" width="50px" /></a
          >
        </li>
      </ul>
    </div>
    <div
      class="border-2 border-black rounded-xl overflow-hidden dark:bg-[#272727]"
    >
      <WindowBar hasCloseButton={false} />
      <Typewriter>
        <p class="px-[16px] py-[32px]">
          {bioText}
        </p>
      </Typewriter>

      <!-- <p class="px-[16px] py-[32px]" use:concurrent={{ interval: 15 }}>
        {bioText}
      </p> -->
    </div>
  </div>
</section>
