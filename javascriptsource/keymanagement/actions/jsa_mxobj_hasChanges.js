// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * https://apidocs.rnd.mendix.com/9/client/mendix_lib_MxObject.html
 * 
 * hasChanges() → {boolean}
 * 
 * Checks an MxObject for changes.
 * 
 * Returns:
 * 
 * true if this MxObject has changes, false otherwise
 * 
 * Type
 *     boolean 
 * 
 * Example
 * 
 * mx.data.get({
 *     guid: "12345",
 *     callback: function(obj) {
 *         // Object is fresh from the runtime; next line prints 'false'.
 *         console.log(obj.hasChanges());
 * 
 *         obj.set("Name", "foo");
 * 
 *         // Object has a changed attribute; next line prints 'true'.
 *         console.log(obj.hasChanges());
 *     }
 * });
 * @param {MxObject} input
 * @returns {Promise.<boolean>}
 */
export async function jsa_mxobj_hasChanges(input) {
	// BEGIN USER CODE
	try{
		if(input==null)return Promise.reject("Invalid argument input");
		//todo:handle return type serialization
		return Promise.resolve(input.hasChanges());
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
