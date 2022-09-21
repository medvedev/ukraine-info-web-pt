module.exports = {
    filters: {
        'slider-filter': function (text, options) {
            var lang;
            if (options.ua) {
                lang = 'ua';
            } else if (options.en) {
                lang = 'en';
            } else if (options.pt) {
                lang = 'pt';
            }

            const slidersHead = "<div class='slider-container'><div class='slider'><div class='slides'>";
            const slidersTail = "</div></div></div>";
            const slidePrefix = index =>
                `<div class='slide' id='slides__${index}-${lang}'><span class='slide__text'>`;
            const slideSuffix = (prevIndex, nextIndex) =>
                `</span><a class="slide__prev" href="#slides__${prevIndex}-${lang}" title="Prev"></a><a class="slide__next" href="#slides__${nextIndex}-${lang}" title="Next"></a></div>`;

            // Split to slides
            var buf = '';
            var textLines = text.split('\n');
            var slides = [];
            var slideIndex = 0;
            textLines.forEach(line => {
                if ('[slide]' != line) {
                    buf += '<p>' + line;
                } else if ('' != buf) {
                    slides[slideIndex++] = buf;
                    buf = '';
                }
            });
            if (buf != '') {
                slides[slideIndex++] = buf;
            }

            // Compile section HTML
            var result = slidersHead;
            slides.forEach(function(slide, i) {
                result += slidePrefix(i);
                result += slide;
                result += slideSuffix(
                    i - 1 < 0 ? slides.length - 1 : i - 1, 
                    i + 1 > slides.length - 1 ? 0 : i + 1);
            });
            result += slidersTail;
            return result;
        }
    }
};