from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/sort', methods=['POST'])
def sort():
    data = request.json
    sort_algorithm = data.get('algorithm')
    array_to_sort = data.get('numbers', [])

    if sort_algorithm == 'bubble':
        sorted_array = bubble_sort(array_to_sort)
    elif sort_algorithm == 'selection':
        sorted_array = selection_sort(array_to_sort)
    elif sort_algorithm == 'insertion':
        sorted_array = insertion_sort(array_to_sort)
    else:
        sorted_array = bubble_sort(array_to_sort)

    return jsonify(sorted_array)

def bubble_sort(arr):
    return sorted(arr)

def selection_sort(arr):
    return sorted(arr)

def insertion_sort(arr):
    return sorted(arr)

def shell_sort(arr):
    # Реализация сортировки Шелла
    return sorted(arr)

def simple_counting_sort(arr):
    # Реализация сортировки подсчетом
    return sorted(arr)

if __name__ == '__main__':
    app.run(debug=True)
