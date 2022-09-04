import API from '../../Api/api';

const api = new API();

type StatState = {
  goods: number;
  bads: number;
  best: number;
};

async function getWordInfo(id: string) {
  const result = await api.getWord(id);
  return result;
}

function renderStat(audio: string, word: string, transcription:string, wordTranslate: string) {
  return `<p><button class="btn-audio" data-audio="${audio}"></button> ${word} ${transcription} - ${wordTranslate}</p>`;
}

function playWords(audio: string) {
  const audioPath = `${api.base}/${audio}`;
  const prononc = new Audio(audioPath);
  prononc.play();
}

export function audioHandler() {
  const btns = document.querySelectorAll('.sprint .btn-audio');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const audio = target.getAttribute('data-audio') || '';
      playWords(audio);
    });
  });
}

export async function getStatistic(ids: Array<string>) {
  let stat = '';
  const requests = ids.map((id) => getWordInfo(id));
  await Promise.all(requests)
    .then((responses) => responses.forEach(
      (response) => {
        stat += `${renderStat(response.audio, response.word, response.transcription, response.wordTranslate)}`;
      },
    ));
  return stat;
}

export function setStatistics(good: Array<string>, bad: Array<string>, bestChain: number) {
  const dayStatSprint = localStorage.getItem('day_stat_sprint');
  if (dayStatSprint !== null) {
    const statSprint: StatState = JSON.parse(dayStatSprint);
    if (statSprint.best < bestChain) {
      statSprint.best = bestChain;
    }
    statSprint.goods += good.length;
    statSprint.bads += bad.length;
    localStorage.setItem('day_stat_sprint', JSON.stringify(statSprint));
  } else {
    const statSprint: StatState = {
      goods: good.length,
      bads: bad.length,
      best: bestChain,
    };
    localStorage.setItem('day_stat_sprint', JSON.stringify(statSprint));
  }
}
