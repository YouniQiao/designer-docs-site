# getMediaKeySystemUuid

## getMediaKeySystemUuid

```TypeScript
function getMediaKeySystemUuid(name: string): string
```

Get a MediaKeySystem's UUID.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | The Digital Right Management solution name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The MediaKeySystem uuid. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed.Possibly because:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

**示例：**

```TypeScript
import { drm } from '@kit.DrmKit';

let uuid: string = drm.getMediaKeySystemUuid('com.clearplay.drm');
console.info("getMediaKeySystemUuid: ", uuid);

```

