# unregisterContinuation

## unregisterContinuation

```TypeScript
function unregisterContinuation(token: number, callback: AsyncCallback<void>): void
```

Unregisters the continuation management service. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 22

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the unregistration is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
try {
  continuationManager.unregisterContinuation(token, (err) => {
    if (err.code != 0) {
      console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
      return;
    }
    console.info('unregisterContinuation finished. ');
  });
} catch (err) {
  console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
}

```

## unregisterContinuation

```TypeScript
function unregisterContinuation(token: number): Promise<void>
```

Unregisters the continuation management service. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 22

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = -1;
try {
  continuationManager.unregisterContinuation(token).then(() => {
      console.info('unregisterContinuation finished. ');
    }).catch((err: BusinessError) => {
      console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
  });
} catch (err) {
  console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
}

```

