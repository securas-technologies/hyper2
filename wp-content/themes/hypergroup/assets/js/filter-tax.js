jQuery(document).ready(function() {

      jQuery("#tax-filter").on('change', function(e) {

        tax_val = jQuery("#tax-filter").val();

        $.ajax({
            url: ajax_obj.ajaxurl,
            data: {
                'action': 'ajax_request',
                'taxval' : tax_val,
            },
            success:function(data) {
                // This outputs the result of the ajax request
                $('#references-items').html(data);
            },
            error: function(errorThrown){
                console.log(errorThrown);
            }
        });  
      });
});