const ButtonComands = () => {
  const ninja = document.querySelector("ninja-keys");

  const handleClick = () => {
    ninja.open();
    ninja.hotKeysJoinedView = false;

    if (!ninja.querySelector('div[slot="footer"]')) {
      // create div, set attribute slot with value "footer" and inyect as children to ninja
      const slot = document.createElement("div");
      slot.setAttribute("slot", "footer");
      ninja.appendChild(slot);

      const actions = ninja.shadowRoot.querySelectorAll("ninja-action");
      actions.forEach((element) => {
        const kbd = element.shadowRoot.querySelector("kbd");
        kbd.textContent = "";
      });
    }
  };
  return (
    <button
      onClick={handleClick}
      class="fixed bottom-3 right-3 lg:hidden bg-gray-200 m-auto text-gray-500 text-3xl hover:text-gray-900 border border-gray-300 rounded-2xl px-3 py-2 items-center align-middle fill-none lg:px-1"
    >
      ⌘
    </button>
  );
};

export default ButtonComands;
