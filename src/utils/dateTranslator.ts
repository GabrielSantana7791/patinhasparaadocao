import { TFunction } from "i18next";

export const transformDateToPetAge = (date: Date, t: TFunction) => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return t("date_ago.today");
  } else if (diffDays < 7) {
    return t("date_ago.days_ago", { count: diffDays });
  } else if (diffDays < 30) {
    const diffWeeks = Math.floor(diffDays / 7);
    return t("date_ago.weeks_ago", { count: diffWeeks });
  } else if (diffDays < 365) {
    const diffMonths = Math.floor(diffDays / 30);
    return t("date_ago.months_ago", { count: diffMonths });
  } else {
    const diffYears = Math.floor(diffDays / 365);
    return t("date_ago.years_ago", { count: diffYears });
  }
};
