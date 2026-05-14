export const sanitizeFilters = <T extends Object>(
  obj: T,
  filters: (keyof T)[],
) => {
  const _obj = { ...obj };
  filters.forEach((filter) => delete _obj[filter]);
  return _obj;
};
