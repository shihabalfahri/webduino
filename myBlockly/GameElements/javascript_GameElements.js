Blockly.JavaScript['table_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_trcount_ = Blockly.JavaScript.valueToCode(block, 'trcount_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tdcount_ = Blockly.JavaScript.valueToCode(block, 'tdcount_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_bgcolor_ = Blockly.JavaScript.valueToCode(block, 'bgcolor_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'table_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_trcount_ + ',' + value_tdcount_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_bgcolor_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['table_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['table_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_clear'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['table_change_colsrows'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_cmd_ = block.getFieldValue('cmd_');  
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_change_colsrows(' + value_id_ + ',"'+ value_target_ + '","' + value_cmd_ + '",' + value_index_+ ');\n'
  return code;
};

Blockly.JavaScript['table_td_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['table_border_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_border_set(' + value_id_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_border_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_border_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_insert_img'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'table_td_insert_img(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_imgid_ + ',' + value_url_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_img_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_img_move(' + value_id_ + ','+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_canvas_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_canvasid_ = Blockly.JavaScript.valueToCode(block, 'canvasid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_canvas_move(' + value_id_ + ','+ value_canvasid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_copy_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_property_=="copy")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\n';
  else if (value_property_=="move")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\ntable_td_set(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML","");\n'; 
  return code;
};

Blockly.JavaScript['table_td_img_get'] = function (block) {
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_img_get('+ value_imgid_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_td_insert_text'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontname_ = Blockly.JavaScript.valueToCode(block, 'fontname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_insert_text(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  return code;
};

Blockly.JavaScript['table_td_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_get(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_+ '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_td_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if ((table_get(' + value_id_ + ',"onclick[Column,Row]")) == "'+ value_x_ + ',' + value_y_ + '") {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['table_td_clear'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_clear(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['music_create'] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_loop = Blockly.JavaScript.valueToCode(block, 'loop_', Blockly.JavaScript.ORDER_ATOMIC);
  if ((value_loop=="true")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setInterval(function(){\nmusic_create(' + value_url + ');},' + value_length + ');\n';
  else if ((value_loop=="false")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setTimeout(function(){\nmusic_delete();},' + value_length + ');\n';
  else
    var code = 'music_create(' + value_url + ');\n';
  return code;
};

Blockly.JavaScript['music_delete'] = function (block) {
  var code = 'clearInterval(musicTimer);\nmusic_delete();\n';
  return code;
};

Blockly.JavaScript['canvas_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'canvas_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'canvas_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canvas_line'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'canvas_line(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_x1_ + ',' + value_y1_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_rect'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_rect(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_arc'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r_ = Blockly.JavaScript.valueToCode(block, 'r_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sAngle_ = Blockly.JavaScript.valueToCode(block, 'sAngle_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_eAngle_ = Blockly.JavaScript.valueToCode(block, 'eAngle_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_counterclockwise_ = Blockly.JavaScript.valueToCode(block, 'counterclockwise_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_arc(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_r_ + ',' + value_sAngle_ + ',' + value_eAngle_ + ',' + value_counterclockwise_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_img_url'] = function (block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_img_url(' + value_url_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_img'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sx_ = Blockly.JavaScript.valueToCode(block, 'sx_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sy_ = Blockly.JavaScript.valueToCode(block, 'sy_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swidth_ = Blockly.JavaScript.valueToCode(block, 'swidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sheight_ = Blockly.JavaScript.valueToCode(block, 'sheight_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_img(' + value_id_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_text'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_fontname_ = Blockly.JavaScript.valueToCode(block, 'fontname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_textalign_ = block.getFieldValue('textalign_');
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_text(' + value_id_ + ',' + value_text_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_fontname_ + ','+ value_fontsize_ + ',"' + value_textalign_ + '",'+ value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_quadraticcurve'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.JavaScript.valueToCode(block, 'cp1x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.JavaScript.valueToCode(block, 'cp1y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_quadraticcurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_beziercurve'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.JavaScript.valueToCode(block, 'cp1x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.JavaScript.valueToCode(block, 'cp1y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp2x_ = Blockly.JavaScript.valueToCode(block, 'cp2x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp2y_ = Blockly.JavaScript.valueToCode(block, 'cp2y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_beziercurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ','+ value_cp2x_ + ',' + value_cp2y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_clearrect'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'canvas_clearrect(' + value_id_ + ',' + value_x_ + ','+ value_y_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_clear'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if (canvas_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['canvas_onclick_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'canvas_onclick_get(' + value_id_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canvas_getcolor'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'canvas_getcolor(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'image_create(' + value_id_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['image_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'image_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['image_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_delete'] = function(block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'image_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['elements_collision'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_element2_ = block.getFieldValue('element2_');
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');
  if (value_element1_=="table")
    var obj1= 'gametable_';
  else if (value_element1_=="canvas")
    var obj1= 'gamecanvas_';
  else if (value_element1_=="image")
    var obj1= 'gameimage_';
  else if (value_element1_=="button")
    var obj1= 'gamebutton_';
  else if (value_element1_=="color")
    var obj1= 'gamecolor_';
  else if (value_element1_=="select")
    var obj1= 'gameselect_';
  else if (value_element1_=="range")
    var obj1= 'gamerange_';
  else if (value_element1_=="text")
    var obj1= 'gametext_';   
  else if (value_element1_=="div")
    var obj1= 'gamediv_';     
  if (value_element2_=="table")
    var obj2= 'gametable_';
  else if (value_element2_=="canvas")
    var obj2= 'gamecanvas_';
  else if (value_element2_=="image")
    var obj2= 'gameimage_';
  else if (value_element2_=="button")
    var obj2= 'gamebutton_';
  else if (value_element2_=="color")
    var obj2= 'gamecolor_';
  else if (value_element2_=="select")
    var obj2= 'gameselect_';
  else if (value_element2_=="range")
    var obj2= 'gamerange_';
  else if (value_element2_=="text")
    var obj2= 'gametext_';  
  else if (value_element2_=="div")
    var obj2= 'gamediv_';  
  var code = 'elements_collision("'+obj1+'",' + value_id1_ + ',"'+obj2+'",' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['elements_collision_color'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_element1_=="table")
    var obj1= 'gametable_';
  else if (value_element1_=="canvas")
    var obj1= 'gamecanvas_';
  else if (value_element1_=="image")
    var obj1= 'gameimage_';
  else if (value_element1_=="button")
    var obj1= 'gamebutton_';
  else if (value_element1_=="color")
    var obj1= 'gamecolor_';
  else if (value_element1_=="select")
    var obj1= 'gameselect_';
  else if (value_element1_=="range")
    var obj1= 'gamerange_';
  else if (value_element1_=="text")
    var obj1= 'gametext_';   
  else if (value_element1_=="div")
    var obj1= 'gamediv_';     
  var code = 'elements_collision_color("'+obj1+'",' + value_id1_ + ',' + value_id2_ + ',' + value_color_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_collision'] = function (block) {
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');
  var code = 'elements_collision("gameimage_",' + value_id1_ + ',"gameimage_",' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_boundary'] = function (block) {
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'image_boundary(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['image_boundary_collision'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_boundary_collision(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_boundary_collision_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if (image_boundary_collision('+value_id_+',"'+value_property_+'")==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['image_sys_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_sys_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_onclick_listener'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};

Blockly.JavaScript['image_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if (image_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['image_onclick_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'image_onclick_get(' + value_id_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_property_=="left")
    var code = 'image_set('+value_id_+',"left",(image_get('+value_id_+',"left")-'+value_step_+'));\n';
  else if (value_property_=="right")
    var code = 'image_set('+value_id_+',"left",(image_get('+value_id_+',"left")+'+value_step_+'));\n';
  else if (value_property_=="up")
    var code = 'image_set('+value_id_+',"top",(image_get('+value_id_+',"top")-'+value_step_+'));\n';
  else if (value_property_=="down")
    var code = 'image_set('+value_id_+',"top",(image_get('+value_id_+',"top")+'+value_step_+'));\n';
  return code;
};

Blockly.JavaScript['image_resize'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_percentage_ = Blockly.JavaScript.valueToCode(block, 'percentage_', Blockly.JavaScript.ORDER_ATOMIC);
  value_percentage_ = value_percentage_/100;
  var code = 'image_set('+value_id_+',"width",((image_get('+value_id_+',"width")) * '+value_percentage_+'));\nimage_set('+value_id_+',"height",((image_get('+value_id_+',"height")) * '+value_percentage_+'));\n';
  return code;
};

Blockly.JavaScript['mouse_coordinate_get_start'] = function (block) {
  var code = 'mouse_coordinate_get_start();\n';
  return code;
};

Blockly.JavaScript['mouse_coordinate_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'mouse_coordinate_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['document_timer_novar'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_once_novar'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer'] = function (block) {
  var variable_myTimer_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('myTimer_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_myTimer_+' = setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_once'] = function (block) {
  var variable_myTimerOnce_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('myTimerOnce_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_myTimerOnce_+' = setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_stop'] = function (block) {
  var variable_myTimer_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('myTimer_'), Blockly.Variables.NAME_TYPE);
  var code = 'clearInterval(' + variable_myTimer_ + ');\n';
  return code;
};

Blockly.JavaScript['text_to_number'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'value_text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'text_to_number(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['loop_break'] = function (block) {
  var code = 'break;\n';
  return code;
};

Blockly.JavaScript['loop_continue'] = function (block) {
  var code = 'continue;\n';
  return code;
};

Blockly.JavaScript['function_return'] = function (block) {
  var value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return ' + value_ + ';\n';
  return code;
};

Blockly.JavaScript['move_to_mouse'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_position = block.getFieldValue('position');
  if (value_position=="center")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="up")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")));\n';
  else if (value_position=="down")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")-image_get('+value_id_+',"height")));\n';
  else if (value_position=="left")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="right")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="upperLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")));\n';
  else if (value_position=="lowerLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")-image_get('+value_id_+',"height")));\n';
  else if (value_position=="upperRight")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")));\n';
  else if (value_position=="lowerRight")
   var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("X")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("Y")-image_get('+value_id_+',"height")));\n';
  return code;
};

Blockly.JavaScript['move_to_coordinate'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'image_set('+value_id_+',"left",'+value_left_+');\nimage_set('+value_id_+',"top",'+value_top_+');\n';
  return code;
};

Blockly.JavaScript['rotatez_degrees'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_degrees_ = Blockly.JavaScript.valueToCode(block, 'degrees_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'image_set('+value_id_+',"rotateZ",'+value_degrees_+');\n';
  return code;
};

Blockly.JavaScript['rotate_vertical_flip'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateX")<=90||image_get('+value_id_+',"rotateX")=="") \n  image_set('+value_id_+',"rotateX",180); \nelse \n  image_set('+value_id_+',"rotateX",0);\n';
  return code;
};

Blockly.JavaScript['rotate_horizontal_flip'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateY")<=90||image_get('+value_id_+',"rotateY")=="") \n  image_set('+value_id_+',"rotateY",180); \nelse \n  image_set('+value_id_+',"rotateY",0);\n';
  return code;
};

Blockly.JavaScript['button_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bgcolor_ = Blockly.JavaScript.valueToCode(block, 'bgcolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'button_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_bgcolor_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['button_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'button_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['button_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'button_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['button_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'button_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['button_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamebutton_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ngamebutton_'+value_id_+'.addEventListener("click", gamebutton_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['async_function'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  
  var value_parameter_ = Blockly.JavaScript.valueToCode(block, 'parameter_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function '+value_name_+'('+value_parameter_+'){\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['call_async_function'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);   
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  var value_parameter_ = Blockly.JavaScript.valueToCode(block, 'parameter_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);  
  var code = value_name_ + '('+value_parameter_+');\n';
  return code;
};

Blockly.JavaScript['transform_async_function'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = statements_do_.replace(/function/g,"async function").replace(/async async/g,"async");
  return code;
};


Blockly.JavaScript['element_event'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
  if (element=="window")
    var obj="window";
  else if (element=="document")
    var obj="document";
  else if (element=="table")
    var obj="document.getElementById('gametable_'+"+value_id_+")";  
  else if (element=="canvas")
    var obj="document.getElementById('gamecanvas_'+"+value_id_+")"; 
  else if (element=="image")
    var obj="document.getElementById('gameimage_'+"+value_id_+")";
  else if (element=="button")
    var obj="document.getElementById('gamebutton_'+"+value_id_+")"; 
  else if (element=="color")
    var obj="document.getElementById('gamecolor_'+"+value_id_+")";  
  else if (element=="select")
    var obj="document.getElementById('gameselect_'+"+value_id_+")"; 
  else if (element=="range")
    var obj="document.getElementById('gamerange_'+"+value_id_+")"; 
  else if (element=="text")
    var obj="document.getElementById('gametext_'+"+value_id_+")"; 
  else if (element=="div")
    var obj="document.getElementById('gamediv_'+"+value_id_+")";  
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
 
  var code = 'async function '+element+'_'+value_id_+'_'+event+'(event) {\n' + statement + '};\n'+obj+'.addEventListener("'+event+'", '+element+'_'+value_id_+'_'+event+', true);\n';
  return code;
};

Blockly.JavaScript['element_event_stop'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  if (element=="window")
    var obj="window";
  else if (element=="document")
    var obj="document";
  else if (element=="table")
    var obj="document.getElementById('gametable_'+"+value_id_+")";  
  else if (element=="canvas")
    var obj="document.getElementById('gamecanvas_'+"+value_id_+")"; 
  else if (element=="image")
    var obj="document.getElementById('gameimage_'+"+value_id_+")";
  else if (element=="button")
    var obj="document.getElementById('gamebutton_'+"+value_id_+")"; 
  else if (element=="color")
    var obj="document.getElementById('gamecolor_'+"+value_id_+")";  
  else if (element=="select")
    var obj="document.getElementById('gameselect_'+"+value_id_+")"; 
  else if (element=="range")
    var obj="document.getElementById('gamerange_'+"+value_id_+")"; 
  else if (element=="text")
    var obj="document.getElementById('gametext_'+"+value_id_+")";  
  else if (element=="div")
    var obj="document.getElementById('gamediv_'+"+value_id_+")";   
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);

  var code = obj+'.removeEventListener("'+event+'", '+element+'_'+value_id_+'_'+event+', true);\n';
  return code;
};

Blockly.JavaScript['colorpicker_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'colorpicker_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['colorpicker_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'colorpicker_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['colorpicker_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'colorpicker_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['colorpicker_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'colorpicker_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['colorpicker_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamecolor_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ngamecolor_'+value_id_+'.addEventListener("change", gamecolor_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['select_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_option_ = Blockly.JavaScript.valueToCode(block, 'option_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'select_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_option_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['select_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'select_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['select_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'select_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['select_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'select_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['select_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gameselect_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ngameselect_'+value_id_+'.addEventListener("change", gameselect_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['range_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_min_ = Blockly.JavaScript.valueToCode(block, 'min_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'range_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['range_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'range_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['range_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'range_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['range_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'range_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['range_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamerange_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ngamerange_'+value_id_+'.addEventListener("change", gamerange_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['text_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'text_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['text_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'text_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['text_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'text_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['text_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'text_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['text_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gametext_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ngametext_'+value_id_+'.addEventListener("change", gametext_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['div_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.JavaScript.valueToCode(block, 'innerHTML_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'div_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['div_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'div_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['div_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'div_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['div_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'div_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['color_hextorgb'] = function (block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'HextoRgb(' + value_color_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['time_delay'] = function (block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'await delay(' + seconds + ');\n';
  return code;
};
