from bottle import Bottle, run

app = Bottle()

@app.route('/hello')
def hello():
	return "Khaled is in more"
	
@app.route('/hello/more')
def index():
	return "Where is Khaled?"
	
run(app, host='localhost', port=8080)