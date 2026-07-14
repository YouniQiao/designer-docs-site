# Effect

Effect resource.

**Inheritance/Implementation:** Effect extends [SceneResource](arkts-arkgraphics3d-sceneresource-i.md)

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## getPropertyValue

```TypeScript
getPropertyValue(propertyName: string): Object | null | undefined
```

Get the value of a specific effect property.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propertyName | string | Yes | the name of specific property |

**Return value:**

| Type | Description |
| --- | --- |
| Object | effect property value, return null if the "get" operation failed. |

## setPropertyValue

```TypeScript
setPropertyValue(propertyName: string, value: Object | undefined): boolean
```

Set the value of a specific effect property

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propertyName | string | Yes | the name of specific property |
| value | Object \| undefined | Yes | property value to be set |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | return false if the "set" operation is failed |

## effectId

```TypeScript
readonly effectId: string
```

The id of the effect. This is the id that was used to create the effect.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

Controls whether the effect is enabled or not.

**Type:** boolean

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

