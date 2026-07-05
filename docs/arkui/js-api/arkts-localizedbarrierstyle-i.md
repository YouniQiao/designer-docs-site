# LocalizedBarrierStyle

barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## localizedDirection

```TypeScript
localizedDirection : LocalizedBarrierDirection
```

指定barrier的方向。</br> 垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，作为垂直方向锚点时值为0。水平方向（START，END）的barrier仅能作为组件的垂直方向锚点，作为水平方向锚点 时值为0。

**Type:** LocalizedBarrierDirection

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id : string
```

barrier的id，必须是唯一的并且不可与容器内组件重名。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## referencedId

```TypeScript
referencedId : Array<string>
```

指定生成barrier所依赖的组件。

**Type:** Array<string>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

