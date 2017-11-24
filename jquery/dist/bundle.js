(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
let ItemSelection = require('./item_selection');
$(document).ready(() => {
    let item = new ItemSelection();
});

},{"./item_selection":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcXVlcnkvc2NyaXB0cy9pdGVtX3NlbGVjdGlvbi5qcyIsImpxdWVyeS9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBJdGVtU2VsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgIHRoaXMuYnVja2V0ID0gW107XG4gICAgICAgIHRoaXMucG9wdWxhdGVMaXN0KCk7XG4gICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBzZXR1cCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKCcuY29udGFpbmVyIC5saXN0IC5pdGVtJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvbnRhaW5lciAuYnVja2V0IC5pdGVtJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICB0aGF0LmJ1Y2tldFtpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY29udGFpbmVyIC5jb250cm9scyAuYnV0dG9uLm1vdmVSaWdodCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGF0Lm1vdmVTZWxlY3RlZFJpZ2h0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jb250YWluZXIgLmNvbnRyb2xzIC5idXR0b24ubW92ZUxlZnQnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdGhhdC5tb3ZlU2VsZWN0ZWRMZWZ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvcHVsYXRlTGlzdCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKCcuY29udGFpbmVyIC5saXN0IC5pdGVtJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgbGV0IGVsZW0gPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5saXN0LnB1c2goe2l0ZW06IGVsZW0sIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtb3ZlU2VsZWN0ZWRSaWdodCgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAkKCcuY29udGFpbmVyIC5idWNrZXQnKS5hcHBlbmQoJChlbGVtZW50Lml0ZW0pKTtcbiAgICAgICAgICAgICAgICB0aGF0LmJ1Y2tldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3QgPSBuZXdMaXN0O1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgbW92ZVNlbGVjdGVkTGVmdCgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgICAgIHRoaXMuYnVja2V0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICQoJy5jb250YWluZXIgLmxpc3QnKS5hcHBlbmQoJChlbGVtZW50Lml0ZW0pKTtcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idWNrZXQgPSBuZXdMaXN0O1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgJCgnLmNvbnRhaW5lciAubGlzdCAuaXRlbScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHRoYXQubGlzdFtpbmRleF1bJ3NlbGVjdGVkJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jb250YWluZXIgLmJ1Y2tldCAuaXRlbScpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHRoYXQuYnVja2V0W2luZGV4XVsnc2VsZWN0ZWQnXSA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZW1TZWxlY3Rpb247IiwibGV0IEl0ZW1TZWxlY3Rpb24gPSByZXF1aXJlKCcuL2l0ZW1fc2VsZWN0aW9uJyk7XG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBuZXcgSXRlbVNlbGVjdGlvbigpO1xufSk7XG4iXX0=
