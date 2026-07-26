# ComponentOptions

Defines the options of Component ClassDecorator.

**Since:** 12

<!--Device-unnamed-declare interface ComponentOptions--><!--Device-unnamed-declare interface ComponentOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## freezeWhenInactive

```TypeScript
freezeWhenInactive : boolean
```

freeze UI state.

**Type:** boolean

**Default:** false

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-ComponentOptions-freezeWhenInactive : boolean--><!--Device-ComponentOptions-freezeWhenInactive : boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## poolAccepts

```TypeScript
poolAccepts?: Function[]
```

Collection of custom components to be reused.

**Type:** Function[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ComponentOptions-poolAccepts?: Function[]--><!--Device-ComponentOptions-poolAccepts?: Function[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reusePool

```TypeScript
reusePool?: ReusePoolOwnership
```

the reuse type of a custom component.

**Type:** ReusePoolOwnership

**Default:** perInstance

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ComponentOptions-reusePool?: ReusePoolOwnership--><!--Device-ComponentOptions-reusePool?: ReusePoolOwnership-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

