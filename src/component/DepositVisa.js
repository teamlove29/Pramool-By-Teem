import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';
export default class DepositVisa extends Component {
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
                                    <hr />
                                    {/* โอนผ่านธนาคาร */}

                                    <div className="card">
                                        <h5 className="mt-4 text-center">ชำระเงินผ่านบัตรเครดิต</h5>
                                        {/* จำนวณเงิน */}
                                        <p className="text-center">จำนวนเงิน <span style={{ color: "red", fontSize: 20 }}>1,000.00 บาท</span></p>
                                        {/* ENd-จำนวณเงิน */}
                                        <hr/>
                                        {/* ของ Omise */}
                                        <div className="text-center">
                                        <p>visa / MasterCard</p>
                                        <p>หมายเลขบัตร</p>
                                        <p>ชื่อบนบัตร</p>
                                        <p>ดด/ปป  CVV</p>
                                        <p>ชำระเงิน</p>
                                        <p>Secured payment by Omise</p>
                                        </div>
                                {/* End-ของ Omise */}

                                    </div>



                                    {/* เมื่อมีคนเติม */}
                                    <p className="mt-4">ประวัติการเติมเงิน</p>
                                    <table class="table table-sm table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">ลำดับ</th>
                                                <th scope="col">จำนวน</th>
                                                <th scope="col">สถานะ</th>
                                                <th scope="col">ช่องทาง</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>1,000.00 THB</td>
                                                <td className="text-success">สำเร็จ</td>
                                                <td>KBANK</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">2</td>
                                                <td>4,750.00 THB</td>
                                                <td className="text-danger">รอยืนยัน</td>
                                                <td>SCB</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">2</td>
                                                <td>5,550.00 THB</td>
                                                <td className="text-danger">รอยืนยัน</td>
                                                <td>Visa</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    {/* End-เมื่อมีคนเติม */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
