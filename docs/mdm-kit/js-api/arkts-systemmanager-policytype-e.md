# PolicyType

```TypeScript
enum PolicyType
```

升级策略类型枚举。

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DEFAULT

```TypeScript
DEFAULT = 0
```

默认升级策略。周期提示用户，用户确认后升级。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## PROHIBIT

```TypeScript
PROHIBIT = 1
```

禁止升级策略。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## UPDATE_TO_SPECIFIC_VERSION

```TypeScript
UPDATE_TO_SPECIFIC_VERSION = 2
```

强制升级策略。需指定最晚升级时间（latestUpdateTime）参数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## WINDOWS

```TypeScript
WINDOWS = 3
```

指定时间窗口升级策略。需指定时间窗口参数（installStartTime、installEndTime）。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## POSTPONE

```TypeScript
POSTPONE = 4
```

延迟升级策略。延迟指定时间（delayUpdateTime）后进入DEFAULT模式，周期提示用户升级。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

