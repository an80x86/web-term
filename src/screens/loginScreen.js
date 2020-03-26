import React, { Component } from 'react'

export default class loginScreen extends Component {
    state = {
        uname1: "",
        pwd1: "",
        ready: true
    }

    onLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {    
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        let { uname1, pwd1 } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 mx-auto">

                                <div className="card rounded shadow shadow-sm">
                                    <div className="card-header">
                                        <h3 className="mb-0">Kullanıcı Girişi</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => this.onLogin(e)} className="form" role="form" autoComplete="off" id="formLogin" noValidate="">
                                            <div className="form-group">
                                                <label htmlFor="uname1">Kullanıcı</label>
                                                <input value={uname1} onChange={(e) => this.handleChange(e)} type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""/>
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Şifre</label>
                                                <input value={pwd1} onChange={(e) => this.handleChange(e)} type="password" className="form-control form-control-lg rounded-0" name="pwd1" id="pwd1" required="" autoComplete="new-password"/>
                                                <div className="invalid-feedback">Enter your password too!</div>
                                            </div>
                                            <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">
                                                <div className="spinner-border" role="status" />
                                                {' '}
                                                Giriş
                                            </button>
                                        </form>
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
