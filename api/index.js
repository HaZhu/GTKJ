import request from '/utils/request';
export const login = (data) =>
  request({
    url: `/api/Users/Authenticate`,
    method: 'POST',
    data
  });