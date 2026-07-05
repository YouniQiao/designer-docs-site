# Effect

特效资源.

**Inheritance:** Effectextends: SceneResource.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## getPropertyValue

```TypeScript
getPropertyValue(propertyName: string): Object | null | undefined
```

获取特定特效属性的值.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propertyName | string | Yes | 特定属性的名称 |

**Return value:**

| Type | Description |
| --- | --- |
| Object | 特效属性值，如果"get"操作失败则返回null. |

## setPropertyValue

```TypeScript
setPropertyValue(propertyName: string, value: Object | undefined): boolean
```

设置特定特效属性的值

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propertyName | string | Yes | 特定属性的名称 |
| value | Object \| undefined | Yes | 要设置的属性值 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果"set"操作失败则返回false |

## effectId

```TypeScript
readonly effectId: string
```

特效的ID. 这是用于创建特效的ID.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

控制特效是否启用.

**Type:** boolean

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

