(function($) {
    $(function() {
        $('.update').live('change', function() {
            formObject.run($(this));
        });
    });
})(jQuery);