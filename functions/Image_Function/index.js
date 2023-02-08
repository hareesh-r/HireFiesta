const express = require('express')
var catalyst_sdk = require('zcatalyst-sdk-node');

const app = express()

app.get('/{id}',(req,res)=>{
	var catalyst = catalyst_sdk.initialize(req); 
	let filestore = catalyst.filestore();
	let folder = filestore.folder(IMAGE_FOLDER);
	let downloadPromise = folder.downloadFile(id);
	downloadPromise.then((fileObject) => {
            res.contentType('image/jpeg')
			res.send(Buffer.from(fileObject,'binary'))
        });
	downloadPromise.catch((e)=>{
		res.status(400)
		res.send({"message":"refer logs"})
		console.log(e)
		})
	
})

module.exports = app