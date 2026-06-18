export const makeCall = (phone = "+919696554681") => {
  window.location.href = `tel:${phone}`;
};