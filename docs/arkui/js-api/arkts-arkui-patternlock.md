# PatternLock

The **PatternLock** component allows users to use a pattern password for authentication. It enters the input state
once a finger is pressed against it, and exits the input state and completes the input once the finger leaves the
screen.

> **NOTE**

> - If you require additional features, use
> [custom components](docroot://ui/state-management/arkts-create-custom-components.md). For example, the custom
> component<!--RP1-->
> [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
> <!--RP1End--> implements the pattern lock function using the [Canvas]{@link canvas} component. You can extend its
> functionality as required.


## PatternLock

```TypeScript
PatternLock(controller?: PatternLockController)
```

Creates a pattern lock component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | PatternLockController | No | Controller of a component to reset the component status. |

## Summary

- [CircleStyleOptions](arkts-arkui-patternlock-circlestyleoptions-i.md)
- [PatternLockChallengeResult](arkts-arkui-patternlock-patternlockchallengeresult-e.md)
