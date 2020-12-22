<script>
DetailData = [
  {
    id:1,
    title:'',
    time:'',
    describe:'',
    artUrl:'https://cli.vuejs.org/zh/config/',
    content:''
  },
  {
    id:1,
    title: "生成一个随机字符串",
    time:'2020-11-30',
    describe: `miaoshu`,
    content: `
<pre class="pre"><code class="code">
const NewGuid = () => {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i &lt; 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((+s[19] &amp; 0x3) | 0x8, 1);
  return s.join("");
};
</code></pre>
    `
  },
  {
    id:2,
    title: 'for...of循环和for...in循环之间的区别',
    time:'2020-11-25',
    describe: 'let iterable = [3, 5, 7];iterable.foo = "hello";for (let i of iterable) {}',
    content: `
<h2 class="h2">for of</h2>
<pre class="pre"><code class="code">
let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i of iterable) {
  console.log(i); // 3, 5, 7 ,"foo"
}
</code></pre>

<p>iterable = [3,5,7,foo:"hello"]</p>
<p class="danger">注意：i是元素，并且不可以打印出 "foo"</p>

<h2 class="h2">for...in</h2>
<pre class="pre"><code class="code">
let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); //  0, 1, 2, "foo"
}
</code></pre>

<p>iterable = [3,5,7,foo:"hello"]</p>
<p class="danger">注意：i是索引，并且可以打印出 "foo"</p>

<h2 class="h2">hasOwnProperty()</h2>
定义：返回一个布尔值，指示对象自身属性中是否具有指定的属性

<pre class="pre"><code class="code">
* 不使用 hasOwnProperty() *********

Object.prototype.aaa = funtion(){};
Array.prototype.bbb = funtion(){};
let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); //  0, 1, 2, "foo","aaa","bbb"
}

* 使用 hasOwnProperty() *********

for(let i in iterable) {
   if( iterable.hasOwnProperty(i) ) {
      console.log(i); //  0, 1, 2, "foo"
   }
}
</code></pre>
因为 aaa 和 bbb 不是自己的属性，而是继承的属性。也就是说 obj.hasOwnProperty(i) 是检查 i 属性是否属于 obj 这个对象 。
      `
  },
  {
    id:3,
    title:'',
    time:'',
    describe:'',
    content:''
  },
  {
    id:3,
    title:'',
    time:'',
    describe:'',
    content:''
  }
];
</script>