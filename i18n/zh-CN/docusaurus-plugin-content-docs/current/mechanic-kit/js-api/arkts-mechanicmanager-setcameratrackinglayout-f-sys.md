# setCameraTrackingLayout

## setCameraTrackingLayout

```TypeScript
function setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void
```

Sets the camera tracking layout for this mechanical device.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| trackingLayout | CameraTrackingLayout | 是 | Camera tracking layout. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

**示例：**

```TypeScript
console.info('Set layout');
mechanicManager.setCameraTrackingLayout(mechanicManager.CameraTrackingLayout.LEFT);
console.info('Set layout successful');

```

