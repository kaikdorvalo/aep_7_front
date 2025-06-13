import RankingIcon from '../../../assets/icons/ranking.svg';
import LocationIcon from '../../../assets/icons/location.svg';
import CompareIcon from '../../../assets/icons/compare.svg';
import type { MenuRoute } from '../types/MenuRoute';

export const menuItens: MenuRoute[] = [
    { label: 'Registrar', path: '/', icon: RankingIcon },
    { label: 'Ocorrências', path: '/ocorrencias', icon: LocationIcon },
]