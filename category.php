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
		<li class="b-breadCrumbs__item">Избранное</li>
	</ul>
</div>
<div class="l-content">
	<div class="l-panel js-panel">
		<div class="b-panel">
			<div class="l-pageTitle">
				<h2 class="b-pageTitle">Девушки</h2>
			</div>
			<?php require('inc/view.php'); ?>
			<?php require('inc/sort.php'); ?>
		</div>
	</div>

	<main class="b-content" role="main">
		<?php require('inc/sidebar.php'); ?>
		<div class="b-content__content">

			<?php require('inc/preview.php'); ?>
			<?php require('inc/pagination.php'); ?>
			
		</div>
	</main>


<?php require('inc/footer.php'); ?>