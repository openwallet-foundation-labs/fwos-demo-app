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
import{WsOutboundTransport,HttpOutboundTransport/*,HttpInboundTransport*//*,WsInboundTransport*/}from'@aries-framework/core'
import support from "../support/entidad";
// END EXTRA CODE

/**
 * @param {Big} agent_key
 * @param {"Aries.enum_aries_OutboundTransport.WsOutboundTransport"|"Aries.enum_aries_OutboundTransport.HttpOutboundTransport"} outboundTransport
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_registerOutboundTransport(agent_key, outboundTransport) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");					//mandatory
		if(outboundTransport==null)return Promise.reject("Invalid outboundTransport parameter");	//mandatory
		switch(outboundTransport){
			case"HttpOutboundTransport":
				outboundTransport=new HttpOutboundTransport();
				break;
			case"WsOutboundTransport":
				outboundTransport=new WsOutboundTransport();
				break;
			default:
				return Promise.reject("Unimplemented outboundTransport value");
				break;
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		agent.registerOutboundTransport(outboundTransport);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
