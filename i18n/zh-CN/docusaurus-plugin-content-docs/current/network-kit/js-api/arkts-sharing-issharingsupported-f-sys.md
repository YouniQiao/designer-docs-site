# isSharingSupported

## isSharingSupported

```TypeScript
function isSharingSupported(callback: AsyncCallback<boolean>): void
```

Checks whether this device allows for network sharing.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Returns {@code true} indicating network sharing is supported;  returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2202011 | Cannot get network sharing configuration. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

sharing.isSharingSupported((error: BusinessError, data: boolean) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## isSharingSupported

```TypeScript
function isSharingSupported(): Promise<boolean>
```

Checks whether this device allows for network sharing.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECTIVITY_INTERNAL

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2202011 | Cannot get network sharing configuration. |

**示例：**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

sharing
  .isSharingSupported()
  .then((data: boolean) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

