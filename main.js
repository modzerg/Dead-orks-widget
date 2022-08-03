let date = new Date();
let day = ("0" + date.getDate()).slice(-2);
let month = ("0" + (date.getMonth() + 1)).slice(-2);
let today = date.getFullYear() + "-" + (month) + "-" + (day);
$('#dateid').val(today);

function getLatestStat() {
    let Api_title = "https://russianwarship.rip/api/v1/terms/ua";
    fetch(Api_title)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $('.loses-content').html('');
            $.each(data.data, function(key, value) {
                $('.loses-content').append(`<div class="loses-item">
                        <div id="` + key + `_icon" class="loses-item-icon"></div>
                        <div class="loses-item-content">
                          <div id="` + key + `_title" class="loses-item-text"></div>
                          <div class="loses-item-title">
                            <span id="` + key + `" class="loses-item-value"></span>
                            <span id="` + key + `_per_day" class="loses-item-change" title="За добу"></span>
                          </div>
                        </div>
                      </div>`);
                $('#' + key + '_icon').html('<img alt="icon" class="loses-item-image" src="' + value.icon + '">')
                $('#' + key + '_title').html(value.title);
            });
        });
    let Api = "https://russianwarship.rip/api/v1/statistics/latest";
    fetch(Api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            $('#date').html(data.data.date);
            $('#day').html('(' + data.data.day + '-й день війни)');

            $.each(data.data.stats, function(key, value) {
                $('#' + key).html(value);
            });
            $.each(data.data.increase, function(key, value) {
                if (value != 0) {
                    $('#' + key + '_per_day').html('(+' + value + ')');
                }
            });
        });
}

getLatestStat();

(function() {
    $('#submit').on('click', function() {

        let entity = $('#entity-select').val();
        let Api_title = "https://russianwarship.rip/api/v1/terms/ua";
        fetch(Api_title)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                $.each(data.data, function(key, value) {
                    if (key === entity) {
                        $('.loses-content').html('').html(`<div class="loses-item">
                        <div id="` + key + `_icon" class="loses-item-icon"></div>
                        <div class="loses-item-content">
                          <div id="` + key + `_title" class="loses-item-text"></div>
                          <div class="loses-item-title">
                            <span id="` + key + `" class="loses-item-value"></span>
                            <span id="` + key + `_per_day" class="loses-item-change"></span>
                          </div>
                        </div>
                      </div>`);
                        $('#' + key + '_icon').html('<img alt="icon" class="loses-item-image" src="' + value.icon + '">')
                        $('#' + key + '_title').html(value.title);
                    }
                    if (entity === 'all') {
                        $('.loses-content').html('');
                        $.each(data.data, function(key, value) {
                            $('.loses-content').append(`<div class="loses-item">
                        <div id="` + key + `_icon" class="loses-item-icon"></div>
                        <div class="loses-item-content">
                          <div id="` + key + `_title" class="loses-item-text"></div>
                          <div class="loses-item-title">
                            <span id="` + key + `" class="loses-item-value"></span>
                            <span id="` + key + `_per_day" class="loses-item-change"></span>
                          </div>
                        </div>
                      </div>`);
                            $('#' + key + '_icon').html('<img alt="icon" class="loses-item-image" src="' + value.icon + '">')
                            $('#' + key + '_title').html(value.title);
                        });
                    }
                });
            });
        let date_select = $('#dateid').val();

        let Api_date = "https://russianwarship.rip/api/v1/statistics/" + date_select;
        fetch(Api_date)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.message === 'The given data was invalid.') {
                    $('#error').html('Вкажіть правильну дату (від 24.02.2022 до сьогодні)').addClass('visible');
                } else if (data.message === 'Statistic record not found.') {
                    $('#error').html('Записів за цей цень не знайдено, виберіть іншу дату.').addClass('visible');
                } else {
                    $('#error').html('').removeClass('visible');
                }
                $('#date').html(data.data.date);
                $('#day').html('(' + data.data.day + '-й день війни)');

                $.each(data.data.stats, function(key, value) {
                    $('#' + key).html(value);
                    $('#' + key + '_per_day').html('');
                });
            });
    });
})();