<template>
<main>
<Header />
<div id="content-wrapper">
<router-view></router-view>
</div>
<Footer />
</main>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
components: {
Header,
Footer
}
}
</script>
