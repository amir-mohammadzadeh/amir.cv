import Widget from '../../components/Widget/Widget'
import Degree from '../../components/Degree/Degree'
import Data from '../../assets/Data.json'

const Records = () => {
  return (
    <>
      <div className="h-full">
        <Widget className='w-1/2 h-2/3 lg:w-full'>
          <h3 className='text-3xl md:text-2xl font-semibold mb-3 '>
            سوابق تحصیلی
          </h3>
          <ul className="mt-8">

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
      </div>
    </>
  )
}

export default Records