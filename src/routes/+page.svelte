<script>
  import Category from "./Category.svelte";

  const categories = [
    {
      label: "Reaction",
      rating: 80,
      colour: "red",
      iconPath: "images/icon-reaction.svg",
    },
    {
      label: "Memory",
      rating: 92,
      colour: "yellow",
      iconPath: "images/icon-memory.svg",
    },
    {
      label: "Verbal",
      rating: 61,
      colour: "green",
      iconPath: "images/icon-verbal.svg",
    },
    {
      label: "Visual",
      rating: 72,
      colour: "indigo",
      iconPath: "images/icon-visual.svg",
    },
  ];
</script>

<div class="min-h-screen md:flex md:justify-center md:items-center">
  <main class="grid gap-4 md:grid-cols-2 max-w-3xl">
    <section
      class="md:min-h-[500px] flex flex-col gap-4 md:gap-6 rounded-b-[32px] md:rounded-[32px] p-4 pb-8 md:p-10 md:px-16 text-center bg-gradient-to-b from-[#7857FF] to-indigo-600 text-indigo-50"
    >
      <h3 class="text-gray-300 md:text-2xl">Your Result</h3>
      <div
        class="w-32 h-32 md:w-48 md:h-48 text-center rounded-full bg-gradient-to-b from-indigo-950 self-center p-8 md:p-12"
      >
        <p class="text-5xl font-extrabold md:text-7xl">76</p>
        <p class="text-gray-400">of 100</p>
      </div>
      <p class="text-2xl md:text-3xl text-white">Great</p>
      <p class="text-gray-200 md:text-lg">
        You scored higher than 65% of the people who have taken these tests
      </p>
    </section>
    <section class="summary flex flex-col justify-center px-8 gap-6">
      <h2 class="text-lg md:text-2xl font-bold">Summary</h2>
      <div class="categories flex flex-col gap-4">
        {#each categories as category}
          <Category {...category} />
        {/each}
      </div>
      <button
        class="p-4 rounded-full bg-slate-700 text-slate-50 text-lg hover:bg-gradient-to-b hover:from-[#7857FF] hover:to-indigo-600"
        >Continue</button
      >
    </section>
  </main>
</div>
