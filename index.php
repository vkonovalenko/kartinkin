<?php
  $pageName = '';
  $siteName = 'Картинки на рабочий стол';
  $uri = 'index';
  require('inc/header.php');
?>
<div class="l-content">
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
			<?php require('inc/preview.php'); ?>
		</div>
	</main>


<?php require('inc/footer.php'); ?>