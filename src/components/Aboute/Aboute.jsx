//import './Aboute.css'
import Widget from '../Widget/Widget'
import Data from '../../assets/Data.json'

const Aboute = () => {
    return (
        <Widget>
            <h3 className='text-2xl font-semibold'>
                درباره من
            </h3>
            <p className='leading-8 text-base lg:text-lg lg:leading-9 px-3 py-4 dark:text-slate-200'>
                {Data.aboutMe}
            </p>
        </Widget>
    )
}

export default Aboute
/*
من با دو سال تجربه خودآموز در برنامه نویسی، به عنوان یک عاشق برنامه نویسی با تمرکز بر رشد و
توسعه مهارتها هستم. تجربیات گذشتهام در کار تیمی به من کمک کردهاند تا توانایی قوی در این
زمینه داشته باشم و همچنین توانایی برقراری روابط مثبت با همکارانم را دارم.
هدف اصلی من، افزایش مهارتهای خود با حضور در یک محیط کاری پویا و پرچالش
است تا بتوانم توانمندیهای حرفهای خود را افزایش داده و به ارزش تیمم اضافه کنم.
من به دنبال یادگیری مفاهیم و تکنولوژیهای جدید همیشه باقی میمانم و تعهد دارم که به
دستاوردهای تیم و سازمانم بیفزایم
*/