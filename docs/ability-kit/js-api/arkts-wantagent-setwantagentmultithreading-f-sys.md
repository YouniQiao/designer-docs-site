# setWantAgentMultithreading

## setWantAgentMultithreading

```TypeScript
function setWantAgentMultithreading(isMultithreadingSupported: boolean) : void
```

开启或者关闭WantAgent多线程传递功能。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isMultithreadingSupported | boolean | Yes | 表示是否开启多线程传递功能。true表示开启，false表示关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

