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
 * https://mcodex.dev/react-native-sensitive-info/docs/hasEnrolledFingerprints
 * Checks the enrollment status of fingerprints on the device (Android only).
 * It will return true if detected otherwise returns false
 * @returns {Promise.<boolean>}
 */
export async function jsa_android_hasEnrolledFingerprints() {
	// BEGIN USER CODE
	return new Promise(async(resolve,reject)=>{
		try{
			let has=await SInfo.hasEnrolledFingerprints()
			resolve(has);
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}
