import React, { Component } from 'react'

export default class SideMenu extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <img className="mx-auto d-block rounded-circle" src="https://via.placeholder.com/100" alt="..." />
                        <p className="text-center">teamlove29</p>
                        <p className="text-center">ยอดเงินคงเหลือ 0 THB</p>
                        <hr />
                        <div className="row">
                            <div className="col-6"><button className="btn btn-success btn-sm btn-block">เติมเงิน</button></div>
                            <div className="col-6"><button className="btn btn-danger btn-sm btn-block">ถอนเงิน</button></div>

                        </div>

                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">

                        <a href="#">ข้อมูลส่วนตัว</a>

                        <hr/>
                        การประมูลของฉัน
                        <hr/>
                        รายการโปรด
                        <hr />
                        ติดตามสินค้า
                        <hr/>
                        รายการโปรด
                        <hr />
                        ประวัติการเงินทั้งหมด
                        <hr/>
                        การแจ้งเตือน
                        <hr/>
                        เริ่มประมูลสินค้า
                                </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">

                        <p className="text-center text-warning"><i class="fas fa-star"></i> (เรทติ้ง : 4.8)</p>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                            <p className="text-left">เป็นสมาชิกเมื่อ</p> 
                            <p className="text-left">ประมูลแล้ว</p> 
                            <p className="text-left">ราคาสูงสุด</p> 
                            <p className="text-left">ราคาต่ำสุด</p> 
                            </div>
                            <div className="col-6">
                                <p className="text-right">24-06-2017</p>
                            <p className="text-right">14 ครั้ง</p>
                            <p className="text-right">20k THB</p>
                            <p className="text-right">120 THB</p>
                            </div>
                        </div>
                                </div>

                </div>
            </div >
        )
    }
}
