var catMQTT = '<xml>'+
	'<category name="%{BKY_CATMQTT}" id="catmqtt" colour="300">'+
	  '<block type="fu_mqtt_setup_js">'+
		'<value name="server">'+
		  '<block type="text">'+
			'<field name="TEXT">wss:\/\/broker.emqx.io:8084\/mqtt</field>'+
		  '</block>'+
		'</value>'+
		'<value name="user">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+
		'<value name="password">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+
		'<statement name="topic_subscribe">'+
		  '<block type="fu_mqtt_subscribe_js">'+
			'<value name="topic">'+
			  '<block type="text">'+
				'<field name="TEXT">yourtopic/data</field>'+
			  '</block>'+
			'</value>'+
		  '</block>'+
		'</statement>'+
	  '</block>'+
	  '<block type="fu_mqtt_subscribe_js">'+
	    '<value name="topic">'+
		  '<block type="text">'+
			'<field name="TEXT">yourtopic/data</field>'+
		  '</block>'+
		'</value>'+		
	  '</block>'+  
	  '<block type="fu_mqtt_gettopic_js">'+
		'<value name="topic">'+
		  '<block type="text">'+
			'<field name="TEXT">yourtopic/data</field>'+
		  '</block>'+
		'</value>'+
	  '</block>'+
	  '<block type="fu_mqtt_getdata_js">'+		
	  '</block>'+	  
	  '<block type="fu_mqtt_senddata_js">'+
	    '<value name="topic">'+
		  '<block type="text">'+
			'<field name="TEXT">yourtopic/data</field>'+
		  '</block>'+
		'</value>'+
	    '<value name="text">'+
		  '<block type="text">'+
			'<field name="TEXT">World Peace</field>'+
		  '</block>'+
		'</value>'+		
	  '</block>'+	
    '</category>'+
'</xml>';	
