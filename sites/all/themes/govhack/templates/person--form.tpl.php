<div id="formwrapper">
<h2>This is me</h2>
<div class="iconwrapper">
  <div id="femaleicon"></div>
</div>
<div class="iconwrapper">
  <div id="maleicon"></div>
</div>
  <!--Print the body input field-->

  <div><?php print drupal_render($form['body']); ?></div>

  <!--Print the rest of the form-->
  <div>
    <?php print drupal_render_children($form); ?>
  </div>
</div>