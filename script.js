const renderZiggy = async (e) => {
  let html = `
    <div class="fixed bg-gradient-to-r shadow bottom-10 right-10 from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full p-[1px]">
      <div
        class="bg-slate-100 hover:bg-slate-200 text-white p-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        onclick="openZiggy()"
      >
        <img src="https://ziggy.oustro.xyz/logo.svg" alt="Ziggy Logo" width="40" height="40">
      </div>
    </div>

    <div
      id="ziggyModal"
      class="fixed opacity-0 pointer-events-none flex justify-center items-center z-50 bottom-32 right-10 w-96 h-4/6 overflow-hidden bg-white border border-gray-300 rounded-md transition-opacity duration-300 ease-in-out"
    >
      <div class="w-full h-full">
        <span
          class="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onclick="closeZiggy()"
          >&times;</span
        >
        <iframe
          src="https://ziggy.oustro.xyz/t/${e}?embedded=true"
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
