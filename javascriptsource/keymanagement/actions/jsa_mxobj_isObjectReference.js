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
 * isObjectReference()
 * 
 * Convenience function
 * 
 * See:
 * 
 *         mendix/lib/MxMetaObject#isObjectReference
 * 
 * Example
 * 
 * if (mxobject.isObjectReference("Mother")) {
 *     alert("Attribute Parent is a reference");
 * } else {
 *     alert("Attribute Parent is not a reference");
 * }
 * @param {MxObject} input
 * @param {string} attribute
 * @returns {Promise.<boolean>}
 */
export async function jsa_mxobj_isObjectReference(input, attribute) {
	// BEGIN USER CODE
	try{
		if(input==null)return Promise.reject("Invalid argument input");
		//todo:handle return type serialization
		return Promise.resolve(input.isObjectReference(attribute));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
