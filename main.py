from flask import Flask, jsonify
from flask_cors import CORS
import random


MIN_FURNACE_TEMP = 0
MAX_FURNACE_TEMP = 100

MIN_FURNACE_WEIGHT = 500
MAX_FURNACE_WEIGHT = 1000


app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*": {
        "origins": "*"
    }
})


def get_random_furnace_temp():
    return random.randint(MIN_FURNACE_TEMP, MAX_FURNACE_TEMP)


def get_random_furnace_weight():
    return random.randint(MIN_FURNACE_WEIGHT, MAX_FURNACE_WEIGHT)


@app.route("/api/params")
def hello_world():

    get_temp_with_1_furnace = get_random_furnace_temp()
    get_temp_with_2_furnace = get_random_furnace_temp()
    get_temp_with_3_furnace = get_random_furnace_temp()

    get_weight_with_1_furnace = get_random_furnace_weight()
    get_weight_with_2_furnace = get_random_furnace_weight()
    get_weight_with_3_furnace = get_random_furnace_weight()

    params_list = [
        {
            "id": 1,
            "temp": get_temp_with_1_furnace,
            "weight": get_weight_with_1_furnace,
        },
        {
            "id": 2,
            "temp": get_temp_with_2_furnace,
            "weight": get_weight_with_2_furnace,
        },
        {
            "id": 3,
            "temp": get_temp_with_3_furnace,
            "weight": get_weight_with_3_furnace,
        },
    ]

    return jsonify(params_list)


if __name__ == '__main__':
    app.run()
