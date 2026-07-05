# isSystemReady (System API)

## isSystemReady

```TypeScript
function isSystemReady(callback: AsyncCallback<void>): void
```

Checks whether the system is ready. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isSystemReady](arkts-form-issystemready-f-sys.md#issystemready-1)

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the check is successful,**error** is undefined; otherwise, **error** is an error object. |


## isSystemReady

```TypeScript
function isSystemReady(): Promise<void>
```

Checks whether the system is ready. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isSystemReady](arkts-form-issystemready-f-sys.md#issystemready-1)

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

