if(process.env.NODE_ENV === 'production'){
	module.exports = {
		mongoURI: 'mongodb://lk:lk1234@ds131963.mlab.com:31963/Online-diary'
	}
}else{
	module.exports = {
		mongoURI: 'mongodb://localhost/nodejs-dev'
	}
}