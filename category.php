<?php
  $pageName = '';
  $siteName = 'Картинки на рабочий стол';
  $uri = 'index';
  require('inc/header.php');
?>
<div class="l-breadCrumbs">
	<ul class="b-breadCrumbs">
		<li class="b-breadCrumbs__item">
			<a href="" class="b-breadCrumbs__link">Секретный проект номер 1</a>
		</li>
		<li class="b-breadCrumbs__item">Избранное</li>
	</ul>
</div>
<div class="l-content">
	<div class="l-panel js-panelView">
		<div class="b-panel">
			<div class="l-pageTitle">
				<h2 class="b-pageTitle">Последние добавленные картинки</h2>
			</div>
			<div class="l-panelView">
				<ul class="b-panelView">
					<li class="b-panelView__item -type_title">Отображать:</li>
					<li class="b-panelView__item -state_active">
						<span class="b-panelView__number js-panelView__number">24</span>
					</li>
					<li class="b-panelView__item">
						<span class="b-panelView__number js-panelView__number">48</span>
					</li>
					<li class="b-panelView__item">
						<span class="b-panelView__number js-panelView__number">96</span>
					</li>
				</ul>
			</div>
			<div class="l-panelView js-panelView -type_sort">
				<ul class="b-panelView">
					<li class="b-panelView__item -type_title">Сортировать:</li>
					<li class="b-panelView__item -state_active">
						<span class="b-panelView__number js-panelView__number -type_date">Date</span>
					</li>
					<li class="b-panelView__item">
						<span class="b-panelView__number js-panelView__number -type_view">View</span>
					</li>
					<li class="b-panelView__item">
						<span class="b-panelView__number js-panelView__number -type_rate"></span>
					</li>
					<li class="b-panelView__item">
						<span class="b-panelView__number js-panelView__number -type_ascDesc">Asc/Desc</span>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
	<main class="b-content" role="main">
		<?php require('inc/sidebar.php'); ?>
		<div class="b-content__content">
			<div class="l-preview">
				<ul class="b-preview">
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-1.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-2.png" alt="" class="b-preview__img">
							</a>
							<div class="b-preview__panel">
								<div class="b-preview__panel_left">
									<a href="" class="b-preview__download">Download</a>
									<span class="b-preview__countDownload">439</span>
								</div>
								<div class="b-preview__panel_right">24 Сен. 2015</div>
							</div>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-3.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-4.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-5.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-6.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-7.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-8.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-9.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-10.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-11.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
					<li class="b-preview__item">
						<div class="b-preview__imgWrapper">
							<a href="" class="b-preview__linkWrapper">
								<img src="img/userfiles/preview/preview-12.png" alt="" class="b-preview__img">
							</a>
						</div>
						<div class="b-preview__info -type_one">
							<div class="b-preview__title">
								<a href="" class="b-preview__linkWrapper">
									Девушка покрашенная <br> желтой краской строителями
								</a>
							</div>
							<div class="b-preview__like">
								<i class="b-like js-like">like</i>
							</div>
						</div>
						<div class="b-preview__info -type_two">
							<div class="b-preview__stars">
								<div class="js-rateStarts b-rateStarts">
									<input type=hidden name"rating"/>
								</div>
								<div class="b-rateNumber">0</div>
							</div>
							<div class="b-preview__rate">
								<div class="b-rate">6378</div>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div class="l-pagination">
				<div class="b-pagination">
					<a href="" class="b-pagination__arrow -type_prev">prev</a>
						
					<div class="b-pagination__pages">
						<a href="" class="b-pagination__number js-pagination__number">1</a>
						<a href="" class="b-pagination__number js-pagination__number">2</a>
						<a href="" class="b-pagination__number js-pagination__number -state_active">3</a>
						<a href="" class="b-pagination__number js-pagination__number">4</a>
						<a href="" class="b-pagination__number js-pagination__number">5</a>
					</div>

					<a href="" class="b-pagination__arrow -type_next -state_inactive">next</a>
				</div>
			</div>
		</div>
	</main>


<?php require('inc/footer.php'); ?>