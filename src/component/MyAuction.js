import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';

export default class MyAuction extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3"><SideMenu /></div>
                        <div className="col-9">

                            <div className="card p-3"><h6>การประมูลของฉัน</h6></div>

                            <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">อยู่ระหว่างประมูล</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">รายการที่ชนะ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">รายการที่แพ้</a>
                                </li>
                            </ul>

                            <div class="tab-content" id="pills-tabContent">
                                {/* อยู่ระหว่างประมูล */}
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <table class="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">สินค้า</th>
                                        <th style={{width:350}} scope="col">รายการ</th>
                                        <th scope="col">ราคาปัจจุบัน</th>
                                        <th scope="col">เวลาสิ้นสุด</th>
                                        <th scope="col">คนประมูล</th>
                                        <th scope="col">สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left" href="#"><a href="#">หมวกChampion Cap หมวกแก๊ปแชมป์เปี้ยน แฟชั่นสุดฮิต งานปัก งานปัาย คุณภาพ 100 %</a></td>
                                        <td className="align-middle">2,000.00 THB</td>
                                        <td className="align-middle">23 ชั่วโมง</td>
                                        <td className="align-middle">8 คน</td>
                                        <td className="align-middle">ชนะ</td>
                                    </tr>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left"><a href="#">หมวกChampion Cap กฟหกฟกฟกฟหกฟหก</a></td>
                                        <td className="align-middle">200.00 THB</td>
                                        <td className="align-middle">2 วัน</td>
                                        <td className="align-middle">8 คน</td>
                                        <td className="align-middle">ชนะ</td>
                                    </tr>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left"><a href="#">หมวกChampion Cap กฟหกฟ %</a></td>
                                        <td className="align-middle">50,000.00 THB</td>
                                        <td className="align-middle">1 ชั่วโมง</td>
                                        <td className="align-middle">8 คน</td>
                                        <td className="align-middle">ชนะ</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                    {/* End-อยู่ระหว่างประมูล */}

                                    {/* รายการที่ชนะ */}
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <table class="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">สินค้า</th>
                                        <th scope="col">รายการ</th>
                                        <th scope="col">ราคาปัจจุบัน</th>
                                        <th scope="col">เวลาสิ้นสุด</th>
                                        <th scope="col">คนประมูล</th>
                                        <th scope="col">สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="text-left" href="#"><a href="#">หมวกChampion Cap หมวกแก๊ปแชมป์เปี้ยน แฟชั่นสุดฮิต งานปัก งานปัาย คุณภาพ 100 %</a></td>
                                        <td>2,000.00 THB</td>
                                        <td>23 ชั่วโมง</td>
                                        <td>8 คน</td>
                                        <td>ชนะ</td>
                                    </tr>
     
                                </tbody>
                            </table>
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
                                    {/* End-รายการที่ชนะ */}

                                    {/* รายการที่แพ้ */}
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="text-center">ไม่มีรายการ</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End-รายการที่แพ้ */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
