<script lang="ts">
  export let data;
  import { onMount, onDestroy } from 'svelte';
  import { Howl } from 'howler';
  import LinkAnimated from "../../../components/LinkAnimated.svelte";





  let isPlaying = false;
  let volume = 0.5; // Initial volume
  let duration = 0;
  let currentTime = 0;
  let intervalId;

  const sound = new Howl({
    src: [data.post.link],
    html5: true,
    volume: volume,
    onplay: () => {
      isPlaying = true;
      intervalId = setInterval(() => {
        currentTime = sound.seek() + 0.01;
      }, 1000);
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
    },
    onmute: () => {
      isMuted();
    }
  });

  function togglePlay() {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    console.log(sound._muted)
  }

  function adjustVolume(event) {
    volume = parseFloat(event.target.value);
    sound.volume(volume);
  }

  function toggleMute() {
    sound.mute(!sound._muted);
  }

  function seekTo(event) {
    const seekTime = parseFloat(event.target.value) * duration;
    sound.seek(seekTime);
  }

  function getCurrentTimeToFormat(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function isMuted() {
    const muteButton = document.querySelector('.audio__button__mute');
    if (sound._muted) {
      muteButton.classList.add('audio__button__mute_active');
    } else {
      muteButton.classList.remove('audio__button__mute_active');
    }
  }

  onMount(() => {
    duration = sound.duration();
    intervalId = setInterval(() => {
      currentTime = sound.seek() + 0.01;
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
    sound.unload();
  });
</script>

  <section class="audio">
    <div class="audio__player-box">
      <LinkAnimated link='/video/{data.post.slug}' name='Далее'/>
      <button class="audio__button__play" on:click={togglePlay}></button>
      <input class="audio__input__range audio__input__range_time" type="range" min="0" max="1" step="0.01" value={currentTime / duration} on:input={seekTo}>
      <span class="audio__time">{getCurrentTimeToFormat(currentTime)} / {getCurrentTimeToFormat(duration)}</span>
      <button class="audio__button__mute" on:click={toggleMute}></button>
      <input class="audio__input__range audio__input__range_volume" type="range" min="0" max="1" step="0.01" value={volume} on:input={adjustVolume}>
    </div>
  </section>