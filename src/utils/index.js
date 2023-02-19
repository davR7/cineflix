export const formatDate = (data) => {
  let day  = data.split("-")[0];
  let month  = data.split("-")[1];
  let year  = data.split("-")[2];
  return year + '/' + ("0"+month).slice(-2) + '/' + ("0"+day).slice(-2);
}

export const scrollToTopSmooth = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth', 
  });
}