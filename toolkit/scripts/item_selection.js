let $ = require('jquery/dist/jquery.slim');

let Direction = {
    LeftToRight: 0,
    RightToLeft: 1
};

class ItemSelection {
    constructor() {
        this.setup();
    }

    setup() {
        let that = this;
        this.list = $('.container .list');
        this.bucket = $('.container .bucket');

        $('.container .item').click(function(event) {
            $(this).toggleClass('selected');
        });

        $('.container .controls .button.moveRight').click(function(event) {
            that.moveSelected('.container .list .item', Direction.LeftToRight);
        });

        $('.container .controls .button.moveLeft').click(function(event) {
            that.moveSelected('.container .bucket .item', Direction.RightToLeft);
        });
    }

    moveSelected(selection, direction) {
        let that = this;
        $(selection).each(function(index) {
            if($(this).hasClass('selected')){
                if (direction === Direction.LeftToRight) {
                    that.bucket.append($(this).removeClass('selected'));
                }
                if (direction === Direction.RightToLeft) {
                    that.list.append($(this).removeClass('selected'));
                }
            }
        });
    }
}

module.exports = ItemSelection;