import images from '~/assets/images'
import  * as Icon  from '~/components/Icons'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <section className={cx('slideshow')}>
                <div className={cx('slide')}>
                    <img src={images.img_1} alt="OKHUB"  />
                </div>
                <div className={cx('slide')}>
                    <img src={images.img_4} alt="OKHUB"  />
                </div>
                <div className={cx('logo')}>
                    <Icon.Logo />
                </div>
                <div className={cx('vector_1')}>
                    <Icon.Vector1 />
                </div>
                <div className={cx('vector_2')}>
                    <Icon.Vector2 />
                </div>
                <div className={cx('vector_3')}>
                    <Icon.Vector3 />
                </div>
                <div className={cx('vector_4')}>
                    <Icon.Vector4 />
                </div>
                <div className={cx('rectangle')}>
                
                </div>
                <div className={cx('slide__content')}>
                    <p >Đồng hành </p>
                    <p >khởi thịnh vượng!</p>
                </div>
            </section>

            <section className={cx('about')}>
                <div className={cx('about__img')}>
                    <img src={images.img_2} alt="OKHUB"  />
                </div>
                <div className={cx('about__img')}>
                    <img src={images.img_3} alt="OKHUB"  />
                </div>
                <div className={cx('about__content')}>
                    <div className={cx('about__text')}>
                        <p className={cx('about__overview')}>CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM</p>
                        <div className={cx('about__title')}>
                            <p>Khởi nguồn từ</p>
                            <p>tính bằng hữu</p>
                        </div>
                        <div className={cx('about__desc')}>
                            <p>Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.</p>
                            <p>Tại Ami&M, chúng tôi được sống và làm việc hết mình!
                            Được gắn bó và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình tin tưởng.</p>
                        </div>
                    </div>
                    <button className={cx('about__btn')}><p>Hành trình của Ami&M</p> {<Icon.RightArrow />}</button>
                </div>
                
                <div className={cx('about__white-circle')}>
                    <Icon.WhiteCircle />
                </div>
                <div className={cx('about__red-circle')}>
                    <Icon.RedCircle />
                </div>
                <div className={cx('about__yellow-circle')}>
                    <Icon.YellowCircle />
                </div>
                
                
            </section>
            <div className={cx('about__bg')}>
                <div className={cx('about__bg-1')}><Icon.Bg1/></div>
                <div className={cx('about__bg-2')}><Icon.Bg2/></div>
            </div>
            <section className={cx('vision')}>
                <p className={cx('vision__title')}>tầm nhìn</p>
                <p className={cx('vision__content')}>Ami&M xây dựng <span>hệ sinh thái đa ngành phát triển nhanh và bền vững</span> trên hành trình kiến tạo sự thịnh vượng đích thực!</p>
            </section>
            
            <section className={cx('mission')}>
                <div className={cx('mission__overview')}>
                    <p className={cx('mission__title')}>sứ mệnh</p>
                    <p className={cx('mission__content')}> <span>Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành</span> </p>
                </div>
            </section>
        </div>
    )
}

export default Home