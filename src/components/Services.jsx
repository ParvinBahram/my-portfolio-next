import React from 'react'

function Services() {
  return (
    <div className='rounded mt-8 p-4 'dir='rtl'>
      <h3 className=" mb-4 border-b border-b-secondary w-max pb-2" >خدمات من</h3>
        <ul className="w-full text-right space-y-8">
            <li className="animation services-cart">
                <h3 className="mb-2">طراحی سایت با کد نویسی</h3>
                <p className="">ساخت سایت مورد نظر شما در هر زمینه ای  با هر ویژگی و قابلیت هایی که مورد نظر شماست ،کدنویسی اختصاصی  متناسب با سلیقه و نیاز شما</p>
            </li>
              <li className="animation services-cart">
                <h3 className="mb-2">طراحی سایت با وردپرس</h3>
                <p className=""> طراحی سایت در محیط وردپرس و المنتور براساس نیاز شما و در زمان کوتاهتر نسبت به ساخت با کدنویسی انجام میشود</p>
            </li>
              <li className="animation services-cart">
                <h3 className="mb-2">ساخت اپلیکیشن های تحت وب</h3>
                <p className="">ساخت اپلیکیشن  برای کاربردهای متفاوت ، با توجه به هدف کاربر</p>
            </li>
             
        </ul>
    </div>
  )
}

export default Services