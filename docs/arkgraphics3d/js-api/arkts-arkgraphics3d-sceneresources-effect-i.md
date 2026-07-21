# Effect

Effect resource.

**Inheritance/Implementation:** Effect extends [SceneResource](arkts-arkgraphics3d-sceneresources-sceneresource-i.md)

**Since:** 21

<!--Device-unnamed-export interface Effect extends SceneResource--><!--Device-unnamed-export interface Effect extends SceneResource-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="getpropertyvalue"></a>
## getPropertyValue

```TypeScript
getPropertyValue(propertyName: string): Object | null | undefined
```

Get the value of a specific effect property.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-Effect-getPropertyValue(propertyName: string): Object | null | undefined--><!--Device-Effect-getPropertyValue(propertyName: string): Object | null | undefined-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propertyName | string | Yes | the name of specific property |

**Return value:**

| Type | Description |
| --- | --- |
| Object | effect property value, return null if the "get" operation failed. |

<a id="setpropertyvalue"></a>
## setPropertyValue

```TypeScript
setPropertyValue(propertyName: string, value: Object | undefined): boolean
```

Set the value of a specific effect property

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-Effect-setPropertyValue(propertyName: string, value: Object | undefined): boolean--><!--Device-Effect-setPropertyValue(propertyName: string, value: Object | undefined): boolean-End-->

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

The id of the effect.This is the id that was used to create the effect.

**Type:** string

**Since:** 21

<!--Device-Effect-readonly effectId: string--><!--Device-Effect-readonly effectId: string-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## enabled

```TypeScript
enabled: boolean
```

Controls whether the effect is enabled or not.

**Type:** boolean

**Since:** 21

<!--Device-Effect-enabled: boolean--><!--Device-Effect-enabled: boolean-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

