import * as $ from 'jquery'
import Post from '@model/post'
import json from '@/assets/data'
import logo from '@assets/emblem-logo.png'
import '@css/style.css'
import '@model/lodash'

import '@less/style.less'
import '@sass/style.scss'
import '@sass/style.sass'


const post = new Post('Webpack Post Title!!!' , logo)

//$('pre').html(post.toString())
//$('pre').addClass('code').html(post.toString())

console.log('JSON:', json)

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}

start().then((res) => console.log(res))

class Util {
  static id = Date.now();
}
console.log('Util Id:', Util.id);