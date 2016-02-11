<?php
  $pageName = '';
  $siteName = 'Картинки на рабочий стол';
  $uri = 'index';
  require('inc/header.php');
?>
<div class="l-panel">
	<div class="b-panel">
		<div class="l-pageTitle">
			<h2 class="b-pageTitle">Последние добавленные картинки</h2>
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
							<div id="stars-default"><input type=hidden name"rating"/></div></td>
						</div>
						<div class="b-preview__rate">
							<div class="b-rate">6378</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</main>


<?php require('inc/footer.php'); ?>