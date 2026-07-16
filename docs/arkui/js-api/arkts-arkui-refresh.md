# Refresh

The **Refresh** component is a container that provides the pull-to-refresh feature.

> **NOTE**
>
> - This component is supported since API version 8. Updates will be marked with a superscript to indicate their
> earliest API version.
>
> - Since API version 12, this component provides linkage with a vertically scrolling [Swiper]{@link swiper} and
> [Web](docroot://reference/apis-arkui/arkui-js/js-components-basic-web.md) components. When the
> [loop]{@link SwiperAttribute#loop} attribute of [Swiper]{@link swiper} is set to **true**, the **Refresh**
> component cannot provide linkage with [Swiper]{@link swiper}.
>
> - When the **Refresh** component is nested with a [List]{@link list} component whose content size is smaller than
> the component itself, and there are other components in between, gestures may be intercepted by the intermediate
> components, preventing the pull-to-refresh effect. In such cases, set the [alwaysEnabled]{@link EdgeEffectOptions}
> parameter to **true** to allow [List]{@link list} to respond to gestures and drive the **Refresh** component
> through nested scrolling for the pull-to-refresh effect. For details, see
> [Example 9: Implementing Pull-to-Refresh in the Non-Full-Screen Scenario](docroot://reference/apis-arkui/arkui-ts/ts-container-refresh.md#example-9-implementing-pull-to-refresh-in-the-non-full-screen-scenario).
>
> - The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
> custom gestures, refer to [Gesture Blocking Enhancement]{@link common}.
>
> - Pull-to-refresh cannot be triggered by mouse click-and-drag operations.


## Refresh

```TypeScript
Refresh(value: RefreshOptions)
```

Creates a **Refresh** container.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RefreshOptions | Yes | Parameters of the **Refresh** component. |

## Summary

- [RefreshOptions](arkts-arkui-refresh-refreshoptions-i.md)
- [RefreshStatus](arkts-arkui-refresh-refreshstatus-e.md)
