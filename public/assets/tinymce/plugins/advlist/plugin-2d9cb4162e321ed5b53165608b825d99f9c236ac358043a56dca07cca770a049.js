!function(){var t={},n=function(n){for(var e=t[n],i=e.deps,o=e.defn,u=i.length,l=new Array(u),a=0;a<u;++a)l[a]=r(i[a]);var s=o.apply(null,l);if(void 0===s)throw"module ["+n+"] returned undefined";e.instance=s},e=function(n,e,r){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===r)throw"no definition function for "+n;t[n]={deps:e,defn:r,instance:void 0}},r=function(e){var r=t[e];if(void 0===r)throw"module ["+e+"] was undefined";return void 0===r.instance&&n(e),r.instance},i=function(t,n){for(var e=t.length,i=new Array(e),o=0;o<e;++o)i[o]=r(t[o]);n.apply(null,i)};({}).bolt={module:{api:{define:e,require:i,demand:r}}};var o=e;(function(t,n){o(t,[],function(){return n})})("5",tinymce.util.Tools.resolve),o("1",["5"],function(t){return t("tinymce.PluginManager")}),o("2",["5"],function(t){return t("tinymce.util.Tools")}),o("6",[],function(){return{applyListFormat:function(t,n,e){var r="UL"===n?"InsertUnorderedList":"InsertOrderedList";t.execCommand(r,!1,!1===e?null:{"list-style-type":e})}}}),o("3",["6"],function(t){return{register:function(n){n.addCommand("ApplyUnorderedListStyle",function(e,r){t.applyListFormat(n,"UL",r["list-style-type"])}),n.addCommand("ApplyOrderedListStyle",function(e,r){t.applyListFormat(n,"OL",r["list-style-type"])})}}}),o("7",[],function(){return{getNumberStyles:function(t){var n=t.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return n?n.split(/[ ,]/):[]},getBulletStyles:function(t){var n=t.getParam("advlist_bullet_styles","default,circle,disc,square");return n?n.split(/[ ,]/):[]}}}),o("8",[],function(){var t=function(t,n){return t.$.contains(t.getBody(),n)};return{isTableCellNode:function(t){return t&&/^(TH|TD)$/.test(t.nodeName)},isListNode:function(n){return function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)&&t(n,e)}},getSelectedStyleType:function(t){var n=t.dom.getParent(t.selection.getNode(),"ol,ul");return t.dom.getStyle(n,"listStyleType")||""}}}),o("9",["2"],function(t){var n=function(t){return t.replace(/\-/g," ").replace(/\b\w/g,function(t){return t.toUpperCase()})};return{toMenuItems:function(e){return t.map(e,function(t){return{text:n(t),data:"default"===t?"":t}})}}}),o("4",["2","7","6","8","9"],function(t,n,e,r,i){var o=function(t,n){for(var e=0;e<t.length;e++){if(n(t[e]))return e}return-1},u=function(n,e){return function(i){var u=i.control;n.on("NodeChange",function(i){var l=o(i.parents,r.isTableCellNode),a=-1!==l?i.parents.slice(0,l):i.parents,s=t.grep(a,r.isListNode(n));u.active(s.length>0&&s[0].nodeName===e)})}},l=function(t){return function(n){var e=r.getSelectedStyleType(t);n.control.items().each(function(t){t.active(t.settings.data===e)})}},a=function(t,n,r,o,a,s){t.addButton(n,{active:!1,type:"splitbutton",tooltip:r,menu:i.toMenuItems(s),onPostRender:u(t,a),onshow:l(t),onselect:function(n){e.applyListFormat(t,a,n.control.settings.data)},onclick:function(){t.execCommand(o)}})},s=function(t,n,e,r,i){t.addButton(n,{active:!1,type:"button",tooltip:e,onPostRender:u(t,i),onclick:function(){t.execCommand(r)}})},c=function(t,n,e,r,i,o){o.length>0?a(t,n,e,r,i,o):s(t,n,e,r,i,o)};return{register:function(t){c(t,"numlist","Numbered list","InsertOrderedList","OL",n.getNumberStyles(t)),c(t,"bullist","Bullet list","InsertUnorderedList","UL",n.getBulletStyles(t))}}}),o("0",["1","2","3","4"],function(t,n,e,r){return t.add("advlist",function(t){(function(t,e){var r=t.settings.plugins?t.settings.plugins:"";return-1!==n.inArray(r.split(/[ ,]/),e)})(t,"lists")&&(r.register(t),e.register(t))}),function(){}}),r("0")()}();