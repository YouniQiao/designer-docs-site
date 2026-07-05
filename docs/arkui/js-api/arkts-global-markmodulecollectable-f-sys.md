# markModuleCollectable

## markModuleCollectable

```TypeScript
export declare function markModuleCollectable(namespace: Object): void
```

Mark moduleNamespace which loaded by dynamic-import is collectable.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| namespace | Object | Yes | moduleNamespace to be marked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | if type of object is not moduleNameSpace. |

