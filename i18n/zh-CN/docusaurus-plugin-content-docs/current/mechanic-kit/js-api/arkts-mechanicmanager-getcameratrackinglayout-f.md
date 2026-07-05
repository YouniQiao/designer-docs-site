# getCameraTrackingLayout

## getCameraTrackingLayout

```TypeScript
function getCameraTrackingLayout(): CameraTrackingLayout
```

Obtains the camera tracking layout of this mechanical device.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraTrackingLayout | Camera tracking layout obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**示例：**

```TypeScript
console.info('Query layout');
// 调用getCameraTrackingLayout方法获取当前摄像头跟踪布局
let layout = mechanicManager.getCameraTrackingLayout();
console.info(`'Succeeded in querying layout, current layout:' ${layout}`);

```

