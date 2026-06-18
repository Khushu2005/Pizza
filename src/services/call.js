export const makeCall = (phone = "+919999999999") => {
  window.location.href = `tel:${phone}`;
};