import { c as create_ssr_component, o as onDestroy, v as validate_component, b as add_attribute, e as escape } from './ssr-C8JQ9GCh.js';
import { Howl } from 'howler';
import { L as LinkAnimated } from './LinkAnimated-Bkzoc70j.js';

function getCurrentTimeToFormat(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let volume = 0.5;
  let duration = 0;
  let currentTime = 0;
  let intervalId;
  const sound = new Howl({
    src: [data.post.link],
    html5: true,
    volume,
    onplay: () => {
      intervalId = setInterval(
        () => {
          currentTime = sound.seek() + 0.01;
        },
        1e3
      );
    },
    onpause: () => {
      currentTime = sound.seek();
    },
    onend: () => {
      currentTime = sound.seek();
    },
    onseek: () => {
      currentTime = sound.seek();
    },
    onload: () => {
      duration = sound.duration();
    },
    onmute: () => {
      isMuted();
    }
  });
  function isMuted() {
    const muteButton = document.querySelector(".audio__button__mute");
    if (sound._muted) {
      muteButton.classList.add("audio__button__mute_active");
    } else {
      muteButton.classList.remove("audio__button__mute_active");
    }
  }
  onDestroy(() => {
    clearInterval(intervalId);
    sound.unload();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="audio"><div class="audio__player-box">${validate_component(LinkAnimated, "LinkAnimated").$$render(
    $$result,
    {
      link: "/video/" + data.post.slug,
      name: "Далее"
    },
    {},
    {}
  )} <button class="audio__button__play"></button> <input class="audio__input__range audio__input__range_time" type="range" min="0" max="1" step="0.01"${add_attribute("value", currentTime / duration, 0)}> <span class="audio__time">${escape(getCurrentTimeToFormat(currentTime))} / ${escape(getCurrentTimeToFormat(duration))}</span> <button class="audio__button__mute"></button> <input class="audio__input__range audio__input__range_volume" type="range" min="0" max="1" step="0.01"${add_attribute("value", volume, 0)}></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C7e7BGxi.js.map
