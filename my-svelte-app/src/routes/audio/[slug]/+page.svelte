<script lang="ts">
  export let data;
  import { onMount, onDestroy } from 'svelte';
  import { Howl, Howler } from 'howler';
  import arrowRight from '$lib/assets/arrow-right.svg';


  let isPlaying = false;
  let volume = 0.5; // Initial volume
  let duration = 0;
  let currentTime = 0;

  const sound = new Howl({
    src: [data.post.link],
    html5: true,
    volume: volume,
    onplay: () => {
      isPlaying = true;
      const intervalId = setInterval(() => {
        currentTime = sound.seek() + 0.01;
      }, 1000);

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

  sound.on('play', () => {
    const updateCurrentTime = () => {
      currentTime = sound.updateCurrentTime();
    };
    sound.on('play', updateCurrentTime);
    sound.on('seek', updateCurrentTime);
    sound.on('stop', updateCurrentTime);
  });

  function togglePlay() {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
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

  onMount(() => {
    duration = sound.duration();
  });
  onDestroy(() => {
    sound.unload();
  });
</script>

<section class="initial">
  <div class="initial__top">
		<h1 class="initial__title initial__title_right">{data.post.title}</h1>
		<div class="initial__top-link">
			<a href="/video/{data.post.slug}" class="initial__task-link">Перейти к видео<img class="initial__link__arrow" src={arrowRight} alt="arrow"></a>	
		</div>
</div>
  <div class="initial__about">
    <div class="initial__box">
      {@html data.post.content}
      <div>
        <button on:click={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input type="range" min="0" max="1" step="0.01" value={volume} on:input={adjustVolume}>
        <button on:click={toggleMute}>{sound._muted ? 'Unmute' : 'Mute'}</button>
        <input type="range" min="0" max="1" step="0.01" value={currentTime / duration} on:input={seekTo}>
        <span>{(currentTime/60 >= 1 ? `${(Math.floor(currentTime/60))}:${(currentTime%60 < 10 ? '0' : '')}${(currentTime%60).toFixed(0)}` : (currentTime).toFixed(0))} / {(duration/60 >= 1 ? `${(Math.floor(duration/60))}:${(duration%60 < 10 ? '0' : '')}${(duration%60).toFixed(0)}` : (duration).toFixed(0))}</span>
      </div>
    </div>
  </div>
</section>