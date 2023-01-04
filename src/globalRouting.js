export const routing = {
  to: (paramsNavgate, paramsPath) => paramsNavgate(paramsPath),
  back: (paramsNavgate) => paramsNavgate(-1),
  forward: (paramsNavgate) => paramsNavgate(1),
};
