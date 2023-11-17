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
        sorted_array, steps = bubble_sort(array_to_sort)
    elif sort_algorithm == 'selection':
        sorted_array, steps = selection_sort(array_to_sort)
    elif sort_algorithm == 'insertion':
        sorted_array, steps = insertion_sort(array_to_sort)
    elif sort_algorithm == 'shell':
        sorted_array, steps = shell_sort(array_to_sort)
    elif sort_algorithm == 'simple counting':
        sorted_array, steps = simple_counting_sort(array_to_sort)
    else:
        sorted_array, steps = bubble_sort(array_to_sort)

    return jsonify({'sorted_array': sorted_array, 'steps': steps})

def bubble_sort(array):
    steps = []
    for i in range(len(array)):
        for j in range(0, len(array) - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                steps.append([elem for elem in array])
    return array, steps

def selection_sort(array):
    steps = []
    size = len(array)
    for step in range(size):
        min_idx = step
        for i in range(step + 1, size):        
            if array[i] < array[min_idx]:
                min_idx = i
        array[step], array[min_idx] = array[min_idx], array[step]
        steps.append([elem for elem in array])
    return array, steps


def insertion_sort(array):
    steps = []
    for step in range(1, len(array)):
        key = array[step]
        j = step - 1
        while j >= 0 and key < array[j]:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = key
        steps.append([elem for elem in array])
    return array, steps


def shell_sort(array):
    steps = [array.copy()]
    n = len(array)
    interval = n // 2
    while interval > 0:
        for i in range(interval, n):
            temp = array[i]
            j = i
            while j >= interval and temp < array[j - interval]:
                array[j] = array[j - interval]
                j -= interval
            array[j] = temp
            steps.append([elem for elem in array])
        interval //= 2
    return array, steps

def simple_counting_sort(array):
    steps = [array.copy()]
    size = len(array)
    output = [0] * size
    count = [0] * 10
    for i in range(0, size):
        count[array[i]] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    i = size - 1
    while i >= 0:
        output[count[array[i]] - 1] = array[i]
        count[array[i]] -= 1
        steps.append([elem for elem in array])
        i -= 1
    for i in range(0, size):
        array[i] = output[i]
    return array, steps

if __name__ == '__main__':
    app.run(debug=True)
