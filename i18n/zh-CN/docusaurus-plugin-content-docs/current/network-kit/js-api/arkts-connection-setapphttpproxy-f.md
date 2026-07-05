# setAppHttpProxy

## setAppHttpProxy

```TypeScript
function setAppHttpProxy(httpProxy: HttpProxy): void
```

Set application level http proxy {@link HttpProxy}.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| httpProxy | HttpProxy | 是 | Indicates the application level proxy settings. For details, see {@link HttpProxy}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2100001 | Invalid http proxy. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

let exclusionStr = "192.168,baidu.com";
let exclusionArray = exclusionStr.split(',');
connection.setAppHttpProxy({
  host: "192.168.xx.xxx",
  port: 8080,
  exclusionList: exclusionArray
} as connection.HttpProxy);
let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
  usingProxy: true, // 选择使用网络代理，从API 10开始支持该属性。
};
// 发起一个HTTP请求。
httpRequest.request("EXAMPLE_URL", options, (err: BusinessError, data: http.HttpResponse) => {
  if (!err) {
   console.info(`Result: ${data.result}`);
   console.info(`code: ${data.responseCode}`);
   console.info(`type: ${JSON.stringify(data.resultType)}`);
   console.info(`header: ${JSON.stringify(data.header)}`);
   console.info(`cookies: ${data.cookies}`); // 从API version 8开始支持cookie。
  } else {
   console.error(`error: ${JSON.stringify(err)}`);
  }
});

```

