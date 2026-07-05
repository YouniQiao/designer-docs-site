# LinearGradientStyle

显示为线性渐变。LinearGradientStyle继承自[ShaderStyle](arkts-shaderstyle-c.md#ShaderStyle)。

**继承实现关系：** LinearGradientStyle继承自：ShaderStyle。

**起始版本：** 20

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options: LinearGradientOptions)
```

用于创建LinearGradientStyle对象的构造函数。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | LinearGradientOptions | 是 | 显示为线性渐变效果。 [LinearGradientOptions]LinearGradientOptions中的  direction默认值按[GradientDirection]GradientDirection中的NONE处理。 |

## options

```TypeScript
options: LinearGradientOptions
```

显示为线性渐变效果。

**类型：** LinearGradientOptions

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

