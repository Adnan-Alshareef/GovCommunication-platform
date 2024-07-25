const navbar = document.getElementById('navbar');
const navbarOffset = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add('nav-fixed');
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
        navbar.classList.remove('nav-fixed');
        document.body.style.paddingTop = 0;
    }
});

const ctx = document.getElementById('myChart').getContext('2d');
const completedOrders = 20;
const totalOrders = 100;
const remainingOrders = totalOrders - completedOrders;
const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['مكتمل', 'متبقي'],
        datasets: [{
            data: [completedOrders, remainingOrders],
            backgroundColor: [
                '#00A886',
                '#EDF0F5'
            ],
            borderWidth: 0,
            circumference: 360,
            rotation: -90
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                external: function (context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);

                        let innerHtml = '<div>';

                        titleLines.forEach(function (title) {
                            innerHtml += '<span>' + title + '</span>';
                        });
                        innerHtml += '</div>';

                        bodyLines.forEach(function (body, i) {
                            innerHtml += '<div>' + body + '</div>';
                        });

                        tooltipEl.innerHTML = innerHtml;
                    }

                    // Position tooltip
                    const position = context.chart.canvas.getBoundingClientRect();
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                }
            }
        }
    }
});


const ctx_2 = document.getElementById('myChart_2').getContext('2d');
const completedOrders_2 = 32;
const totalOrders_2 = 100;
const remainingOrders_2 = totalOrders_2 - completedOrders_2;
const chart_2 = new Chart(ctx_2, {
    type: 'doughnut',
    data: {
        labels: ['مكتمل', 'متبقي'],
        datasets: [{
            data: [completedOrders_2, remainingOrders_2],
            backgroundColor: [
                '#FAA21B',
                '#EDF0F5'
            ],
            borderWidth: 0,
            circumference: 360,
            rotation: -90
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                external: function (context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);

                        let innerHtml = '<div>';

                        titleLines.forEach(function (title) {
                            innerHtml += '<span>' + title + '</span>';
                        });
                        innerHtml += '</div>';

                        bodyLines.forEach(function (body, i) {
                            innerHtml += '<div>' + body + '</div>';
                        });

                        tooltipEl.innerHTML = innerHtml;
                    }

                    // Position tooltip
                    const position = context.chart.canvas.getBoundingClientRect();
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                }
            }
        }
    }
});

const ctx_3 = document.getElementById('myChart_3').getContext('2d');
const completedOrders_3 = 90;
const totalOrders_3 = 100;
const remainingOrders_3 = totalOrders_3 - completedOrders_3;
const chart_3 = new Chart(ctx_3, {
    type: 'doughnut',
    data: {
        labels: ['مكتمل', 'متبقي'],
        datasets: [{
            data: [completedOrders_3, remainingOrders_3],
            backgroundColor: [
                '#EF3A4C',
                '#EDF0F5'
            ],
            borderWidth: 0,
            circumference: 360,
            rotation: -90
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                external: function (context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);

                        let innerHtml = '<div>';

                        titleLines.forEach(function (title) {
                            innerHtml += '<span>' + title + '</span>';
                        });
                        innerHtml += '</div>';

                        bodyLines.forEach(function (body, i) {
                            innerHtml += '<div>' + body + '</div>';
                        });

                        tooltipEl.innerHTML = innerHtml;
                    }

                    // Position tooltip
                    const position = context.chart.canvas.getBoundingClientRect();
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                }
            }
        }
    }
});

jQuery(document).ready(function ($) {
    $(".clickable-row").click(function () {
        window.location = $(this).data("href");
    });
});

$(document).ready(function () {
    var table = $('#myTable').DataTable({
        "pageLength": 10,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "first": "First",
                "last": "Last",
                "next": "Next",
                "previous": "Prev"
            }
        },
        "drawCallback": function (settings) {
            var api = this.api();
            var pageInfo = api.page.info();
            if (pageInfo.pages > 1) {
                var $pagination = $(api.table().container()).find('.dataTables_paginate');
                customPagination(api, pageInfo, $pagination);
            } else {
                $(api.table().container()).find('.dataTables_paginate').hide();
            }
        },
        "rowCallback": function (row, data, index) {
            $(row).removeClass('odd even');
            $(row).addClass(index % 2 === 0 ? 'even' : 'odd');
        }
    });

    function customPagination(api, pageInfo, $pagination) {
        // Your existing customPagination function here
    }

    $(document).on('click', '.paginate_button', function () {
        // Your existing pagination click handler here
    });

    // Add this for row clicks
    $('#myTable').on('click', 'tbody tr', function (e) {
        if (!$(e.target).is('button, a, input, .update-btn')) {
            var url = $(this).attr('data-url');
            if (url) {
                window.location.href = url;
            }
        }
    });
});

