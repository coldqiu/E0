/* 正则匹配 */

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    // $1 取 fmt 中的第一项 ； 括号中的 y+ 就是fmt 的第一项，date.getFullyear() + '' 是为了把年份转为 字符型
    // .subsrt(4 - RegExp.$1.length) 表明取 后几位  传入的是 yyyy ，取2017 ；传入 yy 取 17
  }

  let o = {
    'M+' : date.getMonth(),
    'd+' : date.getDate(),
    'h+' : date.getHours(),
    'm+' : date.getMinutes(),
    's+' : date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
    }
  }
  return fmt;

}
// 只有一位， 前面加 0
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
