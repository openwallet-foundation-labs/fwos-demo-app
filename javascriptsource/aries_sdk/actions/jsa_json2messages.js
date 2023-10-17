// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
import support from "../support/entidad";
// END EXTRA CODE

/**
 * @param {string} json
 * @returns {Promise.<MxObject[]>}
 */
export async function jsa_json2messages(json) {
	// BEGIN USER CODE
	try{
		let ret=[];
		let connections=JSON.parse(json);
		connections.forEach(async(connection)=>{
				let obj=await support.data.create({entity:"Aries_SDK.Message"});
				ret.push(obj);
				obj.getAttributes().forEach((attr)=>{
					let _attr=attr;
					switch(_attr){
						case"id_":
							_attr="id";
							break;
						default:
							break;
					}
					let value=connection[_attr];
					if(typeof(value)=="undefined")return;
					if(obj.isReadonlyAttr(attr)){
						return;
					}
					else if(obj.isBoolean(attr)){
						obj.set(attr,value);
					}
					else if(obj.isDate(attr)){
						obj.set(attr,new Date(value));
					}
					else if(obj.isEnum(attr)){
						obj.set(attr,value);
					}
					else if(obj.isLocalizedDate(attr)){
						obj.set(attr,new Date(value));
					}
					else if(obj.isNumeric(attr)){
						obj.set(attr,value);
					}
					else if(obj.isPassword(attr)){
						obj.set(attr,value);
					}
					else{//string
						obj.set(attr,value);
					}
				});
			});
			return Promise.resolve(ret);
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
