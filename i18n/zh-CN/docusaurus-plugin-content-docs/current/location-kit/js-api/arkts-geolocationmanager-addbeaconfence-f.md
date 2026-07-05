# addBeaconFence

## addBeaconFence

```TypeScript
function addBeaconFence(fenceRequest: BeaconFenceRequest): Promise<number>
```

Add a beacon fence.

**起始版本：** 20

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geofence

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fenceRequest | BeaconFenceRequest | 是 | Indicates the details of the beacon fence. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | The promise returned by the function, for reporting the ID of beacon fence. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.addBeaconFence}  due to limited device capabilities. |
| 3501100 | Failed to add a beacon fence because the location switch is off. |
| 3501101 | Failed to add a beacon fence because the bluetooth switch is off. |
| 3501601 | The number of beacon fence exceeds the maximum. |
| 3501603 | Duplicate beacon fence information. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 以iBeacon协议为例，格式如下
  // 01 byte    type = 0x02
  // 01 byte    len = 0x15 = 21
  // 16 byte    UUID
  // 02 byte    major
  // 02 byte    minor
  // 01 byte    tx power
  let manufactureDataBuffer: Uint8Array = new Uint8Array([0X02, 0X15, 0X00, 0X11, 0X22, 0X33, 0X44, 0X55,
    0X66, 0X77, 0X88, 0X99, 0XAA, 0XBB, 0XCC, 0XDD, 0XEE, 0XFF, 0X11, 0X22, 0X33, 0X44, 0X55]);
  let manufactureDataMaskBuffer: Uint8Array = new Uint8Array([0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF,
    0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF, 0XFF]);

  let manufactureData: geoLocationManager.BeaconManufactureData = {
    manufactureId: 0X004C,
    manufactureData: manufactureDataBuffer.buffer,
    manufactureDataMask: manufactureDataMaskBuffer.buffer
  };

  let beacon: geoLocationManager.BeaconFence = {
    identifier: "11",
    beaconFenceInfoType: geoLocationManager.BeaconFenceInfoType.BEACON_MANUFACTURE_DATA,
    manufactureData: manufactureData
  };

  let fenceRequest: geoLocationManager.BeaconFenceRequest = {
    beacon: beacon,
    transitionCallback: (transition: geoLocationManager.GeofenceTransition) => {
      if (transition) {
        console.info("GeofenceTransition: err" + JSON.stringify(transition));
      }
    },
    fenceExtensionAbilityName: "MyFenceExtensionAbility",
  };
  geoLocationManager.addBeaconFence(fenceRequest).then((id) => {
    console.info("addBeaconFence success, fence id:" + id);
  }).catch((err: BusinessError) => {
    console.error('promise, addBeaconFence: error=' + JSON.stringify(err));
  });
} catch (error) {
  console.error("addBeaconFence: errCode" + error.code + ", errMessage" + error.message);
}

```

