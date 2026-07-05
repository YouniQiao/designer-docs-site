# SyncMode

```TypeScript
enum SyncMode
```

Defines the database synchronization mode. Use the enum name rather than the enum value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## SYNC_MODE_PUSH

```TypeScript
SYNC_MODE_PUSH = 0
```

Data is pushed from a local device to a remote device.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## SYNC_MODE_PULL

```TypeScript
SYNC_MODE_PULL = 1
```

Data is pulled from a remote device to a local device.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## SYNC_MODE_TIME_FIRST

```TypeScript
SYNC_MODE_TIME_FIRST
```

Synchronize with the data with the latest modification time.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## SYNC_MODE_NATIVE_FIRST

```TypeScript
SYNC_MODE_NATIVE_FIRST
```

Synchronize data from a local device to the cloud.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

## SYNC_MODE_CLOUD_FIRST

```TypeScript
SYNC_MODE_CLOUD_FIRST
```

Synchronize data from the cloud to a local device.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

