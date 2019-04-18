const http = require('http')
const https = require('https')
const querystring = require('querystring')

// 这儿写基础地址, 可以设置多个，用于正式和测试的切换
// 格式为 protocol://hostname:port
// const baseUrl = "http://www.baidu.com"   //测试
const baseUrl = "http://114.242.34.166:21495"   //正式服务

/**
 * 
 * @param {string} path 
 * @param {object | ArrayBuffer | string} params 
 * @param {"GET" | "POST"} method 
 * @param {Function} success 
 * @param {Function} failure 
 * @param {"" | "form"} _type 
 */
function request(path, params, method, success, failure, _type) {
  let postData = querystring.stringify(params);

  let preType
  if (_type == 'form') {
    preType = 'application/x-www-form-urlencoded'
  } else {
    preType = 'application/json'
  }

  let _url = /^(https?\:)\/\/([^\:\/]+)(?:\:(\d+))?/.exec(baseUrl)

  if (!_url) throw Error('地址错误, 请检查地址')

  const options = {
    protocol: _url[1],
    hostname: _url[2],
    path: path,
    method: method,

    // 这儿写你需要的header
    headers: {
      'Content-Type': preType,
      'platform': 'electron'
    }
  }

  if (_url[3]) options.port = _url[3]

  const req = (options.protocol==='https:'?https:http).request(options, (res) => {
    let _data = {
      code: res.statusCode
    }
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      _data.data = chunk
    });
    res.on('end', () => {
      success && success(_data)
    });
  });

  req.on('error', (e) => {
    failure && failure(e)
  });

  req.write(postData);
  req.end();
}

const post = function(path, params, success, failure) {
  return request(path, params, "POST", success, failure)
}

const post_form = function(path, params, success, failure) {
  return request(path, params, "POST", success, failure, 'form')
}

const get = function(path, params, success, failure) {
  return request(path, params, "get", success, failure)
}

module.exports = {
  post,
  post_form,
  get
}