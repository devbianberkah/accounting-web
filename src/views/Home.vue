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
        <div class="main" :class="{active:mainActive}">
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
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">1,504</div>
                        <div class="cardName">Daily Views</div>
                    </div>
                    <div class="iconBx">
                        <i class="fa fa-eye"></i>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">674</div>
                        <div class="cardName">Transaksi</div>
                    </div>
                    <div class="iconBx">
                        <i class="fa fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">50</div>
                        <div class="cardName">Sukses</div>
                    </div>
                    <div class="iconBx">
                        <i class="fa fa-diagram-successor"></i>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">150</div>
                        <div class="cardName">Waiting Approval</div>
                    </div>
                    <div class="iconBx">
                        <i class="fa fa-stopwatch"></i>
                    </div>
                </div>
            </div>
            <!-- Details List -->
            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>
                            Transaksi Terakhir
                        </h2>
                        <a href="#" class="btn">Tampilkan Semua</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Nama</td>
                                <td>Harga</td>
                                <td>Pembayaran</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pembayaran Pajak</td>
                                <td>Rp10.000,-</td>
                                <td>Tunai</td>
                                <td>Lunas</td>
                            </tr>
                            <tr>
                                <td>Pembayaran Pajak</td>
                                <td>Rp10.000,-</td>
                                <td>Tunai</td>
                                <td>Lunas</td>
                            </tr>
                            <tr>
                                <td>Pembayaran Pajak</td>
                                <td>Rp10.000,-</td>
                                <td>Tunai</td>
                                <td>Lunas</td>
                            </tr>
                            <tr>
                                <td>Pembayaran Pajak</td>
                                <td>Rp10.000,-</td>
                                <td>Tunai</td>
                                <td>Lunas</td>
                            </tr>
                        </tbody>
                    </table>
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
            mainActive: false,
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
                    this.mainActive = !this.mainActive;
                    console.log(this.navActive);
                }
        }
    }

    // add hovered class
    // console.log(list);
    
</script>