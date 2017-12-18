let obj = {
    width: '500px',
    id: 5,
    children: [
        {
            width: '200px',
            children: [
                {
                    width: '100px',
                    growthFactor: 1,
                    shrinkFactor: 2,
                    id: 2
                },
                {
                    width: '75px',
                    growthFactor: 2,
                    shrinkFactor: 1,
                    id: 1
                },
                {
                    width: '75px',
                    growthFactor: 2,
                    shrinkFactor: 2,
                    id: 4
                }

            ],
            growthFactor: 1,
            shrinkFactor: 3,
            id: 3
        },

        {
            width: '200px',
            growthFactor: 3,
            shrinkFactor: 2,
            id: 6
        }

    ],
    growthFactor: 0,
    shrinkFactor: 0
};

/*
let list = calculateWidths(obj);
console.log('Calculated length = ' + JSON.stringify(list));

function calculateWidths(div) {
    var tw = Number(div.width.slice(0, div.width.length - 2));
    var children = div.children;
    var totalGrowthFactor = 0;
    var totalShrinkFactor = 0;
    var totalChildWidth = 0;
    for (var i=0; i<children.length; i++) {
        children[i].width = Number(children[i].width.slice(0, children[i].width.length - 2));
        totalChildWidth += children[i].width;
        totalGrowthFactor += children[i].growthFactor;
        totalShrinkFactor += children[i].shrinkFactor;
    }

    if (totalChildWidth === tw) {
        return children.map(function(itm){return itm.width}).join(' ');
    } else {
        if (totalChildWidth < tw){
            var diff = tw - totalChildWidth;
            var growthWidth = Math.ceil(diff / totalGrowthFactor);
            return children.map(function(itm) {
                return (itm.width + (itm.growthFactor * growthWidth));
            }).join(' ');
        } else {
            var diff = totalChildWidth - tw;
            var shrinkWidth = Math.ceil(diff / totalShrinkFactor);
            return children.map(function(itm) {
                return (itm.width - (itm.shrinkFactor * shrinkWidth));
            }).join(' ');
        }
    }
};
*/

let res = calculateWidthsNew(obj);
console.log('final res = ' + res);
function calculateWidthsNew(div) {

    var totalList = [];
    div.width = Number(div.width.slice(0, div.width.length - 2))
    function calcNewMain(divRec) {
        if(divRec.children!==undefined) {
            calc(divRec);
            divRec.children.forEach((itm) => {
                calcNewMain(itm);
            });
        }
    }

    calcNewMain(div);

    totalList.push({id: div.id, width: div.width});
    var finalResult = totalList.sort(function(a, b) {
       return a.id - b.id;
    }).map(function(itm){return itm.width}).join(' ');

    return finalResult;

    function calc(div) {
        //var tw = Number(div.width.slice(0, div.width.length - 2));
        var tw = div.width;
        var children = div.children;
        var totalGrowthFactor = 0;
        var totalShrinkFactor = 0;
        var totalChildWidth = 0;
        for (var i=0; i<children.length; i++) {
            children[i].width = Number(children[i].width.slice(0, children[i].width.length - 2));
            totalChildWidth += children[i].width;
            totalGrowthFactor += children[i].growthFactor;
            totalShrinkFactor += children[i].shrinkFactor;
        }

        if (totalChildWidth === tw) {

            return children.forEach(function(itm, index){
                var retObj = {
                    id: itm.id,
                    width: itm.width
                };
                children[index].width = itm.width;
                return retObj;

            });
        } else {
            if (totalChildWidth < tw){
                var diff = tw - totalChildWidth;
                var growthWidth = Math.ceil(diff / totalGrowthFactor);
                return children.forEach(function(itm, index) {
                    var retObj = {
                        id: itm.id,
                        width: itm.width + (itm.growthFactor * growthWidth)
                    };
                    children[index].width = itm.width + (itm.growthFactor * growthWidth);
                    totalList.push(retObj);
                });
            } else {
                var diff = totalChildWidth - tw;
                var shrinkWidth = Math.ceil(diff / totalShrinkFactor);
                return children.forEach(function(itm, index) {
                    var retObj = {
                        id: itm.id,
                        width: itm.width - (itm.shrinkFactor * shrinkWidth)
                    };
                    children[index].width = itm.width - (itm.shrinkFactor * shrinkWidth);
                    totalList.push(retObj);
                });
            }
        }
    }

};