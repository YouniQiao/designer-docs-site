# switchInputMethodWithUserId

## switchInputMethodWithUserId

```TypeScript
function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: int): Promise<void>
```

Switch input method and subtype of a specified user.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | indicates the bundle name of the target input method. |
| subtypeId | string | 否 |  |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.switchInputMethodWithUserId('com.example.keyboard', 'subtype_001', 100).then(() => {
  console.info('Succeeded in switching input method.');
}).catch((err: BusinessError) => {
  console.error(`Failed to switchInputMethodWithUserId, code: ${err.code}, message: ${err.message}`);
});

```

