# ColoringStrategy

```TypeScript
declare enum ColoringStrategy
```

智能取色枚举类型。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## INVERT

```TypeScript
INVERT = 'invert'
```

设置前景色为控件背景色的反色。仅支持在[foregroundColor]CommonMethod#foregroundColor(value: ResourceColor | ColoringStrategy)中设 置该枚举。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## AVERAGE

```TypeScript
AVERAGE = 'average'
```

设置控件背景阴影色为控件背景阴影区域的平均色。仅支持在入参类型为ShadowOptions的 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)中设置该枚举。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## PRIMARY

```TypeScript
PRIMARY = 'primary'
```

设置控件背景阴影色为控件背景阴影区域的主色。仅支持在入参类型为ShadowOptions的 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)中设置该枚举。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## CONTRAST

```TypeScript
CONTRAST = 'contrast'
```

从组件背景中提取平均颜色，并转换为对比鲜明的黑色或白色。子组件可以通过 Color（'foreground'） 使用此颜色。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

