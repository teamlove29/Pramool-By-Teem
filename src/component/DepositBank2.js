import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';

export default class DepositBank2 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3"><SideMenu /></div>
                        <div className="col-9">

                            <div className="card p-3"><h6>เติมเงิน</h6></div>

                            <div className="card mt-3">
                                <div className="card-body">
                                    <h6>เลือกช่องทางชำระเงิน</h6>
                                    <nav class="nav nav-pills nav-justified mt-4">
                                        <a class="nav-item nav-link active" href="#">
                                            <p>ชำระผ่านบัตรเครดิต</p>
                                            <img width="60" src="https://www.his.in.th/static/media/visa-color-copy.ea905a25.svg" alt="" />
                                            <img className="ml-2" width="40" src="https://www.his.in.th/static/media/mc-vrt-pos-copy-2.a3ca11bb.svg" alt="" />
                                        </a>
                                        <a class="nav-item nav-link" href="#">
                                            <p>ชำระผ่านระบบ AirPay</p>
                                            <img width="80" src="https://app.airpay.in.th/image/common/navbar/AP_logo.png" alt="" />
                                        </a>
                                        <a class="nav-item nav-link" href="#">
                                            <p>ชำระโดยการโอนเงินผ่านธนาคาร</p>
                                            <img width="120" src="https://www.918kisssc.com/wp-content/uploads/2018/10/4-bank.jpg" alt="" />
                                        </a>
                                    </nav>
<hr/>
                                    {/* โอนผ่านธนาคาร */}
                                    <p className="mt-4">ขั้นตอนที่ 1 โอนผ่านธนาคาร</p>
                                    <div className="card">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ธนาคาร</th>
                                                    <th scope="col">สาขา</th>
                                                    <th scope="col">เลขบัญชี</th>
                                                    <th scope="col">ประเภทบัญชี</th>
                                                    <th scope="col">ชื่อบัญชี</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img className="mr-2" width="25" src="https://kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png" alt=""/> กสิกรไทย (KTB)</td>
                                                    <td>เซ็นทรัลพลาซา</td>
                                                    <td>123-4-56789-9</td>
                                                    <td>ออมทรัพย์</td>
                                                    <td>บริษัท ประมูลอินไทยแลนด์ จำกัด</td>
                                                </tr>
                                                <tr>
                                                    <td><img className="mr-2" width="25" src="https://kebku63557.i.lithium.com/t5/image/serverpage/image-id/19933iDA698544AB9CEEAB/image-size/large/is-moderation-mode/true?v=1.0&px=999" alt=""/>ไทยพาณิชย์ (SCB)</td>
                                                    <td>เซ็นทรัลพลาซา</td>
                                                    <td>999-8-78877-6</td>
                                                    <td>ออมทรัพย์</td>
                                                    <td>บริษัท ประมูลอินไทยแลนด์ จำกัด</td>
                                                </tr>
                                                <tr>
                                                    <td><img className="mr-2" width="25" src="https://static.posttoday.com/media/content/2013/03/14/F2897BD853E546DFA808BCC1F69D413C.jpg" alt=""/>ทหารไทย (TMB)</td>
                                                    <td>เซ็นทรัลพลาซา</td>
                                                    <td>523-2-22237-1</td>
                                                    <td>ออมทรัพย์</td>
                                                    <td>บริษัท ประมูลอินไทยแลนด์ จำกัด</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p>ยอดที่ต้องชำระ <span style={{color:"red",fontSize:20}}>1,000.00 บาท</span></p>
                                    <hr/>
                                    <p>ขั้นตอนที่ 2 แจ้งโอนเงิน</p>
                                    <small class="form-text text-muted">เมื่อโอนเงินเรียบร้อยแล้ว โปรดแจ้งการชำระเงิน โดยการกรอกแบบฟอร์มข้างล่าง</small>
                                    <div className="card mt-3">
                                        <div className="card-body">

                                        {/* นับเวลา */}
                                                <h5 className="text-center mb-3">เวลาสิ้นสุด 59 นาที :  14 วินาที</h5>
                                        {/* ENd-นับเวลา */}


                                        <fieldset class="form-group">
                                            <div class="row">
                                        <label class="col-form-label col-sm-5 pt-0 text-right" htmlFor="">ธนาคารที่โอนเข้า*</label>
                                        <div class="col-sm-7"> 
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                    <label class="form-check-label" for="inlineRadio1"><img className="mr-2" width="25" src="https://kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png" alt=""/>ธนาคารกสิกรไทย</label>
                                                    </div>
                                        
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                    <label class="form-check-label" for="inlineRadio2"><img className="mr-2" width="25" src="https://kebku63557.i.lithium.com/t5/image/serverpage/image-id/19933iDA698544AB9CEEAB/image-size/large/is-moderation-mode/true?v=1.0&px=999" alt=""/>ธนาคารไทยพาณิชย์</label>
                                                    </div>
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                    <label class="form-check-label" for="inlineRadio3"><img className="mr-2" width="25" src="https://static.posttoday.com/media/content/2013/03/14/F2897BD853E546DFA808BCC1F69D413C.jpg" alt=""/>ธนาคารทหารไทย</label>
                                                    </div>
                                        </div>
                                            </div>
                                        </fieldset>
                                          {/* จำนวนเงินที่โอนเข้า */}
                                        <div className="form-group row">
                                            <label className="col-5 col-form-label text-right" htmlFor="">จำนวนเงินที่โอนเข้า*</label>
                                            <div className="col-3">
                                                <input className="form-control form-control-sm" type="text" placeholder="0,000.00" /> 
                                            </div><p>บาท</p>
                                        </div>
                                        {/* ENd-จำนวนเงินที่โอนเข้า */}

                                        {/* วันเดือนปีเกิด(ค.ศ) */}
                                        <div class="form-group row">
                                                <label for="date" class="col-sm-5 col-form-label text-right">วัน-เวลาที่โอนเข้า*</label>
                                                <div class="col-sm-4">
                                                    <input type="datetime-local" class="form-control form-control-sm" id="date" />
                                                </div>
                                        </div>
                                        {/* จบ วันเดือนปีเกิด(ค.ศ) */}

                                        {/* สลิปหลักฐานการโอน */}
                                        <div className="form-group row">
                                        <label className="col-5 col-form-label text-right" htmlFor="">สลิปหลักฐานการโอน*</label>
                                                <div class="custom-file col-4 ml-3">
                                                <input type="file" class="custom-file-input" id="customFile" />
                                                <label class="custom-file-label" for="customFile">เลือกไฟล์</label>
                                                </div>
                                            </div>
                                        {/* จบ สลิปหลักฐานการโอน */}

                                        {/* เบอร์โทรศัพท์ */}
                                        <div className="form-group row">
                                            <label className="col-5 col-form-label text-right" htmlFor="">จำนวนเงินที่โอนเข้า*</label>
                                            <div className="col-4">
                                                <input className="form-control form-control-sm" type="tel" placeholder="08x-xxxxxxx"/> 
                                            </div>
                                        </div>
                                        {/* ENd-เบอร์โทรศัพท์ */}

                                        

                                        <div className="form-row">
                                        <div className="mx-auto">
                                            <button type="submit" className="btn btn-success btn-sm">แจ้งโอนเงิน</button>
                                        </div>
                                        </div>

                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
