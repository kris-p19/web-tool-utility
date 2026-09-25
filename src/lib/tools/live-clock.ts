export function createClockFormatter(timeZone: string, locale: 'th' | 'en') {
  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  });
  const dateFormatter = new Intl.DateTimeFormat(locale === 'th' ? 'th-TH-u-ca-gregory' : 'en-US', {
    timeZone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const offsetFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'longOffset'
  });

  return (now: Date) => {
    const time = timeFormatter.formatToParts(now);
    const part = (type: string) => time.find((item) => item.type === type)?.value ?? '00';
    const offset = offsetFormatter.formatToParts(now).find((item) => item.type === 'timeZoneName')?.value;

    return {
      time: `${part('hour')}:${part('minute')}`,
      seconds: part('second'),
      date: dateFormatter.format(now),
      offset: offset?.replace('GMT', 'UTC') ?? timeZone,
      unix: String(Math.floor(now.getTime() / 1000))
    };
  };
}

export function getClockParts(now: Date, timeZone: string, locale: 'th' | 'en') {
  return createClockFormatter(timeZone, locale)(now);
}
