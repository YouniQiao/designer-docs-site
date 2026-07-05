# sendMms

## sendMms

```TypeScript
function sendMms(context: Context, mmsParams: MmsParams, callback: AsyncCallback<void>): void
```

Sends an MMS message.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SEND_MESSAGES

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of application or capability. |
| mmsParams | MmsParams | 是 | Indicates the parameters of the MMS message. |
| callback | AsyncCallback&lt;void> | 是 | The callback of sendMms. For error code, see MmsFailCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. 3. Parameter verification failed. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common, featureAbility } from '@kit.AbilityKit';

// 获取context
let context: common.BaseContext = featureAbility.getContext();

// 彩信pdu存储路径，pdu来源于编码接口
const sandBoxPath: string = '/data/storage/el2/base/files/';
let filePath: string  = sandBoxPath + 'SendReq.mms';

// 发送彩信参数(mmsc以联通卡为例)
let mmsPars: sms.MmsParams = {
  slotId : 0,
  mmsc: 'http://mmsc.myuni.com.cn',
  data: filePath,
  mmsConfig: {
   userAgent:'ua',
   userAgentProfile: 'uaprof'
  }
};

// 调用发送接口
sms.sendMms(context, mmsPars, async(err: BusinessError) =>{
  if (err) {
      console.error(`sendMms fail, err : ${JSON.stringify(err)}`);
      return;
  }
  console.info(`sendMms Success`);
})


import { UIAbility } from '@kit.AbilityKit';
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

// 彩信pdu存储路径，pdu来源于编码接口
const sandBoxPath = '/data/storage/el2/base/files/';
let filePath  = sandBoxPath + 'SendReq.mms';

// 彩信用户代理、用户代理描述配置。根据运营商要求配置，默认ua，uaprof
let mmsConf: sms.MmsConfig = {
  userAgent:'ua',
  userAgentProfile: 'uaprof'
};

// 发送彩信参数(mmsc以联通卡为例)
let mmsPars: sms.MmsParams = {
  slotId : 0,
  mmsc: 'http://mmsc.myuni.com.cn',
  data: filePath,
  mmsConfig: mmsConf
};

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
    sms.sendMms(this.context, mmsPars, async(err: BusinessError) =>{
        if (err) {
            console.error(`sendMms fail, err : ${JSON.stringify(err)}`);
            return;
        }
        console.info(`sendMms Success`);
        })
    }
}

```

## sendMms

```TypeScript
function sendMms(context: Context, mmsParams: MmsParams): Promise<void>
```

Sends an MMS message.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SEND_MESSAGES

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of application or capability. |
| mmsParams | MmsParams | 是 | Indicates the parameters of the MMS message. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the sendMms. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. 3. Parameter verification failed. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common, featureAbility } from '@kit.AbilityKit';

// 获取context
let context: common.BaseContext = featureAbility.getContext();

// 彩信pdu存储路径，pdu来源于编码接口
const sandBoxPath: string = '/data/storage/el2/base/files/';
let filePath: string = sandBoxPath + 'SendReq.mms';

// 发送彩信参数(mmsc以联通卡为例)
let mmsPars: sms.MmsParams = {
  slotId: 0,
  mmsc: 'http://mmsc.myuni.com.cn',
  data: filePath,
  mmsConfig: {
   userAgent:'ua',
   userAgentProfile: 'uaprof'
  }
};

// 调用发送接口
let promise = sms.sendMms(context, mmsPars);
promise.then(() => {
    console.info(`sendMms success`);
}).catch((err: BusinessError) => {
    console.error(`sendMms failed, promise: err->${JSON.stringify(err)}`);
});


import { UIAbility } from '@kit.AbilityKit';
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

// 彩信pdu存储路径，pdu来源于编码接口
const sandBoxPath = '/data/storage/el2/base/files/';
let filePath  = sandBoxPath + 'SendReq.mms';

// 彩信用户代理、用户代理描述配置。根据运营商要求配置，默认ua，uaprof
let mmsConf: sms.MmsConfig = {
  userAgent:'ua',
  userAgentProfile: 'uaprof'
};

// 发送彩信参数(mmsc以联通卡为例)
let mmsPars: sms.MmsParams = {
  slotId : 0,
  mmsc: 'http://mmsc.myuni.com.cn',
  data: filePath,
  mmsConfig: mmsConf
};

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
    let promise = sms.sendMms(this.context, mmsPars);
    promise.then(() => {
        console.info(`sendMms success`);
    }).catch((err: BusinessError) => {
        console.error(`sendMms failed, promise: err->${JSON.stringify(err)}`);
    });
    }
}

```

