# EffectComponent

The **EffectComponent** component defines combined special effects for child components to optimize the special effect drawing performance. > **NOTE** > - The APIs provided by this component are system APIs. > > - Currently, this component provides only combined background blur effects for child components. > > - To use this component for combined background blur effects, first replace the **backgroundBlurStyle(BlurStyle)** > attribute of the target child components with **useEffect(true)**.

## EffectComponent

```TypeScript
EffectComponent()
```

Creates an **EffectComponent** component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## EffectComponent

```TypeScript
EffectComponent(options?: EffectComponentOptions)
```

Creates an effect drawing and combination component. If no parameter is passed or the parameter is EffectLayer.None, the background blur effect of child components is combined. If a parameter is specified, the current rendering layer is placed on a special layer.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EffectComponentOptions | No | EffectComponent constructor parameter. |

## Summary

- [EffectComponentOptions](arkts-arkui-effectcomponent-effectcomponentoptions-i-sys.md)
- [EffectLayer](arkts-arkui-effectcomponent-effectlayer-e-sys.md)
