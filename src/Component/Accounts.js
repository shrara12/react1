import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/fontawesome.min.css';
import '../css/styles.css';


class Accounts extends Component {

    state={
        accountType:'',
        accountName:'',
        accountEmail:'',
        accountPassword:'',
        accountPhone:'',
        profilePic:'',
        pageData:JSON.parse(localStorage.getItem("Response")).accountsPage,
    }

    onSelectAccount=(e)=>{
    var account=e.target.value
    var accountData=JSON.parse(localStorage.getItem("Response")).accountsPage
    
    switch(account)
    {
        case 'Admin':this.setState({accountName:accountData.Admin.name})
                     this.setState({accountEmail:accountData.Admin.email})
                     this.setState({pic:accountData.Admin.profilePic})
                     this.setState({accountPassword:accountData.Admin.password})
                     this.setState({accountPhone:accountData.Admin.phone})
                     this.setState({accountType:account})
                     break;
        case 'Editor':this.setState({accountName:accountData.Editor.name})
                     this.setState({accountEmail:accountData.Editor.email})
                     this.setState({pic:accountData.Editor.profilePic})
                     this.setState({accountPassword:accountData.Editor.password})
                     this.setState({accountPhone:accountData.Editor.phone})
                     this.setState({accountType:account})
                     break;
        case 'Merchant':this.setState({accountName:accountData.Merchant.name})
                     this.setState({accountEmail:accountData.Merchant.email})
                     this.setState({pic:accountData.Merchant.profilePic})
                     this.setState({accountPassword:accountData.Merchant.password})
                     this.setState({accountPhone:accountData.Merchant.phone})
                     this.setState({accountType:account})
                     break;
        case 'Customer':this.setState({accountName:accountData.Customer.name})
                     this.setState({accountEmail:accountData.Customer.email})
                     this.setState({pic:accountData.Customer.profilePic})
                     this.setState({accountPassword:accountData.Customer.password})
                     this.setState({accountPhone:accountData.Customer.phone}) 
                     this.setState({accountType:account}) 
     }
    }

    onInputChange=(e,name)=>{
        if(name==='name'){
            this.setState({accountName:e.target.value})
        }
		else if(name==='username'){
            this.setState({accountEmail:e.target.value})
        }
        else if(name==='email'){
            this.setState({accountEmail:e.target.value})
        }
        else if(name==='password'){
            this.setState({accountPassword:e.target.value})
        }
        else if(name==='phone'){
            this.setState({accountPhone:e.target.value})
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        var accountData=JSON.parse(localStorage.getItem("Response"))
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': accountData.accountsPage.Admin.name=this.state.accountName
                        accountData.accountsPage.Admin.email=this.state.accountEmail
                        accountData.accountsPage.Admin.password=this.state.accountPassword
                        accountData.accountsPage.Admin.phone=this.state.accountPhone
                    break;
        case 'Editor': accountData.accountsPage.Editor.name=this.state.accountName
                        accountData.accountsPage.Editor.email=this.state.accountEmail
                        accountData.accountsPage.Editor.password=this.state.accountPassword
                        accountData.accountsPage.Editor.phone=this.state.accountPhone
                     break;
        case 'Merchant':  accountData.accountsPage.Merchant.name=this.state.accountName
                            accountData.accountsPage.Merchant.email=this.state.accountEmail
                            accountData.accountsPage.Merchant.password=this.state.accountPassword
                            accountData.accountsPage.Merchant.phone=this.state.accountPhone
                     break;
        case 'Customer':  accountData.accountsPage.Customer.name=this.state.accountName
                            accountData.accountsPage.Customer.email=this.state.accountEmail
                            accountData.accountsPage.Customer.password=this.state.accountPassword
                            accountData.accountsPage.Customer.phone=this.state.accountPhone
     }
     localStorage.setItem('Response',JSON.stringify(accountData))
    }

