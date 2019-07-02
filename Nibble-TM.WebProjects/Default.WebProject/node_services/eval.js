exports.handler = function(packet,response,sendResponse) {
	var e;
	var attachments = null;
	try {
	    response.result = eval(packet.content);
	    if( Buffer.isBuffer(response.result) ) {
	    	attachments = [{ name : 'data' , type : 'binary' , data : response.result }];
	    	response.result = 'binary data in attachment';	    	
	    }
	} catch( e ) {
	    response.error = e.message;
	}
	sendResponse(response,attachments);
};