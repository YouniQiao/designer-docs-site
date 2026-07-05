# ChainAnimationOptions

链式联动动效属性集合，用于设置List最大间距、最小间距、动效强度、传导系数和边缘效果。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## intensity

```TypeScript
intensity?: number
```

设置链式联动动效效果强度。取值范围[0,1]，数值越大，动效效果越明显。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## edgeEffect

```TypeScript
edgeEffect?: ChainEdgeEffect
```

设置链式联动动效边缘效果。

**Type:** ChainEdgeEffect

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## conductivity

```TypeScript
conductivity?: number
```

设置链式联动动效传导系数。取值范围[0,1]，数值越大，动效传导范围越远。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## maxSpace

```TypeScript
maxSpace: Length
```

设置链式联动动效最大间距。<br/>单位：与Length一致。

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## damping

```TypeScript
damping?: number
```

设置链式联动动效效果阻尼。<br/>取值范围[0, +∞)

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## stiffness

```TypeScript
stiffness?: number
```

设置链式联动动效效果刚度。<br/>取值范围[0, +∞)

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## minSpace

```TypeScript
minSpace: Length
```

设置链式联动动效最小间距。<br/>单位：与Length一致。

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

