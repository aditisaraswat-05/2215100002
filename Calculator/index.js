function fetchNumbers() {
    const type = document.getElementById('numberType').value;
    fetch(`/numbers/${type}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Error: " + data.error);
                return;
            }
            document.getElementById('numbers').textContent = data.numbers.join(', ');
            document.getElementById('average').textContent = data.avg;
        })
        .catch(err => {
            alert("Request failed: " + err.message);
        });
}
