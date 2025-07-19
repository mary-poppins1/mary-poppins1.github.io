async function load_cources() {
    const response = await fetch("cources.json");
    const cources = await response.json();

    const cources_container = document.getElementById("course-list");

    cources.forEach(course => {
        const block = document.createElement('div');
        block.className = "bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-xs w-full";
        block.innerHTML = `
        <img src="cources/${course.name}1.jpg" alt="обложка курса" class="w-full h-48 object-cover">
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
            <p class="text-gray-600 mb-4 flex-grow">
              ${course.description}
            </p>
            <div class="flex flex-col gap-3 mt-auto">
              <a href="#contact">
              <button class="purchase-btn w-full text-white text-base font-medium px-3 py-2 rounded-full transition-all duration-200" style="background: linear-gradient(45deg, #2563eb, #3b82f6, #60a5fa);">Приобрести</button>
              </a>
              <button class="w-full text-blue-600 border-2 border-blue-600 rounded-full px-2 py-1 text-base font-medium hover:bg-blue-50 transition-all duration-200">Подробнее</button>
            </div>
          </div>
        `;

        cources_container.appendChild(block);
        // Scroll to contact section on purchase
        block.querySelector('.purchase-btn').addEventListener('click', () => {
            const courseOptions = document.getElementById('course-options');
            const courseDropdownArrow = document.getElementById('course-dropdown-arrow');
            const courseDropdown = document.getElementById('course-dropdown');

            const selectedCourse = document.getElementById('selected-course');
            selectedCourse.textContent = course.title;
            selectedCourse.classList.remove('text-gray-400');
            selectedCourse.classList.add('text-gray-800');
            courseOptions.classList.add('hidden');
            courseDropdownArrow.style.transform = 'rotate(0deg)';
            courseDropdown.classList.remove('border-gray-200');
            courseDropdown.classList.add('border-green-500');
    
        });
    });
}

window.addEventListener("DOMContentLoaded", load_cources);