# TextClock

The **TextClock** component displays the current system time in text format for different time zones. The time is
accurate to seconds.

When the component is invisible, the time change stops. The visible status of a component is processed based on
[onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}.
If the visible threshold **ratios** is greater than 0, the component is visible.


## TextClock

```TypeScript
TextClock(options?: TextClockOptions)
```

Create TextClock component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TextClockOptions | No | Options of the text clock. |

## Summary

- [TextClockConfiguration](arkts-arkui-textclock-textclockconfiguration-i.md)
- [TextClockOptions](arkts-arkui-textclock-textclockoptions-i.md)
