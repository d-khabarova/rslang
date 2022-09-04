import { elem } from '../../utils/querySelectors';

type StatState = {
  goods: number;
  bads: number;
  best: number;
};

export default function setStatisticsData() {
  const dayStatSprint = localStorage.getItem('day_stat_sprint');
  if (dayStatSprint !== null) {
    const statSprint: StatState = JSON.parse(dayStatSprint);
    const percent = Math.round((statSprint.goods * 100) / (statSprint.bads + statSprint.goods));
    elem('.best-chain-sprint').innerHTML = statSprint.best.toString();
    elem('.percent-sprint').innerHTML = percent.toString();
    elem('.count-words').innerHTML = (statSprint.bads + statSprint.goods).toString();
  }
}
