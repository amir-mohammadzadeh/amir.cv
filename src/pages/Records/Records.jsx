import Widget from '../../components/Widget/Widget'
import Degree from '../../components/Degree/Degree'
import useData from '../../Hooks/useData'

const Records = () => {
  const Records = useData.getRecords();

  return (
    <>
      <div className="flex gap-4 xl:flex-col">
        <Widget className='w-1/2 xl:w-2/3 lg:w-full h-fit'>
          <h3 className='text-3xl md:text-2xl font-semibold mb-3 '>
            سوابق تحصیلی
          </h3>
          <ul className="mt-8 md:mt-4 md:text-sm">

            {Records.education.map(item =>

              <li key={item.id} className='pt-2 pb-6 px-4 border-b-2 border-red-500 dark:border-yellow-400 last:border-0'>
                <Degree
                  degree={item.degree}
                  field={item.field}
                  uniName={item.univercity}
                  years={item.years} />
              </li>
            )}

          </ul>
        </Widget>

        <Widget className='w-1/2 xl:w-2/3 lg:w-full h-fit'>
          <h3 className='text-3xl md:text-2xl font-semibold mb-3 '>
            سوابق شغلی
          </h3>
          <ul className="mt-8 md:mt-4 md:text-sm">

            {Records.jobs.map(item =>
              <li key={item.id} className='pt-2 pb-6 px-4 border-b-2 border-red-500 dark:border-yellow-400 last:border-0'>

                <h5 className='text-xl font-semibold dark:text-sky-200 md:text-lg'>
                  {item.title}
                </h5>
                <div className="my-3 ">
                  <span className="text-gray-700 dark:text-slate-300 ">
                    نوع همکاری:
                  </span>
                  <span className="ms-2 text-rose-900 font-medium dark:text-yellow-200">
                    {item.type}
                  </span>
                </div>
                <p className="dark:text-slate-300 md:leading-6">
                  {item.discription}
                </p>
                {item.url != '' &&
                  <div className="mt-4">
                    <span className="me-3 text-gray-700 dark:text-slate-400 ">
                      لینک مرتبط :
                    </span>
                    <a href={`http://${item.url}`} target="_blank" rel="noopener noreferrer" className="duration-200 dark:hover:text-rose-400 hover:text-blue-700">
                      {item.url}
                    </a>
                  </div>
                }
              </li>
            )}

          </ul>
        </Widget>
      </div>
    </>
  )
}

export default Records