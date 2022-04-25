<template>
    <div id="nav-menu-db" class="h-screen absolute duration-500 ease-in-out mt-14 lg:my-4 lg:ml-4 shadow-lg w-80  -translate-x-[100%] lg:relative lg:translate-x-[0]">
            <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
                <div class="flex items-center justify-center pt-6">
                    
                    <img src="../assets/img/cloud.png" alt="Icon" class="w-14">
                </div>
                <nav class="mt-6">
                    <div>
                        <router-link :to="{name: 'Dashboard'}" :active-when="['slide-active', '']" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start" href="#">
                            <span class="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Dashboard
                            </span>
                        </router-link>
                        <router-link :to="{ name: 'Filemanager' }"  :active-when="['slide-active', '']" class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start" href="#">
                            <span class="text-left">
                              

                                <svg width="20" height="20" fill="currentColor" class="m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6H2V4a1 1 0 0 1 1-1h6.465a1 1 0 0 1 .832.445zm9 2H2v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></svg>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                File Manager
                            </span>
                        </router-link>
                        
                    </div>
                </nav>
            </div>
        </div>
</template>

