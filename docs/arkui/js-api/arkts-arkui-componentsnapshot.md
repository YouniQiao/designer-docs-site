# @ohos.arkui.componentSnapshot

The **componentSnapshot** module provides APIs for obtaining component snapshots, including snapshots of components
that have been loaded and snapshots of components that have not been loaded yet. Snapshots are strictly limited to
the component's layout bounds. Content drawn outside the area of the owning component or the parent component is not
visible in the snapshots. In addition, sibling components stacked in the component's area are not displayed in the
snapshot.

Transformation attributes such as scaling, translation, and rotation only apply to the child components of the target
component. Applying these transformation attributes directly to the target component itself has no effect; the
snapshot will still display the component as it appears before any transformations are applied.

For typical use cases (for example, long screenshots) and best practices of component snapshots, see
[Using Component Snapshot (ComponentSnapshot)](../../../../ui/arkts-uicontext-component-snapshot.md).

> **NOTE**
>
> - In scenarios where [XComponent](../arkts-components/arkts-arkui-xcomponent.md) is used to, for example, display video or camera streams,
> obtain images through
> [createPixelMapFromSurface](../../apis-image-kit/arkts-apis/arkts-image-createpixelmapfromsurface-f.md#createpixelmapfromsurface-1),
> instead of through an API in this module.
>
> - If the content of a component does not fill the entire area allocated for it, any remaining space in the snapshot
> will be rendered as transparent pixels. In addition, if the component uses [image effects](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) or other
> effect-related attributes, the resulting snapshot may not be as expected. To address these potential issues, check
> whether the component's transparent content area needs to be filled, or use the window screenshot API
> [snapshot](arkts-arkui-window-i.md#snapshot-1) instead.
>
> - You can preview how this component looks on a real device, but not in DevEco Studio Previewer.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { componentSnapshot } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createFromBuilder](arkts-arkui-createfrombuilder-f.md#createfrombuilder-1) | Renders a custom component in the application background and outputs its snapshot. This API uses an asynchronouscallback to return the result. The coordinates and size of the offscreen component's drawing area can be obtainedthrough the callback.&gt; **NOTE**&gt;&gt; - Since API version 12, you can use the [getComponentSnapshot](arkts-arkui-uicontext-c.md#getcomponentsnapshot-1)&gt; API in [UIContext](arkts-arkui-uicontext.md) to obtain the [ComponentSnapshot](arkts-arkui-componentsnapshot-c.md)&gt; object associated with the current UI context.&gt;&gt; - To account for the time spent in awaiting component building and rendering, the callback of offscreen snapshots&gt; has a delay of less than 500 ms.&gt;&gt; - Components in the builder do not support the setting of animation-related attributes, such as&gt; [transition](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).&gt;&gt; - If a component is on a time-consuming task, for example, an [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) or [Web](../../apis-arkweb/arkts-components/arkts-arkweb-web.md) component&gt; that is loading online images, its loading may be still in progress when this API is called. In this case, the&gt; output snapshot does not represent the component in the way it looks when the loading is successfully completed. |
| [createFromBuilder](arkts-arkui-createfrombuilder-f.md#createfrombuilder-2) | Renders a custom component in the application background and outputs its snapshot. This API uses a promise toreturn the result. The coordinates and size of the offscreen component's drawing area can be obtained through thecallback.&gt; **NOTE**&gt;&gt; - Since API version 12, you can use the [getComponentSnapshot](arkts-arkui-uicontext-c.md#getcomponentsnapshot-1)&gt; API in [UIContext](arkts-arkui-uicontext.md) to obtain the [ComponentSnapshot](arkts-arkui-componentsnapshot-c.md)&gt; object associated with the current UI context.&gt;&gt; - To account for the time spent in awaiting component building and rendering, the callback of offscreen snapshots&gt; has a delay of less than 500 ms.&gt;&gt; - Components in the builder do not support the setting of animation-related attributes, such as&gt; [transition](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).&gt;&gt; - If a component is on a time-consuming task, for example, an [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) or [Web](../../apis-arkweb/arkts-components/arkts-arkweb-web.md) component&gt; that is loading online images, its loading may be still in progress when this API is called. In this case, the&gt; output snapshot does not represent the component in the way it looks when the loading is successfully completed. |
| [get](arkts-arkui-get-f.md#get-1) | Obtains the snapshot of a component that has been loaded based on the provided [component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). ThisAPI uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; - Since API version 12, you can use the [getComponentSnapshot](arkts-arkui-uicontext-c.md#getcomponentsnapshot-1)&gt; API in [UIContext](arkts-arkui-uicontext.md) to obtain the [ComponentSnapshot](arkts-arkui-componentsnapshot-c.md)&gt; object associated with the current UI context.&gt;&gt; - The snapshot captures content rendered in the last frame. If this API is called when the component triggers an&gt; update, the re-rendered content will not be included in the obtained snapshot. |
| [get](arkts-arkui-get-f.md#get-2) | Obtains the snapshot of a component that has been loaded based on the provided [component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). ThisAPI uses a promise to return the result.&gt; **NOTE**&gt;&gt; - Since API version 12, you can use the [getComponentSnapshot](arkts-arkui-uicontext-c.md#getcomponentsnapshot-1)&gt; API in [UIContext](arkts-arkui-uicontext.md) to obtain the [ComponentSnapshot](arkts-arkui-componentsnapshot-c.md)&gt; object associated with the current UI context.&gt;&gt; - The snapshot captures content rendered in the last frame. If this API is called when the component triggers an&gt; update, the re-rendered content will not be included in the obtained snapshot. |
| [getSync](arkts-arkui-getsync-f.md#getsync-1) | Obtains the snapshot of a component that has been loaded based on the provided [component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). ThisAPI synchronously waits for the snapshot to complete and returns a[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md) object.&gt; **NOTE**&gt;&gt; The snapshot captures content rendered in the last frame. If this API is called when the component triggers an&gt; update, the re-rendered content will not be included in the obtained snapshot. |

### Interfaces

| Name | Description |
| --- | --- |
| [ColorModeOptions](arkts-arkui-colormodeoptions-i.md) | Defines the color space used for the snapshot. |
| [DynamicRangeModeOptions](arkts-arkui-dynamicrangemodeoptions-i.md) | Defines the dynamic range mode used for the snapshot. |
| [LocalizedSnapshotRegion](arkts-arkui-localizedsnapshotregion-i.md) | Defines the rectangular region for capturing the component snapshot, with coordinates adjusted based on the layoutdirection (LTR or RTL).&gt; **NOTE**&gt;&gt; Directly using **componentSnapshot** can lead to the issue of&gt; [ambiguous UI context](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain a&gt; **UIContext** instance using **getUIContext()**, and then obtain the associated **componentSnapshot** object&gt; using&gt; [getComponentSnapshot](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getcomponentsnapshot12). |
| [SnapshotOptions](arkts-arkui-snapshotoptions-i.md) | Defines the extra options for snapshot taking. |
| [SnapshotRegion](arkts-arkui-snapshotregion-i.md) | Defines the rectangular region for capturing the component snapshot. |
| [SnapshotSizeLimitation](arkts-arkui-snapshotsizelimitation-i.md) | Defines the size limit of a component screenshot. |

### Types

| Name | Description |
| --- | --- |
| [SnapshotRegionType](arkts-arkui-snapshotregiontype-t.md) | Defines the snapshot region rect type. |

