document.readyState === 'complete' ? init() : window.onload = init;

function init() {
    // row grouping options
    // let rowGroups1 = getRowGroups(), rowGroups2 = getDeeperRowGroups();
        let rowGroups1 = getRowGroups();

    // create the grid with row groups
    let trnGrid = new wijmo.grid.transposed.TransposedGrid('#trnGrid', {
        alternatingRowStep: 0,
        showMarquee: true,
        showSelectedHeaders: wijmo.grid.HeadersVisibility.Row,
        autoGenerateRows: false,
        rowGroups: rowGroups1,
        itemsSource: getData()
    });
    trnGrid.loadedRows.addHandler(() => {
        trnGrid.columns.forEach(col => {
            col.width = '*';
        });
          // Auto-size all columns including headers
        trnGrid.autoSizeColumns(0, trnGrid.columns.length - 1, true, 0);
          // For TransposedGrid, auto-size rows to fit header content
        trnGrid.autoSizeRows(0, trnGrid.rows.length - 1, true, 10);
    });
    // // toggle group definition
    // document.getElementById('toggle').addEventListener('click', e => {
    //     trnGrid.rowGroups = trnGrid.rowGroups != rowGroups1 ? rowGroups1 : rowGroups2;
    // });
    // // toggle row group collapse/expand animation
    // document.getElementById('animated').addEventListener('click', e => {
    //     wijmo.toggleClass(trnGrid.hostElement, 'animated', e.target.checked);
    // });
}