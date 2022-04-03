<script lang="tsx">
  // import classnames from "classnames";
  export default {
    setup() {
      return () => (
        <div
          class={`
          text-red-600 
          bg-orange-500 
          font-extrabold 
          bg-opacity-[0.8] 
          w-[100vw] 
          h-[100vh] 
          flex 
          justify-center 
          items-center 
          size-2rem
          `}
        >
          Hello World
        </div>
      );
    },
  };
</script>
