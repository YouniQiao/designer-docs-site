# @ohos.app.ability.wantAgent

The WantAgent module encapsulates a [Want](arkts-ability-want-c.md) object, enabling an application to trigger a WantAgent object to perform specified operations (such as starting an ability or publishing a common event) at a future time. The module provides the APIs for creating a WantAgent object, obtaining the bundle name and UID of the application to which a WantAgent object belongs, proactively triggering a WantAgent object, and checking whether two WantAgent objects are the same. A typical use scenario of WantAgent is notification processing. For example, when a user touches a notification, the [trigger](trigger) API of WantAgent is triggered and the target application is started. For details, see [Notification](../../../../notification/notification-with-wantagent.md).

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [wantAgent](arkts-ability-wantagent-n.md) | The WantAgent module encapsulates a [Want](arkts-ability-want-c.md) object, enabling an application to trigger a WantAgent object to perform specified operations (such as starting an ability or publishing a common event) at a future time. The module provides the APIs for creating a WantAgent object, obtaining the bundle name and UID of the application to which a WantAgent object belongs, proactively triggering a WantAgent object, and checking whether two WantAgent objects are the same. A typical use scenario of WantAgent is notification processing. For example, when a user touches a notification, the [trigger](trigger) API of WantAgent is triggered and the target application is started. For details, see [Notification](../../../../notification/notification-with-wantagent.md). |

### Types

| Name | Description |
| --- | --- |
| [WantAgent](arkts-ability-wantagent-t.md) | Target WantAgent object. |

