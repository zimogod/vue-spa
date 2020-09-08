import http from './http';

export const listObj = {
    goodsList:() => http.get('/allData')
}