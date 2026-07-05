# DataPanelShadowOptions

DataPanelShadowOptions继承自[MultiShadowOptions]MultiShadowOptions，具有MultiShadowOptions的全部属性。

**Inheritance:** DataPanelShadowOptionsextends: MultiShadowOptions.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colors

```TypeScript
colors?: Array<ResourceColor | LinearGradient>
```

各数据段投影的颜色。 默认值：与valueColors值相同 **说明：** 若设置的投影颜色的个数少于数据段个数时，则显示的投影颜色的个数和设置的投影颜色个数一致。 若设置的投影颜色的个数多于数据段个数时，则显示的投影颜色的个数和数据段个数一致。

**Type:** Array<ResourceColor | LinearGradient>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

