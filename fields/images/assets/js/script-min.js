!function($){$.fn.images=function(){return this.each(function(){function e(){s.find(".add").removeClass("over"),s.find(".images-item").removeClass("over")}function i(){s.find(".images-item.selected").length?s.find(".imagesgrid").addClass("filled"):s.find(".imagesgrid").removeClass("filled"),s.find(".images-dropdown").removeClass("open"),s.find(".images-add-button").removeClass("open"),s.find(".images-dropdown a").not(".disabled").length>0?s.find(".images-dropdown .no-more-images").removeClass("da"):s.find(".images-dropdown .no-more-images").addClass("da")}function d(){s.find("input.images").val("").trigger("change"),s.find(".images-item.selected").length>1?(filenames=new Array,s.find(".images-item.selected").each(function(){filenames.push($(this).data("image"))}),filenames="- "+filenames.join("\n- "),s.find("input.images").val(filenames).trigger("change")):s.find("input.images").val(s.find(".images-item.selected").data("image")).trigger("change"),s.closest("form").trigger("keep")}function a(a){s.find(".images-item[data-image='"+a+"']").insertBefore(s.find(".add")).addClass("selected"),s.find(".images-dropdown a[data-filename='"+a+"']").addClass("disabled"),i(),d(),e()}function n(a){s.find(".images-item[data-image='"+a+"']").removeClass("selected"),s.find(".images-dropdown a[data-filename='"+a+"']").removeClass("disabled"),i(),e(),d()}var s=$(this),t="images";if(s.data("images"))return!0;s.data("images",!0),s.find("input.filter").on("input change",function(){filter=$(this).val(),s.find(".images-dropdown .no-images-found").removeClass("da"),""!=filter?($.expr[":"].Contains=function(e,i,d){return $(e).text().toUpperCase().indexOf(d[3].toUpperCase())>=0},s.find(".images-dropdown a").addClass("filtered"),s.find(".images-dropdown a .image:Contains('"+filter+"')").not("disabled").closest("a").removeClass("filtered"),0===s.find(".images-dropdown a").not(".filtered").length&&s.find(".images-dropdown .no-images-found").addClass("da")):s.find(".images-dropdown a").removeClass("filtered")}),s.find("input.filter").keydown(function(e){if(38==e.keyCode&&(s.find(".images-dropdown a.focused").length?s.find(".images-dropdown a.focused").removeClass("focused").prevAll("a").not(".filtered").not(".disabled").first().addClass("focused"):(s.find(".images-dropdown a").removeClass("focused"),s.find(".images-dropdown a").not(".filtered").not(".disabled").last().addClass("focused"))),40==e.keyCode&&(s.find(".images-dropdown a.focused").length?s.find(".images-dropdown a.focused").removeClass("focused").nextAll("a").not(".filtered").not(".disabled").first().addClass("focused"):(s.find(".images-dropdown a").removeClass("focused"),s.find(".images-dropdown a").not(".filtered").not(".disabled").first().addClass("focused"))),13==e.keyCode)return s.find(".images-dropdown a.focused").click(),s.find(".images-dropdown a").removeClass("focused"),!1}),i(),s.find(".images-item .btn.remove").on("click",function(){if(!$(this).is(".ui-sortable-helper .btn")){n($(this).closest(".images-item").data("image"))}return!1}),s.find(".images-add-button").on("click",function(e){event.stopPropagation(),s.find(".images-dropdown").toggleClass("open"),s.find(".images-add-button").toggleClass("open"),s.find("input.filter").focus(),$(document).click(function(e){0===$(e.target).closest(".images-dropdown").length&&(s.find("input.filter").val(""),s.find("input.filter").trigger("change"),s.find("input.filter").blur(),s.find(".images-dropdown").removeClass("open"),s.find(".images-add-button").removeClass("open"))})}),s.find(".images-dropdown a").on("click",function(e){s.find("input.filter").val(""),s.find("input.filter").trigger("change"),a($(this).find(".image").text()),s.find(".images-dropdown").removeClass("open"),s.find(".images-add-button").removeClass("open")});var o=s.find(".imagesgrid"),l=o.find(".sortable"),r=o.find(".images-item"),f=o.data("api");l.find(".images-item").length>1&&l.sortable({tolerance:"pointer",revert:100,handle:"figure",items:".selected",update:function(){d()}}).disableSelection(),s.find(".field-content").droppable({tolerance:"pointer",hoverClass:"over",accept:function(e){return!!$(".sidebar").has(e).length||(!($(this).has(e).length||!e.hasClass("grid-item"))||void 0)},drop:function(e,i){s.find(".add").removeClass("over"),s.find(".images-item").removeClass("over");var d=i.draggable.data("helper");i.draggable.hasClass("grid-item")&&(otherField=i.draggable.closest(".field-with-images"),otherField.find(".images-add-button select option[data-filename='"+d+"']").removeAttr("disabled"),otherField.find(".selected").length<=2&&otherField.find(".imagesgrid").removeClass("filled"),i.draggable.removeClass("selected"),otherField.find("input.images").val(""),otherField.find(".images-item.selected").length>1?(filenames=new Array,otherField.find(".images-item.selected").each(function(){filenames.push($(this).data("image"))}),filenames="- "+filenames.join("\n- "),otherField.find("input.images").val(filenames)):otherField.find("input.images").val(otherField.find(".images-item.selected").data("image")),otherField.closest("form").trigger("keep")),a(d)},over:function(e,i){s.find(".imagesgrid").addClass("filled");var d=s.find(".images-item[data-image='"+i.draggable.data("helper")+"']");if(d.hasClass("selected"))d.addClass("over");else{var a=s.find(".images-item.selected figure");if(a.length)var n=a.height()-4;else{var t=s.find(".images-item").first();t.addClass("selected");var n=t.find("figure").height()-4;t.removeClass("selected")}s.find(".add .inner").height(n),s.find(".add").addClass("over")}},out:function(d,a){e(),i()}})})}}(jQuery);