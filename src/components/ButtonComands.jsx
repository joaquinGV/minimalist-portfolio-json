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
      class="fixed bottom-3 right-3 sm:hidden bg-gray-200 m-auto text-gray-500 text-2xl hover:text-gray-900 border border-gray-300 rounded-3xl px-3 py-2 items-center align-middle fill-none"
    >
      ⌘
    </button>
  );
};

export default ButtonComands;
