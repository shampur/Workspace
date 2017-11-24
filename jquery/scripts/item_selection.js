class ItemSelection {
    constructor() {
        this.list = [];
        this.bucket = [];
        this.populateList();
        this.setup();
    }

    setup() {
        let that = this;
        $('.container .list .item').click(function(event) {
            $(this).toggleClass('selected');
            if ($(this).hasClass('selected')) {
                let index = $(this).index();
                that.list[index].selected = true;
            }
        });

        $('.container .bucket .item').click(function(event) {
            $(this).toggleClass('selected');
            if ($(this).hasClass('selected')) {
                let index = $(this).index();
                that.bucket[index].selected = true;
            }
        });

        $('.container .controls .button.moveRight').click(function(event) {
            that.moveSelectedRight();
        });

        $('.container .controls .button.moveLeft').click(function(event) {
            that.moveSelectedLeft();
        });
    }

    populateList() {
        let that = this;
        $('.container .list .item').each(function(index) {
            let elem = this;
            that.list.push({item: elem, selected: false});
        });
    }

    moveSelectedRight(){
        let that = this;
        let newList = [];
        this.list.forEach((element, index) => {
            if (element.selected) {
                $('.container .bucket').append($(element.item));
                that.bucket.push(element);
            } else {
                newList.push(element);
            }
        });
        this.list = newList;
        this.reset();
    }

    moveSelectedLeft(){
        let that = this;
        let newList = [];
        this.bucket.forEach((element, index) => {
            if (element.selected) {
                $('.container .list').append($(element.item));
                that.list.push(element);
            } else {
                newList.push(element);
            }
        });
        this.bucket = newList;
        this.reset();
    }

    reset() {
        let that = this;
        $('.container .list .item').each(function(index) {
            that.list[index]['selected'] = false;
            $(this).removeClass('selected');
        });

        $('.container .bucket .item').each(function(index) {
            that.bucket[index]['selected'] = false;
            $(this).removeClass('selected');
        });
    }
}

module.exports = ItemSelection;