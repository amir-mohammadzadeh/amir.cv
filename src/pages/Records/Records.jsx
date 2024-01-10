import './Records.css'
import Widget from '../../components/Widget/Widget'
import Social from '../../components/Social/Social'
import Degree from '../../components/Degree/Degree'
import Data from '../../assets/Data.json'

const Records = () => {
  return (
    <main dir='rtl' className='main'>
      <div className="record-header">

        <div className="image_content">
          <img src="/amir.cv/prof.jpg" alt="Profile Image" />
        </div>

        <Widget className='name_content'>
          <h1>
            امیر محمدزاده
          </h1>
          <span>
            توسعه دهنده فرانت اند
          </span>
        </Widget>

        <Widget className='basis-2/6 flex-shrink-0 flex-grow min-w-[19rem] sm:min-w-0'>
          <ul className=''>
            <li className='flex justify-between leading-8'>
              <span className='dark:text-slate-400'>
                شماره تماس:
              </span>
              <span>
                {Data.Detailes.phoneNumber}
              </span>
            </li>
            <li className='flex justify-between leading-8'>
              <span className='dark:text-slate-400'>
                ایمیل:
              </span>
              <span>
                {Data.Detailes.email}
              </span>
            </li>
          </ul>

          <Social dispaly='flex' size='32' />

        </Widget>
      </div>

      <div className="flex gap-4 lg:flex-col">
        <Widget className='basis-1/2'>
          <h3 className='text-3xl md:text-2xl font-semibold mb-3 '>
            سوابق تحصیلی
          </h3>
          <ul className="record-content">
            {Data.records.education.map(item =>
              <>
                <li key={item.id} className='pt-2 pb-6 px-4'>
                  <Degree
                    degree={item.degree}
                    field={item.field}
                    uniName={item.univercity}
                    years={item.years} />
                </li>
                {Data.records.education.indexOf(item) != Data.records.education.length - 1 &&
                  <hr className='border border-red-500 dark:border-yellow-400 ' />
                }
              </>
            )}

          </ul>

        </Widget>

        <Widget className='basis-1/2'>
          <h3 className='text-3xl md:text-2xl font-semibold mb-3 '>
            سوابق شغلی
          </h3>
          <span>
            در حال حاضر سابقه شغلی ندارم
          </span>
        </Widget>
      </div>

    </main>
  )
}

export default Records