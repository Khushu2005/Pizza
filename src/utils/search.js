export const handleSearch = (query) => {
  if (!query.trim()) return;

  window.location.href = `/menu?search=${encodeURIComponent(query)}`;
};