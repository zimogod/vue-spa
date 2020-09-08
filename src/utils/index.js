// 封装公共的方法

// 日期格式化
export const formateDate = (time) =>{
    let years = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    return `${years}-${month}-${day}`
}

export const formateTime = (time,str) =>{
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();
    return `${h}${str}${m}${str}${s}`
}

// 时间格式化

