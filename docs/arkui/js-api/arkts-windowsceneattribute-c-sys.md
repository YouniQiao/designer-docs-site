# WindowSceneAttribute

Defines the attribute functions of WindowScene.

**Inheritance:** WindowSceneAttributeextends: CommonMethod<WindowSceneAttribute>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## attractionEffect

```TypeScript
attractionEffect(destination: Position, fraction: number)
```

Set the attraction deformation effect of WindowScene. The window produces nonlinear deformation effect under the action of attraction point.

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destination | Position | Yes | The position of the attraction target point in the component coordinate system. |
| fraction | number | Yes | The fraction of attraction deformation. The range of value is [0, 1].  0 means not attracted to the target point, 1 means attracted to the target point completely. |

