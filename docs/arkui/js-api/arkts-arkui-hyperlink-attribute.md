# Hyperlink properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

**Inheritance/Implementation:** HyperlinkAttribute extends [CommonMethod<HyperlinkAttribute>](CommonMethod<HyperlinkAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: Color | number | string | Resource)
```

Sets the color of the hyperlink text.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Color \| number \| string \| Resource | Yes | Color of the hyperlink text<br>&lt;!--RP1--&gt;Default value: '#ff007dff', indicating blue.&lt;!--RP1End--&gt; |

