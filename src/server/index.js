import http from './http';
const baseURL = 'http://api.cms.liulongbin.top/api';
const loop = 'http://localhost:3001';
const lunbo = 'http://152.136.97.184:3000';
const url = 'http://152.136.97.184:5001/search';
export const listObj = {
    getLoopNews:() => http.get(`${lunbo}/getlunbo`),
    getnews:() => http.get(`${baseURL}/getnewslist`),
    newsDetails: newid => http.get(`${baseURL}/getnew/${newid}`),

    searchWords:(keys) => http.get(`${url}/${keys}`),

    pinglun:(artid,content) =>http.post(`${baseURL}/postcomment/${artid}`,{content:content})

}

// 路由动态传参
// 接口传参

// 函数传参
// const aaa = (artid,content) => 
// http.post(`${baseURL}/postcomment/${artid}`,{content:content})

// aaa(12,'zimo')

// const add = num => {
//     console.log(num)
// }

// add(2)

// baiodu.com/home/2?page=2

// path:'/home/:id' 

// this.$router.push({
//     name:'home',
//     params:{id:1},
//     query:{page:2}
// })

// this.$route.params.id 
// this.$route.query.page