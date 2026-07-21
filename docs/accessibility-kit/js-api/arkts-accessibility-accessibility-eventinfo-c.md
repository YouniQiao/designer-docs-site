# EventInfo

Describes a GUI change event.

**Since:** 7

<!--Device-accessibility-class EventInfo--><!--Device-accessibility-class EventInfo-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(jsonObject: Object)
```

Constructor, which is used to construct an EventInfo instance using a JSON object.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-constructor(jsonObject: Object)--><!--Device-EventInfo-constructor(jsonObject: Object)-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jsonObject | Object | Yes | JSON object that contains the **type**, **bundleName**, and **triggerAction** fields. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let eventInfo: accessibility.EventInfo = ({
  type: 'click',
  bundleName: 'com.example.MyApplication',
  triggerAction: 'click',
});

```

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(type: EventType, bundleName: string, triggerAction: Action)
```

Constructor, which is used to construct an EventInfo instance using independent parameters.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-constructor(type: EventType, bundleName: string, triggerAction: Action)--><!--Device-EventInfo-constructor(type: EventType, bundleName: string, triggerAction: Action)-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [EventType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-screenlock-eventtype-t-sys.md) | Yes | Accessibility event types. |
| bundleName | string | Yes | Target application name. |
| triggerAction | [Action](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-action-e.md) | Yes | Action that triggers the event. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let eventInfo = new accessibility.EventInfo('click', 'com.example.MyApplication', 'click');

```

## beginIndex

```TypeScript
beginIndex?: number
```

Start index. The default value is **0**.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-beginIndex?: int--><!--Device-EventInfo-beginIndex?: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## bundleName

```TypeScript
bundleName: string
```

Name of the target application (mandatory).

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-bundleName: string--><!--Device-EventInfo-bundleName: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## componentType

```TypeScript
componentType?: string
```

It should correspond to the event source component type, and the default value is empty.

Example:

- Button type - > 'Button'  
- Image type - > 'Image'

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-componentType?: string--><!--Device-EventInfo-componentType?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## contents

```TypeScript
contents?: Array<string>
```

Content list, which is set according to the actual scenario with no special restrictions. The default value is empty.

**Type:** Array&lt;string&gt;

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-contents?: Array<string>--><!--Device-EventInfo-contents?: Array<string>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## currentIndex

```TypeScript
currentIndex?: number
```

Current index. The default value is **0**.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-currentIndex?: int--><!--Device-EventInfo-currentIndex?: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## customId

```TypeScript
customId?: string
```

Component ID for active focusing, and the default value is empty.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-customId?: string--><!--Device-EventInfo-customId?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## description

```TypeScript
description?: string
```

Event description, which is set according to the actual scenario with no special restrictions, and the default value is empty.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-description?: string--><!--Device-EventInfo-description?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## elementId

```TypeScript
elementId?: number
```

Element ID of the component. The default value is **0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-elementId?: int--><!--Device-EventInfo-elementId?: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## endIndex

```TypeScript
endIndex?: number
```

End index. The default value is **0**.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-endIndex?: int--><!--Device-EventInfo-endIndex?: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## itemCount

```TypeScript
itemCount?: number
```

Total number of items. The default value is **0**.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-itemCount?: int--><!--Device-EventInfo-itemCount?: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## lastContent

```TypeScript
lastContent?: string
```

Latest content, which is set according to the actual scenario with no special restrictions. The default value is empty.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-lastContent?: string--><!--Device-EventInfo-lastContent?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## pageId

```TypeScript
pageId ?: number
```

ID of the page where the event occurs. The default value is **0**.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-pageId ?: int--><!--Device-EventInfo-pageId ?: int-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textAnnouncedForAccessibility

```TypeScript
textAnnouncedForAccessibility?: string
```

Content for auto-broadcasting. When the application needs to proactively broadcast, set the broadcast content according to the actual scenario with no special restrictions, and the default value is empty.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-textAnnouncedForAccessibility?: string--><!--Device-EventInfo-textAnnouncedForAccessibility?: string-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textMoveUnit

```TypeScript
textMoveUnit?: TextMoveUnit
```

Text moving granularity. The default value is char.

**Type:** TextMoveUnit

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-textMoveUnit?: TextMoveUnit--><!--Device-EventInfo-textMoveUnit?: TextMoveUnit-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## textResourceAnnouncedForAccessibility

```TypeScript
textResourceAnnouncedForAccessibility?: Resource
```

Content for auto-broadcasting. The value is a string of the **Resource** type.

**Type:** Resource

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-textResourceAnnouncedForAccessibility?: Resource--><!--Device-EventInfo-textResourceAnnouncedForAccessibility?: Resource-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## triggerAction

```TypeScript
triggerAction: Action
```

Action that triggers the event (mandatory).

**Type:** Action

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-triggerAction: Action--><!--Device-EventInfo-triggerAction: Action-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## type

```TypeScript
type: EventType
```

Accessibility event type (mandatory).

**Type:** EventType

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-type: EventType--><!--Device-EventInfo-type: EventType-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## windowUpdateType

```TypeScript
windowUpdateType?: WindowUpdateType
```

Window update type.

**Type:** WindowUpdateType

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-EventInfo-windowUpdateType?: WindowUpdateType--><!--Device-EventInfo-windowUpdateType?: WindowUpdateType-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

