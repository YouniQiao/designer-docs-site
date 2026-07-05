# removeAppShareOptions

## removeAppShareOptions

```TypeScript
function removeAppShareOptions(intention: Intention): void
```

Removes the data control information set by [setAppShareOptions]unifiedDataChannel.setAppShareOptions.

**起始版本：** 12

**需要权限：** 

- API版本14+： ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| intention | Intention | 是 | Type of the data channel. Currently, only the data channel of the DRAG type  is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application  uses system API. [since 12 - 13] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 201 | Permission denied. Interface caller does not have permission "  ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION". [since 14] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  unifiedDataChannel.removeAppShareOptions(unifiedDataChannel.Intention.DRAG);
  console.info(`[UDMF]removeAppShareOptions success.`);
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`[UDMF]removeAppShareOptions throws an exception. code is ${error.code}, message is ${error.message}`);
}

```

