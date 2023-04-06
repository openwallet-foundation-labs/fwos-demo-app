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
import{ConnectionEventTypes,ConnectionStateChangedEvent,DidExchangeState}from'@aries-framework/core';
import support from "../support/entidad";
// END EXTRA CODE

/**
 * @param {Big} agent_key
 * @param {string} outOfBandRecord
 * @param {Nanoflow} callback
 * @param {string} payloadParameterName
 * @param {string} outOfBandRecordParameterName
 * @param {string} agent_keyParameterName
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_events_setupConnectionListener_v000(agent_key, outOfBandRecord, callback, payloadParameterName, outOfBandRecordParameterName, agent_keyParameterName) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(outOfBandRecord==null)return Promise.reject("Invalid outOfBandRecord parameter");							//mandatory
		if(callback==null)return Promise.reject("Invalid callback parameter");											//mandatory
		if(payloadParameterName==null)return Promise.reject("Invalid payloadParameterName parameter");					//mandatory
		if(outOfBandRecordParameterName==null)return Promise.reject("Invalid outOfBandRecordParameterName parameter");	//mandatory		
		if(agent_keyParameterName==null)return Promise.reject("Invalid agent_keyParameterName parameter");	//mandatory		
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		agent.events.on(ConnectionEventTypes.ConnectionStateChanged,({payload})=>{
			let args={};
			args[agent_keyParameterName]=agent_key;
			args[payloadParameterName]=JSON.stringify(payload);
			args[outOfBandRecordParameterName]=outOfBandRecord;
			callback(args);
		});
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
