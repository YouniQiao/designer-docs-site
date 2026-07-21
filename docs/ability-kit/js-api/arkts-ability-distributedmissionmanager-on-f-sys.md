# on (System API)

## Modules to Import

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
```

<a id="on"></a>
## on('continueStateChange')

```TypeScript
function on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>): void
```

Subscribes to continuation state change events of the current mission.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-distributedMissionManager-function on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>): void--><!--Device-distributedMissionManager-function on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'continueStateChange' | Yes | Event type. The value **'continueStateChange'** indicates the continuation state change event of the current mission. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ContinueCallbackInfo&gt; | Yes | Callback used to return the continuation state and information of the current mission.<br>**Since:** 11 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
  import { distributedMissionManager } from '@kit.AbilityKit';

  try {
    distributedMissionManager.on('continueStateChange', (data) => {
      console.info("continueStateChange on:" + JSON.stringify(data));
    });
  } catch (error) {
    console.error("continueStateChange err: " + JSON.stringify(error));
  }

```

