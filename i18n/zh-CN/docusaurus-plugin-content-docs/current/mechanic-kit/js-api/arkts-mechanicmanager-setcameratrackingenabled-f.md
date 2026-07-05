# setCameraTrackingEnabled

## setCameraTrackingEnabled

```TypeScript
function setCameraTrackingEnabled(isEnabled: boolean): void
```

Enables or disables camera tracking.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnabled | boolean | 是 | Whether to enable camera tracking. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

**示例：**

```TypeScript
console.info('Enable tracing');
// 调用setCameraTrackingEnabled方法，参数true表示启用摄像头跟踪
mechanicManager.setCameraTrackingEnabled(true);
console.info('Succeeded in enabling tracking.');

```

