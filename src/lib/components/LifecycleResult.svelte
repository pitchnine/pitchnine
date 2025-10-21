<script lang="ts">
  export let onRestart: () => void = () => {};
</script>

<div class="relative h-full w-full">
  <div class="flex h-full items-start justify-center px-6">
    <div class="w-full max-w-3xl rounded-lg border border-gray-700/40 bg-gray-900/70 p-6 backdrop-blur">
      <h2 class="text-2xl font-semibold text-gray-50">Product fragmented lorem ipsum</h2>

      <p class="mt-4 text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla convallis ex, at semper libero aliquam quis. Ut vehicula sem at nisi pellentesque, a aliquam erat ornare. Quisque egestas dui in odio luctus, nec eleifend dolor varius. Vivamus facilisis nisi feugiat nibh imperdiet, in interdum lorem rhoncus. Sed sit amet elit facilisis, vulputate est sit amet, feugiat ante. 
      </p>

      <p class="mt-4 text-gray-200">
        Proin at ligula quis elit interdum fermentum ut non lacus. Maecenas sem sapien, pretium at sollicitudin a, feugiat eget massa. Nulla eget odio velit. Suspendisse vulputate turpis diam. Integer porta congue cursus. Aenean fermentum neque nec finibus pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

        <button type="button" class="inter rounded-md border border-gray-600 px-3 py-2 text-sm text-gray-100 hover:bg-gray-800" on:click={onRestart}>
          Restart assessment
        </button>
 

      <p class="mt-8 text-gray-300">
        Integer sit amet purus ipsum. Morbi dapibus ultrices ligula eget feugiat. Fusce nec lacus nec purus mollis sodales ac quis nibh. Aenean mattis eros id diam congue tristique. Aenean ac hendrerit nunc, et facilisis magna. Quisque risus tellus, laoreet et venenatis sed, gravida ac neque. Nullam commodo volutpat metus, sit amet pulvinar est scelerisque vel. Mauris sollicitudin aliquam risus eu hendrerit. Praesent vitae lobortis diam.
      </p>
    </div>
    </div>
</div>
