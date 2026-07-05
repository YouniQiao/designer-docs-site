# WindowSceneAttribute

Defines the attribute functions of WindowScene.

**继承实现关系：** WindowSceneAttribute继承自：CommonMethod<WindowSceneAttribute>。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## attractionEffect

```TypeScript
attractionEffect(destination: Position, fraction: number)
```

Set the attraction deformation effect of WindowScene. The window produces nonlinear deformation effect under the action of attraction point.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| destination | Position | 是 | The position of the attraction target point in the component coordinate system. |
| fraction | number | 是 | The fraction of attraction deformation. The range of value is [0, 1].  0 means not attracted to the target point, 1 means attracted to the target point completely. |

