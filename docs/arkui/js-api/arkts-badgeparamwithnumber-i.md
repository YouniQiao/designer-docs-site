# BadgeParamWithNumber

BadgeParamWithNumber继承自[BadgeParam](arkts-badgeparam-i.md#BadgeParam)，具有BadgeParam的全部属性。

**Inheritance:** BadgeParamWithNumberextends: BadgeParam.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## count

```TypeScript
count: number
```

设置提醒消息数。 **说明：** 当该值小于等于0且小于maxCount时不显示信息标记。 取值范围：[-2147483648, 2147483647]。超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxCount

```TypeScript
maxCount?: number
```

最大消息数，超过最大消息时仅显示maxCount+，如maxCount是99时，显示`99+`。 默认值：99 取值范围：[-2147483648, 2147483647]。超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

