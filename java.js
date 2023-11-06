$(document).ready(function() {
    function fetchData(apiEndpoint, cardId) {
        $.ajax({
            url: apiEndpoint,
            type: 'GET',
            success: function(data) {
                for (var i = 0; i < data.results.length; i++) {
                    $('#' + cardId).append('<p>' + data.results[i].name + '</p>');
                }
            },
            error: function() {
                $('#' + cardId).text('Error fetching data');
            }
        });
    }

    // Add event listeners for the buttons
    $('.btn-connect').click(function() {
        var cardId = $(this).closest('.card').find('.h5').attr('id');
        var apiEndpoint = $(this).data('api-endpoint');
        fetchData(apiEndpoint, cardId);
    });
});