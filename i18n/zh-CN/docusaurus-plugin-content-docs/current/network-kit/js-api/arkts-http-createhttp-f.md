# createHttp

## createHttp

```TypeScript
function createHttp(): HttpRequest
```

Creates an HTTP request task.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HttpRequest | the HttpRequest of the createHttp. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();

```

