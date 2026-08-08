# NotificationSortingMap (System API)

The **NotificationSortingMap** module provides APIs for defining the sorting information of active notifications in all subscribed notifications.
    **NOTE**  
    
    The initial APIs of this module are supported since API version 7. Newly added APIs will be marked with a superscript  
    to indicate their earliest API version.  
    
    The APIs provided by this module are system APIs.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-unnamed-export interface NotificationSortingMap--><!--Device-unnamed-export interface NotificationSortingMap-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## sortedHashCode

```TypeScript
readonly sortedHashCode: Array<string>
```

Hash codes for notification sorting.

**Type:** Array&lt;string&gt;

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSortingMap-readonly sortedHashCode: Array<string>--><!--Device-NotificationSortingMap-readonly sortedHashCode: Array<string>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## sortings

```TypeScript
readonly sortings: Record<string, NotificationSorting>
```

Array of notification sorting information.

**Type:** Record&lt;string, NotificationSorting&gt;

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSortingMap-readonly sortings: Record<string, NotificationSorting>--><!--Device-NotificationSortingMap-readonly sortings: Record<string, NotificationSorting>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

