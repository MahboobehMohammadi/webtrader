define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/cks/cks.css"]),require(["text!charts/indicators/cks/cks.html"],function(e){var f="#cd0a0a",g="#57a125";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#cks_short_stop_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#cks_short_stop_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted},ok:function(b,c){a("#cks_short_stop_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted}}),e.find("#cks_long_stop_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#cks_long_stop_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted},ok:function(b,c){a("#cks_long_stop_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted}});var h="Solid";a("#cks_dashStyle").ddslick({imagePosition:"left",width:158,background:"white",onSelected:function(b){a("#cks_dashStyle .dd-selected-image").css("max-width","125px"),h=b.selectedData.value}}),a("#cks_dashStyle .dd-option-image").css("max-width","125px"),e.dialog({autoOpen:!1,resizable:!1,width:315,modal:!0,my:"center",at:"center",of:window,dialogClass:"cks-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".cks_input_width_for_period").each(function(){if(!isNumericBetween(a(this).val(),parseInt(a(this).attr("min")),parseInt(a(this).attr("max")))){var b=a(this);return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void(c=!1)}}),c){var d={period:parseInt(e.find("#cks_period").val()),maxMinPeriod:parseInt(e.find("#cks_max_min_period").val()),multiplier:parseInt(e.find("#cks_multiplier").val()),shortStopStroke:f,longStopStroke:g,strokeWidth:parseInt(e.find("#cks_strokeWidth").val()),dashStyle:h};a(a(".cks").data("refererChartID")).highcharts().series[0].addIndicator("cks",d),b.call(e)}}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu({width:160}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".cks").length?void c(b,this.open):void a(".cks").data("refererChartID",b).dialog("open")}}});