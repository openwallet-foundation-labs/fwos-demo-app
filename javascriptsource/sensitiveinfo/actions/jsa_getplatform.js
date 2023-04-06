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
 * @returns {Promise.<"SensitiveInfo.enum_platform.Hybrid_mobile"|"SensitiveInfo.enum_platform.Native_mobile"|"SensitiveInfo.enum_platform.Web">}
 */
export async function jsa_getplatform() {
	// BEGIN USER CODE
    if (window && window.cordova) {
        return Promise.resolve("Hybrid_mobile");
    }
    else if (navigator && navigator.product === "ReactNative") {
        return Promise.resolve("Native_mobile");
    }
    else {
        return Promise.resolve("Web");
    }
	// END USER CODE
}
