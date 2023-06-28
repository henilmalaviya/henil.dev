<script>
    import { browser } from "$app/environment";
    import { darkMode } from "$lib/store";
    import setDarkMode from "$lib/utils";
    import "../app.postcss";

    if (browser) {
        setDarkMode($darkMode);
    }
</script>

<slot />
