import React, { Component } from 'react'
import Filter from './sidemenu/Filter';

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="container-team">
                    <div className="row">
                        <div className="col-2"><Filter /></div>
                        <div className="col-10">
                            <div className="card p-3">

                                <nav class="nav">
                                    <p>24 ผลการค้นหาสำหรับ "วรวิทย์"</p>
                                    <div className="ml-auto">
                                        <button className="btn btn-sm btn-warning mr-2">กำลังหมดเวลา</button>
                                        <button className="btn btn-sm btn-outline-secondary  mr-2">ล่าสุด</button>


                                        <div class="dropdown mr-2">
                                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                ราคามากไปน้อย
                                    </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">ราคามากไปน้อย</a>
                                                <a class="dropdown-item" href="#">ราคาน้อยไปนมาก</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                แสดง 50 ชิ้น/หน้า
                                    </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">แสดง 50 ชิ้น/หน้า</a>
                                                <a class="dropdown-item" href="#">แสดง 100 ชิ้น/หน้า</a>
                                                <a class="dropdown-item" href="#">แสดง 150 ชิ้น/หน้า</a>
                                            </div>
                                        </div>

                                    </div>

                                </nav>
                            </div>

                            <div className="row mb-5">
                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/91221bb0c0ce1413a3721a52f40034bf3faabe39/i-img1124x1124-1560085686zv4wvs409229.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum perferendis praesentium dicta. Quisquam, numquam dignissimos? Atque quos sunt vero nostrum numquam laudantium. Rerum libero repellat atque ullam, aspernatur vero saepe!</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/47cb28757c71aa06887910d1ecefbedf50d781d8/i-img1200x899-1560398303rdngx5528393.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A SONY MDR-ZX310A SONY MDR-ZX310A SONY MDR-ZX310A SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/65a33cb5162e7987d5be633900defa805c51b6f4/i-img600x600-1560317789bdh5va450687.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/70e90b6c7404bd2f879c8187a4fab8bbd6194619/i-img1200x1200-1560323798pgvc711754.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0504/users/7fb7dcf6e4fbb5dc18ca1e63e96e2632b584713b/i-img750x625-1555184364y2o7ub263112.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/e38c7355eb86339845a24c9adb8833cacceaf892/i-img300x300-1560346258bj738e84.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/e12ccdc5f39ea23172599d01013e2e89c62b27d2/i-img1080x1080-1560300261isv1rs419858.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/5017254e809b948e3d2a102a36fbf7f0fda0b094/i-img416x555-15603926800t3rfp495424.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/61b9fb41fab22e8dd0e5441cc2acb80024595b55/i-img640x640-1560323080twaukx83.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/1/8/6/6/mbmsyk-img1200x899-1560184531mwq4wn18484.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/61b9fb41fab22e8dd0e5441cc2acb80024595b55/i-img650x497-1560331999a71ruj89.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/72fc3534cc475928de1e4279d890e948efd88244/i-img1200x1200-1560326349rfotx6471884.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/ae58449ac423a2e30da5fbc4a7e22f991334ec1f/i-img576x432-15600462203lea0r10294.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>



                                <div className="col-md-5-cols   pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/2de68c7c238ad99a6b0841c5ef47433730859757/i-img514x514-1560169209cpid3y291045.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">SONY MDR-ZX310A</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols   pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/51c0170bf2202ffd18486f993927d14c22ac08bf/i-img899x1200-15603242991goue9582426.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">adidas オリジナルス デカロゴ トレフォイル ロゴ シルバーグレー オレンジ ジャージ 正規品 トラックトップ ジャケット ビッグロゴ 三つ葉</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-md-5-cols pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image
                                        " width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/095d758401360fbd63dd66aa246f9ddf5e91e522/i-img854x640-1559947165dj3oil137509.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">หมวกArai รุ่นเก่าเก็บ Rx7x ครบเซ็ท</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                            </div>



                            <nav aria-label="...">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>


                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
