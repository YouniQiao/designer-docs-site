# createHttpResponseCache

## createHttpResponseCache

```TypeScript
function createHttpResponseCache(cacheSize?: int): HttpResponseCache
```

Creates a default {@code HttpResponseCache} object to store the responses of HTTP access requests.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cacheSize | int | 否 | the size of cache(max value is 10MB), default is 1010241024(10MB). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HttpResponseCache | the HttpResponseCache of the createHttpResponseCache. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpResponseCache = http.createHttpResponseCache();

```

