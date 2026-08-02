# @ohos.sendableResourceManager

The **sendableResourceManager** module provides the [resourceToSendableResource](arkts-localization-sendableresourcemanager-resourcetosendableresource-f.md#resourcetosendableresource) and [sendableResourceToResource](arkts-localization-sendableresourcemanager-sendableresourcetoresource-f.md#sendableresourcetoresource) APIs to implement conversion between [Resource](arkts-localization-sendableresourcemanager-resource-t.md) and [SendableResource](arkts-localization-sendableresourcemanager-resourcetosendableresource-f.md#resourcetosendableresource) objects.A **Resource** object can be held by the [Sendable](../../../arkts-utils/arkts-sendable.md) class after being converted into a **SendableResource** object. After cross-thread transmission, the **Sendable** class converts the **SendableResource** object into a **Resource** object and uses it as an input parameter for the API used to obtain resources.

**Since:** 12

<!--Device-unnamed-declare namespace sendableResourceManager--><!--Device-unnamed-declare namespace sendableResourceManager-End-->

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { sendableResourceManager } from '@kit.LocalizationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [resourceToSendableResource](arkts-localization-sendableresourcemanager-resourcetosendableresource-f.md#resourcetosendableresource) | Converts a **Resource** object to a **SendableResource** object. |
| [sendableResourceToResource](arkts-localization-sendableresourcemanager-sendableresourcetoresource-f.md#sendableresourcetoresource) | Converts a **SendableResource** object to a **Resource** object. |

### Types

| Name | Description |
| --- | --- |
| [Resource](arkts-localization-sendableresourcemanager-resource-t.md) | Defines a Resource object. |
| [SendableResource](arkts-localization-sendableresourcemanager-sendableresource-t.md) | Defines a SendableResource object. |

