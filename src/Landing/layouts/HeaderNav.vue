<template>
    <header class="bg-cyan-50/50 shadow-sm absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <img src="../../assets/img/cloud.png" alt="VueJs" class="w-12 my-3 block">
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">

                        <span class="hamburger-line origin-top-left"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line origin-bottom-left"></span>
                    </button>
                    <nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul class="block lg:flex">
                            <li class="group">
                                <router-link to="/" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Login</router-link>
                            </li>
                            <li class="group">
                                <router-link to="/register" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Register</router-link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    mounted() {
       
    }
}
</script>