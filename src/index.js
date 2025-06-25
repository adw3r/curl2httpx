import 'htmx.org';
function copy() {
    const input = document.getElementById('result');
    navigator.clipboard.writeText(input.value)
        .then(() => {
            console.log(input.value);
        })
        .catch(err => {
            console.error('Ошибка копирования:', err);
        });
}
window.copy = copy;