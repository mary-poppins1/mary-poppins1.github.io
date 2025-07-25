async function load_cources() {
    const response = await fetch("cources.json");
    const cources = await response.json();

    const cources_container = document.getElementById("course-list");

    cources.forEach(course => {
        const block = document.createElement('div');
        block.className = "bg-white rounded-xl shadow-md overflow-hidden flex flex-row md:flex-col max-w-full md:max-w-xs w-full";
        block.innerHTML = `
        <img src="${(course.images && course.images.length > 0) ? course.images[0] : "https://via.placeholder.com/150"}" alt="обложка курса" class="w-32 md:w-full md:h-48 object-cover md:object-cover flex-shrink-0">
          <div class="p-2 md:p-4 flex flex-col flex-grow">
            <h3 class="text-base text-xl md:text-xl font-bold mb-1 md:mb-2">${course.title}</h3>
            <p class="text-gray-600 mb-2 md:mb-4 flex-grow text-xs md:text-sm">
              ${course.description}
            </p>
            <div class="flex flex-col gap-2 md:gap-3 mt-auto">
              <div class="flex items-center gap-2">
                <div class="bg-green-500 text-white px-2 py-1 rounded-lg text-lg md:text-base font-bold">
                  ${course.price} $
                </div>
                <a href="#contact" class="flex-1">
                  <button class="purchase-btn w-full text-white text-lg md:text-base font-medium px-2 py-1 md:px-3 md:py-2 rounded-full transition-all duration-200" style="background: linear-gradient(45deg, #2563eb, #3b82f6, #60a5fa);">Приобрести</button>
                </a>
              </div>
              <button class="w-full text-blue-600 border-2 border-blue-600 rounded-full px-2 py-1 text-xs md:text-base font-bold hover:bg-blue-50 transition-all duration-200">Подробнее</button>
            </div>
          </div>
        `;

        cources_container.appendChild(block);
        // Scroll to contact section on purchase
        block.querySelector('.purchase-btn').addEventListener('click', () => {
            const courseOption = document.querySelector(`.course-option[data-value="${course.id}"]`);
            const selectedAction = document.getElementById('selected-action');
            const courseSelection = document.getElementById('course-selection');
            const btnText = document.getElementById('btn-text');

            window.select_some_course.call(courseOption);
            selectedAction.textContent = 'Приобрести курс';
            selectedAction.dataset.value = 'buy';

            courseSelection.style.display = 'block';
            btnText.textContent = 'Приобрести курс';
        });
    });
}

window.addEventListener("DOMContentLoaded", load_cources);