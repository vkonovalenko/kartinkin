<?php
  $pageName = '';
  $siteName = 'Картинки на рабочий стол';
  $uri = 'index';
  require('inc/header.php');
?>
<div class="l-breadCrumbs js-breadCrumbs">
	<ul class="b-breadCrumbs">
		<li class="b-breadCrumbs__item">
			<a href="" class="b-breadCrumbs__link">Секретный проект номер 1</a>
		</li>
		<li class="b-breadCrumbs__item">
			<a href="" class="b-breadCrumbs__link">Девушки</a>
		</li>
		<li class="b-breadCrumbs__item">Очень красивая картинка с ужасно красивой девушкой</li>
	</ul>
</div>
<div class="l-content">
	<div class="l-panel js-panel">
		<div class="b-panel">
			<div class="l-pageTitle">
				<h2 class="b-pageTitle">Очень красивая картинка с ужасно красивой девушкой</h2>
			</div>
			<?php require('inc/view.php'); ?>
		</div>
		
	</div>
	<main class="b-content" role="main">
		<?php require('inc/sidebar.php'); ?>
		<div class="b-content__content">
			<?php require('inc/detail-content.php'); ?>
		</div>
	</main>


<?php require('inc/footer.php'); ?>