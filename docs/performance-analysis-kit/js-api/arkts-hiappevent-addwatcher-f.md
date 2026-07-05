# addWatcher

## addWatcher

```TypeScript
function addWatcher(watcher: Watcher): AppEventPackageHolder
```

Adds an event watcher. You can use the callback of the event watcher to subscribe to events.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watcher | Watcher | Yes | Event watcher. |

**Return value:**

| Type | Description |
| --- | --- |
| AppEventPackageHolder | Subscription data holder. If the subscription fails, null is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11102001 | Invalid watcher name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |
| 11102002 | Invalid filtering event domain. Possible causes: 1. Contain invalid  characters;  2. Length is invalid. |
| 11102003 | Invalid row value. Possibly caused by the row value is less than zero. |
| 11102004 | Invalid size value. Possibly caused by the size value is less than zero. |
| 11102005 | Invalid timeout value. Possibly caused by the timeout value is less than zero. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

hiAppEvent.addWatcher({
  name: "watcher1",
  // Subscription filters. The application crash event in the system event domain is subscribed.
  appEventFilters: [
    {
      domain: hiAppEvent.domain.OS,
      names: [hiAppEvent.event.APP_CRASH]
    }
  ],
  // Set the condition for triggering the onTrigger callback. The callback is triggered when the total number of events reaches 10, the total event size reaches 1000 bytes, or the event lasts for more than 30s.
  triggerCondition: {
    row: 10,
    size: 1000,
    timeOut: 1
  },
  // Implement the onTrigger callback with triggerCondition. When the callback condition is met, the callback is triggered. After the callback notification is received, use takeNext() to query the subscribed event.
  onTrigger: (curRow: number, curSize: number, holder: hiAppEvent.AppEventPackageHolder) => {
    if (holder == null) {
      hilog.error(0x0000, 'hiAppEvent', "holder is null");
      return;
    }
    hilog.info(0x0000, 'hiAppEvent', `curRow=${curRow}, curSize=${curSize}`);
    let eventPkg: hiAppEvent.AppEventPackage | null = null;
    while ((eventPkg = holder.takeNext()) != null) {
      hilog.info(0x0000, 'hiAppEvent', `eventPkg.packageId=${eventPkg.packageId}`);
      hilog.info(0x0000, 'hiAppEvent', `eventPkg.row=${eventPkg.row}`);
      hilog.info(0x0000, 'hiAppEvent', `eventPkg.size=${eventPkg.size}`);
      for (const eventInfo of eventPkg.data) {
        hilog.info(0x0000, 'hiAppEvent', `eventPkg.data=${eventInfo}`);
      }
    }
  }
});


import { hilog } from '@kit.PerformanceAnalysisKit';

let holder: hiAppEvent.AppEventPackageHolder = hiAppEvent.addWatcher({
  name: "watcher2",
  // Subscription filters. The application crash event in the system event domain is subscribed.
  appEventFilters: [
    {
      domain: hiAppEvent.domain.OS,
      names: [hiAppEvent.event.APP_CRASH]
    }
  ],
});
// Obtain crash events through the subscription data holder.
if (holder != null) {
  let eventPkg: hiAppEvent.AppEventPackage | null = null;
  while ((eventPkg = holder.takeNext()) != null) {
    hilog.info(0x0000, 'hiAppEvent', `eventPkg.packageId=${eventPkg.packageId}`);
    hilog.info(0x0000, 'hiAppEvent', `eventPkg.row=${eventPkg.row}`);
    hilog.info(0x0000, 'hiAppEvent', `eventPkg.size=${eventPkg.size}`);
    for (const eventInfo of eventPkg.data) {
      hilog.info(0x0000, 'hiAppEvent', `eventPkg.data=${eventInfo}`);
    }
  }
}


import { hilog } from '@kit.PerformanceAnalysisKit';

hiAppEvent.addWatcher({
  name: "watcher3",
  // Subscription filters. The application crash event in the system event domain is subscribed.
  appEventFilters: [
    {
      domain: hiAppEvent.domain.OS,
      names: [hiAppEvent.event.APP_CRASH]
    }
  ],
  // Implement the onReceive callback, which is called in real time after an event is detected.
  onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {
    hilog.info(0x0000, 'hiAppEvent', `domain=${domain}`);
    for (const eventGroup of appEventGroups) {
      hilog.info(0x0000, 'hiAppEvent', `eventName=${eventGroup.name}`);
      for (const eventInfo of eventGroup.appEventInfos) {
        hilog.info(0x0000, 'hiAppEvent', `event=${JSON.stringify(eventInfo)}`);
      }
    }
  }
});

```

