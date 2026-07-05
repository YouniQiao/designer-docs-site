# unregister

## unregister

```TypeScript
function unregister(token: number, callback: AsyncCallback<void>): void
```

Unregisters the continuation management service. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the unregistration is successful,  err is undefined; otherwise, err is an error object. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
continuationManager.unregister(token, (err) => {
  if (err.code != 0) {
    console.error('unregister failed, cause: ' + JSON.stringify(err));
    return;
  }
  console.info('unregister finished. ');
});

```

## unregister

```TypeScript
function unregister(token: number): Promise<void>
```

Unregisters the continuation management service. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.DistributedAbilityManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | number | 是 | Token obtained after the registration of the continuation management service. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = 1;
continuationManager.unregister(token)
  .then(() => {
    console.info('unregister finished. ');
  }).catch((err: BusinessError) => {
    console.error('unregister failed, cause: ' + JSON.stringify(err));
});

```

