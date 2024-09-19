export const countUsersByMonth = (users) => {
  const counts = Array(12).fill(0);

  users.forEach((user) => {
    const month = new Date(user.createdDate).getMonth();

    counts[month] += 1;
  });

  return counts;
};
