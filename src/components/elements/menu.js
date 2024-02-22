function createMenuElement(result) {
  const element = document.createElement('ul')
  element.classList.add(['grid', 'grid-flow-row', 'grid-cols-4', 'gap-2', 'max-sm:grid-cols-1', 'max-md:grid-cols-3'])
  result.forEach((item) => {
    element.innerHTML += `
          <li>
            <button class="w-full px-2 py-1 secondary-button" type="button">${item.name}</button>
          </li>
        `
  })
  return element
}

export { createMenuElement }
