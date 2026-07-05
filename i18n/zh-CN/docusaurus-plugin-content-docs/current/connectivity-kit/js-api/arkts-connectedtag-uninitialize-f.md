# uninitialize

## uninitialize

```TypeScript
function uninitialize(): void
```

Uninitializes the connected NFC tag.

**起始版本：** 9

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3200101 | Connected NFC tag running state is abnormal in service. |

**示例：**

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';

try {
    console.info("connectedTag uninitialize");
    connectedTag.uninitialize();
} catch (error) {
    console.error("connectedTag error: " + error);
}

```

