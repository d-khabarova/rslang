import { elem } from '../../utils/querySelectors';

type StatState = {
  goods: number;
  bads: number;
  best: number;
};

export default function setStatisticsData() {
  const dayStatSprint = localStorage.getItem('day_stat_sprint');
  const dayAudioSprint = localStorage.getItem('day_stat_audiocall');
  if (dayStatSprint !== null) {
    const statSprint: StatState = JSON.parse(dayStatSprint);
    const percent = Math.round((statSprint.goods * 100) / (statSprint.bads + statSprint.goods));
    elem('.best-chain-sprint').innerHTML = statSprint.best.toString();
    elem('.percent-sprint').innerHTML = percent.toString();
    elem('.count-words-sprint').innerHTML = (statSprint.bads + statSprint.goods).toString();
  }
  if (dayAudioSprint !== null) {
    const statAudio: StatState = JSON.parse(dayAudioSprint);
    const percent = Math.round((statAudio.goods * 100) / (statAudio.bads + statAudio.goods));
    elem('.best-chain-audiocall').innerHTML = statAudio.best.toString();
    elem('.percent-audiocall').innerHTML = percent.toString();
    elem('.count-words-audiocall').innerHTML = (statAudio.bads + statAudio.goods).toString();
  }
}
