<template>

    <!-- Register -->
    <div class="pt-40 pb-32">
        <div class="container">
            <div class="w-full">
                <div class="border-cyan-200 rounded-md shadow-sm shadow-secondary max-w-sm mx-auto px-3 pt-3">
                    <img src="../assets/img/user.png" alt="User" class="max-w-full mx-auto">
                    <div class="px-2 mt-3 border rounded-md bg-slate-100">
                        <input type="text" v-model="name" placeholder="Name" class="w-full my-3 border-b border-slate-300 p-1 bg-transparent focus:outline-none">
                        <input type="email" v-model="email" placeholder="Email" class="w-full my-3 border-b border-slate-300 p-1 bg-transparent focus:outline-none">
                        <input type="text" v-model="phone" placeholder="Telephone" class="w-full my-3 border-b border-slate-300 p-1 bg-transparent focus:outline-none">
                        <input type="password" v-model="password" placeholder="Password" class="w-full my-3 border-b border-slate-300 p-1 bg-transparent focus:outline-none">
                    </div>
                    <div class="py-3">
                        <button class="bg-transparent rounded-lg shadow-sm border font-bold text-lg w-full py-1 px-2 hover:bg-secondary hover:shadow-md hover:text-white transition duration-300 ease-in-out">Register</button>
                        <div class="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   
</template>