import React, { Component } from 'react'
import SideMenu from './sidemenu/SideMenu';
export default class Withdraw extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3"><SideMenu /></div>
                        <div className="col-9">

                            <div className="card p-3"><h6>ถอนเงิน</h6></div>

                            <div className="card mt-4">
                                <div className="card-body">
                                    <div class="card-deck">
                                        <div class="card">
                                            <div class="card-body">
                                                <div className="form-row">
                                                    <div className="mx-auto mt-4">
                                                    <i class="fas fa-3x fa-plus-circle text-success"></i>
                                                    </div>
                                                </div>
                                                <p className="text-center">เพิ่มบัญชีธนาคาร/บัตรเครดิต</p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div className="card-header"><i className="fab fa-2x fa-cc-visa align-middle"></i> Visa (รอยืนยัน)</div>
                                            <div class="card-body">
                                                <p class="card-text">* * * * * * 1 2 3 4</p>
                                                <p class="card-text">MARUTTHEP ROMPHO</p>
                                                <p class="card-text"><small class="text-muted">เพิ่มเมื่อวันที่ 22-05-2019</small></p>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div className="card-header"><i className="fas fa-2x fa-university align-middle"></i> TMB BANK</div>
                                            <div class="card-body">
                                                <p class="card-text">* * * * * * 8 8 8 8</p>
                                                <p class="card-text">MARUTTHEP ROMPHO</p>
                                                <p class="card-text"><small class="text-muted">เพิ่มเมื่อวันที่ 22-05-2019</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ยอดที่ถอนได้ */}

                            <div className="card mt-4">
                                <nav class="navbar navbar-light  bg-white">
                                    <span class="navbar-brand mb-0 h1">ยอดที่ถอดได้ : 14,070 THB</span>
                                    <button className="btn btn-warning"><i class="fas fa-wallet"></i> ถอนเงิน</button>
                                </nav>
                            </div>

                            {/* End-ยอดที่ถอนได้ */}
                        </div>







                    </div>
                </div>
            </div>
        )
    }
}
