<template>
<main>
<Header />
<Index />
<Footer />
</main>
</template>
<script>
import Header from './components/Header.vue';
import Index from '../views/Index.vue';
import Footer from './components/Footer.vue';
export default {
components: {
Header,
Index,
Footer
}
}
</script>
