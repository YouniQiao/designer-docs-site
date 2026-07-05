# downloadMms

## downloadMms

```TypeScript
function downloadMms(context: Context, mmsParams: MmsParams, callback: AsyncCallback<void>): void
```

Downloads an MMS message.

**Since:** 11

**Required permissions:** 

 ohos.permission.RECEIVE_MMS

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| mmsParams | MmsParams | Yes | Indicates the parameters of the MMS message. |
| callback | AsyncCallback&lt;void> | Yes | The callback of downloadMms. For error code, see MmsFailCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common, featureAbility } from '@kit.AbilityKit';

// Obtain the context.
let context: common.BaseContext = featureAbility.getContext();

// Configure the path for storing the PDU of the MMS message.
const sandBoxPath: string = '/data/storage/el2/base/files/';
let filePath: string = sandBoxPath + 'RetrieveConf.mms';

// Parse the MMS URL from the WAP Push message.
let wapPushUrl: string = 'URL';

// Configure the parameters (including the callback) for downloading MMS messages.
let mmsPars: sms.MmsParams = {
  slotId: 0,
  mmsc: wapPushUrl,
  data: filePath,
  mmsConfig: {
   userAgent:'ua',
   userAgentProfile: 'uaprof'
  }
};

// Call the downloadMms API.
sms.downloadMms(context, mmsPars, async(err: BusinessError) =>{
  if (err) {
      console.error(`downloadMms fail, err : ${JSON.stringify(err)}`);
      return;
  }
  console.info(`downloadMms Success`);
})


import { UIAbility } from '@kit.AbilityKit';
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

// Configure the path for storing the PDU of the MMS message.
const sandBoxPath = '/data/storage/el2/base/files/';
let filePath  = sandBoxPath + 'RetrieveConf.mms';

// Parse the MMS URL from the WAP Push message.
let wapPushUrl  = 'URL';

// Configure the MMS user agent and profile. The default values are ua and uaprof, respectively. The configuration is subject to the carrier's requirements. 
let mmsConf: sms.MmsConfig = {
  userAgent:'ua',
  userAgentProfile: 'uaprof'
};

// Configure the parameters (including the callback) for downloading MMS messages.
let mmsPars: sms.MmsParams = {
  slotId : 0,
  mmsc: wapPushUrl,
  data: filePath,
  mmsConfig: mmsConf
};

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
    sms.downloadMms(this.context, mmsPars, async(err: BusinessError) =>{
        if (err) {
            console.error(`downloadMms fail, err : ${JSON.stringify(err)}`);
            return;
        }
        console.info(`downloadMms Success`);
        });
    }
}

```

## downloadMms

```TypeScript
function downloadMms(context: Context, mmsParams: MmsParams): Promise<void>
```

Downloads an MMS message.

**Since:** 11

**Required permissions:** 

 ohos.permission.RECEIVE_MMS

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| mmsParams | MmsParams | Yes | Indicates the parameters of the MMS message. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the downloadMms. For error code, see MmsFailCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common, featureAbility } from '@kit.AbilityKit';

// Obtain the context.
let context: common.BaseContext = featureAbility.getContext();

// Configure the path for storing the PDU of the MMS message.
const sandBoxPath: string = '/data/storage/el2/base/files/';
let filePath: string = sandBoxPath + 'RetrieveConf.mms';

// Parse the MMS URL from the WAP Push message.
let wapPushUrl: string = 'URL';

// Configure the parameters (including the callback) for downloading MMS messages.
let mmsPars: sms.MmsParams = {
  slotId: 0,
  mmsc: wapPushUrl,
  data: filePath,
  mmsConfig: {
   userAgent:'ua',
   userAgentProfile: 'uaprof'
  }
};

// Call the sendMms API.
let promise = sms.downloadMms(context, mmsPars);
promise.then(() => {
    console.info(`downloadMms success`);
}).catch((err: BusinessError) => {
    console.error(`downloadMms failed, promise: err->${JSON.stringify(err)}`);
});


import { UIAbility } from '@kit.AbilityKit';
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

// Configure the path for storing the PDU of the MMS message.
const sandBoxPath = '/data/storage/el2/base/files/';
let filePath  = sandBoxPath + 'RetrieveConf.mms';

// Parse the MMS URL from the WAP Push message.
let wapPushUrl  = 'URL';

// Configure the MMS user agent and profile. The default values are ua and uaprof, respectively. The configuration is subject to the carrier's requirements. 
let mmsConf: sms.MmsConfig = {
  userAgent:'ua',
  userAgentProfile: 'uaprof'
};

// Configure the parameters (including the callback) for downloading MMS messages.
let mmsPars: sms.MmsParams = {
  slotId : 0,
  mmsc: wapPushUrl,
  data: filePath,
  mmsConfig: mmsConf
};

class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
    let promise = sms.downloadMms(this.context, mmsPars);
    promise.then(() => {
        console.info(`downloadMms success`);
    }).catch((err: BusinessError) => {
        console.error(`downloadMms failed, promise: err->${JSON.stringify(err)}`);
    });
    }
}

```

