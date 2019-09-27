import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu'
export default class InsertAddress extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3"><SideMenu /></div>

                        <div className="col-9">

                            <div className="card p-3"><h6>ข้อมูลส่วนตัว - ทั่วไป</h6></div>

                            <div className="card mt-3">
                                <div className="card-body">
                                    <button className="btn btn-secondary btn-sm pr-4 pl-4">+ เพิ่มที่อยู่ใหม่</button>
                                    <div className="form-inline ">
                                        <div className="card mt-3 mx-auto">
                                            <div className="card-body ">
                                                มารุตเทพ ร่มโพธิ์  <span className="text-primary">แก้ไข</span> | <span className="text-danger">ลบ</span> <br />
                                                309/78 ม.2 ต.พระบาท อ.เมืองลำปาง 52000,Thailand <br />
                                                0965913095
                                       </div>
                                        </div>
                                        <div className="card mt-3 mx-auto">
                                            <div className="card-body">
                                                มารุตเทพ ร่มโพธิ์  <span className="text-primary">แก้ไข</span> | <span className="text-danger">ลบ</span> <br />
                                                309/78 ม.2 ต.พระบาท อ.เมืองลำปาง 52000,Thailand <br />
                                                0965913095
                                       </div>
                                        </div>
                                    </div>


                                    <h5 className="text-center mt-5">เพิ่มที่อยู่ใหม่</h5>
                                    {/* ชื่อ-นามสกุล */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">ชื่อ-นามสกุล</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="ชื่อ-นามสกุล" />
                                        </div>
                                    </div>
                                    {/* ENd-ชื่อ-นามสกุล */}

                                    {/* หมายเลขโทรศัพท์ */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">หมายเลขโทรศัพท์</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="หมายเลขโทรศัพท์" />
                                        </div>
                                    </div>
                                    {/* ENd-หมายเลขโทรศัพท์ */}

                                    {/* ที่อยู่ */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="address">ที่อยู่</label>
                                        <div className="col-7">
                                            <textarea class="form-control form-control-sm" id="address" rows="3" placeholder="เลขที่ + หมู่บ้าน + ถนน"></textarea>
                                        </div>
                                    </div>
                                    {/* ENd-ที่อยู่ */}

                                    {/* รหัสไปรษณี */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">รหัสไปรษณี</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="รหัสไปรษณี" />
                                        </div>
                                    </div>
                                    {/* ENd-รหัสไปรษณี */}

                                    {/* จังหวัด */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">จังหวัด</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="จังหวัด" />
                                        </div>
                                    </div>
                                    {/* ENd-จังหวัด */}

                                    {/* อำเภอ/เขต */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">อำเภอ/เขต</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="อำเภอ/เขต" />
                                        </div>
                                    </div>
                                    {/* ENd-อำเภอ/เขต */}

                                    {/* ตำบล/แขวง */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">ตำบล/แขวง</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" placeholder="ตำบล/แขวง" />
                                        </div>
                                    </div>
                                    {/* ENd-ตำบล/แขวง */}

                                    {/* ประเทศ */}
                                    <div className="form-group row">
                                        <label className="col-3 col-form-label text-right" htmlFor="">ประเทศ</label>
                                        <div className="col-7">
                                            <input className="form-control form-control-sm" type="text" disabled value="Thailand" />
                                        </div>
                                    </div>
                                    {/* ENd-ประเทศ */}

                                    <div className="form-row">
                                        <div className="mx-auto">
                                            <button type="submit" className="btn btn-success btn-sm">บันทึกข้อมูล</button> <button className="btn btn-secondary btn-sm">ยกเลิก</button>
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
