import http from './http';
const baseURL = 'http://api.cms.liulongbin.top/api';
const lunbo = 'http://152.136.97.184:3000';
const url = 'http://152.136.97.184:5001/search';
export const listObj = {
    // 获取轮播图
    getLoopNews:() => http.get(`${lunbo}/getlunbo`),
    // 获取新闻列表
    getnews:() => http.get(`${baseURL}/getnewslist`),
    // 获取新闻详情
    newsDetails: newid => http.get(`${baseURL}/getnew/${newid}`),
    // 搜索关键字
    searchWords:(keys) => http.get(`${url}/${keys}`),
    //提交评论 
    pinglun:(artid,content) =>http.post(`${baseURL}/postcomment/${artid}`,{content:content}),
    // 获取图片导航
    getPhotoPicture: () => http.get(`${baseURL}/getimgcategory`),
    // 图片分类
    getPhotoPictureSort:(cateid) =>http.get(`${baseURL}/getimages/${cateid}`)
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