# UnionEffectContainer

Provides a UnionEffectContainer Component that generates a component fusion effect for descendant components with
"useUnionEffect(true)" set inside it, when their distance is less than a certain threshold.


## UnionEffectContainer

```TypeScript
UnionEffectContainer(options?: UnionEffectContainerOptions)
```

Specify the construction options for the UnionEffectContainer to create the UnionEffectContainer component.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | UnionEffectContainerOptions | No | UnionEffectContainer constructor options. |

## Summary

- [UnionEffectContainerOptions](arkts-arkui-unioneffectcontainer-unioneffectcontaineroptions-i-sys.md)
- [UnionMode](arkts-arkui-unioneffectcontainer-unionmode-e-sys.md)
