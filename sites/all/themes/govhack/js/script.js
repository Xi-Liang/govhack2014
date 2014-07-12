jQuery(document).ready(function(){

jQuery('#edit-field-gender-und-2').change(
    function(){
        if (jQuery(this).is(':checked') && jQuery(this).val() == '2') {
          jQuery('#femaleicon').addClass('selected');
          jQuery('#maleicon').removeClass('selected');
        }
    });
jQuery('#edit-field-gender-und-1').change(
    function(){
        if (jQuery(this).is(':checked') && jQuery(this).val() == '1') {
          jQuery('#maleicon').addClass('selected');
          jQuery('#femaleicon').removeClass('selected');
        }
    });
jQuery('#maleicon').click(
    function(){
          jQuery('#maleicon').addClass('selected');
          jQuery('#femaleicon').removeClass('selected');
          jQuery( "#edit-field-gender-und-1" ).attr( "checked", true );
          jQuery( "#edit-field-gender-und-2" ).attr( "checked", false );
    });
jQuery('#femaleicon').click(
    function(){
          jQuery('#femaleicon').addClass('selected');
          jQuery('#maleicon').removeClass('selected');
          jQuery( "#edit-field-gender-und-2" ).attr( "checked", true );
          jQuery( "#edit-field-gender-und-1" ).attr( "checked", false );
    });
});