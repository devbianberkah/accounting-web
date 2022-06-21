<template>
    <div class="container">
        <div class="navigation" :class="{active:navActive}">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fa fa-bolt"></i></span>
                        <span class="title">Brand Name</span>
                    </a>
                </li>
                <li @mouseenter="addClass"
                    @mouseleave="removeClass"
                    >
                    <a href="#">
                        <span class="icon"><i class="fa fa-dashboard"></i></span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li  @mouseenter="addClass"
                    @mouseleave="removeClass">
                    <a href="#">
                        <span class="icon"><i class="fa fa-user"></i></span>
                        <span class="title">Akun</span>
                    </a>
                </li>
                <li  @mouseenter="addClass"
                    @mouseleave="removeClass">
                    <a href="#">
                        <span class="icon"><i class="fa fa-user-friends"></i></span>
                        <span class="title">Pelanggan</span>
                    </a>
                </li>
                <li  @mouseenter="addClass"
                    @mouseleave="removeClass">
                    <a href="#">
                        <span class="icon"><i class="fa fa-gear"></i></span>
                        <span class="title">Setting</span>
                    </a>
                </li>
                <li  @mouseenter="addClass"
                    @mouseleave="removeClass">
                    <a href="#">
                        <span class="icon"><i class="fa fa-hourglass-empty"></i></span>
                        <span class="title">Help</span>
                    </a>
                </li>
                <li  @mouseenter="addClass"
                    @mouseleave="removeClass">
                    <a href="#">
                        <span class="icon"><i class="fa fa-door-open"></i></span>
                        <span class="title">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Main -->
        <div class="main">
            <div class="topbar">
                <div class="toogle">
                    <a href="#"  @click="toogleNavBar"><span><i class="fa fa-list"></i></span></a>
                </div>  
                <!-- Search -->
                <div class="search">
                    <label for="">
                        <input type="text" placeholder="cari">
                    </label>
                </div>
                <!-- Userimg -->
                <div class="user">
                    <img src="#" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "Home",
    data : function () {
        return {
            navActive : false,
        }
    },
    methods: {
                addClass: function (e) {
                        e.target.classList.add("hovered");
                },
                removeClass: function (e) {
                        e.target.classList.remove("hovered");
                },
                toogleNavBar :function(e) {
                    this.navActive = !this.navActive;
                    console.log(this.navActive);
                }
        }
    }

    // add hovered class
    // console.log(list);
    
</script>