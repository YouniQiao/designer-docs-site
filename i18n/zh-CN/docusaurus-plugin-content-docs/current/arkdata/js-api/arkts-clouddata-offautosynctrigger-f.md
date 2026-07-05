# offAutoSyncTrigger

## offAutoSyncTrigger

```TypeScript
function offAutoSyncTrigger(observer?: Callback<AutoSyncTriggerInfo>): void
```

取消订阅自动同步触发事件通知。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;AutoSyncTriggerInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function autoSyncTriggerObserver(info: cloudData.AutoSyncTriggerInfo) {
  console.info(`Auto sync triggered, mode: ${info.mode}`);
}

// 订阅
cloudData.onAutoSyncTrigger(autoSyncTriggerObserver);

// 取消指定订阅
cloudData.offAutoSyncTrigger(autoSyncTriggerObserver);

// 取消所有订阅
cloudData.offAutoSyncTrigger();

```

