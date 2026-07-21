# PersistentStorage

For details about how to use PersistentStorage on the UI, see [PersistentStorage: Persisting Application State](docroot://ui/state-management/arkts-persiststorage.md).

> **NOTE**

> Since API version 12, PersistentStorage supports **null** and **undefined**.

**Since:** 7

<!--Device-unnamed-declare class PersistentStorage--><!--Device-unnamed-declare class PersistentStorage-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(appStorage: AppStorage, storage: Storage)
```

Constructor.

**Since:** 7

<!--Device-PersistentStorage-constructor(appStorage: AppStorage, storage: Storage)--><!--Device-PersistentStorage-constructor(appStorage: AppStorage, storage: Storage)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStorage | [AppStorage](arkts-arkui-appstorage-c.md) | Yes | Application-level storage. |
| storage | [Storage](../../apis-arkdata/arkts-apis/arkts-arkdata-storage-storage-c.md) | Yes | Storage. |

