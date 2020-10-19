import React from 'react'
import Link from 'next/link'
import HeaderTopBar from './HeaderTopBar'

export default function Header() {
    return (
        <header className="site-header">
     <HeaderTopBar />
         <div className="nav-logo-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                <Link href="/"><a className="navbar-brand" ><img src="/images/logo.png" alt="" /></a></Link> </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/services"><a>Services</a></Link></li>
                    <li><Link href="/blogs"><a>Blog</a></Link></li>
                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                    <li><Link href="/faqs"><a>Faqs</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="#appointment-form"><a className="appoint" >Appointment</a></Link></li>
    {/*        <li><Link href="#consult-form"><a className="appoint" >Consult</a></Link></li>*/}
                    <li className="head-search"><a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-search" href="#"><i className="fa fa-search" aria-hidden="true"></i></a> 
                    <div className="dropdown-menu">
                      {/*<form className="search-form">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>*/}
                    </div>
                  </li>

                </ul>
                </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
    )
}
