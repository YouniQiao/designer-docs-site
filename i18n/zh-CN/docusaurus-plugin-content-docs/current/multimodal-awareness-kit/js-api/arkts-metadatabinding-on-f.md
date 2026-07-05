# on

## on('operationSubmitMetadata')

```TypeScript
function on(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<int>): void
```

Subscribes to a system event to obtain the encoded metadata. The application needs to register a callback to return the encoded metadata when the registered system event occurs.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MultimodalAwareness.MetadataBinding

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'operationSubmitMetadata' | 是 | Event type. This parameter has a fixed value of  operationSubmitMetadata, indicating the system application's attempt to obtain the encoded metadata. |
| bundleName | string | 是 | Application bundle name. |
| callback | Callback&lt;int> | 是 | Callback used to return the encoded metadata. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 32100001 | Internal handling failed. |
| 32100004 | Subscribe Failed. Possible causes:  1. Abnormal system capability.  2. IPC communication abnormality.  3. Algorithm loading exception. |

**示例：**

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';

let bundleName: string = '';
try {
  metadataBinding.on('operationSubmitMetadata', bundleName, (event: number) => {
    if (event == 1) {
      console.info("The screenshot request is intercepted and the app link is obtained");
    }
  });
} catch (error) {
  console.error("register screenshot event error");
}

```

