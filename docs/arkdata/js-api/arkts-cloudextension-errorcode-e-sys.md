# ErrorCode

```TypeScript
export enum ErrorCode
```

表示端云同步过程的状态。请使用枚举名而非枚举值。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## SUCCESS

```TypeScript
SUCCESS = 0
```

表示端云同步过程成功。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## UNKNOWN_ERROR

```TypeScript
UNKNOWN_ERROR = 1
```

表示端云同步过程中遇到未知错误。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## NETWORK_ERROR

```TypeScript
NETWORK_ERROR = 2
```

表示端云同步过程中遇到网络错误。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## CLOUD_DISABLED

```TypeScript
CLOUD_DISABLED = 3
```

表示云同步开关未开启，请检查云空间同步开关状态。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## LOCKED_BY_OTHERS

```TypeScript
LOCKED_BY_OTHERS = 4
```

表示有其他设备正在进行端云同步，本设备无法进行端云同步。请确保无其他设备占用端云资源后，再使用本设备进行端云同步任务。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## RECORD_LIMIT_EXCEEDED

```TypeScript
RECORD_LIMIT_EXCEEDED = 5
```

表示本次端云同步需要同步的条目或大小超出最大值。由云端配置最大值。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## NO_SPACE_FOR_ASSET

```TypeScript
NO_SPACE_FOR_ASSET = 6
```

表示云空间剩余空间小于待同步的资产大小。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

