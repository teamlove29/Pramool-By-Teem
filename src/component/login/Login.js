import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FormField from '../../common/FormField'
import { FormsField } from './FormsField'
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux'
import { loginAction, MembersFetch } from '../../actions'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.MembersFetch();
    }

    rederField(FormsField) {
        return FormsField.map(({ name, type, placeholder, required }) => {
            return (
                <Field key={name} name={name} type={type} placeholder={placeholder} component={FormField} />
            )
        })
    }

    onSubmit = e => { e.preventDefault(); }

    submit(values) {
        this.props.loginAction(values, this.props.history);
    //     const { members } = this.props;
    //     let findmember = members.find(member => member.email === values.email);
    //     if (findmember) {
    //         console.log('ผ่าน');
    //     }
    //     else {
    //         console.log('ไม่ผ่าน');

    //     }
    }

    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="text-danger">
                    {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Pramool</h1>
                            <div className="alert alert-danger" role="alert">
                                อีเมล์หรือรหัสผ่านไม่ถูกต้อง !
                    </div>
                            <div className="row">
                                {/* เข้าสู่ระบบ */}
                                <div className="col-6">
                                    <h5 className="text-center">เข้าสู่ระบบ</h5>
                                    <p className="text-center">เข้าระบบด้วยเฟสบุ๊ก</p>
                                    <a href="#" className="btn btn-primary btn-sm btn-block">Sign in with Facebook</a>
                                    <hr />
                                    <p className="text-center">เข้าสู่ระบบด้วยอีเมล์</p>
                                    <form onSubmit={handleSubmit(this.submit)}>
                                        {this.rederField(FormsField)}
                                        <div className="mt-2">
                                            <button className="btn btn-success btn-sm pl-4 pr-4">เข้าสู่ระบบ</button> <a href="#">ลืมรหัสผ่าน ?</a>
                                        </div>
                                    </form>
                                    {/* {this.errorMessage()} */}

                                </div>
                                {/* ลงทะเบียนใหม่ */}
                                <div className="col-6">
                                    <h5 className="text-center">ลงทะเบียนใหม่</h5>
                                    <p className="text-center">ลงทะเบียนสมาชิกใหม่</p>
                                    <a href="/register" className="btn btn-danger btn-sm btn-block">ลงทะเบียนใหม่ คลิกที่นี้</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        errors.password = 'กรอกข้อมูลด้วยค่ะ'
    }
    return errors
}

Login = reduxForm({ validate, form: "loginForm" })(Login)

function mapStateToProps({ members, auth }) {
    return { members, errorMessage: auth.error };

}

export default connect(mapStateToProps, { loginAction, MembersFetch })(Login)
