# getForegroundUIAbilities

## getForegroundUIAbilities

```TypeScript
function getForegroundUIAbilities(callback: AsyncCallback<Array<AbilityStateData>>): void
```

获取前台正在运行的应用Ability的信息。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AbilityStateData>> | Yes | 以回调方式返回接口运行结果及有关前台Ability的信息，可进行错误处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

abilityManager.getForegroundUIAbilities((err: BusinessError, data: Array<abilityManager.AbilityStateData>) => {
  if (err) {
    console.error(`Get foreground ui abilities failed, error: ${JSON.stringify(err)}`);
  } else {
    console.info(`Get foreground ui abilities data is: ${JSON.stringify(data)}`);
  }
});

```

## getForegroundUIAbilities

```TypeScript
function getForegroundUIAbilities(): Promise<Array<AbilityStateData>>
```

获取前台正在运行的应用Ability的信息。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AbilityStateData>> | 以Promise方式返回接口运行结果及有关前台Ability的信息，可进行错误处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

abilityManager.getForegroundUIAbilities().then((data: Array<abilityManager.AbilityStateData>) => {
  console.info(`Get foreground ui abilities data is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`Get foreground ui abilities failed, error: ${JSON.stringify(error)}`);
});

```

