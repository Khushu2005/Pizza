export const openWhatsApp = (message = "Hello, I want to place a pizza order.", phone = "9196965541") => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
};

export const queryMessages = {
  general: "Hello, I have a general inquiry about your restaurant.",
  bulk: "Hello, I want to place a bulk order for an upcoming event.",
  catering: "Hello, I want information regarding your catering services.",
  franchise: "Hello, I am interested in franchise opportunities.",
  feedback: "Hello, I would like to share some feedback regarding my recent experience."
};
