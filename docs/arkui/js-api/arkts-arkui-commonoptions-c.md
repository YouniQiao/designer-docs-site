# CommonOptions

Defines common options for DatePickerComponent.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DisplayMode, TimeFormat, DatePickerComponent, DateMode, DatePickerComponentOptions, DatePickerComponentResult } from '@ohos.arkui.advanced.DatePickerComponent';
```

## enableHapticFeedback

```TypeScript
enableHapticFeedback?: boolean
```

Enable or disable haptic feedback.

**Type:** boolean

**Default:** true

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## end

```TypeScript
end?: Date
```

End date or time of picker.

**Type:** Date

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## loop

```TypeScript
loop?: boolean
```

Sets whether to enable the wheel mode.

**Type:** boolean

**Default:** true

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: Callback<DatePickerComponentResult>
```

This event is triggered when a DatePickerComponent value is selected.

**Type:** Callback<DatePickerComponentResult>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onScrollStop

```TypeScript
onScrollStop?: Callback<DatePickerComponentResult>
```

This event is triggered when a Picker item is selected and scrolling has stopped.

**Type:** Callback<DatePickerComponentResult>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: Date
```

Selected date.

**Type:** Date

**Default:** current system date or time

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## start

```TypeScript
start?: Date
```

Start date or time of picker.

**Type:** Date

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

