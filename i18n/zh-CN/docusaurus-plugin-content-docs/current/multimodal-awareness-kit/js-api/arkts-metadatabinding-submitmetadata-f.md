# submitMetadata

## submitMetadata

```TypeScript
function submitMetadata(metadata: string): void
```

Transfers the metadata to be encoded to the MSDP. The MSDP determines whether to transfer the metadata to the system application or service that calls the encoding API.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MultimodalAwareness.MetadataBinding

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| metadata | string | 是 | Metadata to be encoded. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 32100001 | Internal handling failed. |

**示例：**

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';

let metadata: string = "";
try {
  metadataBinding.submitMetadata(metadata);
} catch (error) {
  console.error("submit metadata error" + error);
}

```

