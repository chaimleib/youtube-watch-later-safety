// ==UserScript==
// @name         YouTube Watch Later safety
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove watchlist overlays on the Watch Later page. Never lose a video again!
// @author       Chaim Leib Halbert
// @match        https://www.youtube.com/watch?*list=WL*
// @match        https://www.youtube.com/watch?*list=WL
// @grant        none
// @require http://code.jquery.com/jquery-latest.min.js
// @require https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// @updateURL   https://raw.githubusercontent.com/chaimleib/youtube-watch-later-safety/master/youtube-watch-later-safety.js
// @downloadURL   https://raw.githubusercontent.com/chaimleib/youtube-watch-later-safety/master/youtube-watch-later-safety.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).arrive(
        'ytd-thumbnail-overlay-toggle-button-renderer',
        function(){
            $('.ytd-playlist-panel-renderer ytd-thumbnail-overlay-toggle-button-renderer').remove();
        }
    );
})();

