from flask import Flask, render_template, request, redirect, url_for
import os


app = Flask(__name__,
            static_url_path='', 
            static_folder='./static',)




@app.route('/')
def home_route():
    tweet = "htfvhvgv"
    return render_template('index.html', tweet=tweet)



@app.route('/builder')
def builder_route():
    tweet = "htfvhvgv"
    return render_template('builder.html')




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=os.environ.get('PORT', 5000))