export const getSlideBackgroundColor = (slideIndex: number) => {
  switch (slideIndex) {
    case 0:
      return 'bg-green';
    case 1:
      return 'bg-orange';
    case 2:
      return 'bg-mint';
    default:
      return '';
  }
};
