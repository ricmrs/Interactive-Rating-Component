const options = document.getElementById('options');

function createOptionText(number) {
  return `
          <input 
            type="radio" 
            id="number${number}" 
            name="numbers" 
            value="${number}"
            class="input"
          >
          <label for="number${number}" class="number">${number}</label>
         `
}

for (let index = 1; index <= 5; index++) {
  options.insertAdjacentHTML('beforeend', createOptionText(index));
}
