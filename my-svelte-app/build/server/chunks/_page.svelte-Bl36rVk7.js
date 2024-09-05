import { c as create_ssr_component, o as onDestroy, e as escape, b as add_attribute } from './ssr-DuKu5otS.js';
import { Howl } from 'howler';
import { a as arrowRight } from './arrow-right-CJI_SI3n.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let isPlaying = false;
  let volume = 0.5;
  let duration = 0;
  let currentTime = 0;
  const sound = new Howl({
    src: [data.post.link],
    html5: true,
    volume,
    onplay: () => {
      isPlaying = true;
      const intervalId = setInterval(
        () => {
          currentTime = sound.seek() + 0.01;
        },
        1e3
      );
      onDestroy(() => {
        clearInterval(intervalId);
      });
    },
    onpause: () => {
      isPlaying = false;
      currentTime = sound.seek();
    },
    onend: () => {
      isPlaying = false;
      currentTime = sound.seek();
    },
    onseek: () => {
      currentTime = sound.seek();
    },
    onload: () => {
      duration = sound.duration();
    }
  });
  sound.on("play", () => {
    const updateCurrentTime = () => {
      currentTime = sound.updateCurrentTime();
    };
    sound.on("play", updateCurrentTime);
    sound.on("seek", updateCurrentTime);
    sound.on("stop", updateCurrentTime);
  });
  onDestroy(() => {
    sound.unload();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="initial"><div class="initial__top"><h1 class="initial__title initial__title_right">${escape(data.post.title)}</h1> <div class="initial__top-link"><a href="${"/video/" + escape(data.post.slug, true)}" class="initial__task-link">Перейти к видео<img class="initial__link__arrow"${add_attribute("src", arrowRight, 0)} alt="arrow"></a></div></div> <div class="initial__about"><div class="initial__box"><!-- HTML_TAG_START -->${data.post.content}<!-- HTML_TAG_END --> <div><button>${escape(isPlaying ? "Pause" : "Play")}</button> <input type="range" min="0" max="1" step="0.01"${add_attribute("value", volume, 0)}> <button>${escape(sound._muted ? "Unmute" : "Mute")}</button> <input type="range" min="0" max="1" step="0.01"${add_attribute("value", currentTime / duration, 0)}> <span>${escape(currentTime / 60 >= 1 ? `${Math.floor(currentTime / 60)}:${currentTime % 60 < 10 ? "0" : ""}${(currentTime % 60).toFixed(0)}` : currentTime.toFixed(0))} / ${escape(duration / 60 >= 1 ? `${Math.floor(duration / 60)}:${duration % 60 < 10 ? "0" : ""}${(duration % 60).toFixed(0)}` : duration.toFixed(0))}</span></div></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bl36rVk7.js.map
