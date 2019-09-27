import React, { Component } from 'react'

class home extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}
    render() {
        const test = ">";
        const test2 = "<";
        
        return (
            <div style={{backgroundColor: "#F5F5F5"}}>
            <div className="container-fluid bg-dark">Sponser</div>
      
            <div  className="container-fluid" style={{backgroundColor: "#003366"}}>
            <div className="container-team text-white">
            <div className="row">
            <ul className="ml-auto my-auto p-2">
              <li className="upper-links"><a className="links" href="#">Help</a></li>|
              <li className="upper-links"><a className="links" href="#">CONTACT US</a></li>|
              <li className="upper-links"><a className="links" href="#">ABOUTUS</a></li>|
              <li className="upper-links"><a className="links" href="#">FOLLOW US :</a></li> 
              <li className="upper-links align-middle"><i class="fab fa-2x fa-facebook"></i> <i class="fab fa-2x fa-facebook"></i> <i class="fab fa-2x fa-facebook"></i> <i class="fab fa-2x fa-facebook"></i> </li>
              | <li className="upper-links">@ScreenAW</li>|
              <li className="upper-links">TH EN</li>
            </ul>
            </div>
            </div>
            </div>
            
      
      <div id="flipkart-navbar">
          <div class="container p-2">
              <div class="row">
                      <ul class="ml-auto">
                      <li class="upper-links">
                          <a class="links" href="http://clashhacks.in/">
                          <i class="fas fa-bell text-dark"></i> <span className="text-dark align-middle">การแจ้งเตือน</span>
                          </a>
                      </li>
                      <li class="upper-links dropdown"><a class="links text-dark" href="http://clashhacks.in/">เข้าสู่ระบบ | สมัครสมาชิก</a>
                          <ul class="dropdown-menu">
                              <li class="profile-li"><a class="profile-links" href="http://yazilife.com/">Link</a></li>
                              <li class="profile-li"><a class="profile-links" href="http://hacksociety.tech/">Link</a></li>
                              <li class="profile-li"><a class="profile-links" href="http://clashhacks.in/">Link</a></li>
                              <li class="profile-li"><a class="profile-links" href="http://clashhacks.in/">Link</a></li>
                              <li class="profile-li"><a class="profile-links" href="http://clashhacks.in/">Link</a></li>
                              <li class="profile-li"><a class="profile-links" href="http://clashhacks.in/">Link</a></li>
                              <li class="profile-li"><a class="profile-links" href="http://clashhacks.in/">Link</a></li>
                          </ul>
                      </li>
                      </ul>
              </div>
      
              <div class="row ">
                  <div class="col-sm-2">
                      <h2 style={{margin:0}}><span class="smallnav menu" onclick="openNav()">☰ Brand</span></h2>
                      <h1 style={{margin:0,color:"#BF0000",fontWeight:"bold"}}><span class="largenav">Pramool</span></h1>
                  </div>
                  <div class="flipkart-navbar-search smallsearch col-sm-7 col-xs-11">
                      <div class="row">
                          <input class="flipkart-navbar-input col-11" type="" placeholder="Search for Products, Brands and more" name="" />
                          <button class="flipkart-navbar-button col-1">
                              <svg width="15px" height="15px">
                                  <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                              </svg>
                          </button>
                          <small className="mt-1">ยินดีต้อนรับสู่การประมูลจากประเทศไทยl คุณสามารถรับคะแนน Parmool Super plus+ ได้จากการลงทะเบียนเป็นสมาชิก</small>
                      </div>
                  </div>
                  <div class="col-sm-3">
                  <ul class="ml-auto">
                    <li className="upper-links">ประมูลของฉัน</li>
                    <li className="upper-links">รายการโปรด</li>
                  </ul>
                  </div>
              </div>
          </div>
      </div>
      <div id="mySidenav" class="sidenav">
          <div class="container" style={{backgroundColor: "#2874f0", paddingTop:10}}>
              <span class="sidenav-heading">Home</span>
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
          </div>
          <a href="http://clashhacks.in/">Link</a>
          <a href="http://clashhacks.in/">Link</a>
          <a href="http://clashhacks.in/">Link</a>
          <a href="http://clashhacks.in/">Link</a>
      </div>
      

       
            {/* สิ้นสุด Head */}
      
      
            <div className="container-team mt-3">
              <div className="row">
      
                {/* เมนู */}
                <div className="col-3 pad-0-5">
                <div className="card p-2">
                {/* <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active p-3 pl-4" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-home"></i> หน้าแรก</a>
            <a class="nav-link p-3 pl-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fab fa-hotjar"></i> ยอดนิยม</a>
            <a class="nav-link p-3 pl-4" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-bolt"></i> ใหม่ล่าสุด</a>
            <a class="nav-link p-3 pl-4" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-hourglass-half"></i> กำลังจะหมดเวลา</a>
          </div> */}
          {/* <hr /> */}
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-desktop"></i> คอมพิวเตอร์และแล็ปท็อป</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-camera-retro"></i> กล้องและอุปกรณ์ถ่ายภาพ</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-music"></i> สื่อบรรเทิงภายในบ้าน</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-car"></i> อุปกรณ์ตกแต่งรถยนต์</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-motorcycle"></i> อุปกรณ์ตกแต่งรถมอไซต์</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-shopping-bag"></i> กระเป๋า</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-puzzle-piece"></i> ของเล่น</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-seedling"></i> เครื่องประดับ</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-dog"></i> สัตว์เลี้ยง</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-utensils"></i> อาหารและเครื่องดื่ม</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-socks"></i> รองเท้า</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-pencil-ruler"></i> อุปกรณ์เครื่องเขียน</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-glasses"></i> นาฬิกาและแว่นตา</a>
                  <a className="text-decoration-none d-block p-2 ml-3" href="#"><i class="fas fa-tshirt"></i> เสื้อผ้าผู้หญิง</a>
                </div>
                </div>
                
      
                 
                {/* สิ้นสุดเมนู */}
      
                {/* สไลค์โชว์ */}
      
                <div className="col-9 pad-0-5">
                <img className="img-fluid" width="100%" src="/image/sponser1.PNG" />

                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="https://via.placeholder.com/1200x250" class="d-block w-100" />
                      </div>
                      <div class="carousel-item">
                        <img src="https://via.placeholder.com/1200x250" class="d-block w-100" />
                      </div>
                      <div class="carousel-item">
                        <img src="https://via.placeholder.com/1200x250" class="d-block w-100" />
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
      
                  
                </div>
      
                {/* สิ้นสุดสไลค์โชว์ */}
      
      
                {/* อธิบายข้าง */}
                {/* <div className="col-3">
                <img className="img-fluid mt-2" src="https://bankeauctions.com//public/uploads/news_blog/71a2599f7a03b610941015d20c8102bb.jpg" />
                  <img className="img-fluid" src="https://yamato.in.th/themes/images/service/banner_yahoo_shopping.png" /> */}
                   {/* <img className="img-fluid mt-2" src="https://images.unsplash.com/photo-1549479732-ee0adb0f5d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80" />  */}
                  {/* <img className="img-fluid mt-2" src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/35147082_1986270494738650_7012417637032394752_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk8-3.fna&oh=50505071ff517fe2236c29d6b6e0100a&oe=5D57A492" /> */}
                {/* </div>  */}
                {/* สิ้นสุดอธิบายข้าง */}
              </div>
            </div>
      
      
      {/* หมวดหมู่ยอดนิยม */}
      <div className="container-hit">
      <h4 className="text-center mt-4 mb15">หมวดหมู่ยอดนิยม</h4>
      <div class="row">
              <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                  <div class="MultiCarousel-inner">
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">คอมและแล็ปท็อป</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1523659568202-85268a087db7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">สัตว์เลี้ยง</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1496874023337-1911dfa606ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">อุปกรณ์แต่งรถมอไซต์</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">รองเท้า</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1526492664619-72c7c4c62835?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">นาฬิกาและแว่นตา</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1550944862-82305e47d898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">ของเล่น</p>
       
                          </div>
                      </div>
      
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1506094222795-f04d8e06ed23?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">กระเป๋า</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1503065190222-aab158457821?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">กล้องถ่ายรูป</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1503065190222-aab158457821?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">กล้องถ่ายรูป</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1503065190222-aab158457821?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">กล้องถ่ายรูป</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1503065190222-aab158457821?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">กล้องถ่ายรูป</p>
                          </div>
                      </div>
                      <div class="item">
                          <div class="pad15">
                              <img className="rounded" src="https://images.unsplash.com/photo-1503065190222-aab158457821?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt=""/>
                              <p className="mt-2">กล้องถ่ายรูป</p>
                          </div>
                      </div>
                  </div>
                  {/* <button class="btn btn-light leftLst text-info shadow-sm">{test2}</button>
                  <button class="btn btn-light rightLst text-info shadow-sm">{test}</button> */}
              </div>
          </div>
        </div>
      
        
      
      {/* 
          <div class="row">
              <div class="col-md-12 text-center">
                  <br/><br/><br/>
                  <hr/>
                  <p>Settings</p>
                  <p>Change data items for xs,sm,md and lg display items respectively. Ex:data-items="1,3,5,6"</p>
                  <p>Change data slide for slides per click Ex:data-slide="1"</p>
              </div>
          </div> */}
      
      {/* สิ้นสุดหมวดหมู่ยอดนิยม */}
      
      
      {/* พึ่งดูล่าสุด  */}
      <div className="container-team">
      <nav class="navbar navbar-light  bg-white">
        <span class="navbar-brand mb-0 h1">พึ่งดูล่าสุด</span>
        <span>ดูทั้งหมด ></span>
      </nav>
      
      <div className="row mt-2 mb-5">
      <div className="col-2 pad-0-5 text-center">
      <img className="mt-2" width="100%" src="https://res.cloudinary.com/his/image/upload/w_640,h_640,c_fill,f_auto/his/product/kr4eMQXenaiIXqnoWXJvmezOcC0NI88O/H808804-a1.jpg" alt=""/>
      <div className="lineboxname">
            <a href="#">SONY MDR-ZX310A</a>
      </div>
          <p style={{fontSize:15}}>ตอนนี้ <span style={{color:"red",fontWeight:"bold"}}>13,250฿</span></p>
          <p style={{fontSize:15}}>ซื้อทันที 25,000฿</p>
          <span style={{fontSize:13}}> <i class="fas fa-user-friends"></i> 8 คน</span>
          <span style={{fontSize:13}}> <i class="fas fa-history"></i> 4 วัน</span>
      
      
      
      </div>
      
      <div className="col-2  pad-0-5 text-center ">
      <img className="mt-2" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0505/users/6eaa52d4d46ef755283a9a8e7b157c8834eaee5e/i-img1124x1124-15587512763ai2gs1268746.jpg&dc=1&sr.fs=20000" alt=""/>
      <div className="lineboxname">
            <a href="#">SONY MDR-ZX310A</a>
      </div>
      <p style={{fontSize:15}}>ตอนนี้ <span style={{color:"red",fontWeight:"bold"}}>13,250 THB</span></p>
      <p style={{fontSize:15}}>ซื้อทันที 25,000 THB</p>
      <span style={{fontSize:13}}><i class="fas fa-user-friends"></i> 8 คน</span> 
      <span style={{fontSize:13}}> <i class="fas fa-history"></i> 4 วัน</span>
      </div>
      
      <div className="col-2  pad-0-5 text-center">
      <img className="mt-2" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0504/users/d2230ea901ced15f457e6ad8e8d9afa48d645120/i-img750x750-1556162375phirjy1017390.jpg&dc=1&sr.fs=20000" alt=""/>
      <div className="lineboxname">
            <a href="#">SONY MDR-ZX310A</a>
      </div>
      <p style={{fontSize:15}}>ตอนนี้ <span style={{color:"red",fontWeight:"bold"}}>13,250 THB</span></p>
      <p style={{fontSize:15}}>ซื้อทันที 25,000 THB</p>
      <span style={{fontSize:13}}><i class="fas fa-user-friends"></i> 8 คน</span> 
      <span style={{fontSize:13}}> <i class="fas fa-history"></i> 4 วัน</span>
      </div>
      
      <div className="col-2  pad-0-5 text-center">
      <img className="mt-2" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0505/users/7795197b9b1c1746c8d44b0f5574b054715d5cc1/i-img1182x1200-1558515902rp0mvd1096168.jpg&dc=1&sr.fs=20000" alt=""/>
      <div className="lineboxname">
            <a href="#">SONY MDR-ZX310A</a>
      </div>
      <p style={{fontSize:15}}>ตอนนี้ <span style={{color:"red",fontWeight:"bold"}}>13,250 THB</span></p>
      <p style={{fontSize:15}}>ซื้อทันที 25,000 THB</p>
      <span style={{fontSize:13}}><i class="fas fa-user-friends"></i> 8 คน</span> 
      <span style={{fontSize:13}}> <i class="fas fa-history"></i> 4 วัน</span>
      </div>
      
      <div className="col-2  pad-0-5 text-center">
      <img className="mt-2" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0505/users/30c897a8ea4f36cb6ae49beb1e2385ecdd6fe35d/i-img1200x1200-1558646662h9scrk1769312.jpg&dc=1&sr.fs=20000" alt=""/>
      <div className="lineboxname">
            <a href="#">SONY MDR-ZX310A</a>
      </div>
      <p style={{fontSize:15}}>ตอนนี้ <span style={{color:"red",fontWeight:"bold"}}>13,250 THB</span></p>
      <p style={{fontSize:15}}>ซื้อทันที 25,000 THB</p>
      <span style={{fontSize:13}}><i class="fas fa-user-friends"></i> 8 คน</span> 
      <span style={{fontSize:13}}> <i class="fas fa-history"></i> 4 วัน</span>
      </div>
      
      <div className="col-2  pad-0-5 text-center">
      <img className="mt-2" width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0505/users/d2230ea901ced15f457e6ad8e8d9afa48d645120/i-img750x723-1558485924h9psum1770251.jpg&dc=1&sr.fs=20000" alt=""/>
      <div className="lineboxname">
            <a href="#">SONY MDR-ZX310A</a>
      </div>
      <p style={{fontSize:15}}>ตอนนี้ <span style={{color:"red",fontWeight:"bold"}}>13,250 THB</span></p>
      <p style={{fontSize:15}}>ซื้อทันที 25,000 THB</p>
      <span style={{fontSize:13}}><i class="fas fa-user-friends"></i> 8 คน</span> 
      <span style={{fontSize:13}}> <i class="fas fa-history"></i> 4 วัน</span>
      </div>
      
      </div>
      
      
      
      </div>
      
      {/* สิ้นสุดพึ่งดูล่าสุด  */}
      
      
      
      {/* ประมูลกับร้านชั้นนำ */}
      <div className="container-team mt-3">
      <nav class="navbar navbar-light  bg-white">
        <span class="navbar-brand mb-0 h1">ประมูลกับร้านชั้นนำ</span>
        <span>ดูทั้งหมด ></span>
      </nav>
      <div className="row mt-2">
      <div className="col-2">
      <img width="100%" src="https://res.cloudinary.com/kpc/image/upload/w_640,h_640,c_fill,f_auto/his/content/development/n2oSU83UY6JHTsMzeQFQS0aUr960ErIB/keen@2x.png" alt=""/>
      </div>
      <div className="col-2">
      <img width="100%" src="https://res.cloudinary.com/kpc/image/upload/w_640,h_640,c_fill,f_auto/his/content/development/A6Hs3aPJS4Bk7z3njo9zrBJ4su68L9c5/irobot@2x.png" alt=""/>
      </div>
      <div className="col-2">
      <img width="100%" src="https://res.cloudinary.com/kpc/image/upload/w_640,h_640,c_fill,f_auto/his/content/development/TjCaTgadfR5wiLqcJ4w2W4LSfkMRkoUP/hershel@2x.png" alt=""/>
      </div>
      <div className="col-2">
      <img width="100%" src="https://res.cloudinary.com/kpc/image/upload/w_640,h_640,c_fill,f_auto/his/content/development/TvvFjQCPeH62LEoRHA3ZMucKN2lLltWY/fitbit@2x.png" alt=""/>
      </div>
      <div className="col-2">
      <img width="100%" src="https://res.cloudinary.com/kpc/image/upload/w_640,h_640,c_fill,f_auto/his/content/development/oEo0klcybgzw3pCqkO6WquRTd3OEBWvB/crocs@2x.png" alt=""/>
      </div>
      <div className="col-2">
      <img width="100%" src="https://res.cloudinary.com/kpc/image/upload/w_640,h_640,c_fill,f_auto/his/content/development/7Ribm90vDc93yxCMSLaccVof928oA011/timbuk2@2x.png" alt=""/>
      </div>
      
      
      </div>
      </div>
      {/* สิ้นสุดประมูลกับร้านชั้นนำ */}
      
      
      {/* กิจกรรม */}
      <div className="container-team mt-5">
      <h4 className="text-center">กิจกรรมและโปรโมชั่น</h4>
      <p className="text-center">พบกับโปรโมชั่นกิจกรรมน่าสนใจมากมายจากเรา</p>
      <div className="row">
      <div className="col-6 pad-0-5 mr-auto">
      <img className="rounded" width="100%" src="https://cloudfront.tourkrub.co/resized/547x272/uploads%2Fcampaign%2Fthumbnail%2F1%2FSim_2Fly_ais_size_1110x300.jpg" alt=""/>
      </div>
      <div className="col-6 pad-0-5 ml-auto">
      <img className="rounded" width="100%" src="https://cloudfront.tourkrub.co/resized/547x272/uploads%2Fcampaign%2Fthumbnail%2F10%2Fnewtest2.jpg" alt=""/>
      </div>
      </div>
      </div>
      
      {/* สิ้นสุดกิจกรรม */}
      
      {/* โฆษณา  */}
      <div className="container-team mt-5">
      <img width="100%" src="https://via.placeholder.com/1200x80" alt=""/>
      </div>
      {/* สิ้นสุดโฆษณา  */}
      
      
      {/* ยอดนิยมตอนนี้ */}
      <div className="container-team mt-3">
      <nav class="navbar navbar-light bg-white">
        <span class="navbar-brand">ยอดนิยมตอนนี้</span>
      </nav>
      

      <div className="row mb-5 mt-2">
                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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



                                <div className="col-2   pad-0-5  mar-b-15">
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

                                <div className="col-2   pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
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

                                <div className="col-2 pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image
                                        " width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/73396be56e5d716252da66afa0846a090d152408/i-img600x400-1559896239xitrmi245.jpg&dc=1&sr.fs=20000" alt="" />
                                    </div>
                                    <div className="lineboxname">
                                        <a href="#">หมวกArai รุ่นเก่าเก็บ Rx7x ครบเซ็ท</a>
                                    </div>
                                    <p className="f-15">ตอนนี้ <span style={{ color: "#ff9933", fontWeight: "bold" }}>13,250 THB</span></p>
                                    <p className="f-15">ซื้อทันที 25,000 THB</p>
                                    <span className="f-13"><i class="fas fa-user-friends"></i> 8 คน</span>
                                    <span className="f-13"> <i class="fas fa-history"></i> 4 วัน</span>
                                </div>

                                <div className="col-2 pad-0-5  mar-b-15">
                                    <div className="bg-product">
                                        <img className="products-image
                                        " width="100%" src="https://wing-auctions.c.yimg.jp/sim?furl=auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0506/users/3f9a877c22e7cd992e5494cb18171589345c8578/i-img600x487-1560401210qz6f0l465793.jpg&dc=1&sr.fs=20000" alt="" />
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
      
     
      
      </div>
      <div className="row">
      <button className="shadow  btn btn-light mx-auto pr-5 pl-5 mb-4">ดูเพิ่มเติม</button>
      </div>
      
      
      
      
      {/* สิ้นสุดยอดนิยมตอนนี้ */}
      
      
      {/* Footer */}
      
      <div class="footers pt-2 pb-3 colorbg mt-3">
         <div class="container-team pt-5">
             <div class="row">
                 <div class="col-xs-12 col-sm-6 col-md-4 footers-one">
                      <div class="footers-logo">
                          <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style={{width:120}} />
                      </div>
                      <div class="footers-info mt-3">
                          <p>Cras sociis natoque penatibus et magnis Lorem Ipsum tells about the compmany right now the best.</p>
                      </div>
                      <div class="social-icons"> 
                      <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-2x social"></i></a>
                      <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-2x social"></i></a>
                      <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-2x social"></i></a>
                      <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-2x social"></i></a>
                  </div>
                  </div>
                 <div class="col-xs-12 col-sm-6 col-md-2 footers-two">
                      <h5>ช่วยเหลือ </h5>
                      <ul class="list-unstyled">
                       <li><a href="maintenance.html">Help Center</a></li>
                       <li><a href="contact.html">เริ่มเปิดประมูลอย่างไร</a></li>
                       <li><a href="about.html">ประมูลสินค้าอย่างไร</a></li>
                       <li><a href="about.html">ช่องทางการชำระเงิน</a></li>
                       <li><a href="about.html">การจัดส่งสินค้า</a></li>
                 <li><a href="about.html">การคืนเงินและคืนสินค้า</a></li>
                 <li><a href="about.html">ติดต่อเรา</a></li>
                      </ul>
                  </div>
                 <div class="col-xs-12 col-sm-6 col-md-2 footers-three">
                      <h5>เกี่ยวกับเรา </h5>
                      <ul class="list-unstyled">
                       <li><a href="maintenance.html">ร่วมงานกับเรา</a></li>
                       <li><a href="contact.html">นโมยบายของเรา</a></li>
                       <li><a href="about.html">นโมยบายการเป็นส่วนตัว</a></li>
                      </ul>
                  </div>
                 <div class="col-xs-12 col-sm-6 col-md-2 footers-four">
                      <h5>บริการจัดส่ง </h5>
                      <ul class="list-unstyled">
                       <li><a href="maintenance.html">Kerry</a></li>
                       <li><a href="contact.html">EMS</a></li>
                       <li><a href="about.html">SCG</a></li>
                       <li><a href="about.html">Ninja</a></li>
                      </ul>
                  </div>
                 <div class="col-xs-12 col-sm-6 col-md-2 footers-five">
                      <h5>ดาวโหลดแอปพริเคชั่น</h5>
                       <a href="maintenance.html"><img src="https://www.his.in.th/static/media/app-store-badge.d4bf1ad1.svg" alt=""/></a>
                       <a href="about.html"><img src="https://www.his.in.th/static/media/google-play-badge.3f5b6892.svg" alt=""/></a>
                  </div>
             </div>
      <div className="row">
      <div className="mx-auto">
            <img className="p-2" src="https://www.his.in.th/static/media/visa-color-copy.ea905a25.svg" alt=""/>
            <img className="p-2" src="https://www.his.in.th/static/media/mc-vrt-pos-copy-2.a3ca11bb.svg" alt=""/>
            <img className="p-2" src="https://www.his.in.th/static/media/jcb-color.97b684e7.svg" alt=""/>
            <img className="p-2" src="https://storage.googleapis.com/his-dev-web-asset/frontend/icon/dbd-logo.png" alt=""/>
            <img className="p-2" src="https://storage.googleapis.com/his-dev-web-asset/frontend/icon/ssl-secure-light.png" alt=""/>
      </div>
      </div>
      
         </div>
      </div>
      <div class="copyright border bg-light ">
          <div class="container">
              <div class="row text-center">
                  <div class="col-md-12 pt-3">
                      <p class="text-muted">© 2018 xyz Software Pvt. Ltd.</p>
                  </div>
              </div>
          </div>
      </div>
      
      {/* end footer */}
      
      
          </div>
        )
    }
}

export default home;
