export const formatSecondsToTime = (seconds: number): string => {
  const totalSeconds = Math.max(seconds, 0);

  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = Math.floor(totalSeconds % 60);

  const formattedMinutes = String(minutes);
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};
