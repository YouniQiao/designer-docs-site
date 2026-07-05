# isBandTypeSupported

## isBandTypeSupported

```TypeScript
function isBandTypeSupported(bandType: WifiBandType): boolean
```

Check whether the current device supports the specified band.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bandType | WifiBandType | 是 | Indicates the band type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let type = 0;
    let isBandTypeSupported = wifiManager.isBandTypeSupported(type);
    console.info("isBandTypeSupported:" + isBandTypeSupported);    
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

