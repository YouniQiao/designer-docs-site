# isImmersiveMaterialSupported

## isImmersiveMaterialSupported

```TypeScript
function isImmersiveMaterialSupported(): boolean
```

Check whether [ImmersiveMaterial]uiMaterial#ImmersiveMaterial is supported on the current device. If it is true, the ImmersiveMaterial object can be used in the [systemMaterial]CommonMethod#systemMaterial(material: SystemUiMaterial | undefined) attribute. If it is false, setting the ImmersiveMaterial object in the systemMaterial attribute will not take effect. It is defined by the device and cannot be modified.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the current device supports ImmersiveMaterial. The value true indicates that the  current device supports ImmersiveMaterial, and false indicates the opposite. |

