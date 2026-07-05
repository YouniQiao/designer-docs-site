# IndicatorComponentController

Provides methods for switching components.

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## changeIndex

```TypeScript
changeIndex(index: number, useAnimation?: boolean):void
```

Controlling IndicatorComponent to change to the specified subcomponent.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | The index of item to be redirected. |
| useAnimation | boolean | No |  |

## constructor

```TypeScript
constructor()
```

constructor.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showNext

```TypeScript
showNext():void
```

Called when the next child component is displayed.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showPrevious

```TypeScript
showPrevious():void
```

Called when the previous subcomponent is displayed.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

