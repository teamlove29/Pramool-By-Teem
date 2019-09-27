import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';

export default class Favorites extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3"><SideMenu /></div>
                        <div className="col-9">

                            <div className="card p-3"><h6>รายการที่ชอบ</h6></div>

                                {/* อยู่ระหว่างประมูล */}
                                
                                <table class="table text-center table-striped table-bordered mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col">สินค้า</th>
                                        <th style={{width:350}} scope="col">รายการ</th>
                                        <th scope="col">ราคาปัจจุบัน</th>
                                        <th scope="col">เวลาสิ้นสุด</th>
                                        <th scope="col">คนประมูล</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left" href="#"><a href="#">หมวกChampion Cap หมวกแก๊ปแชมป์เปี้ยน แฟชั่นสุดฮิต งานปัก งานปัาย คุณภาพ 100 %</a></td>
                                        <td className="align-middle">2,000.00 THB</td>
                                        <td className="align-middle">23 ชั่วโมง</td>
                                        <td className="align-middle">8 คน</td>
                                        <td className="align-middle"><i class="far fa-trash-alt"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left"><a href="#">หมวกChampion Cap กฟหกฟกฟกฟหกฟหก</a></td>
                                        <td className="align-middle">200.00 THB</td>
                                        <td className="align-middle">2 วัน</td>
                                        <td className="align-middle">8 คน</td>
                                        <td className="align-middle"><i class="far fa-trash-alt"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row"> <img width="100" src="https://f.btwcdn.com/store-35589/product-thumb/3f5c1c1b-6871-f762-bfc8-5cf206502ddf.jpg" alt="" /> </td>
                                        <td className="align-middle text-left"><a href="#">หมวกChampion Cap กฟหกฟ %</a></td>
                                        <td className="align-middle">50,000.00 THB</td>
                                        <td className="align-middle">1 ชั่วโมง</td>
                                        <td className="align-middle">8 คน</td>
                                        <td className="align-middle"><i class="far fa-trash-alt"></i></td>
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


                    </div>
                </div>
            </div>
        )
    }
}
