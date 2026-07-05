# permitInjection

## permitInjection

```TypeScript
function permitInjection(result: boolean): void
```

允许事件注入权限。

**Since:** 12

**Required permissions:** 

 ohos.permission.INJECT_INPUT_EVENT

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | boolean | Yes | 授权结果（true表示：允许事件注入，false表示：不允许事件注入）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

