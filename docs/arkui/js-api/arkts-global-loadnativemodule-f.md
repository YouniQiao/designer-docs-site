# loadNativeModule

## loadNativeModule

```TypeScript
export declare function loadNativeModule(moduleName: string): Object
```

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Indicates the native module name. |

**Return value:**

| Type | Description |
| --- | --- |
| Object | Returns the default export from the native module. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. |
| 10200301 | Loading native module failed. |

