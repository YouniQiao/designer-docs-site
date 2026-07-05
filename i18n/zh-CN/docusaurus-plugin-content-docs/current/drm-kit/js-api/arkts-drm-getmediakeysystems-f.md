# getMediaKeySystems

## getMediaKeySystems

```TypeScript
function getMediaKeySystems(): MediaKeySystemDescription[]
```

Get all media key systems supported.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeySystemDescription[] | The MediaKeySystem name and uuid info list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

**示例：**

```TypeScript
import { drm } from '@kit.DrmKit';

let description: drm.MediaKeySystemDescription[] = drm.getMediaKeySystems();
// 验证返回结果，description为插件信息列表，包含插件名称和唯一标识。
if (description.length > 0) {
  console.info(`getMediaKeySystems success, count: ${description.length}`);
  for (let i = 0; i < description.length; i++) {
    console.info(`name: ${description[i].name}, uuid: ${description[i].uuid}`);
  }
} else {
  console.info('No DRM system available');
}

```

