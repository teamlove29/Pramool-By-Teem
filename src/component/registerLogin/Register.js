import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FormField from '../../common/FormField'
import { FormsField } from '../registerLogin/FormsField'
import { MembersFetch, createMember } from '../../actions'
import { connect } from 'react-redux'
class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            message: "",
            alertDanger: false,
            alertSuccess: false
        };
        this.submit = this.submit.bind(this);
        // this.ConfrimOrder = this.ConfrimOrder.bind(this)
    }

    componentDidMount() {
        this.props.MembersFetch();
    }

    renderField(FormsField) {

        return FormsField.map(({ name, type, required, placeholder }) => {
            return (
                <Field key={name} name={name} type={type} required={required} placeholder={placeholder} component={FormField} />
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
    }

    submit(values) {
        const { members } = this.props;
        let findmember = members.find(member => member.email === values.email);
        if (findmember) {
            this.setState({ alertSuccess: false, alertDanger: true, message: "อีเมล์นี้ถูกใช้งานแล้วโปรดใช้อีเมล์อื่น" })
        }
        else {
            this.setState({ alertSuccess: true, alertDanger: false, message: "สมัครสมาชิกเรียบร้อยแล้ว" })
            this.props.createMember(values);
            window.setTimeout(function () { window.location.href="/login" }, 1000);
        }
    }

    render() {
        const { handleSubmit } = this.props;
        const { message, alertSuccess, alertDanger } = this.state;
        return (
            <div> {alertDanger &&
                <div className="alert alert-danger" role="alert">
                    {message}
                </div>}
                {alertSuccess &&
                    <div className="alert alert-success" role="alert">
                        {message}
                    </div>}
                <form className="container w-50" onSubmit={handleSubmit(this.submit)}>
                    <h5 className="text-center">ลงทะเบียนสมาชิกใหม่</h5>
                    {this.renderField(FormsField)}
                    <p className="form-control form-control-sm mt-2 " className="form-text text-muted">ในการสมัครใช้งาน เราถือว่าคุณยอมรับข้อตกลงในการใช้งานและนโยบายความเป็นส่วนตัว
                                กับทาง ขอสงวนสิทธิ์ห้ามมิให้ผู้ใช้ใช้เครื่องมืออุปกรณ์อื่นๆลงทะเบียนเพื่อใช้Voucher Code
                                อีก หากท่านใดฝ่าฝืน  มีสิทธิ์ระงับสถานะบัญชีผู้ใช้และงดให้บริการทันทีทั้งนี้ ให้ความเห็นของ
                            <span className="text-primary"> นโยบายความเป็นส่วนตัว</span> & <span className="text-primary">ข้อตกลงการใช้บริการ</span>
                    </p>
                    <button type="submit" className="btn btn-success btn-sm btn-block">ตกลง</button>
                    <p className="text-center">หรือ</p>
                    <button className="btn btn-primary btn-sm btn-block">Sign in with Facebook</button>
                    <a href="/login" className="btn btn-danger btn-sm btn-block">เข้าสู่ระบบ</a>
                </form>



            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.email) {
        errors.email = 'กรอกข้อมูลด้วยค่ะ'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = "กรอกข้อมูลด้วยค่ะ"
    }
    else if (values.password.length < 6) {
        errors.password = "รหัสไม่ควรต่ำกว่า 6 ตัว"
    }

    if (!values.passwordCon) {
        errors.passwordCon = "กรอกข้อมูลด้วยค่ะ"
    }
    else if (values.passwordCon.length < 6) {
        errors.passwordCon = "รหัสไม่ควรต่ำกว่า 6 ตัว"
    }

    if (values.password != values.passwordCon) {
        errors.passwordCon = "รหัสไม่ตรงกัน"
    }


    return errors;
}

Register = reduxForm({ validate, form: "RegisterForm" })(Register)

function mapStateToProps({ members }) {
    return { members };
}

export default connect(mapStateToProps, { MembersFetch, createMember })(Register)
