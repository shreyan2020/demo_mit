<template>
<nav
:class="[`navbar-${theme}`, `bg-${theme}`, `navbar`, `navbar-expand-lg`]"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="#">SAGA</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li v-for="(page, index) in pages" class="nav-item" :key="index">
            <a
                class="nav-link"
                :class="{active: activePage == index}"
                aria-current="page"
                :href="page.link.url"
                :title="`This is bad ${page.link.text}`"
                @click.prevent="navLinkClick(index)"
                >{{ page.link.text }}</a>
            </li> -->
            <li class="nav-item">
          <router-link to="/" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/demo" class="nav-link">Demo</router-link>
        </li>
        </ul>
        <form class="d-flex">
            <button
            class="btn  btn-primary"
            @click.prevent="changeTheme()">Toggle Theme</button>
        </form>
    </div>
</nav>
</template>
<script>
export default{
    props: ['pages','activePage','navLinkClick'],
    data(){
        return {
            theme: 'light',
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light'
            if (this.theme == 'light') {
                theme = 'dark';
            }

            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem('theme');
            if (theme) {
                this.theme = theme;
            }
        }

    }

}
</script>