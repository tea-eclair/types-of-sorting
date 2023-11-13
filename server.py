from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/sort/<algorithm>')
def sort(algorithm):
    array_to_sort = [64, 25, 12, 22, 11]

    if algorithm == 'bubble':
        sorted_array = bubble_sort(array_to_sort)
    elif algorithm == 'selection':
        sorted_array = selection_sort(array_to_sort)
    elif algorithm == 'insertion':
        sorted_array = insertion_sort(array_to_sort)
    elif algorithm == 'shell':
        sorted_array = shell_sort(array_to_sort)
    else:
        sorted_array = simple_counting_sort(array_to_sort)

    return jsonify(sorted_array)

def bubble_sort(arr):
    # Реализация сортировки пузырьком
    return arr

def selection_sort(arr):
    # Реализация сортировки выбором
    return arr

def insertion_sort(arr):
    # Реализация сортировки вставками
    return arr

def shell_sort(arr):
    # Реализация сортировки Шелла
    return arr

def simple_counting_sort(arr):
    # Реализация сортировки подсчетом
    return arr

if __name__ == '__main__':
    app.run(debug=True)
