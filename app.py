from flask import Flask, render_template

app = Flask(__name__)

#esta es mi primera ruta para logeo
#----------------------------------------
@app.route('/logeo')
def logeo():
    return render_template('logeo.html')

#----------------------------------------
#fin de ruta logeo

@app.route('/principal')
def principal():
    return render_template('usuario/principal.html')

if __name__ == '__main__':
    app.run(debug=True)