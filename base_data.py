from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

firebase_url = "https://ercobasedata-default-rtdb.firebaseio.com/"


@app.route('/proyectos', methods=['GET'])
def obtener_proyectos():
    response = requests.get(firebase_url)
    data = response.json()
    return jsonify(data)


@app.route('/proyectos', methods=['POST'])
def crear_proyecto():
    nuevo_proyecto = request.json
    response = requests.post(firebase_url, json=nuevo_proyecto)
    return jsonify(response.json())


@app.route('/proyectos/<proyecto_id>', methods=['PUT'])
def actualizar_proyecto(proyecto_id):
    proyecto_actualizado = request.json
    proyecto_url = f"{firebase_url[:-5]}/{proyecto_id}.json"
    response = requests.put(proyecto_url, json=proyecto_actualizado)
    return jsonify(response.json())


@app.route('/proyectos/<proyecto_id>', methods=['DELETE'])
def eliminar_proyecto(proyecto_id):
    proyecto_url = f"{firebase_url[:-5]}/{proyecto_id}.json"
    response = requests.delete(proyecto_url)
    return jsonify(response.json())


if __name__ == '__main__':
    app.run(debug=True)
