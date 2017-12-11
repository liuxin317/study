import React from 'react';
import Swiper from '../lib/swiper.min';
import '../style/css/homePage.css';
import Header from '../components/Header';
import Consultation from '../components/Consultation';
import Img2_1 from '../style/images/img2-1.jpg';
import Img2_2 from '../style/images/img2-2.jpg';
import Img2_3 from '../style/images/img2-3.jpg';
import Img2_4 from '../style/images/img2-4.jpg';
import Img05 from '../style/images/img5.png';
import Img06 from '../style/images/img6.png';
import Img07 from '../style/images/img7.png';
import Img08 from '../style/images/img8.png';
import Img09 from '../style/images/img9.png';
import Img10 from '../style/images/img10.png';
import Img11 from '../style/images/img11.png';
import nextSwiper from '../style/images/next_swiper.png';
import backgroundVideo from '../style/video/PC-Typing.mp4';
import videoImg from '../style/images/video_default_img.jpg';
import OneScreenBox from '../components/OneScreenBox';

class HomePage extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			// 背景视频显示状态;
			fadeStatus: [{ video: true }, { video: false }, { video: false }],
			headSwitchStatus: 1, // 头部状态切换;
			swiper: '', // swiper对象;
			nextDispay: true // 下一页显示
		}
	}

	componentDidMount () {
		this.startUpSwiper();
	}

	startUpSwiper () { // 启动swiper
		let _this = this;
		
		var mySwiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			direction: 'vertical',
			mousewheelControl : true,
			nextButton: '.swiper-next',
			onSlideChangeStart: function (swiper) {
				if (swiper.activeIndex === 0) {
					var state = 1;
				} else {
					var state = 2;
				}

				_this.setState({
					headSwitchStatus: state,
					nextDispay: state === 1 ? true : false
				})
			}
		});

		this.setState({
			swiper: mySwiper
		});
	}

	render () {
		return (
			<section className="swiper-box">
				<Header headSwitchStatus={ this.state.headSwitchStatus } />
				<div className="swiper-container">
			    <div className="swiper-wrapper">
						<div className="swiper-slide" onClick={ this.getState }>
							<div className="video-box">
								<div className={this.state.fadeStatus[0].video ? 'video fade-in' : 'video fade-out' }>
									
								</div>
								<div className="video-mask"></div>
								<div className className="video-img">
									<img src={ videoImg } />
								</div>
							</div>

							<OneScreenBox />
						</div>

						<div className="swiper-slide bk02">
							<ol className="list-inline">
								<li>
									<article className="list-box">
										<div className="img-box">
											<img src={ Img05 } alt=""/>
										</div>
										<h3 className="list-name">集团官网、站群设计开发</h3>
										<dl className="icon-box">
												<dd><img src={Img09} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img10} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img11} alt=""/></dd>
										</dl>
										<p className="intro">
											集团官网专属的高端定制化服务<br/>
											解决方案，全面满足建设核心与运行管理<br/>
											并提升集团品牌的有效传播。
										</p>
									</article>
									<div className="list-bk">
										<img src={ Img2_1 } alt="" />
									</div>
								</li>
								<li>
									<article className="list-box">
										<div className="img-box">
											<img src={ Img06 } alt=""/>
										</div>
										<h3 className="list-name">高端企业网站设计定制</h3>
										<dl className="icon-box">
												<dd><img src={Img09} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img10} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img11} alt=""/></dd>
										</dl>
										<p className="intro">
											集团官网专属的高端定制化服务<br/>
											解决方案，全面满足建设核心与运行管理<br/>
											并提升集团品牌的有效传播。
										</p>
									</article>
									<div className="list-bk">
										<img src={ Img2_2 } alt="" />
									</div>
								</li>
								<li>
									<article className="list-box">
										<div className="img-box">
											<img src={ Img07 } alt=""/>
										</div>
										<h3 className="list-name">HTML5响应式网站开发</h3>
										<dl className="icon-box">
												<dd><img src={Img09} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img10} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img11} alt=""/></dd>
										</dl>
										<p className="intro">
											集团官网专属的高端定制化服务<br/>
											解决方案，全面满足建设核心与运行管理<br/>
											并提升集团品牌的有效传播。
										</p>
									</article>
									<div className="list-bk">
										<img src={ Img2_3 } alt="" />
									</div>
								</li>
								<li>
									<article className="list-box">
										<div className="img-box">
											<img src={ Img08 } alt=""/>
										</div>
										<h3 className="list-name">移动端手机微信网站与APP</h3>
										<dl className="icon-box">
												<dd><img src={Img09} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img10} alt=""/></dd>
												<dd><span></span></dd>
												<dd><img src={Img11} alt=""/></dd>
										</dl>
										<p className="intro">
											集团官网专属的高端定制化服务<br/>
											解决方案，全面满足建设核心与运行管理<br/>
											并提升集团品牌的有效传播。
										</p>
									</article>
									<div className="list-bk">
										<img src={ Img2_4 } alt="" />
									</div>
								</li>
								<div className="clear"></div>
							</ol>
						</div>
						<div className="swiper-slide bk03">Slide 3</div>
						<div className="swiper-slide bk04">Slide 4</div>
						<div className="swiper-slide bk05">Slide 5</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
				<div className={ this.state.nextDispay ? "swiper-next" : "swiper-next swiper-next-none" }>
					<img src={ nextSwiper } />
				</div>
				<Consultation swiper={ this.state.swiper } />
			</section>
		)
	}
}

export default HomePage;
