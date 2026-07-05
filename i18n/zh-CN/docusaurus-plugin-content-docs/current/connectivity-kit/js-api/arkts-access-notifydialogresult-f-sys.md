# notifyDialogResult

## notifyDialogResult

```TypeScript
function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>
```

Notify bluetooth the result of bluetooth dialog.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| notifyDialogResultParams | NotifyDialogResultParams | 是 | Indicates the params for dialog result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let notifyDialogResultParams: access.NotifyDialogResultParams = {
        "dialogType": 0,
        "dialogResult": true,
    };
    access.notifyDialogResult(notifyDialogResultParams);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

