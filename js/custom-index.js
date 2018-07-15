$(document).ready(function () {
    var table = $('#planned-user-diff').DataTable({         
      // Definition of filter to display
      buttons: [
        { extend: 'copy', className: 'btn-primary-custom' },
        { extend: 'pdf', className: 'btn-primary-custom' },
        { extend: 'excel', className: 'btn-primary-custom' },
        { extend: 'print', className: 'btn-primary-custom' }
      ],
      "scrollY":        "600px",
      "scrollCollapse": true,
      lengthChange: false,
      responsive: true,
      filterDropDown: {                   
      columns: [ 
        { idx: 3 },
        { idx: 4 }
      ],
      bootstrap: true
      },
      "lengthMenu": [[5, 10, 50,-1], [5, 10, 50, "All"]]
    });
     table.buttons().container()
        .appendTo( '#planned-user-diff_wrapper .col-md-6:eq(0)' );
});