---
title: http 协议
---

## Content-Type
`Content-Type`是指http/https发送信息至服务器时的内容编码类型，contentType用于表明发送数据流的类型，服务器根据编码类型使用特定的解析方式，获取数据流中的数据。

常用的`Content-Type`有: text/html, text/plain, text/css, text/javascript, image/jpeg, image/png, image/gif, application/x-www-form-urlencoded, multipart/form-data, application/json, application/xml 等。

其中：text/html, text/plain, text/css, text/javascript, image/jpeg, image/png, image/gif, 都是常见的页面资源类型。application/x-www-form-urlencoded, multipart/form-data, application/json, application/xml 这四个是ajax的请求，表单提交或上传文件的常用的资源类型。

注意：如果是`Get`请求，那么一般为`Query String Parameters`,参数以 ?key1=value1&key2=value2 的形式拼接到url上；  
`POST`请求参数的存放位置是和我们的Content-Type 有关的，`application/x-www-form-urlencoded`的话，则为`formdata`方式，参数也以key1=value1&key2=value2的形式，但是存放在请求体中；如果是`application/json`或`multipart/form-data`的话，则为 `request payload` 。

### application/x-www-form-unlencoded
`application/x-www-form-unlencoded`是原生form和ajax的默认提交方式。

form表单中可以定义`enctype`属性，该属性的含义是在发送到服务器之前应该如何对表单数据进行编码。默认的情况下，表单数据会编码为`application/x-www-form-unlencoded`。`enctype`常用的属性值如下：`application/x-www-form-unlencoded`： 在发送前编码所有字符(默认情况下)；`multipart/form-data`, 不对字符编码。在使用文件上传时候，使用该值。

`application/x-www-form-urlencoded`支持GET/POST等方法，所有数据变成键值对的形式 key1=value1&key2=value2的形式，并且特殊字符需要转义成utf-8编号，如空格会变成 %20，在chrome的network面板下，默认的请求体是被解析的。如果请求类型type是GET的话，那么格式化的字符串将直接拼接在url后发送到服务端； 如果请求类型是POST, 那么格式化的字符串将放在http body的`Form Data`中发送。

### multipart/form-data
使用表单上传文件时，必须指定表单的 enctype属性值为 multipart/form-data. 请求体被分割成多部分，每部分使用 --boundary分割；

### application/json
对于复杂的json对象，再使用`application/x-www-form-unlencoded`就不太合适了。因为`application/x-www-form-unlencoded`这种编码格式的特点是：key-value值对，
每组之间使用&连接，而name与value之间是使用 = 连接，比如 key=xxx&name=111&password=123456;
```json
{
  a: 1,
  b: 2
}
```

键值对一般的情况下是没有什么问题，但是在一些复杂的情况下，比如需要传一个复杂的json对象，也就是对象嵌套数组的情况下。
```json
{
  obj: [
    {
      "name": 111,
      "password": 22
    }
  ]
}
```
`application/x-www-form-urlencoded`这种形式传递的话， 会被解析成 obj[0]['name']=111&obj[0].['password']=2。这种形式是后台接收到是不好接收的。

所以使用`application/json`将json对象的字符串传给服务器，服务器使用`@RequestBody`可以直接解析为对象。

:::tip
使用ajax跨域请求时，如果设置Header的ContentType为 application/json，它会发两次请求，第一次先发Method为OPTIONS的请求到服务器，
这个请求会询问服务器支持那些请求方法(比如GET,POST)等。如果这个请求支持跨域的话，就会发送第二个请求，否则的话在控制台会报错，第二个请求不会请求。
:::


