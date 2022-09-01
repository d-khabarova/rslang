import API from '../../Api/api';

const api = new API();

async function getWordInfo(id: string) {
  const result = await api.getWord(id);
  return result;
}

function renderStat(audio: string, word: string, transcription:string, wordTranslate: string) {
  return `${audio} ${word} ${transcription} - ${wordTranslate}`;
}

export default async function getStatistic(ids: Array<string>) {
  let stat = '';
  const requests = ids.map((id) => getWordInfo(id));
  await Promise.all(requests)
    .then((responses) => responses.forEach(
      (response) => {
        stat += `<p>${renderStat(response.audio, response.word, response.transcription, response.wordTranslate)}</p>`;
      },
    ));
  return stat;
}
