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
 * getOriginalReferences(attr) → {Array.<GUID>}
 * 
 * Retrieves the original MxObjects referenced by a reference or reference set attribute.
 * Parameters:
 * Name  Type  Description
 * attr  string  
 * 
 * reference attribute whose original referenced objects to return
 * 
 * Returns:
 * 
 * GUIDs of the original referenced objects
 * 
 * Type
 *     Array.<GUID> 
 * 
 * Example
 * 
 * mxobj.getReferences("MyFirstModule.Ref");            // [ "12345", "12346" ]
 * mxobj.set("MyFirstModule.Ref", [ "12347" ]);         // [ "12347" ]
 * mxobj.getReferences("MyFirstModule.Ref");            // [ "12347" ]
 * mxobj.getOriginalReferences("MyFirstModule.Ref");    // [ "12345", "12346" ]
 * 
 * getOriginalValue(attr) → {string|number|external:Big|boole
 * @param {MxObject} input
 * @param {string} attribute
 * @returns {Promise.<string>}
 */
export async function jsa_mxobj_getOriginalReferences(input, attribute) {
	// BEGIN USER CODE
	try{
		if(input==null)return Promise.reject("Invalid argument input");
		return Promise.resolve(JSON.stringify(input.getOriginalReferences(attribute)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}