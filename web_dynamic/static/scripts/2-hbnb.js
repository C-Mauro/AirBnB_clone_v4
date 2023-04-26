#!/usr/bin/node
$(document).ready(function () {
    const amenityIds = {};

    $('input[type=checkbox]').change(function () {
        if (this.checked) {
            amenityIds[$(this).data('id')] = $(this).data('name');
        } else if (!this.checked && $(this).data('id') in amenityIds) {
            delete amenityIds[$(this).data('id')];
        }

        const amenityList = Object.values(amenityIds).join(', ');
        $('.amenities > h4').text(amenityList);
    });
});
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    success: function (response) {
        if (response.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    }
});