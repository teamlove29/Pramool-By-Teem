import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';
export default class Return extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card p-3"> การคืนสินค้า </div>

                    {/* 1 */}
                    {/* <img className="mt-3" src="https://media.true-shopping.com/assets/uploads/ready/201811210616351361317780.jpg" alt=""/>
<div className="col text-center mt-3">
<button className="btn btn-outline-warning pr-5 pl-5">คลิกที่นี้เพื่อคืนสินค้า</button> 
<button className="btn btn-outline-secondary ml-3 pr-5 pl-5">ย้อนกลับ</button>
</div> */}

                    {/* 2 */}
                    <p>หมายเลขประมูล : #190404091372Q89</p>
                    <div className="card">
                        <div className="card-body">

                            {/* <h5 className="text-center mt-5">เหตุผลการคืนสินค้า</h5> */}
                            {/* เหตุผล */}
                            {/* <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">ระบุเหตุผล</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="เหตุผล" />
                                        </div>
                                    </div> */}
                            {/* ENd-เหตุผล */}


                            {/* ข้อความ */}
                            {/* <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="address">ข้อความ</label>
                                        <div className="col-7">
                                            <textarea class="form-control form-control-sm" id="address" rows="3"></textarea>
                                        </div>
                                    </div> */}
                            {/* ENd-ข้อความ */}



                            {/* <div className="form-row">
                                        <div className="mx-auto">
                                            <button type="submit" className="btn btn-success btn-sm">ยืนยัน</button> <button className="btn btn-secondary btn-sm">ยกเลิก</button>
                                        </div>
                                    </div> */}

                            <h5 className="text-center mt-5">ที่อยู่ในการจัดส่งคืน</h5>
                            <div class="card" >
                                <div class="card-body">
                                    <div class="card-text text-center">
                                        <p>มารุตเทพ ร่มโพธิ์ (088-555-555)</p>
                                        <p>ที่อยู่ 309/78 ม.2 ต.พระบาท อ.เมืองลำปาง จ.กรุงเทพฯ 52000</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* ใส่เลขติดตามพัสดุ */}
                            <div className="form-group row">
                                <label className="col-3 col-form-label text-right" htmlFor="">ใส่เลขติดตามพัสดุ</label>
                                <div className="col-7">
                                    <input className="form-control form-control-sm" type="text" placeholder="ใส่เลขติดตามพัสดุ" />
                                </div>
                                <div className="col-2"><button type="submit" className="btn btn-success btn-sm pl-3 pr-3">ยืนยัน</button></div>
                            </div>
                            {/* ENd-ใส่เลขติดตามพัสดุ */}




                        </div>
                    </div>

                    {/* 3 */}

                </div>
            </div>
        )
    }
}
