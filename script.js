const render = async () => {
  let html = `
    <button
      class="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
      onclick="openZiggy()"
    >
      Open Ziggy
    </button>

    <div
      id="ziggyModal"
      class="fixed opacity-0 pointer-events-none flex justify-center items-center z-50 bottom-24 right-10 w-96 h-4/6 overflow-hidden bg-white border border-gray-300 rounded-md transition-opacity duration-300 ease-in-out"
    >
      <div class="w-full h-full">
        <span
          class="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onclick="closeZiggy()"
          >&times;</span
        >
        <iframe
          src="https://www.oustro.xyz/"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  `;

  document.getElementById("app").innerHTML = html;
};

function openZiggy() {
  var ziggyModal = document.getElementById("ziggyModal");
  ziggyModal.classList.add("opacity-100");
  ziggyModal.classList.remove("pointer-events-none");
}

function closeZiggy() {
  var ziggyModal = document.getElementById("ziggyModal");
  ziggyModal.classList.remove("opacity-100");
  ziggyModal.classList.add("pointer-events-none");
}
