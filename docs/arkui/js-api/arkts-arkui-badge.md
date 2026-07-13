# Badge

The **Badge** component is a container that can be attached to another component for notification and reminder
purposes.

###### Child Components

This component supports only one child component.

> **NOTE**
>
> - Allowed child component types: built-in and custom components, including rendering control types (
> [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md), [ForEach]{@link for_each}, and
> [LazyForEach]{@link lazy_for_each}).
>
> - A custom component defaults to a width and height of 0. You must explicitly set its width and height; otherwise,
> the **Badge** component will not be displayed.
>
> - When there are multiple child components, only the last child component is displayed on the UI. However, the
> status update of other child components will still cause the badge and its child components to be re-rendered.
>
> - Child component layout is independent and does not automatically adjust to avoid overlapping with the badge.


## Badge

```TypeScript
Badge(value: BadgeParamWithNumber)
```

Creates a badge with the given numerical value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BadgeParamWithNumber | Yes | Options of the numeric badge. |

## Badge

```TypeScript
Badge(value: BadgeParamWithString)
```

Creates a badge with the given string.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BadgeParamWithString | Yes | Options of the string-type badge. |

## Summary

- [BadgeParam](arkts-arkui-badge-badgeparam-i.md)
- [BadgeParamWithNumber](arkts-arkui-badge-badgeparamwithnumber-i.md)
- [BadgeParamWithString](arkts-arkui-badge-badgeparamwithstring-i.md)
- [BadgeStyle](arkts-arkui-badge-badgestyle-i.md)
- [BadgePosition](arkts-arkui-badge-badgeposition-e.md)
