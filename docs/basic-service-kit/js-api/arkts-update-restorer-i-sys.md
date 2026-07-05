# Restorer

提供设备恢复出厂设置功能的工具类。

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## deepFactoryReset

```TypeScript
deepFactoryReset(factoryResetStrategy: FactoryResetStrategy): Promise<void>
```

通过覆写等方式，深度清除用户数据分区、操作系统分区。使用 Promise 异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.FACTORY_RESET

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factoryResetStrategy | FactoryResetStrategy | Yes | 恢复出厂设置策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let restorer = update.getRestorer();
  let factoryResetStrategy: update.FactoryResetStrategy = {
    scope: update.FactoryResetScope.DATA,
    strategy: "deepFactoryReset test"
  };
  restorer.deepFactoryReset(factoryResetStrategy).then(() => {
    console.info(`deepFactoryReset success`);
  }).catch((err: BusinessError) => {
    console.error(`deepFactoryReset error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

## factoryReset

```TypeScript
factoryReset(callback: AsyncCallback<void>): void
```

清除用户数据分区。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.FACTORY_RESET

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当恢复出厂执行成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

**Example**

```TypeScript
try {
  let restorer = update.getRestorer();
  restorer.factoryReset((err) => {
    console.info(`factoryReset error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

## factoryReset

```TypeScript
factoryReset(): Promise<void>
```

清除用户数据分区。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.FACTORY_RESET

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let restorer = update.getRestorer();
  restorer.factoryReset().then(() => {
    console.info(`factoryReset success`);
  }).catch((err: BusinessError) => {
    console.error(`factoryReset error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

## forceFactoryReset

```TypeScript
forceFactoryReset(): Promise<void>
```

清除用户数据分区，同步清除文件秘钥。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.FORCE_FACTORY_RESET

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let restorer = update.getRestorer();
  restorer.forceFactoryReset().then(() => {
    console.info(`forceFactoryReset success`);
  }).catch((err: BusinessError) => {
    console.error(`forceFactoryReset error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

## getDeepFactoryResetInfo

```TypeScript
getDeepFactoryResetInfo(factoryResetStrategy: FactoryResetStrategy): Promise<FactoryResetInfo>
```

获取深度恢复出厂设置信息。使用 Promise 异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.FACTORY_RESET

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factoryResetStrategy | FactoryResetStrategy | Yes | 恢复出厂设置策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FactoryResetInfo> | Promise对象，返回深度恢复出厂设置信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11500104 | IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let factoryResetStrategy: update.FactoryResetStrategy = {
  scope: update.FactoryResetScope.DATA,
  strategy: "deepFactoryReset"
};
try {
  let restorer = update.getRestorer();
  restorer.getDeepFactoryResetInfo(factoryResetStrategy).then((info: update.FactoryResetInfo) => {
    console.info(`getDeepFactoryResetInfo success`);
  }).catch((err: BusinessError) => {
    console.error(`getDeepFactoryResetInfo promise error ${JSON.stringify(err)}`);
  });
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

