! function (i) {
    "use strict";
    var t = window.Slider || {};
    t = function () {
        function t(t, e) {
            var n = this;
            n.defaults = {
                speed: 1e3,
                delay: 3e3,
                autoplay: !0,
                pauseonhover: !0,
                navigation: !0,
                pagination: !0,
                initialslide: 1,
                metric: "%",
                width: "100%",
                height: "auto",
                slidertype: "slide",
                direction: "right",
                responsive: !0,
                buttons: {
                    prev: "<div class='prev slider-buttons'><span>&#8249;</span></div>",
                    next: "<div class='next slider-buttons'><span>&#8250;</span></div>"
                }
            }, n.markup = {
                $slider: i(t),
                $slidercontainer: null,
                $slides: null,
                $btnprev: null,
                $btnnext: null,
                $dots: [],
                $dotscontainer: null,
                slidewidth: null
            }, n.options = i.extend({}, n.defaults, e), n.init()
        }
        return t
    }(), t.prototype.init = function () {
        var i = this;
        i.setup(), i.options.autoplay === !0 && i.startSlider()
    }, t.prototype.setup = function () {
        var t = this;
        if (t.markup.$slider.wrap("<div class='slider-container'></div>"), t.markup.$slidercontainer = t.markup.$slider.parent(), t.markup.$slider.append(t.markup.$slider.children("li")[t.options.initialslide - 1].outerHTML), t.markup.$slides = t.markup.$slider.children("li"), t.markup.$slidercontainer.width(t.options.width), t.markup.$slider.width(100 * t.markup.$slides.length + t.options.metric), t.markup.$slides.width(t.markup.$slider.width() / t.markup.$slides.length), "auto" === t.options.height) {
            var e = 99999;
            t.markup.$slides.each(function () {
                i(this).height() < e && (e = i(this).height())
            }), t.markup.$slidercontainer.height(e)
        } else t.markup.$slidercontainer.height(t.options.height);
        if (t.markup.slidewidth = t.markup.$slidercontainer.width(), t.options.navigation === !0 && (t.markup.$slidercontainer.append(t.options.buttons.prev, t.options.buttons.next), t.markup.$btnprev = t.markup.$slidercontainer.find(".prev"), t.markup.$btnnext = t.markup.$slidercontainer.find(".next"), t.markup.$btnprev.on("click", i.proxy(t.slide, t, !0, "left", null)), t.markup.$btnnext.on("click", i.proxy(t.slide, t, !0, "right", null))), t.options.pagination === !0) {
            for (var n = 1; n < t.markup.$slides.length; n++) t.markup.$dots.push("<li class='dot' data-number='" + n + "'></li>");
            var s = "";
            i.each(t.markup.$dots, function () {
                s += this
            }), t.markup.$slidercontainer.append("<ul class='pagination-container'>" + s + "</ul>"), t.markup.$dotscontainer = t.markup.$slidercontainer.find(".pagination-container"), t.markup.$dotscontainer.children("li").eq(0).addClass("active"), t.markup.$dotscontainer.children("li").on("click", function () {
                var e = parseInt(i(this).attr("data-number"), 10);
                t.slide(!0, "", e)
            })
        }
        t.options.responsive === !0 && (t.resizeSlider(), i(window).on("resize orientationchange", i.proxy(t.responsive, t)))
    }, t.prototype.resizeSlider = function () {
        var t = this;
        i(window).width() <= parseInt(t.options.width, 10) ? t.markup.$slidercontainer.width("100%") : t.markup.$slidercontainer.width(t.options.width)
    }, t.prototype.responsive = function () {
        var t = this,
            e = 99999;
        t.resizeSlider(), t.pauseSlider(), t.markup.$slider.is(":animated") && t.markup.$slider.stop(!0, !0), t.markup.$slides.width(t.markup.$slider.width() / t.markup.$slides.length), t.markup.slidewidth = t.markup.$slidercontainer.width();
        var n = t.markup.slidewidth * (t.options.initialslide - 1);
        t.markup.$slider.css({
            "margin-left": -n
        }), t.markup.$slides.each(function () {
            i(this).height() < e && (e = i(this).height())
        }), (e < parseInt(t.options.height, 10) || "auto" === t.options.height) && t.markup.$slidercontainer.height(e), t.options.autoplay === !0 && t.startSlider()
    }, t.prototype.pauseSlider = function () {
        var i = this;
        clearInterval(i.interval)
    }, t.prototype.startSlider = function () {
        var i = this;
        i.sliderInit()
    }, t.prototype.sliderInit = function () {
        var i = this;
        switch (i.options.slidertype) {
            case "slide":
                i.slide()
        }
    }, t.prototype.slide = function (t, e, n) {
        var s = this,
            e = e ? e : s.options.direction;
        t === !0 ? s.markup.$slider.is(":animated") || (s.pauseSlider(), s.slideTransition(e, n)) : (s.pauseSlider(), s.interval = setInterval(i.proxy(s.slideTransition, s, e), s.options.delay))
    }, t.prototype.slideTransition = function (i, t) {
        var e = this;
        if ("left" === i) {
            var n = t ? "-" + e.markup.slidewidth * (t - 1) : "+=" + e.markup.slidewidth;
            1 === e.options.initialslide && (e.markup.$slider.css({
                "margin-left": "-" + (e.markup.$slides.length - 1) * e.markup.slidewidth + "px"
            }), e.options.initialslide = e.markup.$slides.length), e.markup.$slider.animate({
                "margin-left": n + "px"
            }, e.options.speed, function () {
                t ? e.options.initialslide = t : e.options.initialslide--, e.updateDots(e.options.initialslide), e.options.autoplay === !0 && e.startSlider()
            })
        } else {
            var n = t ? "-" + e.markup.slidewidth * (t - 1) : "-=" + e.markup.slidewidth;
            e.options.initialslide === e.markup.$slides.length && (e.markup.$slider.css({
                "margin-left": 0
            }), e.options.initialslide = 1), e.markup.$slider.animate({
                "margin-left": n + "px"
            }, e.options.speed, function () {
                t ? e.options.initialslide = t : e.options.initialslide++, e.updateDots(e.options.initialslide), e.options.autoplay === !0 && e.startSlider()
            })
        }
    }, t.prototype.updateDots = function (i) {
        var t = this;
        if (i === t.markup.$slides.length) var i = 1;
        t.markup.$dotscontainer.children("li.active").removeClass("active"), t.markup.$dotscontainer.find("[data-number='" + i + "']").addClass("active")
    }, i.fn.slider = function (i) {
        this.slider = new t(this, i)
    }
}(jQuery);
