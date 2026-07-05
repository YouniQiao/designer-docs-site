# createMediaKeySystem

## createMediaKeySystem

```TypeScript
function createMediaKeySystem(name: string): MediaKeySystem
```

Creates a MediaKeySystem instance.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Used to point a Digital Right Management solution. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeySystem | The MediaKeySystem instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700103 | Meet max MediaKeySystem num limit. |
| 24700201 | Fatal service error, for example, service died. |

**示例：**

```TypeScript
import { drm } from '@kit.DrmKit';
// name为DRM解决方案名称，可通过drm.getMediaKeySystems接口获取设备支持的DRM解决方案名称，如"com.clearplay.drm"。
let name = 'com.clearplay.drm';
let mediaKeySystem: drm.MediaKeySystem = drm.createMediaKeySystem(name);
console.info(`createMediaKeySystem success, name: ${name}`);

```