    onDeleteAccountClick=()=>{
        this.setState({pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'})
        var accountData=JSON.parse(localStorage.getItem("Response"))
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin':this.setState({accountName:''})
                    this.setState({accountEmail:''})
                    this.setState({accountPassword:''})
                    this.setState({accountPhone:''})
                    this.setState({accountType:''})
                    delete accountData.accountsPage.Admin
                    break;
        case 'Editor':this.setState({accountName:''})
                    this.setState({accountEmail:''})
                    this.setState({accountPassword:''})
                    this.setState({accountPhone:''})
                    this.setState({accountType:''})
                    delete accountData.accountsPage.Editor
                    break;
        case 'Merchant': this.setState({accountName:''})
                        this.setState({accountEmail:''})
                        this.setState({accountPassword:''})
                        this.setState({accountPhone:''})
                        this.setState({accountType:''})
                        delete accountData.accountsPage.Merchant
                        break;
        case 'Customer':this.setState({accountName:''})
                        this.setState({accountEmail:''})
                        this.setState({accountPassword:''})
                        this.setState({accountPhone:''})
                        this.setState({accountType:''})
                        delete accountData.accountsPage.Customer
                        break;
        default:  alert('Cannot Delete Default Account')
     }
     localStorage.setItem('Response',JSON.stringify(accountData))
     this.setState({pageData:JSON.parse(localStorage.getItem("Response")).accountsPage})
    }

    onDeleteIconClick=()=>{
        this.setState({pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'})
        var accountData=JSON.parse(localStorage.getItem("Response"))
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': accountData.accountsPage.Admin.profilePic=''
                     break;
        case 'Editor':accountData.accountsPage.Editor.profilePic=''
                     break;
        case 'Merchant':accountData.accountsPage.Merchant.profilePic=''
                     break;
        case 'Customer':accountData.accountsPage.Customer.profilePic=''
     }
     localStorage.setItem('Response',JSON.stringify(accountData));

    }

    onPicUpload=(e)=>{
        var account=this.state.accountType
        var object=JSON.parse(localStorage.getItem('Response'))
        console.log(e.target.files)
        if(e.target.files && e.target.files[0])
        {
            let reader=new FileReader()
            reader.onload=(e)=>{
                let imgSrc=e.target.result
                this.setState({pic:e.target.result})
                switch(account)
                {
                    case 'Admin':object.accountsPage.Admin.profilePic=imgSrc;
                                    break;
                    case 'Merchant':object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    case 'Editor':object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    case 'Customer':object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    default:alert("Cant change default image");
                                break;
                }
                localStorage.setItem("Response",JSON.stringify(object))
                console.log(object.accountsPage)
                this.setState({pageData:JSON.parse(localStorage.getItem("Response")).accountsPage})
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

 
    render() 
    
    {
    return (
           <div className="container mt-5">
        <div className="row tm-content-row">
          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <h2 className="tm-block-title">List of Accounts</h2>
              <p className="text-white">Accounts</p>
              <select className="custom-select">
                <option value="0">Select account</option>
                <option value="1">Admin</option>
                <option value="2">Editor</option>
                <option value="3">Merchant</option>
                <option value="4">Customer</option>
              </select>
            </div>
          </div>
        </div>
      {/*   <!-- row --> */}
        <div className="row tm-content-row">
          <div className="tm-block-col tm-col-avatar">
            <div className="tm-bg-primary-dark tm-block tm-block-avatar">
              <h2 className="tm-block-title">Change Avatar</h2>
              <div className="tm-avatar-container">
                <img
                  src="img/avatar.png"
                  alt="Avatar"
                  className="tm-avatar img-fluid mb-4"
                />
                <a href="#" className="tm-avatar-delete-link">
                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                </a>
              </div>
              <button className="btn btn-primary btn-block text-uppercase">
                Upload New Photo
              </button>
            </div>
          </div>
          <div className="tm-block-col tm-col-account-settings">
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title">Account Settings</h2>
              <form action="" className="tm-signup-form row">
                <div className="form-group col-lg-6">
                  <label for="name">Account Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="email">Account Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password2">Re-enter Password</label>
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Update Your Profile
                  </button>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Delete Your Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
      
	       )
      }
    }
    
    export default  Accounts ;
