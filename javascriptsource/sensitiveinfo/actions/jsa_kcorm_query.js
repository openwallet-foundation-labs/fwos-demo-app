// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
import SInfo from "react-native-sensitive-info";
import {jsa_json2mxobj} from"./jsa_json2mxobj.js";
import{default as jsonQuery}from"json-query";
async function mx_data_createAsync(options){
		return new Promise((resolve,reject)=>{
				try{
						mx.data.create(
								{
										entity:options.entity,
										callback:(obj)=>{
												resolve(obj);
										},
										error:(e)=>{
												reject(e);
										}
								}
						);
				}catch(e){
						reject(e);
				}
		});
}
// END EXTRA CODE

/**
 * Get all objects of a certain type based on query from the keychain
 * Query language used:
 *     https://github.com/auditassistant/json-query
 * @param {string} key
 * @param {string} query - e.g. Age=42
 * @param {string} entity
 * @param {MxObject[]} output - output list to populate
 * @returns {Promise.<MxObject[]>}
 */
export async function jsa_kcorm_query(key, query, entity, output) {
	// BEGIN USER CODE
	// --------------
	// IN PROGRESS...
	// --------------
	try{
		if(output==null)return Promise.reject("Argument output null");
		if(key==null)return Promise.reject("Argument key null");
		if(query==null||query.length==0)return Promise.reject("Argument query null");
		let obj={};
		try{
			//https://mcodex.dev/react-native-sensitive-info/docs/getItem
			let kcval=await SInfo.getItem(key,{});
			if(kcval!=null&&kcval!="")try{
				obj=JSON.parse(kcval);
				obj=typeof(obj)=="object"?obj:Array.isArray(obj)?{}:obj;
			}catch(e){
				console.error(e.toString());
				//todo:handle/log
			}
		}catch(e){
			//todo:handle/log
			console.error(e.toString());
		}
		let module_=entity.split(".")[0];
		if(module_==null||module_=="")return Promise.reject("Invalid entity module name")
		let entity_=entity.split(".")[1];
		if(entity_==null||entity_=="")return Promise.reject("Invalid entity name")
		//throw on module or entity subobjects not found 
		if(typeof(obj[module_])!="object")return Promise.reject("Module "+module_+" not found");
		if(typeof(obj[module_][entity_])!="object")return Promise.reject("Entity "+entity_+" not found");
		//query
		let ret=[];
		try{
			query=module_+"."+entity_+"[*]["+query+"]";
			//console.info(query);
			let results=jsonQuery(query,{data:obj,allowRegexp:true});
			if(results==null)return Promise.reject("Failed to query data");
			if(typeof(results.value)=="undefined")return Promise.reject("Invalid query response structure");
			if(results.value==null)return Promise.resolve([]);
			if(!Array.isArray(results.value)){
				results=[results.value]
			}else{
				results=results.value;
			}
			for(let i=0;i<results.length;i++){
				let result=results[i];
				let mxobj=await mx_data_createAsync({entity:[module_,entity_].join(".")});
				await jsa_json2mxobj(JSON.stringify(result),mxobj);
				ret.push(mxobj);
			}
		}catch(e){
			return Promise.reject(e.toString());
		}
		return Promise.resolve(ret);
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}