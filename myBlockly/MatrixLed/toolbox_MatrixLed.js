var catMatrixLed = '<xml><category name="%{BKY_MATRIXLED}" colour="%{BKY_MATRIXLED_HUE}">'+
'  <block type="matrix_led_showstate">'+
'    <field name="value_showstate_">1</field>'+
'  </block>'+
'  <block type="matrix_led_initial">'+
'    <value name="left">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="top">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+    
'  <block type="matrix_led_width">'+
'    <value name="value_width_">'+
'      <block type="math_number">'+
'        <field name="NUM">250</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_height">'+
'    <value name="value_height_">'+
'      <block type="math_number">'+
'        <field name="NUM">250</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_matrix_color">'+
'    <field name="L01">#ffffff</field>'+
'    <field name="L06">#ffffff</field>'+
'    <field name="L11">#ffffff</field>'+
'    <field name="L16">#ffffff</field>'+
'    <field name="L21">#ffffff</field>'+
'    <field name="L02">#ffffff</field>'+
'    <field name="L07">#ffffff</field>'+
'    <field name="L12">#ffffff</field>'+
'    <field name="L17">#ffffff</field>'+
'    <field name="L22">#ffffff</field>'+
'    <field name="L03">#ffffff</field>'+
'    <field name="L08">#ffffff</field>'+
'    <field name="L13">#ffffff</field>'+
'    <field name="L18">#ffffff</field>'+
'    <field name="L23">#ffffff</field>'+
'    <field name="L04">#ffffff</field>'+
'    <field name="L09">#ffffff</field>'+
'    <field name="L14">#ffffff</field>'+
'    <field name="L19">#ffffff</field>'+
'    <field name="L24">#ffffff</field>'+
'    <field name="L05">#ffffff</field>'+
'    <field name="L10">#ffffff</field>'+
'    <field name="L15">#ffffff</field>'+
'    <field name="L20">#ffffff</field>'+
'    <field name="L25">#ffffff</field>'+
'  </block>'+
'  <block type="matrix_led_matrixcode_color">'+
'    <field name="L01">#ffffff</field>'+
'    <field name="L06">#ffffff</field>'+
'    <field name="L11">#ffffff</field>'+
'    <field name="L16">#ffffff</field>'+
'    <field name="L21">#ffffff</field>'+
'    <field name="L02">#ffffff</field>'+
'    <field name="L07">#ffffff</field>'+
'    <field name="L12">#ffffff</field>'+
'    <field name="L17">#ffffff</field>'+
'    <field name="L22">#ffffff</field>'+
'    <field name="L03">#ffffff</field>'+
'    <field name="L08">#ffffff</field>'+
'    <field name="L13">#ffffff</field>'+
'    <field name="L18">#ffffff</field>'+
'    <field name="L23">#ffffff</field>'+
'    <field name="L04">#ffffff</field>'+
'    <field name="L09">#ffffff</field>'+
'    <field name="L14">#ffffff</field>'+
'    <field name="L19">#ffffff</field>'+
'    <field name="L24">#ffffff</field>'+
'    <field name="L05">#ffffff</field>'+
'    <field name="L10">#ffffff</field>'+
'    <field name="L15">#ffffff</field>'+
'    <field name="L20">#ffffff</field>'+
'    <field name="L25">#ffffff</field>'+
'  </block>'+  
'  <block type="matrix_led_matrixcode_line_color">'+
'    <field name="L01">#ffffff</field>'+
'    <field name="L02">#ffffff</field>'+
'    <field name="L03">#ffffff</field>'+
'    <field name="L04">#ffffff</field>'+
'    <field name="L05">#ffffff</field>'+
'  </block>'+    
'  <block type="matrix_led_color_on">'+
'    <value name="value_x_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_color_on_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+     
'  <block type="matrix_led_state">'+
'    <value name="value_x_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'  <block type="matrix_led_getcolor">'+
'    <value name="value_x_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'  <block type="matrix_led_clear">'+
'  </block>'+    
'  <block type="matrix_led_marquee_time">'+
'    <value name="value_marquee_time_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="matrix_led_clockwise">'+
'  </block>'+
'  <block type="matrix_led_counterclockwise">'+
'  </block>'+  
'  <block type="matrix_led_verticalflip">'+
'  </block>'+  
'  <block type="matrix_led_horizontalflip">'+
'  </block>'+    
'  <block type="matrix_led_marquee_color">'+
'    <value name="value_marquee_">'+
'      <block type="text_join">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="matrix_led_matrixcode_color">'+
'            <field name="L01">#ffffff</field>'+
'            <field name="L06">#ffffff</field>'+
'            <field name="L11">#ffffff</field>'+
'            <field name="L16">#ffffff</field>'+
'            <field name="L21">#ffffff</field>'+
'            <field name="L02">#ffffff</field>'+
'            <field name="L07">#ffffff</field>'+
'            <field name="L12">#ffffff</field>'+
'            <field name="L17">#ffffff</field>'+
'            <field name="L22">#ffffff</field>'+
'            <field name="L03">#ffffff</field>'+
'            <field name="L08">#ffffff</field>'+
'            <field name="L13">#ffffff</field>'+
'            <field name="L18">#ffffff</field>'+
'            <field name="L23">#ffffff</field>'+
'            <field name="L04">#ffffff</field>'+
'            <field name="L09">#ffffff</field>'+
'            <field name="L14">#ffffff</field>'+
'            <field name="L19">#ffffff</field>'+
'            <field name="L24">#ffffff</field>'+
'            <field name="L05">#ffffff</field>'+
'            <field name="L10">#ffffff</field>'+
'            <field name="L15">#ffffff</field>'+
'            <field name="L20">#ffffff</field>'+
'            <field name="L25">#ffffff</field>'+
'          </block>'+ 
'        </value>'+
'        <value name="ADD1">'+
'          <block type="matrix_led_matrixcode_color">'+
'            <field name="L01">#ffffff</field>'+
'            <field name="L06">#ffffff</field>'+
'            <field name="L11">#ffffff</field>'+
'            <field name="L16">#ffffff</field>'+
'            <field name="L21">#ffffff</field>'+
'            <field name="L02">#ffffff</field>'+
'            <field name="L07">#ffffff</field>'+
'            <field name="L12">#ffffff</field>'+
'            <field name="L17">#ffffff</field>'+
'            <field name="L22">#ffffff</field>'+
'            <field name="L03">#ffffff</field>'+
'            <field name="L08">#ffffff</field>'+
'            <field name="L13">#ffffff</field>'+
'            <field name="L18">#ffffff</field>'+
'            <field name="L23">#ffffff</field>'+
'            <field name="L04">#ffffff</field>'+
'            <field name="L09">#ffffff</field>'+
'            <field name="L14">#ffffff</field>'+
'            <field name="L19">#ffffff</field>'+
'            <field name="L24">#ffffff</field>'+
'            <field name="L05">#ffffff</field>'+
'            <field name="L10">#ffffff</field>'+
'            <field name="L15">#ffffff</field>'+
'            <field name="L20">#ffffff</field>'+
'            <field name="L25">#ffffff</field>'+
'          </block>'+ 
'        </value>'+
'      </block>'+            
'    </value>'+
'  </block>'+
'  <block type="matrix_led_marquee_color_once">'+
'    <value name="value_marquee_">'+
'      <block type="text_join">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="matrix_led_matrixcode_color">'+
'            <field name="L01">#ffffff</field>'+
'            <field name="L06">#ffffff</field>'+
'            <field name="L11">#ffffff</field>'+
'            <field name="L16">#ffffff</field>'+
'            <field name="L21">#ffffff</field>'+
'            <field name="L02">#ffffff</field>'+
'            <field name="L07">#ffffff</field>'+
'            <field name="L12">#ffffff</field>'+
'            <field name="L17">#ffffff</field>'+
'            <field name="L22">#ffffff</field>'+
'            <field name="L03">#ffffff</field>'+
'            <field name="L08">#ffffff</field>'+
'            <field name="L13">#ffffff</field>'+
'            <field name="L18">#ffffff</field>'+
'            <field name="L23">#ffffff</field>'+
'            <field name="L04">#ffffff</field>'+
'            <field name="L09">#ffffff</field>'+
'            <field name="L14">#ffffff</field>'+
'            <field name="L19">#ffffff</field>'+
'            <field name="L24">#ffffff</field>'+
'            <field name="L05">#ffffff</field>'+
'            <field name="L10">#ffffff</field>'+
'            <field name="L15">#ffffff</field>'+
'            <field name="L20">#ffffff</field>'+
'            <field name="L25">#ffffff</field>'+
'          </block>'+ 
'        </value>'+
'        <value name="ADD1">'+
'          <block type="matrix_led_matrixcode_color">'+
'            <field name="L01">#ffffff</field>'+
'            <field name="L06">#ffffff</field>'+
'            <field name="L11">#ffffff</field>'+
'            <field name="L16">#ffffff</field>'+
'            <field name="L21">#ffffff</field>'+
'            <field name="L02">#ffffff</field>'+
'            <field name="L07">#ffffff</field>'+
'            <field name="L12">#ffffff</field>'+
'            <field name="L17">#ffffff</field>'+
'            <field name="L22">#ffffff</field>'+
'            <field name="L03">#ffffff</field>'+
'            <field name="L08">#ffffff</field>'+
'            <field name="L13">#ffffff</field>'+
'            <field name="L18">#ffffff</field>'+
'            <field name="L23">#ffffff</field>'+
'            <field name="L04">#ffffff</field>'+
'            <field name="L09">#ffffff</field>'+
'            <field name="L14">#ffffff</field>'+
'            <field name="L19">#ffffff</field>'+
'            <field name="L24">#ffffff</field>'+
'            <field name="L05">#ffffff</field>'+
'            <field name="L10">#ffffff</field>'+
'            <field name="L15">#ffffff</field>'+
'            <field name="L20">#ffffff</field>'+
'            <field name="L25">#ffffff</field>'+
'          </block>'+ 
'        </value>'+
'      </block>'+            
'    </value>'+
'  </block>'+   
'  <block type="matrix_led_marquee_color_degree">'+
'    <field name="value_marquee_direction_">1</field>'+
'    <value name="value_marquee_degree_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="matrix_led_marquee_stop">'+
'  </block>'+
'  <block type="matrix_led_marquee_resume">'+
'  </block>'+
'  <block type="matrix_led_marquee_reverse">'+
'  </block>'+ 
'  <block type="matrix_led_backcolor">'+
'    <value name="value_color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ffffff</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_color">'+
'    <value name="value_color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+    
'  <block type="matrix_led_matrix">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L06">FALSE</field>'+
'    <field name="L11">FALSE</field>'+
'    <field name="L16">FALSE</field>'+
'    <field name="L21">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L07">FALSE</field>'+
'    <field name="L12">FALSE</field>'+
'    <field name="L17">FALSE</field>'+
'    <field name="L22">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L08">FALSE</field>'+
'    <field name="L13">FALSE</field>'+
'    <field name="L18">FALSE</field>'+
'    <field name="L23">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L09">FALSE</field>'+
'    <field name="L14">FALSE</field>'+
'    <field name="L19">FALSE</field>'+
'    <field name="L24">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'    <field name="L10">FALSE</field>'+
'    <field name="L15">FALSE</field>'+
'    <field name="L20">FALSE</field>'+
'    <field name="L25">FALSE</field>'+
'  </block>'+
'  <block type="matrix_led_matrixcode">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L06">FALSE</field>'+
'    <field name="L11">FALSE</field>'+
'    <field name="L16">FALSE</field>'+
'    <field name="L21">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L07">FALSE</field>'+
'    <field name="L12">FALSE</field>'+
'    <field name="L17">FALSE</field>'+
'    <field name="L22">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L08">FALSE</field>'+
'    <field name="L13">FALSE</field>'+
'    <field name="L18">FALSE</field>'+
'    <field name="L23">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L09">FALSE</field>'+
'    <field name="L14">FALSE</field>'+
'    <field name="L19">FALSE</field>'+
'    <field name="L24">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'    <field name="L10">FALSE</field>'+
'    <field name="L15">FALSE</field>'+
'    <field name="L20">FALSE</field>'+
'    <field name="L25">FALSE</field>'+
'  </block>'+   
'  <block type="matrix_led_matrixcode_line">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'  </block>'+   
'  <block type="matrix_led_sample">'+
'    <field name="value_sample_">♥</field>'+
'  </block>'+  
'  <block type="matrix_led_char">'+
'    <value name="value_char_">'+
'      <block type="text">'+
'        <field name="TEXT">♥</field>'+
'      </block>'+
'    </value>'+
'  </block>'+    
'  <block type="matrix_led_code">'+
'    <value name="value_code_">'+
'      <block type="text">'+
'        <field name="TEXT">0110011110011111111001100</field>'+
'      </block>'+
'    </value>'+
'  </block>'+    
'  <block type="matrix_led_on">'+
'    <value name="value_x_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_off">'+
'    <value name="value_x_off_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_off_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_reverse">'+
'    <value name="value_x_reverse_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_reverse_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_texttocode">'+
'    <value name="value_text_">'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_indentcode">'+
'    <value name="value_indentcode_">'+
'    </value>'+
'  </block>'+  
'  <block type="matrix_led_marquee">'+
'    <value name="value_marquee_">'+
'        <block type="matrix_led_indentcode">'+
'          <value name="value_indentcode_">'+
'            <block type="matrix_led_texttocode">'+
'              <value name="value_text_">'+
'                <block type="text">'+
'                  <field name="TEXT">Happy New Year</field>'+
'                </block>'+
'            </value>'+
'          </block>'+           
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="matrix_led_marquee_once">'+
'    <value name="value_times_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_marquee_">'+
'      <block type="matrix_led_indentcode">'+
'          <value name="value_indentcode_">'+
'            <block type="matrix_led_texttocode">'+
'              <value name="value_text_">'+
'                <block type="text">'+
'                  <field name="TEXT">Happy New Year</field>'+
'                </block>'+
'            </value>'+
'          </block>'+           
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'  <block type="matrix_led_marquee_degree">'+
'    <field name="value_marquee_direction_">1</field>'+
'    <value name="value_marquee_degree_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'  <block type="matrix_led_invert">'+
'  </block>'+  
'  <block type="matrix_led_linechart">'+
'    <value name="value_value1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+    
'  </block>'+   
'  <block type="matrix_led_barchart">'+
'    <value name="value_value1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+    
'  </block>'+   
' </category></xml>';
