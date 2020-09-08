import http from './http';
const baseURL = 'http://api.cms.liulongbin.top/api';
const loop = 'http://localhost:3001';
export const listObj = {
    getLoopNews:() => http.get(`${loop}/allData`),
    getnews:() => http.get(`${baseURL}/getnewslist`),
    newsDetails: newid => http.get(`${baseURL}/getnew/${newid}`)
}
