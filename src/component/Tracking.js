import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';
export default class Tracking extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3"><SideMenu /></div>
                        <div className="col-9">
                            <div className="card p-3"><h6>ติดตามสินค้า</h6></div>

                            <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">กำลังเตรียมจัดส่ง</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">อยู่ระหว่างขนส่ง</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">สำเร็จแล้ว</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-return-tab" data-toggle="pill" href="#pills-return" role="tab" aria-controls="pills-return" aria-selected="false">คืนสินค้า</a>
                                </li>
                            </ul>

                            <div class="tab-content" id="pills-tabContent">
                                {/* กำลังเตรียมจัดส่ง */}
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    
                                   
                                        <table className="table table-bordered text-center mt-4">
                                <thead >
                                    <tr>
                                        <td className="align-middle text-left" scope="col" colspan="2"><span className="text-secondary">หมายเลขประมูล</span> : #190404091372Q89 <a className="text-primary" href="#">ดูรายละเอียด </a><br/><span className="text-secondary">วันที่ :</span> 12 ธ.ค. 2018 16:00:28</td>
                                        <td className="align-middle" style={{width:200}} scope="col">ผู้ขาย : (Hunter Lau)</td>
                                        <td className="align-middle" style={{width:200}} scope="col">ราคาทั้งหมด : <h5 className="text-danger">฿ 200.00</h5></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle"> <img width="120" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left" href="#"><a href="#">หมวกChampion Cap หมวกแก๊ปแชมป์เปี้ยน แฟชั่นสุดฮิต งานปัก งานปัาย คุณภาพ 100 %</a></td>
                                        <td className="align-middle">การชำระเงิน : หักบัญชี <br/> <a href="#">ประวัติการชำระเงิน </a></td>
                                        <td className="align-middle"><button className="btn btn-sm btn-block btn-outline-secondary">ติดตามสินค้า</button> <button className="btn btn-sm btn-block btn-outline-secondary mt-2">ต้องการคืนสินค้า ? คลิ๊ก</button></td>
                                    </tr>
                                </tbody>
                            </table>
                                  
                         
                                    {/* 2 */}
                                    
                                       
                                        <table class="table table-bordered text-center mt-4">
                                <thead>
                                    <tr>
                                        <td className="align-middle text-left" scope="col" colspan="2"><span className="text-secondary">หมายเลขประมูล</span> : #190404091372Q89 <a className="text-primary" href="#">ดูรายละเอียด </a><br/><span className="text-secondary">วันที่ :</span> 12 ธ.ค. 2018 16:00:28</td>
                                        <td className="align-middle" style={{width:200}} scope="col">ผู้ขาย : (Hunter Lau)</td>
                                        <td className="align-middle" style={{width:200}} scope="col">ราคาทั้งหมด : <h5 className="text-danger">฿ 200.00</h5></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle"> <img width="120" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left" href="#"><a href="#">หมวกChampion Cap หมวกแก๊ปแชมป์เปี้ยน แฟชั่นสุดฮิต งานปัก งานปัาย คุณภาพ 100 %</a></td>
                                        <td className="align-middle">การชำระเงิน : หักบัญชี <br/> <a href="#">ประวัติการชำระเงิน </a></td>
                                        <td className="align-middle"><button className="btn btn-sm btn-block btn-outline-secondary">ติดตามสินค้า</button> <button className="btn btn-sm btn-block btn-outline-secondary mt-2">ต้องการคืนสินค้า ? คลิ๊ก</button></td>
                                    </tr>
                                </tbody>
                            </table>

                           



                                    <nav aria-label="...">
                                        <ul class="pagination justify-content-center mt-3">
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
                                {/* End-กำลังเตรียมจัดส่ง */}

                                {/* อยู่ระหว่างขนส่ง */}
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="card">
                                        <div className="card-body">
                                            <p className="text-center">ไม่มีรายการ</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End-อยู่ระหว่างขนส่ง */}

                                {/* สำเร็จแล้ว */}
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="text-center">ไม่มีรายการ</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End-สำเร็จแล้ว */}

                                {/* คืนสินค้า */}
                                <div class="tab-pane fade" id="pills-return" role="tabpanel" aria-labelledby="pills-return-tab">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="text-center">ไม่มีรายการ</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End-คืนสินค้า */}

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
