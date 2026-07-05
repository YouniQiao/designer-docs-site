# getDeviceRotationRadian

## getDeviceRotationRadian

```TypeScript
function getDeviceRotationRadian(): Promise<DeviceRotationRadian>
```

Obtains the device posture data. The posture data contains the rotation angles of the x, y, and z axes, that is, the Euler angles of the three axes. The definitions of the three axes are the same as those of the device sensor, and the right-handed coordinate system is used. Posture rotation angles are calculated under the z-x-y intrinsic rotation order, and derived by converting quaternions obtained via sensor fusion.

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.DeviceStatus

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DeviceRotationRadian> | The result of device rotation radian. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 32500001 | Service exception. |

**示例：**

```TypeScript
import { deviceStatus } from '@kit.MultimodalAwarenessKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
   deviceStatus.getDeviceRotationRadian().then((radian: deviceStatus.DeviceRotationRadian) => {
      console.info('x:' + radian.x + ' y:' + radian.y + ' z:' + radian.z);
   }).catch((err: BusinessError) => {
      console.error('get device rotation radian failed, errmsg:' + err);
   })
} catch (err) {
   console.error('invoke failed, errmsg:' + err)
}

```

