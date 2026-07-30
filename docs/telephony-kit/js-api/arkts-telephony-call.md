# @ohos.telephony.call

Provides methods related to call management.

**Since:** 11

<!--Device-unnamed-declare namespace call--><!--Device-unnamed-declare namespace call-End-->

**System capability:** SystemCapability.Telephony.CallManager

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [dial](arkts-telephony-call-dial-f.md#dial) | Makes a call. |
| [dial](arkts-telephony-call-dial-f.md#dial-1) | Makes a call. |
| [dial](arkts-telephony-call-dial-f.md#dial-2) | Makes a call. |
| [formatPhoneNumber](arkts-telephony-call-formatphonenumber-f.md#formatphonenumber) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space. |
| [formatPhoneNumber](arkts-telephony-call-formatphonenumber-f.md#formatphonenumber-1) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space. |
| [formatPhoneNumber](arkts-telephony-call-formatphonenumber-f.md#formatphonenumber-2) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space. |
| [formatPhoneNumberToE164](arkts-telephony-call-formatphonenumbertoe164-f.md#formatphonenumbertoe164) | Formats a phone number into an E.164 representation. |
| [formatPhoneNumberToE164](arkts-telephony-call-formatphonenumbertoe164-f.md#formatphonenumbertoe164-1) | Formats a phone number into an E.164 representation. |
| [getCallState](arkts-telephony-call-getcallstate-f.md#getcallstate) | Obtains the call state.  If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}.In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallState](arkts-telephony-call-getcallstate-f.md#getcallstate-1) | Obtains the call state.  If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}.In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallStateSync](arkts-telephony-call-getcallstatesync-f.md#getcallstatesync) | Obtains the call state.  If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallTransferInfo](arkts-telephony-call-getcalltransferinfo-f.md#getcalltransferinfo) | Obtains call transfer information with the phone number. |
| [hasCall](arkts-telephony-call-hascall-f.md#hascall) | Checks whether a call is ongoing. |
| [hasCall](arkts-telephony-call-hascall-f.md#hascall-1) | Checks whether a call is ongoing. |
| [hasCallSync](arkts-telephony-call-hascallsync-f.md#hascallsync) | Checks whether a call is ongoing. |
| [hasVoiceCapability](arkts-telephony-call-hasvoicecapability-f.md#hasvoicecapability) | Checks whether a device supports voice calls.  The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching(even if the device supports OTT calls), {@code false} is returned. |
| [isEmergencyPhoneNumber](arkts-telephony-call-isemergencyphonenumber-f.md#isemergencyphonenumber) | Checks whether a phone number is on the emergency number list. |
| [isEmergencyPhoneNumber](arkts-telephony-call-isemergencyphonenumber-f.md#isemergencyphonenumber-1) | Checks whether a phone number is on the emergency number list. |
| [isEmergencyPhoneNumber](arkts-telephony-call-isemergencyphonenumber-f.md#isemergencyphonenumber-2) | Checks whether a phone number is on the emergency number list. |
| [makeCall](arkts-telephony-call-makecall-f.md#makecall) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-telephony-call-makecall-f.md#makecall-1) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-telephony-call-makecall-f.md#makecall-2) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-telephony-call-makecall-f.md#makecall-3) | Go to the dial screen and the called number is displayed. |
| [makeCallWithToken](arkts-telephony-call-makecallwithtoken-f.md#makecallwithtoken) | Go to the dial screen and the called number is displayed.The authentication challenge value is returned. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [answerCall](arkts-telephony-call-answercall-f-sys.md#answercall) | Answers the incoming call. |
| [answerCall](arkts-telephony-call-answercall-f-sys.md#answercall-1) | Answers the incoming call. |
| [answerCall](arkts-telephony-call-answercall-f-sys.md#answercall-2) | Answers the incoming call without callId. |
| [answerCall](arkts-telephony-call-answercall-f-sys.md#answercall-3) | Answers the incoming video call |
| [answerCall](arkts-telephony-call-answercall-f-sys.md#answercall-4) | Answers the incoming rtt |
| [canSetCallTransferTime](arkts-telephony-call-cansetcalltransfertime-f-sys.md#cansetcalltransfertime) | Checks whether can set call transfer time.  The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time. |
| [canSetCallTransferTime](arkts-telephony-call-cansetcalltransfertime-f-sys.md#cansetcalltransfertime-1) | Checks whether can set call transfer time.  The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time. |
| [cancelCallUpgrade](arkts-telephony-call-cancelcallupgrade-f-sys.md#cancelcallupgrade) | Cancel call upgrade when voice call upgrade to video call. |
| [cancelMuted](arkts-telephony-call-cancelmuted-f-sys.md#cancelmuted) | Unmute during a call. |
| [cancelMuted](arkts-telephony-call-cancelmuted-f-sys.md#cancelmuted-1) | Unmute during a call. |
| [closeUnfinishedUssd](arkts-telephony-call-closeunfinishedussd-f-sys.md#closeunfinishedussd) | Close unfinished ussd. |
| [closeUnfinishedUssd](arkts-telephony-call-closeunfinishedussd-f-sys.md#closeunfinishedussd-1) | Close unfinished ussd. |
| [combineConference](arkts-telephony-call-combineconference-f-sys.md#combineconference) | Merge calls, merge two calls into conference calls. |
| [combineConference](arkts-telephony-call-combineconference-f-sys.md#combineconference-1) | Merge calls, merge two calls into conference calls. |
| [controlCamera](arkts-telephony-call-controlcamera-f-sys.md#controlcamera) | Control camera to open/close/switch camera by cameraId when video call. |
| [dialCall](arkts-telephony-call-dialcall-f-sys.md#dialcall) | Makes a call. |
| [dialCall](arkts-telephony-call-dialcall-f-sys.md#dialcall-1) | Makes a call. |
| [dialCall](arkts-telephony-call-dialcall-f-sys.md#dialcall-2) | Makes a call. |
| [disableImsSwitch](arkts-telephony-call-disableimsswitch-f-sys.md#disableimsswitch) | Turn off Ims switch. |
| [disableImsSwitch](arkts-telephony-call-disableimsswitch-f-sys.md#disableimsswitch-1) | Turn off Ims switch. |
| [enableImsSwitch](arkts-telephony-call-enableimsswitch-f-sys.md#enableimsswitch) | Turn on Ims switch. |
| [enableImsSwitch](arkts-telephony-call-enableimsswitch-f-sys.md#enableimsswitch-1) | Turn on Ims switch. |
| [getCallIdListForConference](arkts-telephony-call-getcallidlistforconference-f-sys.md#getcallidlistforconference) | Get the call Id list of the conference. |
| [getCallIdListForConference](arkts-telephony-call-getcallidlistforconference-f-sys.md#getcallidlistforconference-1) | Get the call Id list of the conference. |
| [getCallRestrictionStatus](arkts-telephony-call-getcallrestrictionstatus-f-sys.md#getcallrestrictionstatus) | Get call barring status. |
| [getCallRestrictionStatus](arkts-telephony-call-getcallrestrictionstatus-f-sys.md#getcallrestrictionstatus-1) | Get call barring status. |
| [getCallTransferInfo](arkts-telephony-call-getcalltransferinfo-f-sys.md#getcalltransferinfo-1) | Get call forwarding information. |
| [getCallTransferInfo](arkts-telephony-call-getcalltransferinfo-f-sys.md#getcalltransferinfo-2) | Get call forwarding information. |
| [getCallWaitingStatus](arkts-telephony-call-getcallwaitingstatus-f-sys.md#getcallwaitingstatus) | Get call waiting status. |
| [getCallWaitingStatus](arkts-telephony-call-getcallwaitingstatus-f-sys.md#getcallwaitingstatus-1) | Get call waiting status. |
| [getMainCallId](arkts-telephony-call-getmaincallid-f-sys.md#getmaincallid) | Get the main call Id. |
| [getMainCallId](arkts-telephony-call-getmaincallid-f-sys.md#getmaincallid-1) | Get the main call Id. |
| [getSubCallIdList](arkts-telephony-call-getsubcallidlist-f-sys.md#getsubcallidlist) | Get the list of sub-call Ids. |
| [getSubCallIdList](arkts-telephony-call-getsubcallidlist-f-sys.md#getsubcallidlist-1) | Get the list of sub-call Ids. |
| [getVoNRState](arkts-telephony-call-getvonrstate-f-sys.md#getvonrstate) | Get switch state for voice over NR. |
| [getVoNRState](arkts-telephony-call-getvonrstate-f-sys.md#getvonrstate-1) | Get switch state for voice over NR. |
| [hangUpCall](arkts-telephony-call-hangupcall-f-sys.md#hangupcall) | Hang up the foreground call. |
| [hangUpCall](arkts-telephony-call-hangupcall-f-sys.md#hangupcall-1) | Hang up the foreground call. |
| [hangUpCall](arkts-telephony-call-hangupcall-f-sys.md#hangupcall-2) | Hang up the foreground call without callId. |
| [holdCall](arkts-telephony-call-holdcall-f-sys.md#holdcall) | Keep a call on hold. |
| [holdCall](arkts-telephony-call-holdcall-f-sys.md#holdcall-1) | Keep a call on hold. |
| [inputDialerSpecialCode](arkts-telephony-call-inputdialerspecialcode-f-sys.md#inputdialerspecialcode) | Enters the special code on the keypad. |
| [inputDialerSpecialCode](arkts-telephony-call-inputdialerspecialcode-f-sys.md#inputdialerspecialcode-1) | Enters the special code on the keypad. |
| [isImsSwitchEnabled](arkts-telephony-call-isimsswitchenabled-f-sys.md#isimsswitchenabled) | Judge whether the Ims switch is enabled. |
| [isImsSwitchEnabled](arkts-telephony-call-isimsswitchenabled-f-sys.md#isimsswitchenabled-1) | Judge whether the Ims switch is enabled. |
| [isImsSwitchEnabledSync](arkts-telephony-call-isimsswitchenabledsync-f-sys.md#isimsswitchenabledsync) | Judge whether the Ims switch is enabled. |
| [isInEmergencyCall](arkts-telephony-call-isinemergencycall-f-sys.md#isinemergencycall) | Judge whether the emergency call is in progress. |
| [isInEmergencyCall](arkts-telephony-call-isinemergencycall-f-sys.md#isinemergencycall-1) | Judge whether the emergency call is in progress. |
| [isNewCallAllowed](arkts-telephony-call-isnewcallallowed-f-sys.md#isnewcallallowed) | Judge whether to allow another new call. |
| [isNewCallAllowed](arkts-telephony-call-isnewcallallowed-f-sys.md#isnewcallallowed-1) | Judge whether to allow another new call. |
| [isRinging](arkts-telephony-call-isringing-f-sys.md#isringing) | Judge whether there is a ringing call. |
| [isRinging](arkts-telephony-call-isringing-f-sys.md#isringing-1) | Judge whether there is a ringing call. |
| [joinConference](arkts-telephony-call-joinconference-f-sys.md#joinconference) | Join the conference call. |
| [joinConference](arkts-telephony-call-joinconference-f-sys.md#joinconference-1) | Join the conference call. |
| [kickOutFromConference](arkts-telephony-call-kickoutfromconference-f-sys.md#kickoutfromconference) | Kick out call from the conference call. |
| [kickOutFromConference](arkts-telephony-call-kickoutfromconference-f-sys.md#kickoutfromconference-1) | Kick out call from the conference call. |
| [muteRinger](arkts-telephony-call-muteringer-f-sys.md#muteringer) | Stops the ringtone.  If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function. |
| [muteRinger](arkts-telephony-call-muteringer-f-sys.md#muteringer-1) | Stops the ringtone.  If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function. |
| [off](arkts-telephony-call-off-f-sys.md#off) | Unsubscribe from the callDetailsChange event. |
| [off](arkts-telephony-call-off-f-sys.md#off-1) | Unsubscribe from the callEventChange event. |
| [off](arkts-telephony-call-off-f-sys.md#off-2) | Unsubscribe from the callDisconnectedCause event. |
| [off](arkts-telephony-call-off-f-sys.md#off-3) | Unsubscribe from the mmiCodeResult event. |
| [off](arkts-telephony-call-off-f-sys.md#off-4) | Unsubscribe from the audioDeviceChange event. |
| [off](arkts-telephony-call-off-f-sys.md#off-5) | Unsubscribe from the postDialDelay event. |
| [off](arkts-telephony-call-off-f-sys.md#off-6) | Unsubscribe from the imsCallModeChange event. |
| [off](arkts-telephony-call-off-f-sys.md#off-7) | Unsubscribe from the callSessionEvent. |
| [off](arkts-telephony-call-off-f-sys.md#off-8) | Unsubscribe from the peerDimensionsChange event. |
| [off](arkts-telephony-call-off-f-sys.md#off-9) | Unsubscribe from the cameraCapabilitiesChange event. |
| [offReceiveRttMessage](arkts-telephony-call-offreceiverttmessage-f-sys.md#offreceiverttmessage) | Unsubscribe from the rtt message event. |
| [offRttErrCause](arkts-telephony-call-offrtterrcause-f-sys.md#offrtterrcause) | Unsubscribe from the rtt error report event. |
| [offRttModifyInd](arkts-telephony-call-offrttmodifyind-f-sys.md#offrttmodifyind) | Unsubscribe from the rtt modify indication. |
| [on](arkts-telephony-call-on-f-sys.md#on) | Subscribe to the callDetailsChange event. |
| [on](arkts-telephony-call-on-f-sys.md#on-1) | Subscribe to the callEventChange event. |
| [on](arkts-telephony-call-on-f-sys.md#on-2) | Subscribe to the callDisconnectedCause event. |
| [on](arkts-telephony-call-on-f-sys.md#on-3) | Subscribe to the mmiCodeResult event. |
| [on](arkts-telephony-call-on-f-sys.md#on-4) | Subscribe to the audioDeviceChange event. |
| [on](arkts-telephony-call-on-f-sys.md#on-5) | Subscribe to the postDialDelay event. |
| [on](arkts-telephony-call-on-f-sys.md#on-6) | Subscribe to the imsCallModeChange event. |
| [on](arkts-telephony-call-on-f-sys.md#on-7) | Subscribe to the callSessionEvent. |
| [on](arkts-telephony-call-on-f-sys.md#on-8) | Subscribe to the peerDimensionsChange event. |
| [on](arkts-telephony-call-on-f-sys.md#on-9) | Subscribe to the cameraCapabilitiesChange event. |
| [onReceiveRttMessage](arkts-telephony-call-onreceiverttmessage-f-sys.md#onreceiverttmessage) | Subscribe to the rtt message event. |
| [onRttErrCause](arkts-telephony-call-onrtterrcause-f-sys.md#onrtterrcause) | Subscribe to the rtt error event. |
| [onRttModifyInd](arkts-telephony-call-onrttmodifyind-f-sys.md#onrttmodifyind) | Subscribe to the rtt modify indication. |
| [postDialProceed](arkts-telephony-call-postdialproceed-f-sys.md#postdialproceed) | Continue post-dial DTMF(Dual Tone Multi Frequency). |
| [postDialProceed](arkts-telephony-call-postdialproceed-f-sys.md#postdialproceed-1) | Continue post-dial DTMF(Dual Tone Multi Frequency). |
| [preloadCallUI](arkts-telephony-call-preloadcallui-f-sys.md#preloadcallui) | Preload callUI. |
| [rejectCall](arkts-telephony-call-rejectcall-f-sys.md#rejectcall) | Reject the incoming call. |
| [rejectCall](arkts-telephony-call-rejectcall-f-sys.md#rejectcall-1) | Reject the incoming call. |
| [rejectCall](arkts-telephony-call-rejectcall-f-sys.md#rejectcall-2) | Reject the incoming call. |
| [rejectCall](arkts-telephony-call-rejectcall-f-sys.md#rejectcall-3) | Reject the incoming call without callId. |
| [rejectCall](arkts-telephony-call-rejectcall-f-sys.md#rejectcall-4) | Reject the incoming call without callId. |
| [removeMissedIncomingCallNotification](arkts-telephony-call-removemissedincomingcallnotification-f-sys.md#removemissedincomingcallnotification) | Remove missed incoming call notification. |
| [removeMissedIncomingCallNotification](arkts-telephony-call-removemissedincomingcallnotification-f-sys.md#removemissedincomingcallnotification-1) | Remove missed incoming call notification. |
| [sendCallUiEvent](arkts-telephony-call-sendcalluievent-f-sys.md#sendcalluievent) | Send call ui event. |
| [sendRttMessage](arkts-telephony-call-sendrttmessage-f-sys.md#sendrttmessage) | Send rtt message. |
| [sendUssdResponse](arkts-telephony-call-sendussdresponse-f-sys.md#sendussdresponse) | Send ussd response. |
| [separateConference](arkts-telephony-call-separateconference-f-sys.md#separateconference) | Split conference call. |
| [separateConference](arkts-telephony-call-separateconference-f-sys.md#separateconference-1) | Split conference call. |
| [setAudioDevice](arkts-telephony-call-setaudiodevice-f-sys.md#setaudiodevice) | Set the audio device. |
| [setAudioDevice](arkts-telephony-call-setaudiodevice-f-sys.md#setaudiodevice-1) | Set the audio device. |
| [setCallRestriction](arkts-telephony-call-setcallrestriction-f-sys.md#setcallrestriction) | Set call barring status. |
| [setCallRestriction](arkts-telephony-call-setcallrestriction-f-sys.md#setcallrestriction-1) | Set call barring status. |
| [setCallRestrictionPassword](arkts-telephony-call-setcallrestrictionpassword-f-sys.md#setcallrestrictionpassword) | Set call barring password. |
| [setCallRestrictionPassword](arkts-telephony-call-setcallrestrictionpassword-f-sys.md#setcallrestrictionpassword-1) | Set call barring password. |
| [setCallTransfer](arkts-telephony-call-setcalltransfer-f-sys.md#setcalltransfer) | Set call forwarding information. |
| [setCallTransfer](arkts-telephony-call-setcalltransfer-f-sys.md#setcalltransfer-1) | Set call forwarding information. |
| [setCallWaiting](arkts-telephony-call-setcallwaiting-f-sys.md#setcallwaiting) | Set call waiting. |
| [setCallWaiting](arkts-telephony-call-setcallwaiting-f-sys.md#setcallwaiting-1) | Set call waiting. |
| [setDeviceDirection](arkts-telephony-call-setdevicedirection-f-sys.md#setdevicedirection) | Set device direction when video call. |
| [setDisplaySurface](arkts-telephony-call-setdisplaysurface-f-sys.md#setdisplaysurface) | Set display surface when video call. |
| [setMuted](arkts-telephony-call-setmuted-f-sys.md#setmuted) | Set mute during a call. |
| [setMuted](arkts-telephony-call-setmuted-f-sys.md#setmuted-1) | Set mute during a call. |
| [setPreviewSurface](arkts-telephony-call-setpreviewsurface-f-sys.md#setpreviewsurface) | Set preview surface when video call. |
| [setRttCapability](arkts-telephony-call-setrttcapability-f-sys.md#setrttcapability) | Set rtt capability. |
| [setVoNRState](arkts-telephony-call-setvonrstate-f-sys.md#setvonrstate) | Set switch state for voice over NR. |
| [setVoNRState](arkts-telephony-call-setvonrstate-f-sys.md#setvonrstate-1) | Set switch state for voice over NR. |
| [startDTMF](arkts-telephony-call-startdtmf-f-sys.md#startdtmf) | Start DTMF(Dual Tone Multi Frequency). |
| [startDTMF](arkts-telephony-call-startdtmf-f-sys.md#startdtmf-1) | Start DTMF(Dual Tone Multi Frequency). |
| [startRtt](arkts-telephony-call-startrtt-f-sys.md#startrtt) | Start rtt. |
| [stopDTMF](arkts-telephony-call-stopdtmf-f-sys.md#stopdtmf) | Stop DTMF(Dual Tone Multi Frequency). |
| [stopDTMF](arkts-telephony-call-stopdtmf-f-sys.md#stopdtmf-1) | Stop DTMF(Dual Tone Multi Frequency). |
| [stopRtt](arkts-telephony-call-stoprtt-f-sys.md#stoprtt) | Stop rtt. |
| [switchCall](arkts-telephony-call-switchcall-f-sys.md#switchcall) | Switch call. |
| [switchCall](arkts-telephony-call-switchcall-f-sys.md#switchcall-1) | Switch call. |
| [unHoldCall](arkts-telephony-call-unholdcall-f-sys.md#unholdcall) | Cancel call hold status. |
| [unHoldCall](arkts-telephony-call-unholdcall-f-sys.md#unholdcall-1) | Keep a call on hold. |
| [unloadCallUI](arkts-telephony-call-unloadcallui-f-sys.md#unloadcallui) | Unload callUI. |
| [updateImsCallMode](arkts-telephony-call-updateimscallmode-f-sys.md#updateimscallmode) | Update Ims call mode. |
| [updateImsCallMode](arkts-telephony-call-updateimscallmode-f-sys.md#updateimscallmode-1) | Update Ims call mode. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DialOptions](arkts-telephony-call-dialoptions-i.md) | Indicates the options of placing a call. |
| [EmergencyNumberOptions](arkts-telephony-call-emergencynumberoptions-i.md) | Indicates the option for determining if a number is an emergency number for specified slot. |
| [MakeCallOptions](arkts-telephony-call-makecalloptions-i.md) | Indicates the options of make call. |
| [NumberFormatOptions](arkts-telephony-call-numberformatoptions-i.md) | Indicates the option for number formatting. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AudioDevice](arkts-telephony-call-audiodevice-i-sys.md) | Indicates the audio device. |
| [AudioDeviceCallbackInfo](arkts-telephony-call-audiodevicecallbackinfo-i-sys.md) | Indicates the information of the audio device. |
| [CallAttributeOptions](arkts-telephony-call-callattributeoptions-i-sys.md) | Indicates the options of call attribute. |
| [CallEventOptions](arkts-telephony-call-calleventoptions-i-sys.md) | Indicates the options of call event. |
| [CallRestrictionInfo](arkts-telephony-call-callrestrictioninfo-i-sys.md) | Indicates the information of call restriction. |
| [CallSessionEvent](arkts-telephony-call-callsessionevent-i-sys.md) | Indicates the call session event of a video call. |
| [CallTransferInfo](arkts-telephony-call-calltransferinfo-i-sys.md) | Indicates the information of call transfer. |
| [CallTransferResult](arkts-telephony-call-calltransferresult-i-sys.md) | Indicates the result of call transfer. |
| [CameraCapabilities](arkts-telephony-call-cameracapabilities-i-sys.md) | Indicates the camera capabilities. |
| [DialCallOptions](arkts-telephony-call-dialcalloptions-i-sys.md) | Indicates the options for initiating a call. |
| [DialOptions](arkts-telephony-call-dialoptions-i-sys.md) | Indicates the options of placing a call. |
| [DisconnectedDetails](arkts-telephony-call-disconnecteddetails-i-sys.md) | Indicates the cause of a call disconnection. |
| [ImsCallModeInfo](arkts-telephony-call-imscallmodeinfo-i-sys.md) | Indicates the ims call mode info of a video call. |
| [MmiCodeResults](arkts-telephony-call-mmicoderesults-i-sys.md) | Indicates the MMI code result. |
| [NumberMarkInfo](arkts-telephony-call-numbermarkinfo-i-sys.md) | Indicates the mark information of the phone number. |
| [PeerDimensionsDetail](arkts-telephony-call-peerdimensionsdetail-i-sys.md) | Indicates the peer dimension. |
| [RejectMessageOptions](arkts-telephony-call-rejectmessageoptions-i-sys.md) | Indicates the options for call rejection message. |
| [RttErrorInfo](arkts-telephony-call-rtterrorinfo-i-sys.md) | Indicates the info of the rtt error. |
| [RttEventInfo](arkts-telephony-call-rtteventinfo-i-sys.md) | Indicates the info of the rtt event. |
| [RttMessageInfo](arkts-telephony-call-rttmessageinfo-i-sys.md) | Indicates the info of the rtt message. |
| [VoipCallAttribute](arkts-telephony-call-voipcallattribute-i-sys.md) | Indicates the voip call detail information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CCallState](arkts-telephony-call-ccallstate-e.md) | Indicates the states of Carrier Call. |
| [CallState](arkts-telephony-call-callstate-e.md) | Indicates the states of call. |
| [TelCallState](arkts-telephony-call-telcallstate-e.md) | Indicates the states of telCall. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AudioDeviceType](arkts-telephony-call-audiodevicetype-e-sys.md) | Indicates the device type of the audio device. |
| [CallAbilityEventId](arkts-telephony-call-callabilityeventid-e-sys.md) | Indicates the event ID of call ability. |
| [CallRestrictionMode](arkts-telephony-call-callrestrictionmode-e-sys.md) | Indicates the mode of call restriction. |
| [CallRestrictionType](arkts-telephony-call-callrestrictiontype-e-sys.md) | Indicates the type of call restriction. |
| [CallSessionEventId](arkts-telephony-call-callsessioneventid-e-sys.md) | Indicates the type of video call event. |
| [CallTransferSettingType](arkts-telephony-call-calltransfersettingtype-e-sys.md) | Indicates the type of call transfer setting. |
| [CallTransferType](arkts-telephony-call-calltransfertype-e-sys.md) | Indicates the type of call transfer. |
| [CallType](arkts-telephony-call-calltype-e-sys.md) | Indicates the type of call. |
| [CallWaitingStatus](arkts-telephony-call-callwaitingstatus-e-sys.md) | Indicates the status of call waiting. |
| [ConferenceState](arkts-telephony-call-conferencestate-e-sys.md) | Indicates the state of conference call. |
| [DetailedCallState](arkts-telephony-call-detailedcallstate-e-sys.md) | Indicates the detailed state of call. |
| [DeviceDirection](arkts-telephony-call-devicedirection-e-sys.md) | Indicates the type of device direction. |
| [DialScene](arkts-telephony-call-dialscene-e-sys.md) | Indicates the scenarios of the call to be made. |
| [DialType](arkts-telephony-call-dialtype-e-sys.md) | Indicates the types of the call to be made. |
| [DisconnectedReason](arkts-telephony-call-disconnectedreason-e-sys.md) | Indicates the causes of call disconnection. |
| [ImsCallMode](arkts-telephony-call-imscallmode-e-sys.md) | Indicates the mode of the ims call. |
| [ImsRttMode](arkts-telephony-call-imsrttmode-e-sys.md) | Indicates the mode of the ims rtt. |
| [MarkType](arkts-telephony-call-marktype-e-sys.md) | Indicates the type of the number mark. |
| [MmiCodeResult](arkts-telephony-call-mmicoderesult-e-sys.md) | Indicates the MMI code result. |
| [RestrictionStatus](arkts-telephony-call-restrictionstatus-e-sys.md) | Indicates the status of call restriction. |
| [RttState](arkts-telephony-call-rttstate-e-sys.md) | Indicates the state of the rtt. |
| [TransferStatus](arkts-telephony-call-transferstatus-e-sys.md) | Indicates the status of call transfer. |
| [VideoRequestResultType](arkts-telephony-call-videorequestresulttype-e-sys.md) | Indicates the type of video request result. |
| [VideoStateType](arkts-telephony-call-videostatetype-e-sys.md) | Indicates the type of video state. |
| [VoNRState](arkts-telephony-call-vonrstate-e-sys.md) | Indicates the VoNR state. |
| [XCallType](arkts-telephony-call-xcalltype-e-sys.md) | Indicates the type of the XCall. |
<!--DelEnd-->

