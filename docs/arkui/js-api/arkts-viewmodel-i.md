# ViewModel

View model

**Since:** 4

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## $t

```TypeScript
$t(path: string, param?: object | Array<any>): string
```

Displays content based on the current system language and a path of the language resource key specified through $t.

**Since:** 4

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the language resource key |
| param | object \| Array&lt;any> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | content to display |

## $refs

```TypeScript
$refs: ElementReferences
```

An object that holds all DOM elements and component instances that have been registered with the refs attribute

**Type:** ElementReferences

**Since:** 4

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

