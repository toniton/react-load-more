(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    define(["require", "exports", "react"], function (require, exports, react_1) {
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.useLoadMore = function (callback, componentRef) {
            var _a = react_1.useState(false), isLoadingMore = _a[0], setIsLoadingMore = _a[1];
            var setIsLoadingMoreOnScroll = function (ref) { return function () {
                var current = ref.current;
                var documentElement = document.documentElement, body = document.body;
                var windowOffset = window.innerHeight + documentElement.scrollTop;
                var tableOffset = current ? current.scrollHeight : body.offsetHeight;
                if (windowOffset < tableOffset || isLoadingMore) {
                    return;
                }
                setIsLoadingMore(true);
            }; };
            react_1.useEffect(function () {
                var handleScroll = setIsLoadingMoreOnScroll(componentRef);
                window.addEventListener("scroll", handleScroll, { passive: true });
                return function () { return window.removeEventListener("scroll", handleScroll); };
            }, []);
            react_1.useEffect(function () {
                if (!isLoadingMore) {
                    return;
                }
                callback();
            }, [isLoadingMore]);
            return [isLoadingMore, setIsLoadingMore];
        };
        exports.default = { useLoadMore: exports.useLoadMore };
    });

}));
//# sourceMappingURL=react-load-more-hook.js.map
