// src/mixins/HeaderMixin.js
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const showHeader = ref(!route.path.startsWith("/admin/"));

    onMounted(() => {
      // Listener para actualizar la visibilidad del header
      const unwatch = route.watch((newPath) => {
        showHeader.value = !newPath.startsWith("/admin/");
      });

      onUnmounted(() => {
        unwatch();
      });
    });

    return { showHeader };
  },
};
