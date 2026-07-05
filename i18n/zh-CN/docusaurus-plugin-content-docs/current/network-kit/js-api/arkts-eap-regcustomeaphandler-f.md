# regCustomEapHandler

## regCustomEapHandler

```TypeScript
function regCustomEapHandler(netType: number, eapCode: number, eapType: number, callback: Callback<EapData>): void
```

Customize eap packets by callback

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.NetManager.Eap

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netType | number | 是 | Indicates net type need to customize. |
| eapCode | number | 是 | Indicates eap code need to customize. |
| eapType | number | 是 | Indicates eap type need to customize. |
| callback | Callback&lt;EapData> | 是 | the callback of eap packet customization. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 33200006 | Invalid net type |
| 33200007 | Invalid eap code |
| 33200008 | Invalid eap type |
| 33200009 | netmanager stop |
| 33200099 | internal error |

**示例：**

```TypeScript
import {eap} from '@kit.NetworkKit';
let netType = 1;
let eapCode = 1;
let eapType = 25;
let eapData = (eapData:eap.EapData):void => {
  console.info("rsp result", JSON.stringify(eapData));
};

eap.regCustomEapHandler(netType, eapCode, eapType, eapData);
console.info('regCustomEapHandler success');

```

