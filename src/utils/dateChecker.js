export const dateIsToday = (date) => {
  const today = new Date();
  const targetDate = new Date(date);

  return (
    targetDate.getDate() === today.getDate() &&
    targetDate.getMonth() === today.getMonth() &&
    targetDate.getFullYear() === today.getFullYear()
  );
};
