# @ohos.app.form.formObserver

Interface of formObserver.

**起始版本：** 10

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { formObserver } from '@kit.FormKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getRunningFormInfoById](arkts-formobserver-getrunningforminfobyid-f-sys.md#getRunningFormInfoById-1) | Obtains the RunningFormInfo object by formId. |
| <!--DelRow-->[getRunningFormInfoById](arkts-formobserver-getrunningforminfobyid-f-sys.md#getRunningFormInfoById-2) | Obtains the RunningFormInfo object by formId. |
| <!--DelRow-->[getRunningFormInfoById](arkts-formobserver-getrunningforminfobyid-f-sys.md#getRunningFormInfoById-3) | Obtains the RunningFormInfo object by formId. |
| <!--DelRow-->[getRunningFormInfoById](arkts-formobserver-getrunningforminfobyid-f-sys.md#getRunningFormInfoById-4) | Obtains the RunningFormInfo object by formId. |
| <!--DelRow-->[getRunningFormInfos](arkts-formobserver-getrunningforminfos-f-sys.md#getRunningFormInfos-1) | Obtains the RunningFormInfo objects provided by a specific card host application on the device. |
| <!--DelRow-->[getRunningFormInfos](arkts-formobserver-getrunningforminfos-f-sys.md#getRunningFormInfos-2) | Obtains the RunningFormInfo objects provided by a specific card host application on the device. |
| <!--DelRow-->[getRunningFormInfos](arkts-formobserver-getrunningforminfos-f-sys.md#getRunningFormInfos-3) | Obtains the RunningFormInfo objects provided by a specific card host application on the device. |
| <!--DelRow-->[getRunningFormInfos](arkts-formobserver-getrunningforminfos-f-sys.md#getRunningFormInfos-4) | Obtains the RunningFormInfo objects provided by a specific card host application on the device. |
| <!--DelRow-->[getRunningFormInfosByFilter](arkts-formobserver-getrunningforminfosbyfilter-f-sys.md#getRunningFormInfosByFilter-1) | Obtains the RunningFormInfo objects by FormProviderFilter. |
| <!--DelRow-->[getRunningFormInfosByFilter](arkts-formobserver-getrunningforminfosbyfilter-f-sys.md#getRunningFormInfosByFilter-2) | Obtains the RunningFormInfo objects by FormProviderFilter. |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-1) | Cancels listening to the event of add form. <p>You can use this method to cancel listening to the event of add form.</p> |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-2) | Cancels listening to the event of remove form. <p>You can use this method to cancel listening to the event of remove form.</p> |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-3) | Cancels listening to the event of notifyVisible type change. <p>You can use this method to cancel listening to the event of notifyVisible type change.</p> |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-4) | Cancels listening to the event of notifyInvisible type change. <p>You can use this method to cancel listening to the event of notifyInvisible type change.</p> |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-5) | Unregister form router event Listening. |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-6) | Unregister form message event Listening. |
| <!--DelRow-->[off](arkts-formobserver-off-f-sys.md#off-7) | Unregister form call event Listening. |
| <!--DelRow-->[offCall](arkts-formobserver-offcall-f-sys.md#offCall-1) | Unregister form call event Listening. |
| <!--DelRow-->[offFormAdd](arkts-formobserver-offformadd-f-sys.md#offFormAdd-1) | Cancels listening to the event of add form. <p>You can use this method to cancel listening to the event of add form.</p> |
| <!--DelRow-->[offFormRemove](arkts-formobserver-offformremove-f-sys.md#offFormRemove-1) | Cancels listening to the event of remove form. <p>You can use this method to cancel listening to the event of remove form.</p> |
| <!--DelRow-->[offMessage](arkts-formobserver-offmessage-f-sys.md#offMessage-1) | Unregister form message event Listening. |
| <!--DelRow-->[offNotifyInvisible](arkts-formobserver-offnotifyinvisible-f-sys.md#offNotifyInvisible-1) | Cancels listening to the event of notifyInvisible type change. <p>You can use this method to cancel listening to the event of notifyInvisible type change.</p> |
| <!--DelRow-->[offNotifyVisible](arkts-formobserver-offnotifyvisible-f-sys.md#offNotifyVisible-1) | Cancels listening to the event of notifyVisible type change. <p>You can use this method to cancel listening to the event of notifyVisible type change.</p> |
| <!--DelRow-->[offRouter](arkts-formobserver-offrouter-f-sys.md#offRouter-1) | Unregister form router event Listening. |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-1) | Listens to the event of add form. <p>You can use this method to listen to the event of add form.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-2) | Listens to the event of add form. <p>You can use this method to listen to the event of add form for a particular card host.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-3) | Listens to the event of remove form. <p>You can use this method to listen to the event of remove form.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-4) | Listens to the event of remove form. <p>You can use this method to listen to the event of remove form for a particular card host.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-5) | Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-6) | Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change for a particular card host.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-7) | Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-8) | Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change for a particular card host.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-9) | Router event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-10) | Router event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-11) | Message event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-12) | Message event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-13) | Call event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[on](arkts-formobserver-on-f-sys.md#on-14) | Call event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[onCall](arkts-formobserver-oncall-f-sys.md#onCall-1) | Call event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[onCall](arkts-formobserver-oncall-f-sys.md#onCall-2) | Call event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[onFormAdd](arkts-formobserver-onformadd-f-sys.md#onFormAdd-1) | Listens to the event of add form. <p>You can use this method to listen to the event of add form.</p> |
| <!--DelRow-->[onFormAdd](arkts-formobserver-onformadd-f-sys.md#onFormAdd-2) | Listens to the event of add form. <p>You can use this method to listen to the event of add form for a particular card host.</p> |
| <!--DelRow-->[onFormRemove](arkts-formobserver-onformremove-f-sys.md#onFormRemove-1) | Listens to the event of remove form. <p>You can use this method to listen to the event of remove form.</p> |
| <!--DelRow-->[onFormRemove](arkts-formobserver-onformremove-f-sys.md#onFormRemove-2) | Listens to the event of remove form. <p>You can use this method to listen to the event of remove form for a particular card host.</p> |
| <!--DelRow-->[onMessage](arkts-formobserver-onmessage-f-sys.md#onMessage-1) | Message event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[onMessage](arkts-formobserver-onmessage-f-sys.md#onMessage-2) | Message event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[onNotifyInvisible](arkts-formobserver-onnotifyinvisible-f-sys.md#onNotifyInvisible-1) | Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change.</p> |
| <!--DelRow-->[onNotifyInvisible](arkts-formobserver-onnotifyinvisible-f-sys.md#onNotifyInvisible-2) | Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change for a particular card host.</p> |
| <!--DelRow-->[onNotifyVisible](arkts-formobserver-onnotifyvisible-f-sys.md#onNotifyVisible-1) | Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change.</p> |
| <!--DelRow-->[onNotifyVisible](arkts-formobserver-onnotifyvisible-f-sys.md#onNotifyVisible-2) | Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change for a particular card host.</p> |
| <!--DelRow-->[onRouter](arkts-formobserver-onrouter-f-sys.md#onRouter-1) | Router event listening in registered form. <p>This interface requires permission to receive callback.</p> |
| <!--DelRow-->[onRouter](arkts-formobserver-onrouter-f-sys.md#onRouter-2) | Router event listening in registered form. <p>This interface requires permission to receive callback.</p> |

