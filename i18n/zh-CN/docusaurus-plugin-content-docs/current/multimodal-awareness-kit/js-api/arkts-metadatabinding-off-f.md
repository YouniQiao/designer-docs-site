# off

## off('operationSubmitMetadata')

```TypeScript
function off(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<int>): void
```

Unsubscribes from system events that are used to obtain the encoded metadata. The respective callback will be unregistered.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MultimodalAwareness.MetadataBinding

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'operationSubmitMetadata' | 是 | Event type. This parameter has a fixed value of  operationSubmitMetadata, indicating the system application's attempt to obtain the encoded metadata. |
| bundleName | string | 是 | Application bundle name. |
| callback | Callback&lt;int> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 32100001 | Internal handling failed. |
| 32100005 | Unsubscribe Failed. Possible causes:  1. Abnormal system capability.  2. IPC communication abnormality. |

**示例：**

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';

let bundleName: string = '';
try {
  metadataBinding.off('operationSubmitMetadata', bundleName, (event: number) => {
  });
} catch (error) {
  console.error("unsubscript screenshot event" + error);
}

```

