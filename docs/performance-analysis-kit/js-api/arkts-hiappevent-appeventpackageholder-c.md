# AppEventPackageHolder

Defines a subscription data holder for processing event information.

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## constructor

```TypeScript
constructor(watcherName: string)
```

Constructs an **AppEventPackageHolder** instance. You can call [addWatcher]hiAppEvent.addWatcher to add an event watcher, and then associate the **AppEventPackageHolder** instance with the watcher added in the application based on the watcher name.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watcherName | string | Yes | Name of the event watcher added through [addWatcher]hiAppEvent.addWatcher  . If no watcher is added, no data is displayed by default. |

**Example**

```TypeScript
// Add the Watcher1 to subscribe to system events.
hiAppEvent.addWatcher({
  name: "Watcher1",
  appEventFilters: [
    {
      domain: hiAppEvent.domain.OS,
    }
  ],
});

// Create an AppEventPackageHolder instance. holder1 holds the event data subscribed by Watcher1 added through addWatcher.
let holder1: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");

```

## setRow

```TypeScript
setRow(size: int): void
```

Sets the number of data records of the event package obtained each time. When **setRow()** and **setSize()** are called at the same time, only **setRow()** takes effect.

**Since:** 12

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | int | Yes | Number of events. The value range is (0, 2^31-1]. If the value is out of the range, an  exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11104001 | Invalid size value. Possibly caused by the size value is less than or equal  to zero. |

**Example**

```TypeScript
// Create an AppEventPackageHolder instance. holder3 holds the event data subscribed by Watcher1 added through addWatcher.
let holder3: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");
// Set the number of data records for obtaining the event package each time to 1000.
holder3.setRow(1000);

```

## setSize

```TypeScript
setSize(size: int): void
```

Sets the threshold for the data size of the event package obtained each time.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | int | Yes | Data size threshold, in bytes. The value range is [0, 2^31-1]. If the value is out of the  range, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11104001 | Invalid size value. Possibly caused by the size value is less than or equal  to zero. |

**Example**

```TypeScript
// Create an AppEventPackageHolder instance. holder2 holds the event data subscribed by Watcher1 added through addWatcher.
let holder2: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");
// Set the data size threshold for obtaining the event package each time to 1000 bytes.
holder2.setSize(1000);

```

## takeNext

```TypeScript
takeNext(): AppEventPackage
```

Obtains the subscription event. The system obtains the subscription event data based on the data size threshold specified by **setSize** or the number of data records specified by **setRow**. By default, one subscription event data record is obtained. When all subscription event data is obtained, **null** is returned. When **setRow** and **setSize** are called at the same time, only **setRow** takes effect.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Return value:**

| Type | Description |
| --- | --- |
| AppEventPackage | Event package object. If all subscription event data has been retrieved, null is  returned. |

**Example**

```TypeScript
// Create an AppEventPackageHolder instance. holder4 holds the event data subscribed by Watcher1 added through addWatcher.
let holder4: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");
// Obtain the subscribed event.
let eventPkg: hiAppEvent.AppEventPackage | null = holder4.takeNext();

```

## takeNext

```TypeScript
takeNext(): AppEventPackage | null
```

Obtains the subscription event. <br>The system obtains the subscription event data based on the data size threshold specified by setSize or the number of data records specified by setRow. By default, one subscription event data record is obtained. When all subscription event data is obtained, null is returned. <br>When setRow and setSize are called at the same time, only setRow takes effect.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Return value:**

| Type | Description |
| --- | --- |
| AppEventPackage | Event package object. If all subscription event data has been retrieved,  null is returned. |

