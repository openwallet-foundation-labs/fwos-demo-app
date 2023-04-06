// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import SInfo from "react-native-sensitive-info";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * https://mcodex.dev/react-native-sensitive-info/docs/getAllItems
 * Get all items from storage.
 * 
 * touchID:
 *     Enable TouchID for iOS and fingerprint authentication for Android
 * 
 * kSecAccessControl:
 *     When passing in the touchID option as true, you can also set kSecAccessControl. 
 *     Note: By default kSecAccessControl will get set to kSecAccessControlUserPresence.
 * 
 * kSecAttrSynchronizable:
 *     You can set this to true in order to sync the keychain items with iCloud.
 *     Note: By default kSecAttrSynchronizable will get set to false.
 * 
 * kLocalizedFallbackTitle:
 *     You can set this to a string and fallback to pin code authentication.
 * 
 * kSecUseOperationPrompt:
 *     When touchID is true you must pass kSecUseOperationPrompt to inform users why are you prompting TouchID or FaceID.
 * @param {string} keychainService - You can choose the keychain's service which you want to use. Otherwise, the default is app
 * @param {boolean} touchID - Enable fingerprint authentication
 * @param {string} kSecAccessControl - When passing in the touchID option as true, you can also set kSecAccessControl
 * @param {boolean} kSecAttrSynchronizable - You can set this to true in order to sync the keychain items with iCloud.
 * @param {string} kLocalizedFallbackTitle - You can set this to a string and fallback to pin code authentication.
 * @param {string} kSecUseOperationPrompt - When touchID is true you must pass kSecUseOperationPrompt to inform users why are you prompting TouchID or FaceID.
 * @returns {Promise.<string>}
 */
export async function jsa_ios_getAllItems(keychainService, touchID, kSecAccessControl, kSecAttrSynchronizable, kLocalizedFallbackTitle, kSecUseOperationPrompt) {
	// BEGIN USER CODE
	return new Promise(async(resolve,reject)=>{
		try{
			let settings={};
			if(typeof(keychainService)!="undefined"&&keychainService!=null)settings.keychainService=keychainService;
			settings.touchID=touchID;
			if(touchID&&typeof(kSecAccessControl)!="undefined"&&kSecAccessControl!=null)settings.kSecAccessControl=kSecAccessControl;
			settings.kSecAttrSynchronizable=kSecAttrSynchronizable;
			if(typeof(kLocalizedFallbackTitle)!="undefined"&&kLocalizedFallbackTitle!=null)settings.kLocalizedFallbackTitle=kLocalizedFallbackTitle;
			if(touchID&&typeof(kSecUseOperationPrompt)!="undefined"&&kSecUseOperationPrompt!=null)settings.kSecUseOperationPrompt=kSecUseOperationPrompt;

			const values=await SInfo.getAllItems(settings);
			resolve(JSON.stringify(values));
		}catch(e){
			reject(e.toString());
		}
	});	
	// END USER CODE
}
