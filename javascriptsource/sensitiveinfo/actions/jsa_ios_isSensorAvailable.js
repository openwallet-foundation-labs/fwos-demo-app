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
 * https://mcodex.dev/react-native-sensitive-info/docs/isSensorAvailable
 * Indicates the overall availability of fingerprint sensor. It will resolve to true or false
 * @returns {Promise.<boolean>}
 */
export async function jsa_ios_isSensorAvailable() {
	// BEGIN USER CODE
	return new Promise(async(resolve,reject)=>{
		try{
			let available=await SInfo.isSensorAvailable();
			switch(typeof(available)){
				case"boolean":
					resolve(available);
					break;
				case"number":
					resolve(available==1);
					break;
				default:
					reject("Native function returned invalid type");
					break;
			}
		}catch(e){
			reject(e.toString());
		}
	});
	// END USER CODE
}
