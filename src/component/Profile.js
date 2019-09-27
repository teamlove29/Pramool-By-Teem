import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu'
export default class profile extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                        <SideMenu />
                        </div>

                        <div className="col-9">
                            <div className="card p-3"><h6>ข้อมูลส่วนตัว - ทั่วไป</h6></div>

                            <div className="card mt-3">
                                <div className="card-body">
                                <img className="d-block mx-auto  rounded-circle p-3" src="https://via.placeholder.com/150" alt="..." />
                                <div className="form-row">
                                <button type="submit" class="btn btn-secondary btn-sm mb-2 mx-auto">อัพโหลดรูป Profile</button>
                                </div>
                                
                                    <form>
                                        <div class="form-group row">
                                            <label for="DisplayName" class="col-sm-2 col-form-label">ชื่อ (Display name)</label>
                                            <div class="col-sm-10">
                                                <input type="text" readonly class="form-control-plaintext" id="DisplayName" value="DisplayName" />
                                            </div>
                                            </div>
                                                {/* inputPassword */}
                                                <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-2 col-form-label text-right">Password</label>
                                                <div class="col-sm-8">
                                                    <button className="btn btn-primary btn-sm">แก้ไข Password</button>
                                                </div>
                                                </div>
                                                {/* Email */}
                                                <div class="form-group row">
                                                <label for="Email" class="col-sm-2 col-form-label text-right">Email</label>
                                                <div class="col-sm-8">
                                                    <input type="Email" class="form-control form-control-sm" id="Email" value="ScreenAnyWhere@gmail.com" />
                                                </div>
                                                </div>
                                                {/* Tel */}
                                                <div class="form-group row">
                                                <label for="Tel" class="col-sm-2 col-form-label text-right">หมายเลขโทรศัพท์</label>
                                                <div class="col-sm-8">
                                                    <input type="Tel" class="form-control form-control-sm" id="Tel" placeholder="หมายเลขโทรศัพท์" />
                                                </div>
                                                </div>
                                                {/* วันเดือนปีเกิด(ค.ศ) */}
                                                <div class="form-group row">
                                                <label for="date" class="col-sm-2 col-form-label text-right">วันเดือนปีเกิด(ค.ศ)</label>
                                                <div class="col-sm-8">
                                                    <input type="date" class="form-control form-control-sm" id="date" />
                                                </div>
                                                </div>
                                                <div className="form-row">
                                                <div className="mx-auto">
                                                <button type="submit" className="btn btn-success btn-sm">บันทึกข้อมูล</button> <button className="btn btn-secondary btn-sm">ยกเลิก</button>
                                                </div>
                                                </div>
                                        </form>

                                        </div>
                            </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    )
                }
            }
