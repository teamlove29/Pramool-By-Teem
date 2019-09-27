import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">ค้นหาตามหมวดหมู่</div>
                    <div className="card-body">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox1">1</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">2</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox3">3</label>
                        </div>

                        <p>ดูเพิ่มเติม <i class="fas fa-caret-down"></i></p> 

                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-header"><i class="fas fa-filter"></i> คัดกรอง</div>
                    <div className="card-body">

                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox4">ล่าสุด</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox5">มาแรง</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox6">ใกล้หมดเวลา</label>
                        </div>
<hr/>
                        <h6>ช่วงราคา</h6>
                            <div className="form-group">
                            <input className="form-control form-control-sm" type="text" placeholder="ราคาน้อยสุด"/>
                            </div>
                            <div className="form-group">
                            <input className="form-control form-control-sm" type="text" placeholder="ราคามากสุด"/>
                            </div>
                            <button type="submit" className="btn btn-sm btn-outline-dark">ค้นหาตามราคา</button>
                        <hr />
                        <h6>สภาพสินค้า</h6>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox10" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox10">ของใหม่</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox11" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox11">มือสอง</label>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
