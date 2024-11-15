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
                    <p className={cx('mission__desc')}> <span>Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành</span> </p>
                </div>
  
                <div className={cx('mission__content')}>
                    <div className={cx('mission__list')}>
                        <div className={cx('mission__item')}>
                            <div className={cx('mission__item-icon')}><Icon.Employee /></div>
                            <p className={cx('mission__item-title')}>với cán bộ nhân viên</p>
                            <p className={cx('mission__item-desc')}>Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân</p>
                        </div>
                        <div className={cx('mission__item')}>
                            <div className={cx('mission__item-icon')}><Icon.Customer /></div>
                            <p className={cx('mission__item-title')}>với cán bộ nhân viên</p>
                            <p className={cx('mission__item-desc')}>Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân</p>
                        </div>
                        <div className={cx('mission__item')}>
                            <div className={cx('mission__item-icon')}><Icon.Partner /></div>
                            <p className={cx('mission__item-title')}>với cán bộ nhân viên</p>
                            <p className={cx('mission__item-desc')}>Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân</p>
                        </div>
                        <div className={cx('mission__item')}>
                            <div className={cx('mission__item-icon')}><Icon.Community /></div>
                            <p className={cx('mission__item-title')}>với cán bộ nhân viên</p>
                            <p className={cx('mission__item-desc')}>Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân</p>
                        </div>
    
                    </div>
                    <div className={cx('wrap__count-img')}>
                        <div className={cx('mission__count-img')}>
                            <div className={cx('mission__count')}>04/04</div>
                            <div className={cx('mission__img')}>
                                <img src={images.img_5} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className={cx('business')}>
                <div className={cx('business__content')}>
                    <div className={cx('business__content-text')}>
                        <p className={cx('business__content-title')}>
                            lĩnh vực đầu tư
                        </p>
                        <p className={cx('business__content-desc')}>
                            <span>Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao cấp và nâng tầm giáo dục trải nghiệm.</span>
                            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm cho thế hệ tương lai. 
                        </p>
                    </div>
                    <div className={cx('business__content-img')}>
                        <img src={images.img_6} alt='okhub'/>
                        <img src={images.img_7} alt='okhub'/>
                        <div className={cx('business__content-img-layout')}>

                        </div>
                    </div>
                    <div className={cx('business__content-layout')}>
                        <Icon.BusinessLayout/>
                    </div>
                </div>
                <div className={cx('wrap__business-options')}>
                    <div className={cx('business__options')}>
                        <img src={images.img_8} alt='okhub'/>
                        <div className={cx('business__options-layout')}>
                            <div className={cx('business__options-text')}>
                                <div className={cx('business__options-text-logo')}>
                                    <Icon.LogoTraining3/>
                                </div>
                                <p className={cx('business__options-desc')}>
                                    Cung cấp dịch vụ 
                                    <span>Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.</span>
                                </p>
                                <button>Tìm hiểu thêm{<Icon.RightArrow />}</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('business__circle' ,'circle1')}>
                        <Icon.MediumBlueCircle />
                        <div className={cx('business__logo')}>
                            <Icon.LogoTraining />
                        </div>

                    </div>
                    <div className={cx('business__circle' ,'circle2')}>
                        <Icon.MediumWhiteCircle />
                        <div className={cx('business__logo')}>
                            <Icon.LogoManagement />
                        </div>
                    </div>
                    <div className={cx('business__circle' ,'circle3')}>
                        <Icon.MediumWhiteCircle />
                        <div className={cx('business__logo')}>
                            <Icon.LogoTraining2 />
                        </div>
                    </div>
                    <div className={cx('business__circle' ,'circle4')}>
                        <Icon.MediumWhiteCircle />
                        <div className={cx('business__logo')}>
                            <Icon.LogoHospitality />
                        </div>

                    </div>
                    <div className={cx('business__circle' ,'circle5')}>
                        <Icon.MediumWhiteCircle />
                        <div className={cx('business__logo')}>
                            <Icon.LogoConsulting />
                        </div>
                    </div>
                </div>

            </section>
            <section className={cx('milestone')}>
                <div className={cx('milestone__text')}>
                    <p className={cx('milestone__text-overview')}>
                        từng bước phát triển
                    </p>
                    <p className={cx('milestone__text-title')}>
                        Dấu ấn Ami&M
                    </p>
                    <p className={cx('milestone__text-desc')}>
                        Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin cậy từ những Người đồng hành.
                    </p>
                </div>
                <div className={cx('milestone__statistics')}>
                    <div className={cx('milestone__statistics-item')}>
                        <div className={cx('milestone__icon')}>
                            <Icon.Milestone1/>
                        </div>
                        <div className={cx('milestone__statistics-text')}>
                            <p>686 tỷ</p>
                            <p>Tổng tài sản và vốn chủ sở hữu</p>
                        </div>
                    </div>
                    <div className={cx('milestone__statistics-item')}>
                        <div className={cx('milestone__icon')}>
                            <Icon.Milestone2/>
                        </div>
                        <div className={cx('milestone__statistics-text')}>
                            <p>93,9 tỷ</p>
                            <p>Doanh thu thuần</p>
                        </div>
                    </div>
                    <div className={cx('milestone__statistics-item')}>
                        <div className={cx('milestone__icon')}>
                            <Icon.Milestone3/>
                        </div>
                        <div className={cx('milestone__statistics-text')}>
                            <p>24,6 tỷ</p>
                            <p>Lợi nhuận gộp</p>
                        </div>
                    </div>
                    <div className={cx('milestone__statistics-item')}>
                        <div className={cx('milestone__icon')}>
                            <Icon.Milestone4/>
                        </div>
                        <div className={cx('milestone__statistics-text')}>
                            <p>20 +</p>
                            <p>Dự án trọng điểm</p>
                        </div>
                    </div>
                    <div className={cx('milestone__statistics-item')}>
                        <div className={cx('milestone__icon')}>
                            <Icon.Milestone5/>
                        </div>
                        <div className={cx('milestone__statistics-text')}>
                            <p>03 văn phòng</p>
                            <p>Trên các tỉnh thành</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('pause')}>
                <img src={images.img_9} alt='okhub'/>
                <div className={cx('pause__text')}>
                    “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm hun đúc nên tinh thần của một tổ chức  
                    <span> không ngừng học tập để kiến tạo giá trị.”</span>
                </div>
                <div className={cx('pause__bg1')}>
                </div>
                <div className={cx('pause__bg2')}>
                </div>
            </section>
            <section className={cx('collab')}>
                <div className={cx('collab')}></div>
                <div className={cx('collab__text')}>
                    <p className={cx('collab__text-title')}>HỢP TÁC VỮNG BỀN</p>
                    <p className={cx('collab__text-desc')}>Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ. </p>
                    <p className={cx('collab__text-note')}>
                        TS. Đinh Thanh Vân
                        <span>
                            <div></div>
                            Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội
                        </span>
                    </p>
                </div>
                <div className={cx('collab__bg3')}><Icon.Bg3 /></div>
                <div className={cx('collab__bg4')}><Icon.Bg4 /></div>
                <div className={cx('collab__img1')}><img src={images.img_10} alt=''/></div>
                <div className={cx('collab__img2')}><img src={images.img_11} alt=''/></div>
                <div className={cx('collab__vecto1')}><Icon.Vecto5 /></div>
                <div className={cx('collab__vecto2')}><Icon.Vecto6 /></div>
                <div className={cx('collab__vecto3')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="52" viewBox="0 0 70 52" fill="none">
                        <path d="M53.2868 51.8124C56.9939 51.8124 60.1346 50.9313 62.709 49.169C65.1804 47.4068 67.034 45.0744 68.2697 42.1719C69.4024 39.2694 69.9688 36.1595 69.9688 32.8424C69.9688 28.0739 68.9905 23.5647 67.034 19.3145C64.9745 15.0644 62.3486 11.3326 59.1564 8.11912C55.8612 4.80195 52.3086 2.26225 48.4985 0.5L37.8406 8.4301C40.6209 9.67404 43.2468 11.1771 45.7182 12.9394C48.1896 14.598 50.352 16.4639 52.2056 18.5371C53.9561 20.6103 55.2948 22.7354 56.2216 24.9123L55.4493 25.3787C54.8314 24.9641 54.1621 24.6531 53.4413 24.4458C52.6175 24.2385 51.5362 24.1348 50.1976 24.1348C48.344 24.1348 46.4905 24.6013 44.6369 25.5342C42.6804 26.4672 41.0843 27.8666 39.8486 29.7325C38.5099 31.5984 37.8406 33.9826 37.8406 36.8852C37.8406 40.0987 38.5614 42.8457 40.003 45.1262C41.4447 47.3031 43.3497 48.9617 45.7182 50.102C48.0866 51.2423 50.6095 51.8124 53.2868 51.8124ZM15.4435 51.8124C19.1506 51.8124 22.2914 50.9313 24.8657 49.169C27.3371 47.4068 29.1907 45.0744 30.4264 42.1719C31.5591 39.2694 32.1255 36.1595 32.1255 32.8424C32.1255 28.0739 31.1472 23.5647 29.1907 19.3145C27.1312 15.0644 24.5053 11.3326 21.3131 8.11912C18.0179 4.80195 14.4653 2.26225 10.6552 0.5L-0.00271631 8.4301C2.77761 9.67404 5.40347 11.1771 7.87487 12.9394C10.3463 14.598 12.5087 16.4639 14.3623 18.5371C16.1129 20.6103 17.4515 22.7354 18.3783 24.9123L17.606 25.3787C16.9882 24.9641 16.3188 24.6531 15.598 24.4458C14.7742 24.2385 13.693 24.1348 12.3543 24.1348C10.5007 24.1348 8.64718 24.6013 6.79363 25.5342C4.83711 26.4672 3.241 27.8666 2.0053 29.7325C0.666623 31.5984 -0.00271631 33.9826 -0.00271631 36.8852C-0.00271631 40.0987 0.718109 42.8457 2.15976 45.1262C3.60141 47.3031 5.50644 48.9617 7.87487 50.102C10.2433 51.2423 12.7662 51.8124 15.4435 51.8124Z" fill="white"/>
                    </svg>
                </div>
                <div className={cx('collab__vecto4')}><Icon.Vecto7 /></div>
                <div className={cx('collab__vecto5')}><Icon.Vecto8 /></div>
                <div className={cx('collab__vecto6')}><Icon.Vecto9 /></div>

            </section>
            <section className={cx('partners')}>
                {/* <img src={images.logo_1} alt=''/> */}
            </section>
        </div>
    )
}

export default Home