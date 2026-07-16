# @ohos.telephony.call

Provides methods related to call management.

**Since:** 11

**System capability:** SystemCapability.Telephony.CallManager

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [dial](arkts-telephony-dial-f.md#dial-1) | Makes a call. |
| [dial](arkts-telephony-dial-f.md#dial-2) | Makes a call. |
| [dial](arkts-telephony-dial-f.md#dial-3) | Makes a call. |
| [formatPhoneNumber](arkts-telephony-formatphonenumber-f.md#formatphonenumber-1) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space. |
| [formatPhoneNumber](arkts-telephony-formatphonenumber-f.md#formatphonenumber-2) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space. |
| [formatPhoneNumber](arkts-telephony-formatphonenumber-f.md#formatphonenumber-3) | Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,a phone number is in the format of country code (if any) + 3-digit service provider code+ 4-digit area code + 4-digit subscriber number. After the formatting,each part is separated by a space. |
| [formatPhoneNumberToE164](arkts-telephony-formatphonenumbertoe164-f.md#formatphonenumbertoe164-1) | Formats a phone number into an E.164 representation. |
| [formatPhoneNumberToE164](arkts-telephony-formatphonenumbertoe164-f.md#formatphonenumbertoe164-2) | Formats a phone number into an E.164 representation. |
| [getCallState](arkts-telephony-getcallstate-f.md#getcallstate-1) | Obtains the call state.If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}.In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallState](arkts-telephony-getcallstate-f.md#getcallstate-2) | Obtains the call state.If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}.In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallStateSync](arkts-telephony-getcallstatesync-f.md#getcallstatesync-1) | Obtains the call state.If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.If at least one call is in the active, hold, or dialing state, the system returns{@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}. |
| [getCallTransferInfo](arkts-telephony-getcalltransferinfo-f.md#getcalltransferinfo-1) | Obtains call transfer information with the phone number. |
| [hasCall](arkts-telephony-hascall-f.md#hascall-1) | Checks whether a call is ongoing. |
| [hasCall](arkts-telephony-hascall-f.md#hascall-2) | Checks whether a call is ongoing. |
| [hasCallSync](arkts-telephony-hascallsync-f.md#hascallsync-1) | Checks whether a call is ongoing. |
| [hasVoiceCapability](arkts-telephony-hasvoicecapability-f.md#hasvoicecapability-1) | Checks whether a device supports voice calls.The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimediasubsystem domain (IMS) call on a telephone service network. If the device supports only packet switching(even if the device supports OTT calls), {@code false} is returned. |
| [isEmergencyPhoneNumber](arkts-telephony-isemergencyphonenumber-f.md#isemergencyphonenumber-1) | Checks whether a phone number is on the emergency number list. |
| [isEmergencyPhoneNumber](arkts-telephony-isemergencyphonenumber-f.md#isemergencyphonenumber-2) | Checks whether a phone number is on the emergency number list. |
| [isEmergencyPhoneNumber](arkts-telephony-isemergencyphonenumber-f.md#isemergencyphonenumber-3) | Checks whether a phone number is on the emergency number list. |
| [makeCall](arkts-telephony-makecall-f.md#makecall-1) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-telephony-makecall-f.md#makecall-2) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-telephony-makecall-f.md#makecall-3) | Go to the dial screen and the called number is displayed. |
| [makeCall](arkts-telephony-makecall-f.md#makecall-4) | Go to the dial screen and the called number is displayed. |
| [makeCallWithToken](arkts-telephony-makecallwithtoken-f.md#makecallwithtoken-1) | Go to the dial screen and the called number is displayed.The authentication challenge value is returned. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [answerCall](arkts-telephony-answercall-f-sys.md#answercall-1) | Answers the incoming call. |
| [answerCall](arkts-telephony-answercall-f-sys.md#answercall-2) | Answers the incoming call. |
| [answerCall](arkts-telephony-answercall-f-sys.md#answercall-3) | Answers the incoming call without callId. |
| [answerCall](arkts-telephony-answercall-f-sys.md#answercall-4) | Answers the incoming video call |
| [answerCall](arkts-telephony-answercall-f-sys.md#answercall-5) | Answers the incoming rtt |
| [canSetCallTransferTime](arkts-telephony-cansetcalltransfertime-f-sys.md#cansetcalltransfertime-1) | Checks whether can set call transfer time.The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time. |
| [canSetCallTransferTime](arkts-telephony-cansetcalltransfertime-f-sys.md#cansetcalltransfertime-2) | Checks whether can set call transfer time.The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time. |
| [cancelCallUpgrade](arkts-telephony-cancelcallupgrade-f-sys.md#cancelcallupgrade-1) | Cancel call upgrade when voice call upgrade to video call. |
| [cancelMuted](arkts-telephony-cancelmuted-f-sys.md#cancelmuted-1) | Unmute during a call. |
| [cancelMuted](arkts-telephony-cancelmuted-f-sys.md#cancelmuted-2) | Unmute during a call. |
| [closeUnfinishedUssd](arkts-telephony-closeunfinishedussd-f-sys.md#closeunfinishedussd-1) | Close unfinished ussd. |
| [closeUnfinishedUssd](arkts-telephony-closeunfinishedussd-f-sys.md#closeunfinishedussd-2) | Close unfinished ussd. |
| [combineConference](arkts-telephony-combineconference-f-sys.md#combineconference-1) | Merge calls, merge two calls into conference calls. |
| [combineConference](arkts-telephony-combineconference-f-sys.md#combineconference-2) | Merge calls, merge two calls into conference calls. |
| [controlCamera](arkts-telephony-controlcamera-f-sys.md#controlcamera-1) | Control camera to open/close/switch camera by cameraId when video call. |
| [dialCall](arkts-telephony-dialcall-f-sys.md#dialcall-1) | Makes a call. |
| [dialCall](arkts-telephony-dialcall-f-sys.md#dialcall-2) | Makes a call. |
| [dialCall](arkts-telephony-dialcall-f-sys.md#dialcall-3) | Makes a call. |
| [disableImsSwitch](arkts-telephony-disableimsswitch-f-sys.md#disableimsswitch-1) | Turn off Ims switch. |
| [disableImsSwitch](arkts-telephony-disableimsswitch-f-sys.md#disableimsswitch-2) | Turn off Ims switch. |
| [enableImsSwitch](arkts-telephony-enableimsswitch-f-sys.md#enableimsswitch-1) | Turn on Ims switch. |
| [enableImsSwitch](arkts-telephony-enableimsswitch-f-sys.md#enableimsswitch-2) | Turn on Ims switch. |
| [getCallIdListForConference](arkts-telephony-getcallidlistforconference-f-sys.md#getcallidlistforconference-1) | Get the call Id list of the conference. |
| [getCallIdListForConference](arkts-telephony-getcallidlistforconference-f-sys.md#getcallidlistforconference-2) | Get the call Id list of the conference. |
| [getCallRestrictionStatus](arkts-telephony-getcallrestrictionstatus-f-sys.md#getcallrestrictionstatus-1) | Get call barring status. |
| [getCallRestrictionStatus](arkts-telephony-getcallrestrictionstatus-f-sys.md#getcallrestrictionstatus-2) | Get call barring status. |
| [getCallTransferInfo](arkts-telephony-getcalltransferinfo-f-sys.md#getcalltransferinfo-2) | Get call forwarding information. |
| [getCallTransferInfo](arkts-telephony-getcalltransferinfo-f-sys.md#getcalltransferinfo-3) | Get call forwarding information. |
| [getCallWaitingStatus](arkts-telephony-getcallwaitingstatus-f-sys.md#getcallwaitingstatus-1) | Get call waiting status. |
| [getCallWaitingStatus](arkts-telephony-getcallwaitingstatus-f-sys.md#getcallwaitingstatus-2) | Get call waiting status. |
| [getMainCallId](arkts-telephony-getmaincallid-f-sys.md#getmaincallid-1) | Get the main call Id. |
| [getMainCallId](arkts-telephony-getmaincallid-f-sys.md#getmaincallid-2) | Get the main call Id. |
| [getSubCallIdList](arkts-telephony-getsubcallidlist-f-sys.md#getsubcallidlist-1) | Get the list of sub-call Ids. |
| [getSubCallIdList](arkts-telephony-getsubcallidlist-f-sys.md#getsubcallidlist-2) | Get the list of sub-call Ids. |
| [getVoNRState](arkts-telephony-getvonrstate-f-sys.md#getvonrstate-1) | Get switch state for voice over NR. |
| [getVoNRState](arkts-telephony-getvonrstate-f-sys.md#getvonrstate-2) | Get switch state for voice over NR. |
| [hangUpCall](arkts-telephony-hangupcall-f-sys.md#hangupcall-1) | Hang up the foreground call. |
| [hangUpCall](arkts-telephony-hangupcall-f-sys.md#hangupcall-2) | Hang up the foreground call. |
| [hangUpCall](arkts-telephony-hangupcall-f-sys.md#hangupcall-3) | Hang up the foreground call without callId. |
| [holdCall](arkts-telephony-holdcall-f-sys.md#holdcall-1) | Keep a call on hold. |
| [holdCall](arkts-telephony-holdcall-f-sys.md#holdcall-2) | Keep a call on hold. |
| [inputDialerSpecialCode](arkts-telephony-inputdialerspecialcode-f-sys.md#inputdialerspecialcode-1) | Enters the special code on the keypad. |
| [inputDialerSpecialCode](arkts-telephony-inputdialerspecialcode-f-sys.md#inputdialerspecialcode-2) | Enters the special code on the keypad. |
| [isImsSwitchEnabled](arkts-telephony-isimsswitchenabled-f-sys.md#isimsswitchenabled-1) | Judge whether the Ims switch is enabled. |
| [isImsSwitchEnabled](arkts-telephony-isimsswitchenabled-f-sys.md#isimsswitchenabled-2) | Judge whether the Ims switch is enabled. |
| [isImsSwitchEnabledSync](arkts-telephony-isimsswitchenabledsync-f-sys.md#isimsswitchenabledsync-1) | Judge whether the Ims switch is enabled. |
| [isInEmergencyCall](arkts-telephony-isinemergencycall-f-sys.md#isinemergencycall-1) | Judge whether the emergency call is in progress. |
| [isInEmergencyCall](arkts-telephony-isinemergencycall-f-sys.md#isinemergencycall-2) | Judge whether the emergency call is in progress. |
| [isNewCallAllowed](arkts-telephony-isnewcallallowed-f-sys.md#isnewcallallowed-1) | Judge whether to allow another new call. |
| [isNewCallAllowed](arkts-telephony-isnewcallallowed-f-sys.md#isnewcallallowed-2) | Judge whether to allow another new call. |
| [isRinging](arkts-telephony-isringing-f-sys.md#isringing-1) | Judge whether there is a ringing call. |
| [isRinging](arkts-telephony-isringing-f-sys.md#isringing-2) | Judge whether there is a ringing call. |
| [joinConference](arkts-telephony-joinconference-f-sys.md#joinconference-1) | Join the conference call. |
| [joinConference](arkts-telephony-joinconference-f-sys.md#joinconference-2) | Join the conference call. |
| [kickOutFromConference](arkts-telephony-kickoutfromconference-f-sys.md#kickoutfromconference-1) | Kick out call from the conference call. |
| [kickOutFromConference](arkts-telephony-kickoutfromconference-f-sys.md#kickoutfromconference-2) | Kick out call from the conference call. |
| [muteRinger](arkts-telephony-muteringer-f-sys.md#muteringer-1) | Stops the ringtone.If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function. |
| [muteRinger](arkts-telephony-muteringer-f-sys.md#muteringer-2) | Stops the ringtone.If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function. |
| [off](arkts-telephony-off-f-sys.md#off-1) | Unsubscribe from the callDetailsChange event. |
| [off](arkts-telephony-off-f-sys.md#off-2) | Unsubscribe from the callEventChange event. |
| [off](arkts-telephony-off-f-sys.md#off-3) | Unsubscribe from the callDisconnectedCause event. |
| [off](arkts-telephony-off-f-sys.md#off-4) | Unsubscribe from the mmiCodeResult event. |
| [off](arkts-telephony-off-f-sys.md#off-5) | Unsubscribe from the audioDeviceChange event. |
| [off](arkts-telephony-off-f-sys.md#off-6) | Unsubscribe from the postDialDelay event. |
| [off](arkts-telephony-off-f-sys.md#off-7) | Unsubscribe from the imsCallModeChange event. |
| [off](arkts-telephony-off-f-sys.md#off-8) | Unsubscribe from the callSessionEvent. |
| [off](arkts-telephony-off-f-sys.md#off-9) | Unsubscribe from the peerDimensionsChange event. |
| [off](arkts-telephony-off-f-sys.md#off-10) | Unsubscribe from the cameraCapabilitiesChange event. |
| [offReceiveRttMessage](arkts-telephony-offreceiverttmessage-f-sys.md#offreceiverttmessage-1) | Unsubscribe from the rtt message event. |
| [offRttErrCause](arkts-telephony-offrtterrcause-f-sys.md#offrtterrcause-1) | Unsubscribe from the rtt error report event. |
| [offRttModifyInd](arkts-telephony-offrttmodifyind-f-sys.md#offrttmodifyind-1) | Unsubscribe from the rtt modify indication. |
| [on](arkts-telephony-on-f-sys.md#on-1) | Subscribe to the callDetailsChange event. |
| [on](arkts-telephony-on-f-sys.md#on-2) | Subscribe to the callEventChange event. |
| [on](arkts-telephony-on-f-sys.md#on-3) | Subscribe to the callDisconnectedCause event. |
| [on](arkts-telephony-on-f-sys.md#on-4) | Subscribe to the mmiCodeResult event. |
| [on](arkts-telephony-on-f-sys.md#on-5) | Subscribe to the audioDeviceChange event. |
| [on](arkts-telephony-on-f-sys.md#on-6) | Subscribe to the postDialDelay event. |
| [on](arkts-telephony-on-f-sys.md#on-7) | Subscribe to the imsCallModeChange event. |
| [on](arkts-telephony-on-f-sys.md#on-8) | Subscribe to the callSessionEvent. |
| [on](arkts-telephony-on-f-sys.md#on-9) | Subscribe to the peerDimensionsChange event. |
| [on](arkts-telephony-on-f-sys.md#on-10) | Subscribe to the cameraCapabilitiesChange event. |
| [onReceiveRttMessage](arkts-telephony-onreceiverttmessage-f-sys.md#onreceiverttmessage-1) | Subscribe to the rtt message event. |
| [onRttErrCause](arkts-telephony-onrtterrcause-f-sys.md#onrtterrcause-1) | Subscribe to the rtt error event. |
| [onRttModifyInd](arkts-telephony-onrttmodifyind-f-sys.md#onrttmodifyind-1) | Subscribe to the rtt modify indication. |
| [postDialProceed](arkts-telephony-postdialproceed-f-sys.md#postdialproceed-1) | Continue post-dial DTMF(Dual Tone Multi Frequency). |
| [postDialProceed](arkts-telephony-postdialproceed-f-sys.md#postdialproceed-2) | Continue post-dial DTMF(Dual Tone Multi Frequency). |
| [preloadCallUI](arkts-telephony-preloadcallui-f-sys.md#preloadcallui-1) | Preload callUI. |
| [rejectCall](arkts-telephony-rejectcall-f-sys.md#rejectcall-1) | Reject the incoming call. |
| [rejectCall](arkts-telephony-rejectcall-f-sys.md#rejectcall-2) | Reject the incoming call. |
| [rejectCall](arkts-telephony-rejectcall-f-sys.md#rejectcall-3) | Reject the incoming call. |
| [rejectCall](arkts-telephony-rejectcall-f-sys.md#rejectcall-4) | Reject the incoming call without callId. |
| [rejectCall](arkts-telephony-rejectcall-f-sys.md#rejectcall-5) | Reject the incoming call without callId. |
| [removeMissedIncomingCallNotification](arkts-telephony-removemissedincomingcallnotification-f-sys.md#removemissedincomingcallnotification-1) | Remove missed incoming call notification. |
| [removeMissedIncomingCallNotification](arkts-telephony-removemissedincomingcallnotification-f-sys.md#removemissedincomingcallnotification-2) | Remove missed incoming call notification. |
| [sendCallUiEvent](arkts-telephony-sendcalluievent-f-sys.md#sendcalluievent-1) | Send call ui event. |
| [sendRttMessage](arkts-telephony-sendrttmessage-f-sys.md#sendrttmessage-1) | Send rtt message. |
| [sendUssdResponse](arkts-telephony-sendussdresponse-f-sys.md#sendussdresponse-1) | Send ussd response. |
| [separateConference](arkts-telephony-separateconference-f-sys.md#separateconference-1) | Split conference call. |
| [separateConference](arkts-telephony-separateconference-f-sys.md#separateconference-2) | Split conference call. |
| [setAudioDevice](arkts-telephony-setaudiodevice-f-sys.md#setaudiodevice-1) | Set the audio device. |
| [setAudioDevice](arkts-telephony-setaudiodevice-f-sys.md#setaudiodevice-2) | Set the audio device. |
| [setCallRestriction](arkts-telephony-setcallrestriction-f-sys.md#setcallrestriction-1) | Set call barring status. |
| [setCallRestriction](arkts-telephony-setcallrestriction-f-sys.md#setcallrestriction-2) | Set call barring status. |
| [setCallRestrictionPassword](arkts-telephony-setcallrestrictionpassword-f-sys.md#setcallrestrictionpassword-1) | Set call barring password. |
| [setCallRestrictionPassword](arkts-telephony-setcallrestrictionpassword-f-sys.md#setcallrestrictionpassword-2) | Set call barring password. |
| [setCallTransfer](arkts-telephony-setcalltransfer-f-sys.md#setcalltransfer-1) | Set call forwarding information. |
| [setCallTransfer](arkts-telephony-setcalltransfer-f-sys.md#setcalltransfer-2) | Set call forwarding information. |
| [setCallWaiting](arkts-telephony-setcallwaiting-f-sys.md#setcallwaiting-1) | Set call waiting. |
| [setCallWaiting](arkts-telephony-setcallwaiting-f-sys.md#setcallwaiting-2) | Set call waiting. |
| [setDeviceDirection](arkts-telephony-setdevicedirection-f-sys.md#setdevicedirection-1) | Set device direction when video call. |
| [setDisplaySurface](arkts-telephony-setdisplaysurface-f-sys.md#setdisplaysurface-1) | Set display surface when video call. |
| [setMuted](arkts-telephony-setmuted-f-sys.md#setmuted-1) | Set mute during a call. |
| [setMuted](arkts-telephony-setmuted-f-sys.md#setmuted-2) | Set mute during a call. |
| [setPreviewSurface](arkts-telephony-setpreviewsurface-f-sys.md#setpreviewsurface-1) | Set preview surface when video call. |
| [setRttCapability](arkts-telephony-setrttcapability-f-sys.md#setrttcapability-1) | Set rtt capability. |
| [setVoNRState](arkts-telephony-setvonrstate-f-sys.md#setvonrstate-1) | Set switch state for voice over NR. |
| [setVoNRState](arkts-telephony-setvonrstate-f-sys.md#setvonrstate-2) | Set switch state for voice over NR. |
| [startDTMF](arkts-telephony-startdtmf-f-sys.md#startdtmf-1) | Start DTMF(Dual Tone Multi Frequency). |
| [startDTMF](arkts-telephony-startdtmf-f-sys.md#startdtmf-2) | Start DTMF(Dual Tone Multi Frequency). |
| [startRtt](arkts-telephony-startrtt-f-sys.md#startrtt-1) | Start rtt. |
| [stopDTMF](arkts-telephony-stopdtmf-f-sys.md#stopdtmf-1) | Stop DTMF(Dual Tone Multi Frequency). |
| [stopDTMF](arkts-telephony-stopdtmf-f-sys.md#stopdtmf-2) | Stop DTMF(Dual Tone Multi Frequency). |
| [stopRtt](arkts-telephony-stoprtt-f-sys.md#stoprtt-1) | Stop rtt. |
| [switchCall](arkts-telephony-switchcall-f-sys.md#switchcall-1) | Switch call. |
| [switchCall](arkts-telephony-switchcall-f-sys.md#switchcall-2) | Switch call. |
| [unHoldCall](arkts-telephony-unholdcall-f-sys.md#unholdcall-1) | Cancel call hold status. |
| [unHoldCall](arkts-telephony-unholdcall-f-sys.md#unholdcall-2) | Keep a call on hold. |
| [unloadCallUI](arkts-telephony-unloadcallui-f-sys.md#unloadcallui-1) | Unload callUI. |
| [updateImsCallMode](arkts-telephony-updateimscallmode-f-sys.md#updateimscallmode-1) | Update Ims call mode. |
| [updateImsCallMode](arkts-telephony-updateimscallmode-f-sys.md#updateimscallmode-2) | Update Ims call mode. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DialOptions](arkts-telephony-dialoptions-i.md) | Indicates the options of placing a call. |
| [EmergencyNumberOptions](arkts-telephony-emergencynumberoptions-i.md) | Indicates the option for determining if a number is an emergency number for specified slot. |
| [MakeCallOptions](arkts-telephony-makecalloptions-i.md) | Indicates the options of make call. |
| [NumberFormatOptions](arkts-telephony-numberformatoptions-i.md) | Indicates the option for number formatting. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AudioDevice](arkts-telephony-audiodevice-i-sys.md) | Indicates the audio device. |
| [AudioDeviceCallbackInfo](arkts-telephony-audiodevicecallbackinfo-i-sys.md) | Indicates the information of the audio device. |
| [CallAttributeOptions](arkts-telephony-callattributeoptions-i-sys.md) | Indicates the options of call attribute. |
| [CallEventOptions](arkts-telephony-calleventoptions-i-sys.md) | Indicates the options of call event. |
| [CallRestrictionInfo](arkts-telephony-callrestrictioninfo-i-sys.md) | Indicates the information of call restriction. |
| [CallSessionEvent](arkts-telephony-callsessionevent-i-sys.md) | Indicates the call session event of a video call. |
| [CallTransferInfo](arkts-telephony-calltransferinfo-i-sys.md) | Indicates the information of call transfer. |
| [CallTransferResult](arkts-telephony-calltransferresult-i-sys.md) | Indicates the result of call transfer. |
| [CameraCapabilities](arkts-telephony-cameracapabilities-i-sys.md) | Indicates the camera capabilities. |
| [DialCallOptions](arkts-telephony-dialcalloptions-i-sys.md) | Indicates the options for initiating a call. |
| [DialOptions](arkts-telephony-dialoptions-i-sys.md) | Indicates the options of placing a call. |
| [DisconnectedDetails](arkts-telephony-disconnecteddetails-i-sys.md) | Indicates the cause of a call disconnection. |
| [ImsCallModeInfo](arkts-telephony-imscallmodeinfo-i-sys.md) | Indicates the ims call mode info of a video call. |
| [MmiCodeResults](arkts-telephony-mmicoderesults-i-sys.md) | Indicates the MMI code result. |
| [NumberMarkInfo](arkts-telephony-numbermarkinfo-i-sys.md) | Indicates the mark information of the phone number. |
| [PeerDimensionsDetail](arkts-telephony-peerdimensionsdetail-i-sys.md) | Indicates the peer dimension. |
| [RejectMessageOptions](arkts-telephony-rejectmessageoptions-i-sys.md) | Indicates the options for call rejection message. |
| [RttErrorInfo](arkts-telephony-rtterrorinfo-i-sys.md) | Indicates the info of the rtt error. |
| [RttEventInfo](arkts-telephony-rtteventinfo-i-sys.md) | Indicates the info of the rtt event. |
| [RttMessageInfo](arkts-telephony-rttmessageinfo-i-sys.md) | Indicates the info of the rtt message. |
| [VoipCallAttribute](arkts-telephony-voipcallattribute-i-sys.md) | Indicates the voip call detail information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CCallState](arkts-telephony-ccallstate-e.md) | Indicates the states of Carrier Call. |
| [CallState](arkts-telephony-callstate-e.md) | Indicates the states of call. |
| [TelCallState](arkts-telephony-telcallstate-e.md) | Indicates the states of telCall. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AudioDeviceType](arkts-telephony-audiodevicetype-e-sys.md) | Indicates the device type of the audio device. |
| [CallAbilityEventId](arkts-telephony-callabilityeventid-e-sys.md) | Indicates the event ID of call ability. |
| [CallRestrictionMode](arkts-telephony-callrestrictionmode-e-sys.md) | Indicates the mode of call restriction. |
| [CallRestrictionType](arkts-telephony-callrestrictiontype-e-sys.md) | Indicates the type of call restriction. |
| [CallSessionEventId](arkts-telephony-callsessioneventid-e-sys.md) | Indicates the type of video call event. |
| [CallTransferSettingType](arkts-telephony-calltransfersettingtype-e-sys.md) | Indicates the type of call transfer setting. |
| [CallTransferType](arkts-telephony-calltransfertype-e-sys.md) | Indicates the type of call transfer. |
| [CallType](arkts-telephony-calltype-e-sys.md) | Indicates the type of call. |
| [CallWaitingStatus](arkts-telephony-callwaitingstatus-e-sys.md) | Indicates the status of call waiting. |
| [ConferenceState](arkts-telephony-conferencestate-e-sys.md) | Indicates the state of conference call. |
| [DetailedCallState](arkts-telephony-detailedcallstate-e-sys.md) | Indicates the detailed state of call. |
| [DeviceDirection](arkts-telephony-devicedirection-e-sys.md) | Indicates the type of device direction. |
| [DialScene](arkts-telephony-dialscene-e-sys.md) | Indicates the scenarios of the call to be made. |
| [DialType](arkts-telephony-dialtype-e-sys.md) | Indicates the types of the call to be made. |
| [DisconnectedReason](arkts-telephony-disconnectedreason-e-sys.md) | Indicates the causes of call disconnection. |
| [ImsCallMode](arkts-telephony-imscallmode-e-sys.md) | Indicates the mode of the ims call. |
| [ImsRttMode](arkts-telephony-imsrttmode-e-sys.md) | Indicates the mode of the ims rtt. |
| [MarkType](arkts-telephony-marktype-e-sys.md) | Indicates the type of the number mark. |
| [MmiCodeResult](arkts-telephony-mmicoderesult-e-sys.md) | Indicates the MMI code result. |
| [RestrictionStatus](arkts-telephony-restrictionstatus-e-sys.md) | Indicates the status of call restriction. |
| [RttState](arkts-telephony-rttstate-e-sys.md) | Indicates the state of the rtt. |
| [TransferStatus](arkts-telephony-transferstatus-e-sys.md) | Indicates the status of call transfer. |
| [VideoRequestResultType](arkts-telephony-videorequestresulttype-e-sys.md) | Indicates the type of video request result. |
| [VideoStateType](arkts-telephony-videostatetype-e-sys.md) | Indicates the type of video state. |
| [VoNRState](arkts-telephony-vonrstate-e-sys.md) | Indicates the VoNR state. |
| [XCallType](arkts-telephony-xcalltype-e-sys.md) | Indicates the type of the XCall. |
<!--DelEnd-->

