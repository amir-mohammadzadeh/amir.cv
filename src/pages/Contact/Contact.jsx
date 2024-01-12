import './Contact.css'
import Widget from '../../components/Widget/Widget'
import { Input, TextArea } from '../../components/Input/Input'
import { EmailIcon, LocationIcon, SocialIcon, TelephoneIcon } from '../../assets/Icons'
import Data from '../../assets/Data.json'
import Social from '../../components/Social/Social'

const Contact = () => {
  return (
    <>
      <div className="mx-8 mb-4 md:mb-0">
        <h1>
          تماس بامن
        </h1>
      </div>
      <div className="flex gap-4 xl:flex-col-reverse">
        <Widget className='form-content' >
          <h3>
            ارسال ایمیل
          </h3>
          <span>
            با من در ارتباط باشید
          </span>
          <form action="">
            <div className="inputs-content">
              <Input label='نام' id='name' />
              <Input label='ایمیل' id='email' />
              <Input label='موضوع' id='subject' />
            </div>
            <div className="msg-box">

              <TextArea label='متن پیام' id='msg' contentClass='form-item' />
            </div>

            <button type='submit' className='form-btn'>
              ارسال پیام
            </button>

          </form>
        </Widget>
        <div className="contact-info">
          <Widget className='contact-box'>
            <div className='box-label'>
              <TelephoneIcon size='32' />
            </div>
            <div className='box-value'>
              {Data.Detailes.phoneNumber}
            </div>
          </Widget>
          <Widget className='contact-box'>
            <div className='box-label'>
              <EmailIcon size='32' />
            </div>
            <div className='box-value'>
              {Data.Detailes.email}
            </div>
          </Widget>
          <Widget className='contact-box'>
            <div className='box-label'>
              <LocationIcon size='32' />
            </div>
            <div className='box-value'>
              {Data.Detailes.address.ostan}، {Data.Detailes.address.ads}
            </div>
          </Widget>
          <Widget className='contact-box'>
            <div className='box-label'>
              <SocialIcon size='30' />
            </div>
            <div className='box-value'>
              <Social iconSize='32' />
            </div>
          </Widget>
        </div>
      </div>
    </>
  )
}

export default Contact