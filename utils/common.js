import { theme } from 'styles/theme';
import $ from 'jquery';
const TIME_TO_DELAY = 500;

export const onCardClick = (id, parentCardRef, cardRefs) => () => {
  const windowWidth = window.innerWidth;
  let difference = 0;
  const sm = theme.breakpoint.sm;
  const lg = theme.breakpoint.lg;
  sm.replace('px', '');
  const parsedSM = parseInt(sm);
  parseInt(sm);

  lg.replace('px', '');
  const parsedLG = parseInt(sm);
  parseInt(lg);

  //TO DO: Please set a proper difference here
  switch (true) {
    case windowWidth <= parsedSM:
      difference = 60;
      break;
    case windowWidth <= parsedLG:
      difference = 75;
      break;
    default:
      difference = 75;
  }
  smoothScroll(cardRefs[id].current, difference);
};

export const smoothScroll = (el, distance = 0, timeToDelay = TIME_TO_DELAY) => {
  $('html, body').animate(
    {
      scrollTop: $(el).offset().top - distance,
    },
    timeToDelay
  );
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
