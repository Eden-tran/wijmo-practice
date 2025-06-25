// get an array with hierarchical row definitions
// the 'rows' property of the objects contain child rows
// the 'collapseTo' property specifies the binding of their child row that 
// should remain visible when the group is collapsed.
function getRowGroups() {
    const allocTemplate = (ctx) => (`<span class=${ctx.value > .2 ? "big-val" : "small-val"}>${wijmo.Globalize.format(ctx.value, ctx.col.format)}</span>`);
    const amountTemplate = (ctx) => (`<span class=${ctx.value > 50000 ? "big-val" : "small-val"}>${wijmo.Globalize.format(ctx.value, ctx.col.format)}</span>`);
    return [
        {
            header: 'Perf', width: "*", align: 'center', rows: [
                { binding: 'perf.ytd', header: 'YTD', format: 'p2', width: '*', cssClass: 'main-row' },
                { binding: 'perf.m1', header: '1 M', format: 'p2', width: '*' },
                { binding: 'perf.m6', header: '6 M', format: 'p2', width: '*' },
                { binding: 'perf.m12', header: '12 M', format: 'p2', width: '*' },
            ]
        },
        {
            header: 'AllocationAllocation', width: "*", align: 'center', rows: [
                { binding: 'alloc.stock', header: 'StocksStocks', format: 'p0', width: '*', cellTemplate: allocTemplate },
                { binding: 'alloc.bond', header: 'Bonds', format: 'p0', width: '*', cellTemplate: allocTemplate },
                { binding: 'alloc.cash', header: 'Cash', format: 'p0', width: '*', cellTemplate: allocTemplate },
                { binding: 'alloc.other', header: 'Other', format: 'p0', width: '*', cellTemplate: allocTemplate },
                { binding: 'alloc.amount', header: 'Amount', format: 'c0', width: '*', cssClass: 'main-row', cellTemplate: amountTemplate }
            ]
        }
    ];
}

function getDeeperRowGroups() {
    return [
        { binding: 'name', header: 'Name', height: 50 },
        { binding: 'currency', header: 'Curr', height: 50, align: 'center' },
        {
            header: 'Allocation', width: 100, align: 'center', collapseTo: 'alloc.amount', rows: [
                { binding: 'alloc.stock', header: 'Stocks', format: 'p0' },
                { binding: 'alloc.bond', header: 'Bonds', format: 'p0' },
                {
                    header: 'Detail', width: 80, align: 'center', rows: [
                        { binding: 'alloc.cash', header: 'Cash', format: 'p0', width: 60 },
                        { binding: 'alloc.other', header: 'Other', format: 'p0', width: 60 },
                    ]
                },
                { binding: 'alloc.amount', header: 'Amount', format: 'c0', cssClassAll: 'main-row' },
            ]
        },
        {
            header: 'Perf', width: 100, align: 'center', rows: [
                {
                    header: 'Short', width: 80, align: 'center', collapseTo: 'perf.ytd', isCollapsed: true, rows: [
                        { binding: 'perf.ytd', header: 'YTD', format: 'p2', width: 60, cssClassAll: 'main-row' },
                        { binding: 'perf.m1', header: '1 M', format: 'p2', width: 60 },
                    ]
                },
                {
                    header: 'Long', width: 80, align: 'center', collapseTo: 'perf.m12', isCollapsed: true, rows: [
                        { binding: 'perf.m6', header: '6 M', format: 'p2', width: 60 },
                        { binding: 'perf.m12', header: '12 M', format: 'p2', width: 60, cssClassAll: 'main-row' }
                    ]
                },
            ]
        },
    ];
}

// get some sample data
function getData() {
    return [{
            name: 'Constant Growth',
            currency: 'USD',
            perf: {
                ytd: .0523,
                m1: 0.0142,
                m6: 0.0443,
                m12: 0.0743
            },
            alloc: {
                stock: 0.17,
                bond: 0.32,
                cash: 0.36,
                other: 0.15,
                amount: 23432
            }
        }, ];
}