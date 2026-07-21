# Device

getInfo interface

**Since:** 3

**Deprecated since:** 6

<!--Device-unnamed-export default class Device--><!--Device-unnamed-export default class Device-End-->

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## Modules to Import

```TypeScript
import { DeviceResponse, GetDeviceOptions } from '@kit.BasicServicesKit';
```

<a id="getinfo"></a>
## getInfo

```TypeScript
static getInfo(options?: GetDeviceOptions): void
```

Obtains the device information.

**Since:** 3

**Deprecated since:** 6

<!--Device-Device-static getInfo(options?: GetDeviceOptions): void--><!--Device-Device-static getInfo(options?: GetDeviceOptions): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [GetDeviceOptions](arkts-basicservices-device-getdeviceoptions-i.md) | No | Options |

**Example**

ArkTS example:

```TypeScript
export default class Page {
  getInfo() {
    interface DeviceData {
      brand: string;
    }

    try {
      Device.getInfo({
        success: (data: DeviceData) => {
          console.info('Device information obtained successfully. Device brand:' + data.brand);
        },
        fail: (data: string, code: number) => {
          console.info('Failed to obtain device information. Error code:' + code + '; Error information: ' + data);
        },
      });
    } catch (error) {
      console.error('Device information API is not supported');
    }
  }
}

```

JS example:

```TypeScript
<div class="container">
    <text class="title">Device Information</text>
    <input type="button" value="Get Device Brand" class="button" onclick="getDeviceInfo"></input>
    <text class="info">{{brandInfo}}</text>
</div>

```

```TypeScript
/*xxx.css*/
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}

.title {
    font-size: 40px;
    text-align: center;
    width: 100%;
    height: 80px;
    margin-bottom: 50px;
}

.button {
    font-size: 30px;
    text-align: center;
    width: 240px;
    height: 80px;
    margin: 20px;
}

.info {
    font-size: 28px;
    text-align: center;
    width: 100%;
    height: 60px;
    margin-top: 50px;
    color: #007dff;
}

```

```TypeScript
//xxx.js
import Device from '@system.device';

export default {
    data: {
        brandInfo: 'Click the button to get device brand'
    },
    
    getDeviceInfo() {
        try {
            Device.getInfo({
                success: (data) => {
                    console.info('Device information obtained successfully. Device brand:' + data.brand);
                    this.brandInfo = 'Device brand: ' + data.brand;
                },
                fail: (data, code) => {
                    console.info('Failed to obtain device information. Error code:' + code + '; Error information: ' + data);
                    this.brandInfo = 'Failed to obtain, error code: ' + code;
                },
            });
        } catch (error) {
            console.error('Device information API is not supported');
            this.brandInfo = 'Current device does not support this API';
        }
    }
}

```

