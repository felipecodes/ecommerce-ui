import loadable from 'app/modules/shared/utils/loadable';

const Loadable = loadable(() => import('./Home'), { fallback: null });

export default Loadable;
