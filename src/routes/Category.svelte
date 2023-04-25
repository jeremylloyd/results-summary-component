<script lang=ts>
  export let label: string;
  export let rating: number;
  export let colour: string = 'red';
  export let iconPath: string = '';

let category: HTMLDivElement;
</script>

<div
  class="category flex justify-between p-4 rounded-xl"
  class:text-yellow-500={colour === 'yellow'}
  class:bg-yellow-50={colour === 'yellow'}
  class:text-indigo-500={colour === 'indigo'}
  class:bg-indigo-50={colour === 'indigo'}
  class:text-red-500={colour === 'red'}
  class:bg-red-50={colour === 'red'}
  class:text-green-500={colour === 'green'}
  class:bg-green-50={colour === 'green'}
  bind:this={category}
>
  <div class="label flex gap-4">
    <img src="{iconPath}" alt="" srcset="" />
    <h3>{label}</h3>
  </div>
  <p class="text-gray-400 flex">
    <strong class="text-slate-700">{rating}</strong>&nbsp;/ 100
  </p>
</div>

<!-- Create a div with a dynamic className of text-{colour}-500 (depending on the colour variable passed in) -->
<!-- Create a div with a dynamic className of bg-{colour}-50 (depending on the colour variable passed in) -->
